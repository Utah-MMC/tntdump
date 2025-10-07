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
      <section className="py-16 bg-[#0003d5] text-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Cities We Serve</h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Find your city to view local dumpster rental services, pricing, and free same-day estimates.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <CitySearch cities={cities} />
        </div>
      </section>
    </main>
  )
}



