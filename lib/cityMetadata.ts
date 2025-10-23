import { Metadata } from 'next'

export function generateCityMetadata(city: string, state: string): Metadata {
  return {
    title: `${city} Dumpster Rental | Dumpster Rental | TNT Dump`,
    description: `Local roll off dumpster rental in ${city}, ${state}. Fast delivery and clear pricing for remodels, cleanouts, roofing, and construction. Call (801) 209-9013 for a quote.`,
    keywords: `dumpster rental ${city.toLowerCase()}, ${city.toLowerCase()} roll off dumpster, dumpster rental near me, local dumpster rental, construction dumpster ${city.toLowerCase()}`,
  }
}

