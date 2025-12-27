import fs from 'node:fs'
import path from 'node:path'

// Lightweight checker: finds string-literal descriptions in metadata objects.
// NOTE: This is intentionally simple (regex-based) to run fast without deps.

const ROOT = process.cwd()

const targets = [
  'app/layout.tsx',
  'app/services/page.tsx',
  'app/dumpsters/page.tsx',
  'app/calculator/volume/page.tsx',
  'app/calculator/cost/page.tsx',
  'app/choose-right-dumpster-size/page.tsx',
  'app/dumpster-rentals-2025-guide/page.tsx',
  'app/15-yard-dumpster-complete-guide/page.tsx',
  'app/20-yard-dumpster-complete-guide/page.tsx',
  'app/30-yard-dumpster-guide/page.tsx',
  'app/dumpster-rental-prices-by-size/page.tsx',
  'app/dumpster-rental-cost-2025/page.tsx',
  'app/10-vs-15-yard-dumpster-comparison/page.tsx',
  'app/15-vs-20-yard-dumpster/page.tsx',
  'app/20-vs-30-yard-dumpster/page.tsx',
  'app/what-size-dumpster-do-i-need/page.tsx',
  'app/home-renovation-dumpster-guide/page.tsx',
  'app/concrete-disposal-dumpster-guide/page.tsx',
  'app/garage-cleanout-dumpster-guide/page.tsx',
  'app/basement-cleanout-dumpster-guide/page.tsx',
  'app/roofing-project-dumpster-guide/page.tsx',
  'app/moving-out-dumpster-guide/page.tsx',
  'app/small-vs-large-dumpster-comparison/page.tsx',
  'app/construction-waste-management/page.tsx',
  'app/commercial-dumpster-rental-guide/page.tsx',
  'app/estate-cleanout-complete-guide/page.tsx',
  'app/deck-demolition-dumpster-guide/page.tsx',
  'app/yard-waste-dumpster-guide/page.tsx',
  'app/bathroom-remodel-dumpster-guide/page.tsx',
  'app/bathroom-renovation-dumpster-guide/page.tsx',
  'app/office-cleanout-dumpster-guide/page.tsx',
  'app/moving-cleanout-dumpster-guide/page.tsx',
  'app/20-vs-30-yard-dumpster-comparison/page.tsx',
  'app/construction-dumpster-size-guide/page.tsx',
  'app/[cityBase]/service-areas/[city]/page.tsx',
  'app/[cityBase]/service-areas/[city]/15-yard-dumpster/page.tsx',
  'app/[cityBase]/service-areas/[city]/20-yard-dumpster/page.tsx',
  'app/[cityBase]/service-areas/[city]/30-yard-dumpster/page.tsx',
  'app/ut/[city]/dumpster-rental/page.tsx',
  'app/about/page.tsx',
  'app/reviews/page.tsx',
  'app/estate-cleanouts/page.tsx',
  'app/partners/page.tsx',
  'app/test/page.tsx',
  'app/test-email/page.tsx',
  'app/contact/layout.tsx',
  'app/quote/layout.tsx',
  'app/cart/layout.tsx',
  'app/faqs/layout.tsx',
  'app/order-confirmation/layout.tsx',
  'app/test-form/layout.tsx',
  'app/services/concrete/page.tsx',
  'app/services/commercial/page.tsx',
  'app/services/industrial/page.tsx',
  'app/services/long-term/page.tsx',
  'app/services/short-term/page.tsx',
  'app/services/vendor/page.tsx',
  'app/services/residential/page.tsx',
  'app/services/estate-cleanout/page.tsx',
  'app/dumpsters/industrial/page.tsx',
  // Batch 4 service pages
  'app/services/kitchen-remodel-dumpster/page.tsx',
  'app/services/roofing-dumpster-rental/page.tsx',
  'app/services/basement-cleanout-service/page.tsx',
  'app/services/garage-cleanout-service/page.tsx',
  'app/services/same-day-dumpster-rental/page.tsx',
]

function extractDescription(text) {
  // description: '...'
  let m = text.match(/description:\s*'([^']+)'/m)
  if (m) return m[1]
  // description:
  //   '...'
  m = text.match(/description:\s*\n\s*'([^']+)'/m)
  if (m) return m[1]
  // description: `...`
  m = text.match(/description:\s*`([^`]+)`/m)
  if (m) return m[1].replace(/\s+/g, ' ').trim()
  return null
}

const bad = []
for (const rel of targets) {
  const file = path.join(ROOT, rel)
  if (!fs.existsSync(file)) continue
  const text = fs.readFileSync(file, 'utf8')
  const d = extractDescription(text)
  if (!d) continue
  const len = [...d].length
  if (len > 160) bad.push({ file: rel, len, d })
}

bad.sort((a, b) => b.len - a.len)
console.log(`Descriptions >160 chars: ${bad.length}`)
for (const x of bad.slice(0, 50)) {
  console.log(`${x.len} ${x.file}\n  ${x.d}\n`)
}

process.exit(bad.length ? 1 : 0)


