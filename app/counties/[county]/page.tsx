import type { Metadata } from 'next'
import Link from 'next/link'

const COUNTY_LABELS: Record<string, string> = {
  'salt-lake-county': 'Salt Lake County',
  'utah-county': 'Utah County',
  'davis-county': 'Davis County',
  'weber-county': 'Weber County',
  'tooele-county': 'Tooele County',
  'summit-county': 'Summit County',
  'wasatch-county': 'Wasatch County',
  'cache-county': 'Cache County',
}

const COUNTY_CITIES: Record<string, string[]> = {
  'salt-lake-county': ['Salt Lake City', 'West Jordan', 'Sandy', 'South Jordan', 'Murray'],
  'utah-county': ['Provo', 'Orem', 'Lehi', 'American Fork', 'Pleasant Grove'],
  'davis-county': ['Layton', 'Bountiful', 'Farmington', 'Kaysville', 'Syracuse'],
  'weber-county': ['Ogden', 'Roy', 'Riverdale', 'Hooper', 'West Haven'],
  'tooele-county': ['Tooele', 'Grantsville', 'Stansbury Park'],
  'summit-county': ['Park City', 'Coalville', 'Kamas'],
  'wasatch-county': ['Heber City', 'Midway', 'Daniel'],
  'cache-county': ['Logan', 'North Logan', 'Providence'],
}

type PageProps = { params: { county: string } }

export async function generateStaticParams() {
  return Object.keys(COUNTY_LABELS).map((county) => ({ county }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countyName = COUNTY_LABELS[params.county] || 'Utah County'
  return {
    title: `${countyName} Dumpster Rental | TNT Dumpsters`,
    description: `Dumpster rental coverage across ${countyName}. Fast delivery, clear pricing, and reliable pickups.`,
    alternates: { canonical: `https://tntdump.com/counties/${params.county}` },
  }
}

export default function CountyPage({ params }: PageProps) {
  const countyName = COUNTY_LABELS[params.county] || params.county
  const cities = COUNTY_CITIES[params.county] || []

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{countyName} Dumpster Rental</h1>
          <p className="text-lg text-gray-700 mb-8">
            TNT Dumpsters provides roll-off delivery across {countyName} with flexible rental windows, clear pricing, and quick pickup scheduling.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Coverage Highlights</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>- Same-day delivery when routes allow</li>
              <li>- Driveway-safe placement with boards</li>
              <li>- Clear weight billing by the ton</li>
              <li>- Support for residential and commercial projects</li>
            </ul>
          </div>

          {cities.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cities We Serve</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => {
                  const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  return (
                    <Link
                      key={city}
                      href={`/${slug}-dumpster-rentals/service-areas/${slug}`}
                      className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <span className="font-medium text-gray-900">{city}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <a
              href="tel:8012099013"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Call (801) 209-9013
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
