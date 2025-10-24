'use client'
import { useState } from 'react'
import { Phone, Clock, MapPin, Mail } from 'lucide-react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'

// Metadata is provided via app/contact/head.tsx to keep this a Client Component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Dumpster Rentals',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        message: '',
      })

      alert('Thank you! Your request has been submitted successfully. We will contact you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or call us directly at (801) 209-9013.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Contact TNT Dumpsters"
        description="Ready to get started with your dumpster rental? Contact us today for a free estimate and professional service. We're here to help with all your waste management needs."
        primaryButton={{
          text: 'Call Now: +1 (801) 209-9013',
          href: 'tel:+18012099013',
        }}
        secondaryButton={{
          text: 'Send Message',
          href: '#contact-form',
        }}
        showPhoneButton={false}
        backgroundImage="/images/pexels-pamelamariephoto-2625896.jpg"
      />

      {/* SEO SWEEP START [/contact-intro] */}
      <section className="py-6 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get a dumpster rental quote</h2>
          <p className="text-sm text-gray-700">
            Fast delivery, clear pricing, and local support. Serving Salt Lake & Utah County.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Unsure on size? Think kitchen remodel vs. garage cleanout—we'll guide you.
          </p>
        </div>
      </section>
      {/* SEO SWEEP END [/contact-intro] */}

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                  We're here to help with all your dumpster rental needs. Contact us today for a free estimate and professional service you can count on.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+18012099013"
                      className="text-lg text-primary-600 hover:text-primary-700 font-semibold"
                    >
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
                      <p>
                        <strong>Monday - Friday:</strong> 7:00 am - 9:00 pm
                      </p>
                      <p>
                        <strong>Saturday - Sunday:</strong> Closed
                      </p>
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
                    <p className="text-gray-600">Salt Lake & Utah County</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:sales@tntdump.com"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      sales@tntdump.com
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
                  className={`w-full bg-primary-600 text-white font-bold rounded-lg px-6 py-3 hover:bg-primary-700 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/contact-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Dumpster Rental',
            areaServed: 'Salt Lake & Utah County',
            provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' },
          }),
        }}
      />
      {/* SEO SWEEP END [/contact-schema] */}
    </main>
  )
}
