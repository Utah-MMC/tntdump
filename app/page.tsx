import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CityCard from '@/components/CityCard'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <Services />
      
      {/* Discover T&T Dumpsters Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Discover T&T Dumpsters: Your Reliable Partner in Waste Management
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                T&T Dumpsters, a family-owned business established in 1965, has been providing exceptional dumps and garbage services in West Jordan, UT for over 55 years. Our longevity in the industry is a testament to our commitment to quality service, customer satisfaction, and environmental responsibility.
              </p>
              
              <p>
                We offer a wide range of services, including residential, commercial, and industrial dumpster services, as well as short-term and long-term dumpster services. We also provide vendor dumpster rental services and concrete dumpsters. Our team is dedicated to delivering fast and efficient service, with free same-day estimates, quick turnaround times, and competitive pricing. We are proud to be locally owned, ensuring that we understand and cater to the unique needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
