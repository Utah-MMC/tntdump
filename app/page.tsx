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

      {/* Core services quick links for strong internal routing */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">Core Services</p>
            <h2 className="text-2xl font-bold text-gray-900">Find the Right Dumpster Service</h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">Jump straight into our most-requested dumpster rentals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Residential Dumpster Rentals</h3>
              <p className="text-sm text-gray-600">Driveway-safe bins for cleanouts, remodels, and moves.</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Dumpster Rentals</h3>
              <p className="text-sm text-gray-600">Contractor-friendly service with reliable swaps and scheduling.</p>
            </a>
            <a href="/dumpsters/concrete" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Construction & Concrete Dumpsters</h3>
              <p className="text-sm text-gray-600">Heavy debris solutions for concrete, brick, and demo waste.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured images moved inside <Hero /> to remove extra spacing */}

      {/* Dumpster Sizes Cards Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Our Dumpster Sizes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Choose the perfect size for your project. All rentals include delivery and pickup.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 15 YD Dumpster */}
            <div className="group relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="absolute inset-0 bg-[#3b82f6] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none z-10"></div>
              <div className="relative h-48 bg-gray-100 p-2">
                <Image
                  src="/images/15-yard-dumpster-card.jpg"
                  alt="15 yard dumpster"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">15 YD DUMPSTER</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gray-900">$325 <span className="text-lg font-normal text-gray-600">– 7 DAY RENTAL</span></p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p>Includes 2 tons</p>
                    <p className="text-xs">($55/ extra ton)</p>
                  </div>
                </div>
                <a href="/quote" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors mb-4">
                  CLICK TO ORDER – 15YD
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm mb-2">Dimensions:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 16 feet long</li>
                    <li>• 8 feet wide</li>
                    <li>• 3.5 feet tall</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 20 YD Dumpster */}
            <div className="group relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="absolute inset-0 bg-[#3b82f6] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none z-10"></div>
              <div className="relative h-48 bg-gray-100 p-2">
                <Image
                  src="/images/20-yard-dumpster-card.jpg"
                  alt="20 yard dumpster"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">20 YD DUMPSTER</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gray-900">$375 <span className="text-lg font-normal text-gray-600">– 7 DAY RENTAL</span></p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p>Includes 2 tons</p>
                    <p className="text-xs">($55/ extra ton)</p>
                  </div>
                </div>
                <a href="/quote" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors mb-4">
                  CLICK TO ORDER – 20 YD
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm mb-2">Dimensions:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 17.08 feet long</li>
                    <li>• 7.54 feet wide</li>
                    <li>• 5 feet tall</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 30 YD Dumpster */}
            <div className="group relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="absolute inset-0 bg-[#3b82f6] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none z-10"></div>
              <div className="relative h-48 bg-gray-100 p-2">
                <Image
                  src="/images/30-yard-dumpster-card.jpg"
                  alt="30 yard dumpster"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">30 YD DUMPSTER</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gray-900">$400 <span className="text-lg font-normal text-gray-600">– 7 DAY RENTAL</span></p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p>Includes 2 tons</p>
                    <p className="text-xs">($55/ extra ton)</p>
                  </div>
                </div>
                <a href="/quote" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors mb-4">
                  CLICK TO ORDER – 30 YD
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm mb-2">Dimensions:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 18.25 feet long</li>
                    <li>• 7.25 feet wide</li>
                    <li>• 6.63 feet tall</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Dumpster Rental Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Dumpster Rental Delivery */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/dumpster-rental-dropoff.png"
                    alt="Professional dumpster rental delivery service with roll-off truck dropping off dumpster at job site"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Residential Dumpster Rental */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/dumpster-rental-driveway.jpeg"
                    alt="Residential dumpster rental placed on driveway for home renovation and construction debris removal"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                  quality={70}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Construction Dumpster Rental */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/open-dumpster.png"
                    alt="Open dumpster rental at construction site for efficient waste management and debris disposal"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Calculator Section */}
      <DumpsterCalculator />
      
      {/* Cities Section (replaced cards with linked list) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <a href="/cities" className="inline-block">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                Cities We Serve
              </h2>
            </a>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              TNT Dumpsters provides professional dumpster rental services throughout the Wasatch Front area. 
              Click on your city below to learn more about our local services and pricing.
            </p>
            <p className="mt-3 text-xs text-gray-600">
              Primary dumpster rental service areas include Davis County, Salt Lake County, Utah County, and Weber County.
            </p>
          </div>

          {/* Service areas visual map */}
          <div className="max-w-3xl mx-auto mb-12">
            <a href="/cities" className="block">
              <Image
                src="/images/service_areas.png"
                alt="Utah dumpster rental service areas map showing TNT Dumpsters coverage along the Wasatch Front"
                width={1200}
                height={400}
                loading="lazy"
                quality={70}
                className="w-full h-auto rounded-lg shadow-md"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </a>
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
                            href={`/${slug}-dumpster-rentals/service-areas/${slug}`}
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

        </div>
      </section>
      
      <Services />
      
      {/* Crosslinks Section (moved below Services) */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Explore Our Dumpster Rental Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Browse our comprehensive dumpster rental resources and services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Types</h3>
              <p className="text-sm text-gray-600">View residential, commercial, industrial, and specialty dumpsters</p>
            </a>
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Learn about our dumpster rental services and solutions</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Rental Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and expert advice on dumpster rentals</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find dumpster rental services in your Utah city</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free dumpster rental quote today</p>
            </a>
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the perfect dumpster size for your project</p>
            </a>
            <a href="/estate-cleanouts" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Estate Cleanouts</h3>
              <p className="text-sm text-gray-600">Professional estate cleanout services</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Home dumpster rental for cleanouts and remodels</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Pricing / How it works grid */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text">Pricing & How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">Simple, transparent options. Get a firm dumpster rental quote by calling (801) 209-9013.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">How much is a dumpster rental?</h3>
              <p className="text-gray-700 text-sm">
                Dumpster rental price varies by size, material, and location. Call for a fast dumpster rental quote; we'll confirm weight limits and the best roll off dumpster for your project.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">What affects dumpster rental cost?</h3>
              <p className="text-gray-700 text-sm">
                The biggest factors are tonnage, dumpster size, rental time, route distance, and disposal fees. We price delivery dumpster rental up front so there are no surprises.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer same day dumpster rental?</h3>
              <p className="text-gray-700 text-sm">
                Yes—on many days. Contact us early and we'll try to place a roll off dumpster the same day in Salt Lake & Utah County when routes allow.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">How do delivery and pick-up work?</h3>
              <p className="text-gray-700 text-sm">
                We schedule delivery dumpster rental, place it carefully on your driveway or job site, and return for pick-up on your call or on the preset date. Easy swaps are available.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Can I get a fixed price before delivery?</h3>
              <p className="text-gray-700 text-sm">
                Absolutely. We confirm your dumpster rental price and expectations (material type, size, timing) before scheduling. No hidden fees—just clear terms.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Do you help choose the right size?</h3>
              <p className="text-gray-700 text-sm">
                Yes. Tell us about your project and we'll recommend a roll off size. If you're unsure, start with a versatile size and we can swap or haul-off as needed.
              </p>
            </div>
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

