import { Metadata } from 'next'

export function generateCityMetadata(city: string, state: string): Metadata {
  return {
    title: `Dumpster Rental ${city}, ${state} | T&T Dumpsters | (801) 209-9013`,
    description: `Professional dumpster rental services in ${city}, ${state}. Fast delivery, competitive pricing, and reliable service. Call (801) 209-9013 for free same-day estimates.`,
    keywords: `dumpster rental ${city.toLowerCase()}, ${city.toLowerCase()} dumpster rental, dumpster rental near me, roll-off dumpster ${city.toLowerCase()}, ${state.toLowerCase()} dumpster rental`,
  }
}
