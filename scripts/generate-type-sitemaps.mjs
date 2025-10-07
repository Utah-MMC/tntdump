// scripts/generate-type-sitemaps.mjs
// Filesystem-driven sitemap generator for Next.js (app router).
// - Scans /app for static routes with page.tsx/js/jsx/mdx
// - Reads optional /data/cities.json and /data/posts.json
// - Uses file mtime for <lastmod> when available

import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://tntdump.com';                   // <-- change if needed
const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');
const OUT_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'data');             // optional folder you can add

const PAGE_FILENAMES = new Set([
  'page.tsx', 'page.jsx', 'page.js', 'page.ts', 'page.mdx'
]);

function toISO(d) {
  try { return new Date(d).toISOString(); } catch { return new Date().toISOString(); }
}

function safeStatISO(p) {
  try {
    const st = fs.statSync(p);
    return toISO(st.mtime);
  } catch {
    return toISO(Date.now());
  }
}

function isRouteGroup(seg) {
  // Exclude "(group)" segments
  return seg.startsWith('(') && seg.endsWith(')');
}

function isDynamic(seg) {
  // Exclude [param] segments (you can include via data files instead)
  return seg.startsWith('[') && seg.endsWith(']');
}

function shouldSkipTopLevel(seg) {
  // exclude folders that shouldn't be in sitemap
  return ['api', 'admin', 'test', 'tests', 'testing', '__mocks__'].includes(seg);
}

function collectStaticRoutes(dir = APP_DIR) {
  const out = [];

  function walk(current, rel = '') {
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); }
    catch { return; }

    // If this folder contains a page.* file, treat it as a route
    const pageFile = entries.find(e => e.isFile() && PAGE_FILENAMES.has(e.name));
    if (pageFile) {
      const loc = rel === '' ? '/' : '/' + rel.replace(/\\/g, '/');
      const filePath = path.join(current, pageFile.name);
      out.push({
        loc: `${SITE}${loc}`,
        lastmod: safeStatISO(filePath)
      });
      // We still continue walking because nested routes may exist too.
    }

    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const seg = e.name;

      if (isRouteGroup(seg)) continue;
      if (isDynamic(seg)) continue; // add these via data files if needed
      if (rel === '' && shouldSkipTopLevel(seg)) continue;

      walk(path.join(current, seg), path.join(rel, seg));
    }
  }

  walk(dir, '');
  return out;
}

function readJsonIfExists(p) {
  try {
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8');
      return JSON.parse(raw);
    }
  } catch {}
  return null;
}

function ensureLeadingSlash(urlPath) {
  if (!urlPath.startsWith('/')) return '/' + urlPath;
  return urlPath;
}

async function getPages() {
  // Purely from filesystem
  return collectStaticRoutes();
}

async function getCities() {
  // Optional: data/cities.json = ["dumpster-rental-salt-lake-city-ut", "/dumpster-rental-sandy-ut", ...]
  const citiesPath = path.join(DATA_DIR, 'cities.json');
  const list = readJsonIfExists(citiesPath);
  if (!Array.isArray(list)) return [];
  const now = toISO(Date.now());
  return list.map(slugOrPath => {
    const p = ensureLeadingSlash(String(slugOrPath).trim());
    return { loc: `${SITE}${p}`, lastmod: now };
  });
}

async function getPosts() {
  // Optional: data/posts.json = ["blog/how-to-choose-dumpster-size", "/blog/dumpster-permits", ...]
  const postsPath = path.join(DATA_DIR, 'posts.json');
  const list = readJsonIfExists(postsPath);
  if (!Array.isArray(list)) return [];
  const now = toISO(Date.now());
  return list.map(slugOrPath => {
    const p = ensureLeadingSlash(String(slugOrPath).trim());
    return { loc: `${SITE}${p}`, lastmod: now };
  });
}

function urlset(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>`;
  const open = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const close = `</urlset>`;
  const body = urls.map(u => {
    const loc = u.loc.replace(/(?<!:)\/{2,}/g, '/'); // normalize accidental doubles
    return [
      `<url>`,
      `  <loc>${loc}</loc>`,
      u.lastmod ? `  <lastmod>${u.lastmod}</lastmod>` : '',
      `</url>`
    ].filter(Boolean).join('\n');
  }).join('\n');
  return [header, open, body, close].join('\n');
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const [pages, cities, posts] = await Promise.all([
    getPages(), getCities(), getPosts()
  ]);

  fs.writeFileSync(path.join(OUT_DIR, 'sitemap-pages.xml'),  urlset(pages));
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap-cities.xml'), urlset(cities));
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap-posts.xml'),  urlset(posts));

  console.log(`SITEMAP ▶ pages=${pages.length} cities=${cities.length} posts=${posts.length}`);
}

main().catch(err => {
  console.error('SITEMAP ERROR', err);
  process.exit(1);
});
