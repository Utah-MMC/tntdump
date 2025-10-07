'use client'

import { useState } from 'react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import { 
  cityContentVariations, 
  getRandomVariation, 
  getRandomBackgroundImage, 
  getRandomServiceFeatures,
  getCitySpecificContent,
  getCityLocalFeatures,
  getDeterministicServiceFeatures,
  getDeterministicCityContent
} from '@/lib/cityContentVariations'

interface CityPageTemplateProps {
  city: string
  state: string
}


// Pricing is now standardized across all cities per latest sheet

export default function CityPageTemplate({ city, state }: CityPageTemplateProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Residential'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('CityPageTemplate form submit triggered', formData)
    
    // Reset status
    setSubmitStatus('idle')
    setErrorMessage('')
    
    // Validate required fields
    if (!formData.name.trim()) {
      console.log('CityPageTemplate: Name validation failed')
      setErrorMessage('Please enter your name')
      setSubmitStatus('error')
      return
    }
    
    if (!formData.phone.trim()) {
      console.log('CityPageTemplate: Phone validation failed')
      setErrorMessage('Please enter your phone number')
      setSubmitStatus('error')
      return
    }

    console.log('CityPageTemplate: Form validation passed, submitting...')
    setIsSubmitting(true)
    
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'Quick Contact Form'
        })
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('API Error:', result)
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Track successful form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Quick Contact Form',
          value: 1
        })
      }
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: 'Residential'
      })
      
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('There was an error submitting your request. Please try again or call us directly at (801) 209-9013.')
    } finally {
      setIsSubmitting(false)
    }
  }
  // Generate deterministic city-specific content to avoid hydration mismatches
  const heroDescription = getDeterministicCityContent(city, 'heroDescriptions')
  const serviceDescription = getDeterministicCityContent(city, 'serviceDescriptions')
  const whyChooseDescription = getDeterministicCityContent(city, 'whyChooseDescriptions')
  // Use deterministic content based on city name to avoid hydration mismatches
  const cityHash = city.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  const pricingDescription = cityContentVariations.pricingDescriptions[Math.abs(cityHash) % cityContentVariations.pricingDescriptions.length]
  const contactDescription = cityContentVariations.contactDescriptions[Math.abs(cityHash) % cityContentVariations.contactDescriptions.length]
  const backgroundImage = cityContentVariations.backgroundImages[Math.abs(cityHash) % cityContentVariations.backgroundImages.length]
  
  // Get city-specific local features
  const localFeatures = getCityLocalFeatures(city)
  const commercialFeatures = getDeterministicServiceFeatures('commercial', city)
  const industrialFeatures = getDeterministicServiceFeatures('industrial', city)
  
  // Pricing cards use standardized rates displayed below the hero

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
      
      {/* Pricing Section (shown directly below hero for all cities) */}
      (
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
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">15 Yard</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>1 Day</span><span>$300</span></p>
                    <p className="text-sm text-gray-600">No tons included</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>7 Days</span><span>$325</span></p>
                    <p className="text-sm text-gray-600">2 tons included</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">Additional weight: $55 per ton</p>
                <a href="tel:+18012099013" className="btn-primary w-full">Get Quote</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">20 Yard</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>1 Day</span><span>$335</span></p>
                    <p className="text-sm text-gray-600">No tons included</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>7 Days</span><span>$375</span></p>
                    <p className="text-sm text-gray-600">2 tons included</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">Additional weight: $55 per ton</p>
                <a href="tel:+18012099013" className="btn-primary w-full">Get Quote</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">30 Yard</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>1 Day</span><span>$345</span></p>
                    <p className="text-sm text-gray-600">No tons included</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>7 Days</span><span>$400</span></p>
                    <p className="text-sm text-gray-600">2 tons included</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">Additional weight: $55 per ton</p>
                <a href="tel:+18012099013" className="btn-primary w-full">Get Quote</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Concrete Dumpster</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>1 Day</span><span>$325</span></p>
                    <p className="text-sm text-gray-600">No tons included</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex justify-between"><span>7 Days</span><span>$425</span></p>
                    <p className="text-sm text-gray-600">No tons included</p>
                  </div>
                </div>
                <a href="tel:+18012099013" className="btn-primary w-full">Get Quote</a>
              </div>
            </div>
          </div>
        </section>
      )
      
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
                <span className="text-2xl">ðŸ </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Services</h3>
              <p className="text-gray-600 mb-4">
                Specialized services tailored to {city}'s unique community and development needs.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {localFeatures.map((feature, index) => (
                  <li key={index}>â€¢ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ¢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Services</h3>
              <p className="text-gray-600 mb-4">
                Office cleanouts, retail renovations, business waste, and regular service.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {commercialFeatures.map((feature, index) => (
                  <li key={index}>â€¢ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ­</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Services</h3>
              <p className="text-gray-600 mb-4">
                Large-scale industrial projects, construction waste, and heavy materials.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {industrialFeatures.map((feature, index) => (
                  <li key={index}>â€¢ {feature}</li>
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
              Why Choose TNT Dumpsters in {city}?
            </h2>
            <p className="text-xl text-blue-100">
              {whyChooseDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸšš</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day delivery available in {city}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸ’°</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Best rates in {city} with free estimates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">â­</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-blue-100">Family-owned business serving {city} since 1965</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸ“ž</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here to help {city} residents</p>
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
                  <span className="text-2xl mr-4">ðŸ“ž</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+18012099013" className="text-blue-600 hover:text-blue-700">
                      (801) 209-9013
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">ðŸ“§</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:admin@tntdump.com" className="text-blue-600 hover:text-blue-700">
                      admin@tntdump.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">ðŸ“</span>
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">{city}, {state} and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact Form</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 font-medium">Thank you! Your request has been submitted successfully. We will contact you soon.</p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && errorMessage && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Estate Cleanout">Estate Cleanout</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

