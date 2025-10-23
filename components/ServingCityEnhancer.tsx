"use client"
import React, { useEffect, useState } from 'react'
import { getAllCities } from '@/lib/cities'

type Match = { city: string; slug: string }

export default function ServingCityEnhancer() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    try {
      const text = document.body?.innerText || ''
      const cities = getAllCities().filter((c) => c.state_code.toUpperCase() === 'UT')
      const found: Match[] = []
      for (const c of cities) {
        const re = new RegExp(`\\b${c.city}\\b`, 'i')
        if (re.test(text)) found.push({ city: c.city, slug: c.slug })
      }
      // de-duplicate and cap at 3
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
            <a className="text-blue-700 hover:underline" href={`/ut/${m.slug}/dumpster-rental`}>
              {m.city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

