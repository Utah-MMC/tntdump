import { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import { 
  cityContentVariations, 
  getRandomVariation, 
  getRandomBackgroundImage, 
  getRandomServiceFeatures,
  getCitySpecificContent,
  getCityLocalFeatures
} from '@/lib/cityContentVariations'

interface CityPageTemplateProps {
  city: string
  state: string
}

export function generateCityMetadata(city: string, state: string): Metadata {
  return {
    title: `Dumpster Rental ${city}, ${state} | T&T Dumpsters | (801) 209-9013`,
    description: `Professional dumpster rental services in ${city}, ${state}. Fast delivery, competitive pricing, and reliable service. Call (801) 209-9013 for free same-day estimates.`,
    keywords: `dumpster rental ${city.toLowerCase()}, ${city.toLowerCase()} dumpster rental, dumpster rental near me, roll-off dumpster ${city.toLowerCase()}, ${state.toLowerCase()} dumpster rental`,
  }
}

function getCityPricing(city: string) {
  const cityData = cityContentVariations.citySpecific[city as keyof typeof cityContentVariations.citySpecific]
  // All cities now have pricing, but TypeScript might not recognize this
  if (cityData && 'pricing' in cityData && cityData.pricing) {
    return cityData.pricing
  }
  // Default pricing (fallback)
  return {
    "10-yard": "$299",
    "15-yard": "$399",
    "20-yard": "$499",
    "30-yard": "$699"
  }
}

export default function CityPageTemplate({ city, state }: CityPageTemplateProps) {
  // Generate city-specific content for this page load
  const heroDescription = getCitySpecificContent(city, 'heroDescriptions')
  const serviceDescription = getCitySpecificContent(city, 'serviceDescriptions')
  const whyChooseDescription = getCitySpecificContent(city, 'whyChooseDescriptions')
  const pricingDescription = getRandomVariation(cityContentVariations.pricingDescriptions)
  const contactDescription = getRandomVariation(cityContentVariations.contactDescriptions)
  const backgroundImage = getRandomBackgroundImage()
  
  // Get city-specific local features
  const localFeatures = getCityLocalFeatures(city)
  const commercialFeatures = getRandomServiceFeatures('commercial')
  const industrialFeatures = getRandomServiceFeatures('industrial')
  
  // Get city-specific pricing
  const pricing = getCityPricing(city)

  return (
    <main className="min-h-screen">
      <HeroSection
        title={`Dumpster Rental ${city}, ${state}`}
        description={heroDescription}
        secondaryButton={{
          text: "View Services",
          href: "#services"
        }}
        backgroundImage={backgroundImage}
      />
      
      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={getRandomBackgroundImage()}
              alt={`Dumpster rental services in ${city}, ${state}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Rental Services in {city}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {serviceDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Services</h3>
              <p className="text-gray-600 mb-4">
                Specialized services tailored to {city}'s unique community and development needs.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {localFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Services</h3>
              <p className="text-gray-600 mb-4">
                Office cleanouts, retail renovations, business waste, and regular service.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {commercialFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Services</h3>
              <p className="text-gray-600 mb-4">
                Large-scale industrial projects, construction waste, and heavy materials.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {industrialFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0003d5] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose T&T Dumpsters in {city}?
            </h2>
            <p className="text-xl text-blue-100">
              {whyChooseDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day delivery available in {city}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Best rates in {city} with free estimates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-blue-100">Family-owned business serving {city} since 1965</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here to help {city} residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dumpster Rental Pricing in {city}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {pricingDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">10 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pricing["10-yard"]}</p>
              <p className="text-sm text-gray-600 mb-4">Perfect for small projects</p>
              <a href="tel:+18012099013" className="btn-primary w-full">
                Get Quote
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">15 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pricing["15-yard"]}</p>
              <p className="text-sm text-gray-600 mb-4">Great for renovations</p>
              <a href="tel:+18012099013" className="btn-primary w-full">
                Get Quote
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pricing["20-yard"]}</p>
              <p className="text-sm text-gray-600 mb-4">Most popular size</p>
              <a href="tel:+18012099013" className="btn-primary w-full">
                Get Quote
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Yard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pricing["30-yard"]}</p>
              <p className="text-sm text-gray-600 mb-4">Large projects</p>
              <a href="tel:+18012099013" className="btn-primary w-full">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Estimate Today
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {contactDescription}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+18012099013" className="text-blue-600 hover:text-blue-700">
                      (801) 209-9013
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:jeremyuwg@gmail.com" className="text-blue-600 hover:text-blue-700">
                      jeremyuwg@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">{city}, {state} and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Estate Cleanout</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Get Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
