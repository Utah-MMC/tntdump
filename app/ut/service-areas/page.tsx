import type { Metadata } from 'next'
import { getAllCities } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Utah Service Areas | TNT Dumpsters',
  description: 'Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get',
  alternates: { canonical: 'https://tntdump.com/ut/service-areas' },
    openGraph: {
      title: 'Utah Service Areas | TNT Dumpsters',
      description: 'Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get',
      url: 'https://tntdump.com/ut/service-areas',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  const cities = getAllCities()
    .filter((c) => (c.state_code || '').toUpperCase() === 'UT')
    .sort((a, b) => a.city.localeCompare(b.city))

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Utah Service Areas</h1>
            <p className="mt-4 text-lg text-gray-600">Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get</p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Utah Service Area Pages</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => {
              const href = `/${city.slug}-dumpster-rentals/service-areas/${city.slug}`
              return (
                <a
                  key={href}
                  href={href}
                  className="rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition hover:border-blue-400 hover:shadow-md"
                >
                  <span className="font-semibold">{city.city}</span>
                  <span className="block text-sm text-gray-600">{city.county} County</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

