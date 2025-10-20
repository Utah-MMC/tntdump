export type DumpsterSize = '15' | '20' | '30'

export type ZipPricingInfo = {
  priceRangeBySize: Record<DumpsterSize, [number, number]>
  etaText: string
  drivewayFriendlyBySize: Record<DumpsterSize, boolean>
}

const DEFAULT_PRICING: ZipPricingInfo = {
  priceRangeBySize: {
    // Align with homepage 7-day prices
    // 15-yard: $325, 20-yard: $375, 30-yard: $400
    '15': [325, 325],
    '20': [375, 375],
    '30': [400, 400],
  },
  etaText: 'Earliest delivery: tomorrow 8–11am',
  drivewayFriendlyBySize: {
    '15': true,
    '20': true,
    '30': false,
  },
}

// Simple stub map keyed by ZIP prefix (first three digits)
const PRICING_BY_PREFIX: Record<string, ZipPricingInfo> = {
  '840': DEFAULT_PRICING,
  '841': {
    priceRangeBySize: {
      // Align with homepage 7-day prices (same across ZIPs)
      '15': [325, 325],
      '20': [375, 375],
      '30': [400, 400],
    },
    etaText: 'Earliest delivery: today 2–5pm',
    drivewayFriendlyBySize: {
      '15': true,
      '20': true,
      '30': false,
    },
  },
}

export function getZipPrefix(zip: string): string | null {
  const match = zip?.trim().match(/^\d{5}$/)
  if (!match) return null
  return zip.slice(0, 3)
}

export function getPricingForZip(zip: string | null | undefined): ZipPricingInfo {
  const prefix = zip ? getZipPrefix(zip) : null
  if (prefix && PRICING_BY_PREFIX[prefix]) return PRICING_BY_PREFIX[prefix]
  return DEFAULT_PRICING
}

export function getPriceRangeForSize(zip: string | null | undefined, size: DumpsterSize): [number, number] {
  const pricing = getPricingForZip(zip || '')
  return pricing.priceRangeBySize[size]
}

export function isDrivewayFriendly(zip: string | null | undefined, size: DumpsterSize): boolean {
  const pricing = getPricingForZip(zip || '')
  return pricing.drivewayFriendlyBySize[size]
}

export function getEtaText(zip: string | null | undefined): string {
  const pricing = getPricingForZip(zip || '')
  return pricing.etaText
}



