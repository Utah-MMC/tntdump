import React from 'react'
import type { CityData } from '@/lib/cities'

export default function DisposalBlock({ city }: { city: CityData }) {
  if (!city.transfer_station_name && !city.transfer_station_address) return null
  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Disposal and Landfill Details</h2>
        <div className="text-gray-700 space-y-2">
          {city.transfer_station_name && <p><strong>Facility:</strong> {city.transfer_station_name}</p>}
          {city.transfer_station_address && <p><strong>Address:</strong> {city.transfer_station_address}</p>}
          {city.transfer_station_hours && <p><strong>Hours:</strong> {city.transfer_station_hours}</p>}
          {city.disallowed_items_deltas && <p><strong>Restrictions:</strong> {city.disallowed_items_deltas}</p>}
        </div>
      </div>
    </section>
  )
}

