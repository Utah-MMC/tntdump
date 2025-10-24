import fs from 'node:fs'
import path from 'node:path'
import Papa from 'papaparse'
import yaml from 'js-yaml'

export type CityBase = {
  city: string
  state_code: string
  county: string
  primary_zips: string
  avg_delivery_eta_hours?: string | number
  cutoff_time?: string
  permit_required?: string | boolean
  permit_url?: string
  permit_notes?: string
  transfer_station_name?: string
  transfer_station_address?: string
  transfer_station_hours?: string
  disallowed_items_deltas?: string
  busy_seasons_events?: string
  neighborhoods_served?: string
  real_job_examples?: string
  local_testimonials?: string
  price_notes?: string
  winter_notes?: string
  hoa_common_rule?: string
  adjacent_cities?: string
  latitude?: string | number
  longitude?: string | number
  phone_cta?: string
  sms_cta?: string
  quote_url?: string
}

export type CityOverride = {
  slug?: string
  city?: string
  state_code?: string
  county?: string
  primary_zips?: string[]
  latitude?: number
  longitude?: number
  permit_required?: boolean
  permit_url?: string
  permit_notes?: string
  transfer_station_name?: string
  transfer_station_address?: string
  transfer_station_hours?: string
  avg_delivery_eta_hours?: number
  cutoff_time?: string
  disallowed_items_deltas?: string
  busy_seasons_events?: string
  neighborhoods_served?: string[]
  real_job_examples?: { size: number; summary: string }[]
  local_testimonials?: { quote: string; author?: string; locality?: string }[]
  price_notes?: string
  winter_notes?: string
  hoa_common_rule?: string
  adjacent_cities?: string[]
  phone_cta?: string
  sms_cta?: string
  quote_url?: string
  gallery?: { src: string; alt: string; width?: number; height?: number }[]
}

export type CityData = {
  slug: string
  city: string
  state_code: string
  state_name: string
  county: string
  primary_zips: string[]
  avg_delivery_eta_hours?: number
  cutoff_time?: string
  permit_required: boolean
  permit_url?: string
  permit_notes?: string
  transfer_station_name?: string
  transfer_station_address?: string
  transfer_station_hours?: string
  disallowed_items_deltas?: string
  busy_seasons_events?: string
  neighborhoods_served?: string[]
  real_job_examples?: { size: number; summary: string }[]
  local_testimonials?: { quote: string; author?: string; locality?: string }[]
  price_notes?: string
  winter_notes?: string
  hoa_common_rule?: string
  adjacent_cities?: string[]
  latitude?: number
  longitude?: number
  phone_cta?: string
  sms_cta?: string
  quote_url?: string
  gallery?: { src: string; alt: string; width?: number; height?: number }[]
}

const ROOT = process.cwd()
const DATA_DIR = path.join(ROOT, 'data', 'cities')

