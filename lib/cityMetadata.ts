import { Metadata } from 'next'

export function generateCityMetadata(city: string, state: string): Metadata {
  // Optimized description: 120-160 characters for SEO
  const description = `Local dumpster rental in ${city}, ${state}. Fast delivery, clear pricing for remodels, cleanouts, and construction. Call (801) 209-9013.`
  return {
    title: `${city} Dumpster Rental | TNT Dump`,
    description,
    keywords: `dumpster rental ${city.toLowerCase()}, ${city.toLowerCase()} roll off dumpster, dumpster rental near me, local dumpster rental, construction dumpster ${city.toLowerCase()}`,
  }
}

