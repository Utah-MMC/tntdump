import React from 'react'
import type { CityData } from '@/lib/cities'

export default function Neighborhoods({ city }: { city: CityData }) {
  const zips = city.primary_zips?.join(', ')
  const hoods = city.neighborhoods_served || []
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Neighborhoods and ZIPs Served</h2>
        {hoods.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {hoods.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        )}
        {zips && <p className="text-gray-700 mt-3"><strong>Primary ZIPs:</strong> {zips}</p>}
      </div>
    </section>
  )
}

