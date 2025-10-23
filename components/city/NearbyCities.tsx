import React from 'react'
import type { CityData } from '@/lib/cities'

function slugifyCity(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function NearbyCities({ city }: { city: CityData }) {
  const list = city.adjacent_cities || []
  if (list.length === 0) return null
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Cities We Serve</h2>
        <ul className="flex flex-wrap gap-3">
          {list.slice(0, 3).map((name) => {
            const slug = slugifyCity(name)
            return (
              <li key={name}>
                <a
                  className="text-blue-600 hover:underline"
                  href={`/ut/${slug}/dumpster-rental`}
                >
                  {name} Dumpster Rental
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

