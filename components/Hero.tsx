'use client'

import React, { useState } from 'react'
import { Phone, Clock, CheckCircle, Star, Truck, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false })

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Dumpster Rentals',
    message: ''
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [recaptchaKey, setRecaptchaKey] = useState(0)

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setSubmitStatus('idle')
    setErrorMessage('')
    
    // Validate required fields
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name')
      setSubmitStatus('error')
      return
    }
    
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number')
      setSubmitStatus('error')
      return
    }
    
    if (recaptchaSiteKey && !captchaToken) {
      setErrorMessage('Please complete the reCAPTCHA verification')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('API Error:', result)
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Track successful form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        })
      }
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Residential Dumpster Rentals',
        message: ''
      })
      if (recaptchaSiteKey) {
        setCaptchaToken(null)
        setRecaptchaKey((k) => k + 1)
      }
      setSubmitStatus('success')
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage('There was an error submitting your request. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCaptchaChange = (token: string | null) => {
    console.log('reCAPTCHA token:', token)
    setCaptchaToken(token)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="hero" className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-start pt-10 sm:pt-12">
      {/* Background image as actual <Image> for proper LCP and preload */}
      <div className="absolute inset-0 hero-bg">
        <Image
          src="/images/tand-t-dumpsters-hero-home-1920w.webp"
          alt="Dumpster rental services hero background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={60}
          className="object-cover"
        />
      </div>
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-700/70 to-primary-600/80 hero-overlay"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Dumpster Rental in Salt Lake County
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 mb-6 leading-relaxed">
                  Over 55 years of experience providing reliable, affordable dumpster rental services throughout the Wasatch Front area.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base">Fast Delivery</h2>
                    <p className="text-blue-100 text-xs">Same-day service available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base">Reliable Service</h2>
                    <p className="text-blue-100 text-xs">55+ years experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base">5-Star Rated</h2>
                    <p className="text-blue-100 text-xs">Customer satisfaction</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base">Quick Response</h2>
                    <p className="text-blue-100 text-xs">15min response time</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a 
                  href="tel:+18012099013" 
                  className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold text-base hover:bg-yellow-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (801) 209-9013
                </a>
                <a 
                  href="/quote" 
                  className="inline-flex items-center justify-center bg-white/20 text-white border-2 border-white px-6 py-3 rounded-lg font-bold text-base hover:bg-white/30 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">15min Response</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Request Call Back</h3>

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

                {/* Row 4: reCAPTCHA (optional) */}
                {recaptchaSiteKey && (
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      key={recaptchaKey}
                      sitekey={recaptchaSiteKey}
                      onChange={handleCaptchaChange}
                      theme="light"
                      size="compact"
                    />
                  </div>
                )}

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>Thank you! Your request has been submitted successfully. We will contact you soon.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && errorMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || (!!recaptchaSiteKey && !captchaToken)}
                  className={`w-full btn-primary ${isSubmitting || (!!recaptchaSiteKey && !captchaToken) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero