import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import CityCard from '@/components/CityCard'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Under Construction Banner */}
      <div className="bg-orange-500 text-white py-3 px-4 text-center font-bold text-lg shadow-lg">
        🚧 UNDER CONSTRUCTION - We're making improvements to better serve you! 🚧
      </div>
      <Hero />
      
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

      {/* Why T&T Dumpsters Section */}
      <section className="py-16 bg-[#0003d5] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Why T&T Dumpsters is Your Best Choice
            </h2>
            <p className="text-xl text-blue-100">
              for Waste Management
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Choosing T&T Dumpsters for your waste management needs means choosing a company with a proven track record of reliability and excellence. Our 55 years of experience in the industry, coupled with our commitment to fast delivery and quick turnaround times, ensures that we can handle any job, big or small.
              </p>
              
              <p>
                We offer free same-day estimates, allowing you to make informed decisions quickly. Our competitive pricing ensures value for money without compromising on service quality. As a family-owned, locally owned business, we understand the needs of our community and are committed to providing personalized service.
              </p>
            </div>
            
            {/* Right Column - Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">★★★</span>
                </div>
                <span className="text-lg font-semibold">Over 55 Years of Experience</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">$</span>
                </div>
                <span className="text-lg font-semibold">Free Same-Day Estimates</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">$</span>
                </div>
                <span className="text-lg font-semibold">Competitive Prices</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <span className="text-lg font-semibold">Locally Owned</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">⏰</span>
                </div>
                <span className="text-lg font-semibold">Quick Turnaround Times</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🚚</span>
                </div>
                <span className="text-lg font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block bg-white text-[#0003d5] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Call Back
            </a>
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
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </main>
  )
}
