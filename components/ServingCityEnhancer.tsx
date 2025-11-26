"use client"
import React, { useEffect, useState } from 'react'

type Match = { city: string; slug: string }

// Lightweight list to avoid server-only imports in the client bundle
const UT_CITIES: Match[] = [
  { city: 'Midvale', slug: 'midvale' },
  { city: 'Herriman', slug: 'herriman' },
]

export default function ServingCityEnhancer() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    try {
      const text = document.body?.innerText || ''
      const found: Match[] = []
      for (const c of UT_CITIES) {
        const re = new RegExp(`\\b${c.city}\\b`, 'i')
        if (re.test(text)) found.push(c)
      }
      const uniq = Array.from(new Map(found.map((f) => [f.slug, f])).values()).slice(0, 3)
      setMatches(uniq)
    } catch {
      // no-op
    }
  }, [])

  if (matches.length === 0) return null

  return (
    <div className="mt-12 border rounded-lg p-4 bg-blue-50">
      <h3 className="text-base font-semibold text-blue-900">Serving Your Area</h3>
      <p className="text-sm text-blue-900/80">We provide dumpster rentals in these nearby cities:</p>
      <ul className="mt-2 flex flex-wrap gap-3">
        {matches.map((m) => (
          <li key={m.slug}>
            <a className="text-blue-700 hover:underline" href={`/${m.slug}-dumpster-rentals/service-areas/${m.slug}`}>
              {m.city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
