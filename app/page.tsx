import Hero from '@/components/Hero'
import nextDynamic from 'next/dynamic'
import CityCard from '@/components/CityCard'
const Services = nextDynamic(() => import('@/components/Services'), { ssr: false, loading: () => null })
const About = nextDynamic(() => import('@/components/About'), { ssr: false, loading: () => null })
const Contact = nextDynamic(() => import('@/components/Contact'), { ssr: false, loading: () => null })
const DumpsterCalculator = nextDynamic(() => import('@/components/DumpsterCalculator'), { ssr: false, loading: () => null })
import Image from 'next/image'

export const revalidate = 3600
export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured images moved inside <Hero /> to remove extra spacing */}
      
      {/* Dumpster Calculator Section (moved directly below Hero) */}
      <DumpsterCalculator />

      <Services />

      {/* Pricing / How it works accordion */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text">Pricing & How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">Simple, transparent options. Get a firm dumpster rental quote by calling (801) 209-9013.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How much is a dumpster rental?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Dumpster rental price varies by size, material, and location. Call for a fast dumpster rental quote; we’ll confirm weight limits and the best roll off dumpster for your project.
              </div>
            </details>
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What affects dumpster rental cost?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                The biggest factors are tonnage, dumpster size, rental time, route distance, and disposal fees. We price delivery dumpster rental up front so there are no surprises.
              </div>
            </details>
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you offer same day dumpster rental?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Yes—on many days. Contact us early and we’ll try to place a roll off dumpster the same day in Salt Lake & Utah County when routes allow.
              </div>
            </details>
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do delivery and pick-up work?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                We schedule delivery dumpster rental, place it carefully on your driveway or job site, and return for pick-up on your call or on the preset date. Easy swaps are available.
              </div>
            </details>
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can I get a fixed price before delivery?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Absolutely. We confirm your dumpster rental price and expectations (material type, size, timing) before scheduling. No hidden fees—just clear terms.
              </div>
            </details>
            <details className="border rounded-lg p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you help choose the right size?</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Yes. Tell us about your project and we’ll recommend a roll off size. If you’re unsure, start with a versatile size and we can swap or haul-off as needed.
              </div>
            </details>
          </div>
        </div>
      </section>
      
      
      {/* Cities Section (replaced cards with linked list) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Cities We Serve
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              TNT Dumpsters provides professional dumpster rental services throughout the Wasatch Front area. 
              Click on your city below to learn more about our local services and pricing.
            </p>
          </div>

          {/* County grouped city links */}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {Object.entries(groupedCities).map(([countyName, cities]) => (
                  <div key={countyName}>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">{countyName}</h3>
                    <ul className="space-y-2">
                      {[...cities].sort((a, b) => a.name.localeCompare(b.name)).map(({ name, slug }) => (
                        <li key={slug}>
                          <a
                            href={`/dumpster-rental-${slug}-ut`}
                            className="text-blue-600 hover:text-blue-700 text-sm"
                          >
                            {name} Utah Dumpster Rentals
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )
          })()}

          <div className="text-center mt-12">
            <a 
              href="/cities" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              View All Cities
            </a>
          </div>
        </div>
      </section>
      
      <About />
      <Contact />

      {/* Footer FAQ block */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Dumpster Rental FAQs</h2>
          <dl className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-semibold text-gray-900">Do you offer roll off dumpster rental near me?</dt>
              <dd className="text-gray-700">Yes, we provide local dumpster rental across Salt Lake & Utah County with quick delivery.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Can I get same day dumpster rental?</dt>
              <dd className="text-gray-700">Often yes—call early and we’ll try to fit you in based on route and availability.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">How much is a dumpster rental?</dt>
              <dd className="text-gray-700">Your dumpster rental price depends on size, tonnage, and material. Call for a fast dumpster rental quote.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">What sizes do you carry?</dt>
              <dd className="text-gray-700">We stock common roll off dumpster sizes suitable for cleanouts, remodels, roofing, and construction debris.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Where can you place the bin?</dt>
              <dd className="text-gray-700">Driveway or job site. We place with care and use boards when needed to protect surfaces.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">What’s included with delivery?</dt>
              <dd className="text-gray-700">Delivery dumpster rental includes drop-off, a rental window, and scheduled pick-up. Extra weight or time may cost more.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Do you service contractors?</dt>
              <dd className="text-gray-700">Yes. We support construction dumpster rental with swaps/haul-offs and reliable schedules for busy sites.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Do you offer same day bin rental?</dt>
              <dd className="text-gray-700">When routes allow, we can arrange it. Call (801) 209-9013 to check today’s options.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}

