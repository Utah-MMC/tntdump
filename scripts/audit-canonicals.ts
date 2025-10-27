import fs from 'node:fs'
import path from 'node:path'

type Page = { file: string; route: string }

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, 'app')
const PAGE_RX = /page\.(tsx|jsx|mdx)$/

function isDir(p: string) { try { return fs.statSync(p).isDirectory() } catch { return false } }

function toRoute(folderRel: string): string {
  const parts = folderRel.split(/[\\/]/).filter(Boolean)
  const filtered = parts.filter(seg => !(seg.startsWith('_') || (seg.startsWith('(') && seg.endsWith(')'))))
  return filtered.length ? '/' + filtered.join('/') + '/' : '/'
}

function findPages(): Page[] {
  const pages: Page[] = []
  function walk(dir: string) {
    let entries: fs.Dirent[] = []
    try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return }
    let hasPage = false
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isFile() && PAGE_RX.test(e.name)) {
        hasPage = true
        const route = toRoute(path.relative(APP_DIR, dir))
        pages.push({ file: full, route })
      }
    }
    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(dir, e.name))
    }
  }
  if (isDir(APP_DIR)) walk(APP_DIR)
  return pages
}

function hasPageCanonical(src: string): boolean {
  // naive: look for alternates: { canonical: ... } in generateMetadata
  return /export\s+async\s+function\s+generateMetadata[\s\S]*?alternates\s*:\s*\{[\s\S]*?canonical\s*:/m.test(src)
}

function layoutHasFallback(layoutPath: string): boolean {
  try {
    const src = fs.readFileSync(layoutPath, 'utf8')
    return src.includes('CanonicalFallback') && /<CanonicalFallback\s+path=/.test(src)
  } catch { return false }
}

function findNearestLayout(file: string): string | null {
  let dir = path.dirname(file)
  while (dir.startsWith(APP_DIR)) {
    const candidate = path.join(dir, 'layout.tsx')
    if (fs.existsSync(candidate)) return candidate
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return null
}

function insertMinimalCanonical(file: string, route: string) {
  try {
    const raw = fs.readFileSync(file, 'utf8')
    if (hasPageCanonical(raw)) return false
    const importLine = `\nimport type { Metadata } from 'next'\nimport { canonicalizePath } from '@/lib/seo/canonical'\n`
    const fn = `\nexport async function generateMetadata(): Promise<Metadata> {\n  return { alternates: { canonical: canonicalizePath('${route}') } };\n}\n`
    // Insert imports after initial import block, otherwise prepend
    let out = raw
    if (/^import\s/m.test(raw)) {
      const idx = raw.lastIndexOf('\nimport')
      const cut = raw.indexOf('\n', idx + 1)
      out = raw.slice(0, cut + 1) + importLine + raw.slice(cut + 1)
    } else {
      out = importLine + raw
    }
    out = out + fn
    fs.writeFileSync(file, out, 'utf8')
    return true
  } catch { return false }
}

async function main() {
  const pages = findPages()
  const rows: string[] = []
  let pageCovered = 0
  let layoutCovered = 0
  let autoFixed = 0

  for (const p of pages) {
    const src = fs.readFileSync(p.file, 'utf8')
    const hasCanon = hasPageCanonical(src)
    if (hasCanon) {
      rows.push([p.route, path.relative(ROOT, p.file), 'page', 'ok'].join('\t'))
      pageCovered++
      continue
    }
    const layout = findNearestLayout(p.file)
    if (layout && layoutHasFallback(layout)) {
      rows.push([p.route, path.relative(ROOT, p.file), 'layout', 'ok'].join('\t'))
      layoutCovered++
      continue
    }
    // attempt auto-fix for stable static routes (no [param])
    if (!p.route.includes('[')) {
      const did = insertMinimalCanonical(p.file, p.route)
      if (did) {
        autoFixed++
        rows.push([p.route, path.relative(ROOT, p.file), 'page', 'auto-fixed'].join('\t'))
        continue
      }
    }
    rows.push([p.route, path.relative(ROOT, p.file), '-', 'needs-fallback'].join('\t'))
  }

  console.log('route\tfile\tcovered by\taction')
  for (const r of rows) console.log(r)
  console.log(`\nSummary: explicit=${pageCovered}, fallback=${layoutCovered}, autoFixed=${autoFixed}, total=${pages.length}`)
}

main().catch(e => { console.error(e); process.exit(1) })

