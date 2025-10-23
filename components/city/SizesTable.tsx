"use client"
import React from 'react'
import type { CityData } from '@/lib/cities'
import { fireContactEvent } from '@/lib/ga'

type Props = { city: CityData; brand: { name: string; url: string } }

const sizes = [
  { size: 10, dims: '12’ x 7’ x 3.5’', ideal: 'Garage cleanouts, small remodels' },
  { size: 20, dims: '22’ x 7.5’ x 4.5’', ideal: 'Kitchen/bath remodels, roofing' },
  { size: 30, dims: '22’ x 7.5’ x 6’', ideal: 'Whole-home cleanouts, construction' },
  { size: 40, dims: '22’ x 7.5’ x 8’', ideal: 'Large projects, commercial jobs' },
]

export default function SizesTable({ city, brand }: Props) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Sizes and Local Pricing</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Dimensions</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Common Uses</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {sizes.map((s) => (
                <tr key={s.size}>
                  <td className="px-4 py-4 text-gray-900 font-medium">{s.size} Yard</td>
                  <td className="px-4 py-4 text-gray-700">{s.dims}</td>
                  <td className="px-4 py-4 text-gray-700">{s.ideal}</td>
                  <td className="px-4 py-4 text-right">
                    <a
                      href={city.quote_url || `${brand.url}/quote`}
                      onClick={() => fireContactEvent({ city: city.city, state: city.state_code, page_path: `/ut/${city.slug}/dumpster-rental`, cta_type: 'quote' })}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Get Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {city.price_notes && (
          <p className="text-sm text-gray-600 mt-3">{city.price_notes}</p>
        )}
      </div>
    </section>
  )
}

