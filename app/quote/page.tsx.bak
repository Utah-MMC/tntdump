'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    dumpsterSize: '',
    zip: '',
    projectDescription: '',
    preferredDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Prefill from URL query params
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const size = params.get('size')
    const zip = params.get('zip')
    if (size || zip) {
      setFormData((prev) => ({
        ...prev,
        dumpsterSize: size ? `${size} Yard` : prev.dumpsterSize,
        zip: zip || prev.zip,
      }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('API Error:', result)
        throw new Error(result.error || 'Failed to submit quote request')
      }
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        serviceType: '',
        dumpsterSize: '',
        zip: '',
        projectDescription: '',
        preferredDate: ''
      })
      
      alert('Thank you! Your quote request has been submitted successfully. We will contact you soon with your free estimate.')
    } catch (error) {
      console.error('Error submitting quote request:', error)
      alert('There was an error submitting your quote request. Please try again or call us directly at (801) 209-9013.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Get Your Free Quote"
        description="Get a free same-day estimate for your dumpster rental needs. No obligation, competitive pricing guaranteed."
        primaryButton={{
          text: "Call (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Fill Out Form",
          href: "#quote-form"
        }}
        showPhoneButton={false}
        backgroundImage="/images/dumpsterSmallBanner.jpeg"
      />

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      pattern="^\\\d{5}$"
                      placeholder="e.g., 84015"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Dumpster Rental">Residential Dumpster Rental</option>
                    <option value="Commercial Dumpster Rental">Commercial Dumpster Rental</option>
                    <option value="Industrial Dumpster Rental">Industrial Dumpster Rental</option>
                    <option value="Short-Term Dumpster Rental">Short-Term Dumpster Rental</option>
                    <option value="Long-Term Dumpster Rental">Long-Term Dumpster Rental</option>
                    <option value="Vendor Dumpster Rental">Vendor Dumpster Rental</option>
                    <option value="Concrete Dumpsters">Concrete Dumpsters</option>
                    <option value="Estate Cleanout Services">Estate Cleanout Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dumpster Size</label>
                  <select 
                    name="dumpsterSize"
                    value={formData.dumpsterSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select size (optional)</option>
                    <option value="10 Yard - Small projects">10 Yard - Small projects</option>
                    <option value="15 Yard - Renovations">15 Yard - Renovations</option>
                    <option value="20 Yard - Most popular">20 Yard - Most popular</option>
                    <option value="30 Yard - Large projects">30 Yard - Large projects</option>
                    
                    <option value="Not sure - Need recommendation">Not sure - Need recommendation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea 
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any special requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Date</label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                </button>
              </form>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose TNT Dumpsters?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Same-Day Estimates</h4>
                      <p className="text-gray-600">Get your quote within hours, not days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-600">Best rates guaranteed with no hidden fees</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600">Same-day delivery available in most areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Service</h4>
                      <p className="text-gray-600">Family-owned business serving Utah since 1965</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h4>
                <p className="text-gray-600 mb-4">
                  For urgent requests or immediate pricing, call us directly:
                </p>
                <a 
                  href="tel:+18012099013" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <span className="text-2xl mr-2">📞</span>
                  (801) 209-9013
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included in Your Quote?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dumpster delivery and pickup</li>
                  <li>• Rental period (typically 7-14 days)</li>
                  <li>• Weight allowance</li>
                  <li>• Disposal fees</li>
                  <li>• Customer service support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DumpsterCalculator />
    </main>
  )
}

