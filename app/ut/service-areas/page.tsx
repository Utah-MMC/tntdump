import type { Metadata } from 'next'
import { getCitiesByCounty } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Utah Service Areas | TNT Dumpsters',
  description: 'Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city.',
}

export default function ServiceAreasPage() {
  const grouped = getCitiesByCounty('UT')
  return (
    <main className="min-h-screen">
      <section className="py-14 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Utah Service Areas</h1>
          <p className="text-gray-700 mt-2">Select a city to view local dumpster rental details.</p>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(grouped).map(([county, cities]) => (
            <div key={county} className="bg-white rounded-lg border p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{county}</h2>
              <ul className="space-y-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <a href={`/${c.slug}-dumpster-rentals/service-areas/${c.slug}`} className="text-blue-600 hover:underline">
                      {c.city}, {c.state_code}
                    </a>
                    <div className="text-sm text-gray-600">Fast delivery · {c.primary_zips.join(', ')} ZIPs</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

