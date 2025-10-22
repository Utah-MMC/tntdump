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
      
      <Services />
      
      
      {/* Dumpster Calculator Section */}
      <DumpsterCalculator />
      
      {/* Cities Section (replaced cards with linked list) */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Cities We Serve
            </h2>
            <p className="text-sm text-blue-200 max-w-3xl mx-auto">
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
                    <h3 className="text-base font-semibold text-white mb-4">{countyName}</h3>
                    <ul className="space-y-2">
                      {[...cities].sort((a, b) => a.name.localeCompare(b.name)).map(({ name, slug }) => (
                        <li key={slug}>
                          <a
                            href={`/dumpster-rental-${slug}-ut`}
                            className="text-yellow-400 hover:text-yellow-300 text-sm"
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
    </main>
  )
}

