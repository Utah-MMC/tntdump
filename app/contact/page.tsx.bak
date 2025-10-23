'use client'

import { useState } from 'react'
import { Phone, Clock, MapPin, Mail } from 'lucide-react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Dumpster Rentals',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('API Error:', result)
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Residential Dumpster Rentals',
        message: ''
      })
      
      alert('Thank you! Your request has been submitted successfully. We will contact you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or call us directly at (801) 209-9013.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Contact TNT Dumpsters"
        description="Ready to get started with your dumpster rental? Contact us today for a free estimate and professional service. We're here to help with all your waste management needs."
        primaryButton={{
          text: "Call Now: +1 (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "Send Message",
          href: "#contact-form"
        }}
        showPhoneButton={false}
        backgroundImage="/images/pexels-pamelamariephoto-2625896.jpg"
      />

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  We're here to help with all your dumpster rental needs. Contact us today for a free estimate 
                  and professional service you can count on.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <a href="tel:+18012099013" className="text-lg text-primary-600 hover:text-primary-700 font-semibold">
                  +1 (801) 209-9013
                </a>
                    <p className="text-sm text-gray-600">Call or Text</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <div className="text-gray-600">
                      <p><strong>Monday - Friday:</strong> 7:00 am - 9:00 pm</p>
                      <p><strong>Saturday - Sunday:</strong> Closed</p>
                      <p className="text-sm mt-2">Call for after-hours or weekend availability.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Serving Area</h3>
                    <p className="text-gray-600">Wasatch Front, Utah</p>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>• West Jordan</p>
                      <p>• Salt Lake City</p>
                      <p>• Murray</p>
                      <p>• Sandy</p>
                      <p>• Draper</p>
                      <p>• Riverton</p>
                      <p>• And surrounding areas</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:admin@tntdump.com" className="text-primary-600 hover:text-primary-700">
                      admin@tntdump.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">About TNT Dumpsters</h3>
                <p className="text-gray-600">
                  By selecting TNT Dumpsters for your waste management requirements, you are opting for a firm with a demonstrated history of dependability and high performance. Call or text our family-owned and locally operated enterprise today!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Request Call Back</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">PHONE</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email + Service */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">EMAIL (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">SERVICE NEEDED</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    >
                      <option value="Residential Dumpster Rentals">Residential Dumpster Rentals</option>
                      <option value="Commercial Dumpster Rentals">Commercial Dumpster Rentals</option>
                      <option value="Industrial Dumpster Rentals">Industrial Dumpster Rentals</option>
                      <option value="Short-Term Dumpster Rentals">Short-Term Dumpster Rentals</option>
                      <option value="Long-Term Dumpster Rentals">Long-Term Dumpster Rentals</option>
                      <option value="Vendor Dumpster Rentals">Vendor Dumpster Rentals</option>
                      <option value="Concrete Dumpsters">Concrete Dumpsters</option>
                      <option value="Estate Cleanout Services">Estate Cleanout Services</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-400 text-blue-900 font-bold rounded-lg px-6 py-3 hover:bg-yellow-300 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TNT Dumpsters?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 55 years of experience, we provide reliable, affordable, and professional 
              dumpster rental services throughout the Wasatch Front area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Estimates</h3>
              <p className="text-gray-600">Get quick, accurate quotes with our free same-day estimates.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Service</h3>
              <p className="text-gray-600">Fast delivery and pickup to keep your project on schedule.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Business</h3>
              <p className="text-gray-600">Family-owned and operated, serving our community for over 55 years.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Best value for your money without compromising on service quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Serving the Wasatch Front
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We proudly serve the entire Wasatch Front area, providing reliable dumpster rental 
                services to homeowners, businesses, and contractors throughout Utah.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-west-jordan-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">West Jordan</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-salt-lake-city-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">Salt Lake City</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-murray-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">Murray</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-sandy-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">Sandy</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-draper-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">Draper</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <a href="/dumpster-rental-riverton-ut" className="text-gray-700 hover:text-primary-600 hover:underline transition-colors">Riverton</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">And surrounding areas</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/bigstock-Salt-Lake-City-Utah-USA-down-360462808-1536x1025.webp"
                  alt="TNT Dumpsters serving the Wasatch Front area with professional dumpster rental services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate and professional dumpster rental service. 
            We're here to help with all your waste management needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+18012099013" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Call Now: +1 (801) 209-9013
            </a>
            <a href="#contact-form" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Send Message
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-100">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call or Text</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Mon - Fri: 7:00 am - 9:00 pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Serving the Wasatch Front</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

