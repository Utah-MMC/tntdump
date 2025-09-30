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

      {/* Featured Images Section (below Hero) */}
      <section className="bg-white">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/construction-dumpster-for-rent.png"
                alt="Construction dumpster for rent"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={70}
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/residential-dumpster-for-rent.png"
                alt="Residential dumpster for rent"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={70}
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      
      
      {/* Dumpster Calculator Section */}
      <DumpsterCalculator />
      
      {/* Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cities We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              T&T Dumpsters provides professional dumpster rental services throughout the Wasatch Front area. 
              Click on your city below to learn more about our local services and pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CityCard
              city="West Jordan"
              state="UT"
              description="Professional dumpster rental services in West Jordan, Utah. Fast delivery, competitive pricing, and reliable service for all your waste management needs."
              image="/images/pexels-cottonbro-4551310.jpg"
              slug="west-jordan"
              services={['Residential', 'Commercial', 'Construction', 'Estate Cleanout']}
            />
            <CityCard
              city="Salt Lake City"
              state="UT"
              description="Comprehensive dumpster rental solutions in Salt Lake City. From residential cleanouts to large commercial projects, we have the right dumpster for you."
              image="/images/pexels-cottonbro-4888489.jpg"
              slug="salt-lake-city"
              services={['Residential', 'Commercial', 'Industrial', 'Short-term']}
            />
            <CityCard
              city="Murray"
              state="UT"
              description="Reliable dumpster rental services in Murray, Utah. Quick turnaround times, competitive pricing, and exceptional customer service for all projects."
              image="/images/pexels-cristian-rojas-8447756.jpg"
              slug="murray"
              services={['Residential', 'Commercial', 'Vendor Services', 'Concrete']}
            />
          </div>

          <div className="text-center">
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
