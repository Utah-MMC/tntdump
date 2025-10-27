import fs from 'fs';
import path from 'path';
import { globby } from 'globby';

const ROOT = process.cwd();
const APPLY = process.argv.includes('--apply');

const IGNORES = ['**/node_modules/**','**/.next/**','**/.git/**','**/.vercel/**','**/dist/**','**/out/**'];

const JUNK_GLOBS = [
  '**/temp_*','**/temp*.*','**/tmt.txt','**/temp_head.txt',
  '**/*.tmp','**/*.log','**/*.orig','**/*.rej','**/*.swp',
  '**/.DS_Store','**/Thumbs.db'
];

// Legacy route globs
const LEGACY_ROUTE_GLOBS = [
  'app/cities/**/page.{tsx,jsx,mdx}',         // per-city old pattern
  'app/dumpster-rental-*-ut/page.{tsx,jsx,mdx}'
];

// Hard-protect canonical and needed pages
const PROTECT_EXACT = new Set([
  'app/cities/page.tsx',
]);

function shouldProtect(p: string): boolean {
  const norm = p.replace(/\\/g,'/');
  if (PROTECT_EXACT.has(norm)) return true;
  // Never touch canonical city pages
  if (/^app\/ut\/\[city\]\/dumpster-rental\/page\.(tsx|jsx|mdx)$/.test(norm)) return true;
  // Basic safety: never delete sitemaps/robots/layouts by accident
  if (/^app\/(sitemap|robots)\.(t|j)sx?$/.test(norm)) return true;
  return false;
}

type Hit = { type: 'junk'|'legacy-route', path: string, reason: string };

(async () => {
  const hits: Hit[] = [];

  // 1) Junk files
  for (const g of JUNK_GLOBS) {
    const files = await globby(g, { gitignore: true, ignore: IGNORES });
    for (const f of files) hits.push({ type: 'junk', path: f, reason: 'temp/junk pattern' });
  }

  // 2) Legacy routes (exclude protected)
  for (const g of LEGACY_ROUTE_GLOBS) {
    const files = await globby(g, { gitignore: true, ignore: IGNORES });
    for (const f of files) {
      if (!shouldProtect(f) && f !== 'app/cities/page.tsx') {
        hits.push({ type: 'legacy-route', path: f, reason: 'legacy city route' });
      }
    }
  }

  // Print table
  const rows = hits.map(h => `${h.type}\t${h.path}\t${h.reason}`).join('\n');
  console.log('--- CLEANUP DRY RUN ---');
  console.log('type\tpath\treason');
  console.log(rows || '(no matches)');

  if (!APPLY || hits.length === 0) return;

  // Apply: delete files, then prune empty dirs
  const deletedDirs = new Set<string>();
  for (const h of hits) {
    try {
      fs.unlinkSync(h.path);
      console.log('deleted:', h.path);
      // attempt dir prune
      let dir = path.dirname(h.path);
      while (dir !== ROOT && dir !== '.' && dir !== path.sep) {
        const entries = fs.readdirSync(dir);
        if (entries.length === 0) {
          fs.rmdirSync(dir);
          deletedDirs.add(dir);
          dir = path.dirname(dir);
        } else break;
      }
    } catch (e) {
      console.warn('could not delete:', h.path, e);
    }
  }
  if (deletedDirs.size) {
    console.log('pruned empty dirs:', Array.from(deletedDirs).join(', '));
  }
})();
