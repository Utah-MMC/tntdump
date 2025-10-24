import React from 'react'
import type { CityData } from '@/lib/cities'

export default function PermitBlock({ city }: { city: CityData }) {
  if (!city.permit_required && !city.permit_notes) return null
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Permits and Placement</h2>
        {city.permit_required && city.permit_url ? (
          <p className="text-gray-700">
            Street placement may require a right-of-way permit. Review official guidance at{' '}
            <a href={city.permit_url} target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">
              the city website
            </a>{' '}before delivery.
          </p>
        ) : (
          <p className="text-gray-700">
            Street placement may require a right-of-way or encroachment permit. Driveway placement usually does not require
            a permit. Confirm current rules with the city before scheduling.
          </p>
        )}
        {city.permit_notes && <p className="text-gray-700 mt-3">{city.permit_notes}</p>}
      </div>
    </section>
  )
}

