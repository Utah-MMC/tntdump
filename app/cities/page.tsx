import type { Metadata } from 'next'
import { getAllCities } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Cities We Serve | Dumpster Rental in Utah | TNT Dumpsters',
  description:
    'Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.',
  alternates: { canonical: 'https://tntdump.com/cities' },
    openGraph: {
      title: 'Cities We Serve | Dumpster Rental in Utah | TNT Dumpsters',
      description: 'Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.',
      url: 'https://tntdump.com/cities',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cities We Serve | Dumpster Rental in Utah</h1>
            <p className="mt-4 text-lg text-gray-600">Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.</p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Utah Dumpster Rental Cities</h2>
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

