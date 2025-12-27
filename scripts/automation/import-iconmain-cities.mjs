import fs from 'node:fs'
import path from 'node:path'
import Papa from 'papaparse'

const ROOT = process.cwd()
const ICON_SITEMAP = 'K:\\iconmain\\public\\sitemap-cities-bing.xml'
const CSV_PATH = path.join(ROOT, 'data', 'cities', 'cities.csv')
const CITIES_JSON = path.join(ROOT, 'data', 'cities.json')

function slugifyCity(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function titleCaseFromSlug(slug) {
  return slug
    .split('-')
    .map((word) => {
      if (word === 'st') return 'St'
      if (word === 'mt') return 'Mt'
      if (word === 'ft') return 'Ft'
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

function hashString(input) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function pickByHash(list, slug, count) {
  const out = []
  const used = new Set()
  let seed = hashString(slug)
  while (out.length < count && used.size < list.length) {
    const idx = seed % list.length
    seed = Math.floor(seed / 3) + 7
    if (!used.has(idx)) {
      used.add(idx)
      out.push(list[idx])
    }
  }
  return out
}

function parseIconmainSlugs(xml) {
  const matches = xml.matchAll(/dumpster-rental-([a-z0-9-]+)-ut/gi)
  const slugs = new Set()
  for (const match of matches) {
    slugs.add(match[1].toLowerCase())
  }
  return Array.from(slugs)
}

function deriveCounty(slug) {
  if (slug.includes('-county')) {
    return titleCaseFromSlug(slug.replace(/-county$/, ''))
  }
  return 'Utah'
}

function buildRow(slug) {
  const cityName = titleCaseFromSlug(slug)
  const neighborhoods = [
    `${cityName} Downtown`,
    `${cityName} Central`,
    `${cityName} Heights`,
    `${cityName} Industrial`,
    `${cityName} East`,
    `${cityName} West`,
    `${cityName} North`,
    `${cityName} South`,
    `${cityName} Bench`,
    `${cityName} Corridor`,
    `Old Town ${cityName}`,
  ]
  const events = [
    'Spring cleanups; summer remodels; fall yard waste',
    'Spring construction surge; summer projects; holiday cleanouts',
    'Seasonal yard debris; weekend renovations; moving cleanouts',
    'Home updates and contractor activity peak in spring and summer',
  ]
  const etaOptions = [4, 5, 6]
  const cityHash = hashString(slug)
  return {
    city: cityName,
    state_code: 'UT',
    county: deriveCounty(slug),
    primary_zips: '',
    avg_delivery_eta_hours: etaOptions[cityHash % etaOptions.length],
    cutoff_time: '15:00',
    permit_required: 'false',
    permit_url: '',
    permit_notes: 'Driveway placements typically do not require permits; check local rules for street placement.',
    transfer_station_name: '',
    transfer_station_address: '',
    transfer_station_hours: '',
    disallowed_items_deltas: 'No dirt/rock/concrete in mixed loads; no paints, oils, or hazardous waste.',
    busy_seasons_events: events[cityHash % events.length],
    neighborhoods_served: pickByHash(neighborhoods, slug, 4).join('; '),
    real_job_examples: '',
    local_testimonials: '',
    price_notes: 'Transparent pricing with included weight; overages per ton.',
    winter_notes: 'Weather can affect routing; ask for flexible pickup windows.',
    hoa_common_rule: 'Most HOAs request notice for visible street placement; driveway is usually fine.',
    adjacent_cities: '',
    latitude: '',
    longitude: '',
    phone_cta: '801-209-9013',
    sms_cta: '801-209-9013',
    quote_url: 'https://tntdump.com/quote',
  }
}

function main() {
  if (!fs.existsSync(ICON_SITEMAP)) {
    throw new Error(`Iconmain sitemap not found at ${ICON_SITEMAP}`)
  }
  const xml = fs.readFileSync(ICON_SITEMAP, 'utf8')
  const iconSlugs = parseIconmainSlugs(xml)
  if (iconSlugs.length === 0) {
    throw new Error('No city slugs found in iconmain sitemap.')
  }

  const rawCsv = fs.readFileSync(CSV_PATH, 'utf8')
  const parsed = Papa.parse(rawCsv, { header: true, skipEmptyLines: true })
  const rows = parsed.data.filter((row) => row && row.city)
  const existingSlugs = new Set(rows.map((row) => slugifyCity(row.city)))

  const newSlugs = iconSlugs.filter((slug) => !existingSlugs.has(slug))
  const newRows = newSlugs.map(buildRow)

  const merged = [...rows, ...newRows]
  const csvOut = Papa.unparse(merged, { newline: '\n' })
  fs.writeFileSync(CSV_PATH, csvOut, 'utf8')

  const cityPaths = Array.from(new Set([...iconSlugs, ...existingSlugs]))
    .sort()
    .map((slug) => `/ut/${slug}/dumpster-rental`)
  fs.writeFileSync(CITIES_JSON, JSON.stringify(cityPaths, null, 2) + '\n', 'utf8')

  console.log(`Added ${newRows.length} cities from iconmain sitemap.`)
}

main()
