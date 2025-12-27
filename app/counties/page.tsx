import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utah County Dumpster Rental Coverage | TNT Dumpsters',
  description: 'Explore TNT Dumpsters coverage by county across Utah. Fast delivery and clear pricing with service highlights for each area.',
  alternates: { canonical: 'https://tntdump.com/counties' },
  openGraph: {
    title: 'Utah County Dumpster Rental Coverage | TNT Dumpsters',
    description: 'Explore TNT Dumpsters coverage by county across Utah. Fast delivery and clear pricing with service highlights for each area.',
    url: 'https://tntdump.com/counties',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

const counties = [
  { slug: 'salt-lake-county', name: 'Salt Lake County' },
  { slug: 'utah-county', name: 'Utah County' },
  { slug: 'davis-county', name: 'Davis County' },
  { slug: 'weber-county', name: 'Weber County' },
  { slug: 'tooele-county', name: 'Tooele County' },
  { slug: 'summit-county', name: 'Summit County' },
  { slug: 'wasatch-county', name: 'Wasatch County' },
  { slug: 'cache-county', name: 'Cache County' },
]

export default function CountiesPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Utah County Coverage</h1>
          <p className="text-lg text-gray-700 mb-8">
            We serve multiple counties across Utah with fast delivery, clear pricing, and dependable pickup windows.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/counties/${county.slug}`}
                className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-900">{county.name}</h2>
                <p className="text-sm text-gray-600 mt-2">View dumpster rental coverage and city highlights.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
