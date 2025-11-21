import type { Metadata } from 'next'
import CitySearch from '@/components/CitySearch'

export const metadata: Metadata = {
  title: 'Cities We Serve | Dumpster Rental in Utah | TNT Dumpsters',
  description:
    'Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.',
}

const imagePool = [
  '/images/pexels-cottonbro-4551310.jpg',
  '/images/pexels-cottonbro-4888489.jpg',
  '/images/construction-site-3688252_1280.jpg',
  '/images/pexels-rodrigo-eder-1347087-2846205.jpg',
  '/images/pexels-pamelamariephoto-2625896.jpg',
]

const defaultFeatures = [
  'Fast delivery and pickup',
  'Competitive local pricing',
  'Residential, commercial, industrial',
]

const cityNamesAndSlugs = [
  ['West Jordan', 'west-jordan'],
  ['Salt Lake City', 'salt-lake-city'],
  ['Murray', 'murray'],
  ['Sandy', 'sandy'],
  ['Draper', 'draper'],
  ['Riverton', 'riverton'],
  ['South Jordan', 'south-jordan'],
  ['Taylorsville', 'taylorsville'],
  ['Midvale', 'midvale'],
  ['American Fork', 'american-fork'],
  ['Bountiful', 'bountiful'],
  ['Centerville', 'centerville'],
  ['Clearfield', 'clearfield'],
  ['Clinton', 'clinton'],
  ['Farmington', 'farmington'],
  ['Herriman', 'herriman'],
  ['Hooper', 'hooper'],
  ['Kaysville', 'kaysville'],
  ['Layton', 'layton'],
  ['Lehi', 'lehi'],
  ['North Salt Lake', 'north-salt-lake'],
  ['Ogden', 'ogden'],
  ['Orem', 'orem'],
  ['Pleasant Grove', 'pleasant-grove'],
  ['Provo', 'provo'],
  ['Riverdale', 'riverdale'],
  ['Roy', 'roy'],
  ['Syracuse', 'syracuse'],
  ['West Point', 'west-point'],
  ['West Valley City', 'west-valley-city'],
  ['Woods Cross', 'woods-cross'],
]

export default function CitiesPage() {
  const cities = cityNamesAndSlugs.map(([name, slug], index) => ({
    name,
    slug,
    description: `Professional dumpster rental services in ${name}, UT. Same-day delivery, transparent pricing, and reliable local service.`,
    features: defaultFeatures,
    image: imagePool[index % imagePool.length],
  }))

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Cities We Serve</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Find your city to view local dumpster rental services, pricing, and free same-day estimates.
          </p>
        </div>
      </section>

      {/* Top link list to each city page */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">All City Pages</h2>
          {(() => {
            const groupedCities: Record<string, Array<{ name: string; slug: string }>> = {
              'Davis County': [
                { name: 'Kaysville', slug: 'kaysville' },
                { name: 'Farmington', slug: 'farmington' },
                { name: 'Centerville', slug: 'centerville' },
                { name: 'Bountiful', slug: 'bountiful' },
                { name: 'Woods Cross', slug: 'woods-cross' },
                { name: 'North Salt Lake', slug: 'north-salt-lake' },
                { name: 'Clearfield', slug: 'clearfield' },
                { name: 'Clinton', slug: 'clinton' },
                { name: 'Hooper', slug: 'hooper' },
                { name: 'Layton', slug: 'layton' },
                { name: 'Syracuse', slug: 'syracuse' },
                { name: 'West Point', slug: 'west-point' },
              ],
              'Salt Lake County': [
                { name: 'Salt Lake City', slug: 'salt-lake-city' },
                { name: 'West Jordan', slug: 'west-jordan' },
                { name: 'Murray', slug: 'murray' },
                { name: 'Midvale', slug: 'midvale' },
                { name: 'Taylorsville', slug: 'taylorsville' },
                { name: 'West Valley City', slug: 'west-valley-city' },
                { name: 'Sandy', slug: 'sandy' },
                { name: 'Riverton', slug: 'riverton' },
                { name: 'South Jordan', slug: 'south-jordan' },
                { name: 'Herriman', slug: 'herriman' },
                { name: 'Draper', slug: 'draper' },
              ],
              'Utah County': [
                { name: 'American Fork', slug: 'american-fork' },
                { name: 'Lehi', slug: 'lehi' },
                { name: 'Pleasant Grove', slug: 'pleasant-grove' },
                { name: 'Orem', slug: 'orem' },
                { name: 'Provo', slug: 'provo' },
              ],
              'Weber County': [
                { name: 'Ogden', slug: 'ogden' },
                { name: 'Riverdale', slug: 'riverdale' },
                { name: 'Roy', slug: 'roy' },
              ],
            }

            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Object.entries(groupedCities).map(([countyName, cities]) => (
                  <div key={countyName}>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">{countyName}</h3>
                    <ul className="space-y-2">
                      {[...cities]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, slug }) => (
                          <li key={slug}>
                            <a
                              href={`/ut/${slug}/dumpster-rental`}
                              className="text-blue-600 hover:text-blue-700 hover:underline"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <CitySearch cities={cities} />
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Explore Our Dumpster Rental Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Browse our comprehensive dumpster rental resources</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Types</h3>
              <p className="text-sm text-gray-600">Residential, commercial, and specialty dumpsters</p>
            </a>
            <a href="/services" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Comprehensive dumpster rental services</p>
            </a>
            <a href="/calculator" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the perfect dumpster size</p>
            </a>
            <a href="/quote" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free dumpster rental quote</p>
            </a>
            <a href="/dumpsters/residential" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Home dumpster rental</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Rentals</h3>
              <p className="text-sm text-gray-600">Business dumpster rental</p>
            </a>
            <a href="/estate-cleanouts" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Estate Cleanouts</h3>
              <p className="text-sm text-gray-600">Professional cleanout services</p>
            </a>
            <a href="/blog" className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and advice</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}



