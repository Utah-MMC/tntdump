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
      {/* Comprehensive Structured Data for AI Overview */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Rent a Dumpster in Utah",
            "description": "Complete guide to renting a dumpster in Salt Lake & Utah County. Step-by-step instructions for ordering, delivery, and pickup.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Contact TNT Dumpsters",
                "text": "Call (801) 209-9013 or request a quote online. Provide details about your project, location, and preferred delivery date.",
                "url": "https://tntdump.com/quote"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Choose Your Dumpster Size",
                "text": "Select from 15-yard (small cleanouts), 20-yard (medium remodels), or 30-yard (large construction) containers. Our team can help recommend the right size.",
                "url": "https://tntdump.com/calculator"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Schedule Delivery",
                "text": "We schedule delivery, typically within 4-6 hours when ordered before 3:00 PM. Same-day service is often available in Salt Lake & Utah County.",
                "url": "https://tntdump.com"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Load Your Dumpster",
                "text": "Fill the dumpster with your debris. Keep materials level with the top rail and avoid prohibited items like liquids, hazardous waste, and electronics.",
                "url": "https://tntdump.com/dumpsters"
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Schedule Pickup",
                "text": "Call or text when ready for pickup. We typically retrieve same day or next morning. Extended rentals available with daily fees.",
                "url": "https://tntdump.com/contact"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://tntdump.com/#webpage",
                "url": "https://tntdump.com/",
                "name": "Dumpster Rental & Roll-Off Services | TNT Dumpsters",
                "description": "Local container rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing.",
                "isPartOf": { "@id": "https://tntdump.com/#website" },
                "about": { "@id": "https://tntdump.com/#organization" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp",
                  "width": 176,
                  "height": 176
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tntdump.com/" }
                ]
              },
              {
                "@type": "Service",
                "name": "Dumpster Rental Service",
                "serviceType": "Roll-off dumpster rental",
                "provider": { "@id": "https://tntdump.com/#organization" },
                "areaServed": "Utah",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "servicePhone": "(801) 209-9013",
                  "availableLanguage": "English"
                }
              },
              {
                "@type": "ItemList",
                "name": "Core Dumpster Services",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Residential Containers", "url": "https://tntdump.com/dumpsters/residential" },
                  { "@type": "ListItem", "position": 2, "name": "Commercial Containers", "url": "https://tntdump.com/dumpsters/commercial" },
                  { "@type": "ListItem", "position": 3, "name": "Construction & Concrete Containers", "url": "https://tntdump.com/dumpsters/concrete" }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Dumpster Sizes",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "15 Yard Dumpster", "url": "https://tntdump.com/15-yard-dumpster-rental" },
                  { "@type": "ListItem", "position": 2, "name": "20 Yard Dumpster", "url": "https://tntdump.com/20-yard-dumpster-rental" },
                  { "@type": "ListItem", "position": 3, "name": "30 Yard Dumpster", "url": "https://tntdump.com/30-yard-dumpster-rental" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does it cost to rent a dumpster in Utah?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Container prices start at $325 for a 15-yard container (7-day rental), $375 for a 20-yard, and $400 for a 30-yard. All prices include delivery and pickup. Additional charges apply for extra weight ($55 per ton) and extended rental days. Final pricing depends on size, material type, location, and rental duration. Call (801) 209-9013 for a detailed quote."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer same day dumpster delivery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, same-day dumpster delivery is often available in Salt Lake & Utah County when orders are placed before our cutoff time (typically 3:00 PM). Delivery typically takes 4-6 hours depending on route and traffic. Contact us early in the day to secure same-day service."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What dumpster sizes do you offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer three sizes: 15-yard (16' x 8' x 3.5') for small cleanouts, 20-yard (17' x 7.5' x 5') for medium remodels, and 30-yard (18' x 7.25' x 6.6') for large construction projects. Our team can help you choose the right size based on your project type and debris volume."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What items are prohibited in dumpsters?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Prohibited items include liquids, paints, oils, hazardous waste, batteries, electronics, tires, and appliances (with some exceptions). Dirt and concrete need special containers. We'll review restrictions when you book to ensure proper disposal and avoid extra fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a permit for dumpster placement?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Driveway placements usually don't need permits. Street or public right-of-way placements may need a city permit. Permit rules vary by city in Utah. We can help you understand local requirements and guide you on getting permits if needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does dumpster delivery and pickup work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We schedule delivery at your preferred time, place the container on your driveway or job site, and return for pickup when you call or on the preset date. Our drivers will call or text before arrival. Pickup is usually same-day or next morning when requested."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What areas do you serve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We serve Salt Lake County, Utah County, Davis County, and Weber County, including cities like Salt Lake City, Provo, Orem, Lehi, West Jordan, Sandy, Murray, Layton, Ogden, and many more. Contact us to confirm service in your specific location."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What affects container rental cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Several factors affect pricing: container size (15, 20, or 30 yards), material weight (billed at $55 per ton), rental duration (standard 7 days, then daily fees), route distance, disposal fees, and material type. Heavy materials like concrete or dirt may need special containers. We provide clear pricing upfront with no hidden fees."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <Hero />

      {/* Core services quick links for strong internal routing */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">Core Services</p>
            <h1 className="text-2xl font-bold text-gray-900">Find the Right Dumpster Service</h1>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">Jump straight into our most-requested services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Residential Containers</h3>
              <p className="text-sm text-gray-600">Driveway-safe bins for cleanouts, remodels, and moves.</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Containers</h3>
              <p className="text-sm text-gray-600">Contractor-friendly service with reliable swaps and scheduling.</p>
            </a>
            <a href="/dumpsters/concrete" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">Construction & Concrete Containers</h3>
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
              <p className="text-gray-600 max-w-3xl mx-auto">Choose the right size for your project. All rentals include delivery and pickup.</p>
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

      {/* 3-Step Container Rental Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Container Delivery */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/dumpster-delivery-service.webp"
                    alt="Professional roll-off container delivery service with truck dropping off container at job site"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Residential Container */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/residential-dumpster-driveway.jpeg"
                    alt="Residential roll-off container placed on driveway for home renovation and construction debris removal"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                  quality={70}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Construction Container */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/open-dumpster-rental.webp"
                    alt="Open roll-off container at construction site for efficient waste management and debris disposal"
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
              TNT Dumpsters provides professional roll-off container services throughout the Wasatch Front area. 
              Click on your city below to learn more about our local services and pricing.
            </p>
            <p className="mt-3 text-xs text-gray-600">
              Primary service areas include Davis County, Salt Lake County, Utah County, and Weber County.
            </p>
          </div>

          {/* Service areas visual map */}
          <div className="max-w-3xl mx-auto mb-12">
            <a href="/cities" className="block">
              <Image
                src="/images/utah-dumpster-service-areas.webp"
                alt="Utah container rental service areas map showing TNT Dumpsters coverage along the Wasatch Front"
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
                            {name} Container Rentals
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
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Browse our roll-off container resources and services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">All Container Types</h3>
              <p className="text-sm text-gray-600">View residential, commercial, industrial, and specialty containers</p>
            </a>
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Our Services</h3>
              <p className="text-sm text-gray-600">Learn about our roll-off container services and solutions</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Container Rental Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and expert advice on container rentals</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find container rental services in your Utah city</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free quote today</p>
            </a>
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the perfect container size for your project</p>
            </a>
            <a href="/estate-cleanouts" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Estate Cleanouts</h3>
              <p className="text-sm text-gray-600">Professional estate cleanout services</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Residential Rentals</h3>
              <p className="text-sm text-gray-600">Home container rental for cleanouts and remodels</p>
            </a>
            <a href="#cleanouts-moves" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Cleanouts & Moves</h3>
              <p className="text-sm text-gray-600">Quick home cleanups and seasonal purges</p>
            </a>
            <a href="#remodels-projects" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">Remodels & Projects</h3>
              <p className="text-sm text-gray-600">Keep work areas clean during upgrades</p>
            </a>
            <a href="#what-we-take" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold text-blue-600 mb-2">What We Take</h3>
              <p className="text-sm text-gray-600">Materials and debris we accept</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Helpful Guides & Tools</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Plan your rental with these quick resources.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <a href="/dumpster-rental-process" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Dumpster Rental Process</h3>
              <p className="text-sm text-gray-600">Step-by-step delivery, loading, and pickup.</p>
            </a>
            <a href="/dumpster-rental-permits" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Permits & Placement</h3>
              <p className="text-sm text-gray-600">When you need a permit and how to plan.</p>
            </a>
            <a href="/pricing" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Pricing Overview</h3>
              <p className="text-sm text-gray-600">What affects cost and how to budget.</p>
            </a>
            <a href="/dumpster-size-calculator" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Estimate the right size for your job.</p>
            </a>
            <a href="/dumpster-rental-cost-calculator" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Cost Calculator</h3>
              <p className="text-sm text-gray-600">Plan pricing based on size and weight.</p>
            </a>
            <a href="/responsible-disposal" className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 mb-2">Responsible Disposal</h3>
              <p className="text-sm text-gray-600">Keep your load compliant and safe.</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Pricing / How it works grid */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text">Pricing & How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">Simple, transparent options. Get a firm quote by calling (801) 209-9013.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">How much does it cost?</h3>
              <p className="text-gray-700 text-sm">
                Price varies by size, material, and location. Call for a quick quote. We'll confirm weight limits and the best container for your project.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">What affects the cost?</h3>
              <p className="text-gray-700 text-sm">
                Main factors are tonnage, container size, rental time, route distance, and disposal fees. We price delivery up front with no surprises.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer same day service?</h3>
              <p className="text-gray-700 text-sm">
                Yes, on many days. Contact us early and we'll try to deliver the same day in Salt Lake & Utah County when routes allow.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">How do delivery and pick-up work?</h3>
              <p className="text-gray-700 text-sm">
                We schedule delivery, place the container on your driveway or job site, and return for pick-up when you call or on the preset date. Easy swaps are available.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Can I get a fixed price before delivery?</h3>
              <p className="text-gray-700 text-sm">
                Yes. We confirm your price and expectations (material type, size, timing) before scheduling. No hidden fees, just clear terms.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">Do you help choose the right size?</h3>
              <p className="text-gray-700 text-sm">
                Yes. Tell us about your project and we'll recommend a size. If you're unsure, start with a versatile size and we can swap or haul-off as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <About />
      <Contact />

      {/* Footer FAQ block - Enhanced for AI Overview */}
      <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="container-custom">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Container Rental FAQs</h2>
          <dl className="grid md:grid-cols-2 gap-6 text-sm">
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">How much does it cost to rent a dumpster in Utah?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">Container prices start at $325 for a 15-yard container (7-day rental), $375 for a 20-yard, and $400 for a 30-yard. All prices include delivery and pickup. Additional charges apply for extra weight ($55 per ton) and extended rental days. Final pricing depends on size, material type, location, and rental duration. Call (801) 209-9013 for a detailed quote.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">Do you offer same day dumpster delivery?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">Yes, same-day dumpster delivery is often available in Salt Lake & Utah County when orders are placed before our cutoff time (typically 3:00 PM). Delivery typically takes 4-6 hours depending on route and traffic. Contact us early in the day to secure same-day service.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">What dumpster sizes do you offer?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">We offer three sizes: 15-yard (16' x 8' x 3.5') for small cleanouts, 20-yard (17' x 7.5' x 5') for medium remodels, and 30-yard (18' x 7.25' x 6.6') for large construction projects. Our team can help you choose the right size based on your project type and debris volume.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">What items are prohibited in dumpsters?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">Prohibited items include liquids, paints, oils, hazardous waste, batteries, electronics, tires, and appliances (with some exceptions). Dirt and concrete need special containers. We'll review restrictions when you book to ensure proper disposal and avoid extra fees.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">Do I need a permit for dumpster placement?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">Driveway placements usually don't need permits. Street or public right-of-way placements may need a city permit. Permit rules vary by city in Utah. We can help you understand local requirements and guide you on getting permits if needed.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">How does dumpster delivery and pickup work?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">We schedule delivery at your preferred time, place the container on your driveway or job site, and return for pickup when you call or on the preset date. Our drivers will call or text before arrival. Pickup is usually same-day or next morning when requested.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">What areas do you serve?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">We serve Salt Lake County, Utah County, Davis County, and Weber County, including cities like Salt Lake City, Provo, Orem, Lehi, West Jordan, Sandy, Murray, Layton, Ogden, and many more. Contact us to confirm service in your specific location.</span>
              </dd>
            </div>
            <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <dt className="font-semibold text-gray-900" itemProp="name">What affects container rental cost?</dt>
              <dd className="text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">Several factors affect pricing: container size (15, 20, or 30 yards), material weight (billed at $55 per ton), rental duration (standard 7 days, then daily fees), route distance, disposal fees, and material type. Heavy materials like concrete or dirt may need special containers. We provide clear pricing upfront with no hidden fees.</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}

