// Node 18+ (fetch built-in)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import slugify from "slugify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- CONFIG ----------------
const CITIES = [
  "American Fork, Utah",
  "Bountiful, Utah",
  "Centerville, Utah",
  "Clearfield, Utah",
  "Clinton, Utah",
  "Draper, Utah",
  "Farmington, Utah",
  "Herriman, Utah",
  "Hooper, Utah",
  "Kaysville, Utah",
  "Layton, Utah",
  "Lehi, Utah",
  "Midvale, Utah",
  "Murray, Utah",
  "North Salt Lake, Utah",
  "Ogden, Utah",
  "Orem, Utah",
  "Pleasant Grove, Utah",
  "Provo, Utah",
  "Riverdale, Utah",
  "Riverton, Utah",
  "Roy, Utah",
  "Salt Lake City, Utah",
  "Sandy, Utah",
  "South Jordan, Utah",
  "Syracuse, Utah",
  "Taylorsville, Utah",
  "West Jordan, Utah",
  "West Point, Utah",
  "West Valley City, Utah",
  "Woods Cross, Utah"
];

// Where to save everything
const OUTPUT_DIR = path.resolve(__dirname, "../public/images/cities");

// Try changing this if you want more/less images per city
const IMAGES_PER_CITY = 6;

// Preferred source: "wikimedia" (safest) or "openverse"
const PROVIDER = "wikimedia";

// polite crawling
const REQUEST_DELAY_MS = 350;

// Maximum bytes per image (skip huge originals). Set null for unlimited.
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

// ---------------- UTILITIES ----------------
const slug = (s) => slugify(s, { lower: true, strict: true, trim: true });
const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, init = {}, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "tntdump-city-image-fetcher/1.0",
      },
      ...init,
    });
    if (res.ok) return res.json();
    if (attempt === retries) {
      throw new Error(`HTTP ${res.status} for ${url}`);
    }
    await sleep(300 * attempt);
  }
}

async function head(url, retries = 2) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, { method: "HEAD" });
    if (res.ok) return res;
    if (attempt === retries) return null;
    await sleep(200 * attempt);
  }
  return null;
}