function slugifyCity(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function slugifyStrict(s: string) {
  // Mirror settings used by the image fetcher (lower, strict, trim)
  return String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

type ManifestItem = {
  file: string
  alt?: string
  title?: string | null
  width?: number | null
  height?: number | null
}

function loadCityGalleryFromManifest(city: string, stateName: string): { src: string; alt: string; width?: number; height?: number }[] {
  try {
    const folder = slugifyStrict(`${city}, ${stateName}`)
    const manifestPath = path.join(ROOT, 'public', 'images', 'cities', folder, 'manifest.json')
    if (!fs.existsSync(manifestPath)) return []
    const raw = fs.readFileSync(manifestPath, 'utf8')
    const arr = JSON.parse(raw) as ManifestItem[]
    if (!Array.isArray(arr)) return []
    const out = arr.map((it) => ({
      src: it.file?.startsWith('/') ? it.file : `/${it.file}`,
      alt: it.alt || `${city} local photo`,
      width: typeof it.width === 'number' ? it.width : undefined,
      height: typeof it.height === 'number' ? it.height : undefined,
    }))
    return out
  } catch {
    return []
  }
}

function parseCsv(): CityBase[] {
  const csvPath = path.join(DATA_DIR, 'cities.csv')
  const raw = fs.readFileSync(csvPath, 'utf8')
  const res = Papa.parse<CityBase>(raw, { header: true, skipEmptyLines: true })
  return (res.data || []).filter(Boolean)
}

function readYamlOverride(state: string, slug: string): CityOverride | null {
  const ymlPath = path.join(DATA_DIR, state.toLowerCase(), `${slug}.yml`)
  if (!fs.existsSync(ymlPath)) return null
  try {
    const raw = fs.readFileSync(ymlPath, 'utf8')
    const doc = yaml.load(raw) as CityOverride
    return doc || null
  } catch {
    return null
  }
}

function toNumber(n?: string | number) {
  if (typeof n === 'number') return n
  if (!n) return undefined
  const v = Number(String(n).trim())
  return Number.isFinite(v) ? v : undefined
}

function splitList(s?: string) {
  if (!s) return [] as string[]
  return String(s)
    .split(/[,|]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

const STATE_NAMES: Record<string, string> = { UT: 'Utah' }

export function getAllCities(): CityData[] {
  const rows = parseCsv()
  return rows.map((row) => {
    const slug = slugifyCity(row.city)
    const override = readYamlOverride(row.state_code, slug) || {}

    const primary_zips = override.primary_zips || splitList(row.primary_zips)
    const neighborhoods_served = override.neighborhoods_served || splitList(row.neighborhoods_served)
    const adjacent_cities = override.adjacent_cities || splitList(row.adjacent_cities)

    const out: CityData = {
      slug: override.slug || slug,
      city: override.city || row.city,
      state_code: override.state_code || row.state_code,
      state_name: STATE_NAMES[(override.state_code || row.state_code || '').toUpperCase()] || (override.state_code || row.state_code),
      county: override.county || row.county,
      primary_zips,
      avg_delivery_eta_hours: toNumber(override.avg_delivery_eta_hours ?? row.avg_delivery_eta_hours),
      cutoff_time: override.cutoff_time || row.cutoff_time,
      permit_required: Boolean((override.permit_required ?? row.permit_required) === true || String(row.permit_required).toLowerCase() === 'true'),
      permit_url: override.permit_url || row.permit_url || undefined,
      permit_notes: override.permit_notes || row.permit_notes || undefined,
      transfer_station_name: override.transfer_station_name || row.transfer_station_name || undefined,
      transfer_station_address: override.transfer_station_address || row.transfer_station_address || undefined,
      transfer_station_hours: override.transfer_station_hours || row.transfer_station_hours || undefined,
      disallowed_items_deltas: override.disallowed_items_deltas || row.disallowed_items_deltas || undefined,
      busy_seasons_events: override.busy_seasons_events || row.busy_seasons_events || undefined,
      neighborhoods_served,
      real_job_examples: override.real_job_examples || (row.real_job_examples ? splitList(row.real_job_examples).map((s) => ({ size: toNumber((s.match(/^(\d{1,2})/)||[])[1]) || 0, summary: s })) : undefined),
      local_testimonials: override.local_testimonials || (row.local_testimonials ? splitList(row.local_testimonials).map((s) => ({ quote: s })) : undefined),
      price_notes: override.price_notes || row.price_notes || undefined,
      winter_notes: override.winter_notes || row.winter_notes || undefined,
      hoa_common_rule: override.hoa_common_rule || row.hoa_common_rule || undefined,
      adjacent_cities,
      latitude: toNumber(override.latitude ?? row.latitude),
      longitude: toNumber(override.longitude ?? row.longitude),
      phone_cta: override.phone_cta || row.phone_cta || undefined,
      sms_cta: override.sms_cta || row.sms_cta || undefined,
      quote_url: override.quote_url || row.quote_url || undefined,
      gallery: []
    }

    // Merge gallery: lead images from public manifest first, then YAML overrides
    const manifestGallery = loadCityGalleryFromManifest(out.city, out.state_name)
    const yamlGallery = override.gallery || []
    const merged: { src: string; alt: string; width?: number; height?: number }[] = []
    const seen = new Set<string>()
    for (const it of [...manifestGallery, ...yamlGallery]) {
      const key = it.src
      if (key && !seen.has(key)) {
        seen.add(key)
        merged.push({ src: it.src, alt: it.alt, width: (it as any).width, height: (it as any).height })
      }
    }
    out.gallery = merged
    return out
  })
}

export function getCitySlugParams() {
  return getAllCities()
    .filter((c) => (c.state_code || '').toUpperCase() === 'UT')
    .map((c) => ({ city: c.slug }))
}

export function getCityData(slug: string): CityData | null {
  const all = getAllCities()
  const found = all.find((c) => c.slug === slug)
  return found || null
}

export function getCitiesByCounty(state = 'UT') {
  const all = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === state.toUpperCase())
  const grouped: Record<string, CityData[]> = {}
  for (const c of all) {
    const key = c.county || 'Unknown County'
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(c)
  }
  for (const k of Object.keys(grouped)) {
    grouped[k].sort((a, b) => a.city.localeCompare(b.city))
  }
  return grouped
}

export function getCityPathsJson(): string[] {
  const all = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === 'UT')
  return all.map((c) => `/ut/${c.slug}/dumpster-rental`)
}