async function downloadToFile(url, filepath) {
  if (MAX_BYTES) {
    const h = await head(url);
    // If HEAD fails, we still try GET but we won't reject unless body is too big
    if (h && h.headers.has("content-length")) {
      const size = parseInt(h.headers.get("content-length"), 10);
      if (!Number.isNaN(size) && size > MAX_BYTES) {
        throw new Error(`Skip: ${size} > MAX_BYTES for ${url}`);
      }
    }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const ab = await res.arrayBuffer();
  if (MAX_BYTES && ab.byteLength > MAX_BYTES) {
    throw new Error(`Skip: body ${ab.byteLength} > MAX_BYTES for ${url}`);
  }
  fs.writeFileSync(filepath, Buffer.from(ab));
}

function makeAlt(city, title) {
  return title ? `${title} in ${city}` : `Iconic view of ${city}`;
}

function manifestEntry({ city, title, file, width, height, sourceUrl, author, license, provider }) {
  const alt = makeAlt(city, title);
  const attribution = author ? `${author} (${provider})` : provider;
  return {
    file,            // relative path under /public
    alt,
    title: title || null,
    width: width || null,
    height: height || null,
    source: sourceUrl,
    license: license || null,
    attribution
  };
}

// ---------------- PROVIDERS ----------------
// Openverse (Creative Commons) — optional alternative
async function fetchOpenverse(city, n) {
  const q = encodeURIComponent(`${city} skyline OR landmark`);
  const url = `https://api.openverse.org/v1/images/?q=${q}&license_type=all-cc&page_size=${n}&fields=id,title,creator,license,license_url,url,thumbnail,width,height,source,foreign_landing_url`;
  const data = await fetchJSON(url);
  return (data.results || [])
    .filter(i => i.width && i.height && i.url)
    .map(i => ({
      title: i.title || "",
      directUrl: i.url,
      thumbUrl: i.thumbnail || null,
      width: i.width,
      height: i.height,
      sourceUrl: i.foreign_landing_url || i.source || i.url,
      author: i.creator || null,
      license: i.license ? `CC-${i.license.toUpperCase()}` : null,
      provider: "Openverse"
    }));
}

// Wikimedia Commons (Public Domain/CC)
async function fetchWikimedia(city, n) {
  // A) find the most relevant page on Wikipedia (for a good lead image)
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(city)}&format=json&srlimit=1&srprop=`;
  let lead = null;
  try {
    const sdata = await fetchJSON(searchUrl);
    const pageTitle = sdata?.query?.search?.[0]?.title;
    if (pageTitle) {
      const leadUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages|info&inprop=url&pithumbsize=1920&format=json`;
      const ldata = await fetchJSON(leadUrl);
      const page = Object.values(ldata.query.pages || {})[0];
      if (page?.thumbnail?.source) {
        lead = {
          title: `${pageTitle} (lead image)`,
          directUrl: page.thumbnail.source,
          width: page.thumbnail.width,
          height: page.thumbnail.height,
          sourceUrl: page.fullurl,
          author: "Wikimedia Commons contributors",
          license: "CC / PD (see source)",
          provider: "Wikimedia"
        };
      }
    }
  } catch {
    // continue even if lead fails
  }

  // B) general Commons search (top N images)
  const commonsUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(city)}&gsrlimit=${n}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1920&format=json`;
  const cdata = await fetchJSON(commonsUrl);
  const pages = cdata?.query?.pages || {};
  const items = Object.values(pages)
    .map((p) => {
      const ii = p.imageinfo?.[0];
      if (!ii?.thumburl && !ii?.url) return null;
      const em = ii.extmetadata || {};
      const title = (em.ObjectName?.value || p.title || "").replace(/^File:/, "");
      const author = (em.Artist?.value || "Wikimedia Commons contributors").replace(/<\/?[^>]+(>|$)/g, "");
      const license = em.LicenseShortName?.value || "CC / PD (see source)";
      const directUrl = ii.thumburl || ii.url;
      return {
        title,
        directUrl,
        width: null,
        height: null,
        sourceUrl: ii.descriptionshorturl || ii.descriptionurl || ii.url,
        author,
        license,
        provider: "Wikimedia"
      };
    })
    .filter(Boolean);

  const all = lead ? [lead, ...items] : items;

  // de-dupe by URL
  const seen = new Set();
  const unique = [];
  for (const it of all) {
    if (!seen.has(it.directUrl)) {
      seen.add(it.directUrl);
      unique.push(it);
    }
  }
  return unique.slice(0, n);
}

// ---------------- MAIN ----------------
async function run() {
  ensureDir(OUTPUT_DIR);
  for (const city of CITIES) {
    const citySlug = slug(city);
    const cityDir = path.join(OUTPUT_DIR, citySlug);
    ensureDir(cityDir);

    console.log(`\nFetching images for ${city}…`);
    let results = [];
    try {
      results = PROVIDER === "openverse"
        ? await fetchOpenverse(city, IMAGES_PER_CITY)
        : await fetchWikimedia(city, IMAGES_PER_CITY);
    } catch (e) {
      console.error(`Fetch error for ${city}:`, e.message);
      continue;
    }

    const manifest = [];
    let idx = 1;

    for (const img of results) {
      const ext = (new URL(img.directUrl).pathname.split(".").pop() || "jpg").split("?")[0];
      const filename = `${citySlug}-${String(idx).padStart(2, "0")}.${ext}`;
      const filepath = path.join(cityDir, filename);

      try {
        await downloadToFile(img.directUrl, filepath);
        manifest.push(
          manifestEntry({
            city,
            title: img.title,
            file: `images/cities/${citySlug}/${filename}`,
            width: img.width,
            height: img.height,
            sourceUrl: img.sourceUrl,
            author: img.author,
            license: img.license,
            provider: img.provider,
          })
        );
        console.log(`✔ Saved ${filename}`);
        idx += 1;
      } catch (e) {
        console.warn(`Skipped ${img.directUrl}: ${e.message}`);
      }

      await sleep(REQUEST_DELAY_MS);
    }

    const manifestPath = path.join(cityDir, "manifest.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`📝 Wrote ${manifestPath} (${manifest.length} items)`);
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
