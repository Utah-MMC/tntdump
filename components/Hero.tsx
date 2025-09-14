'use client'

import React, { useState, useRef } from 'react'
import { Phone, Clock, CheckCircle, Star, Truck, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'

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
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Debug reCAPTCHA loading
  React.useEffect(() => {
    console.log('reCAPTCHA site key:', "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
  }, [])

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
    
    if (!captchaToken) {
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
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
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
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
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
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center" style={{backgroundImage: "url('/images/tand-t-dumpsters-hero-home-1920w.webp')"}}>
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-700/70 to-primary-600/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 lg:py-24">
            
            {/* Left Column - Enhanced Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white">Trusted by 1000+ Customers</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                  Utah's Premier{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Dumpster Rental
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-100 font-light max-w-2xl">
                  Fast, reliable, and affordable dumpster rentals across the Wasatch Front. 
                  <span className="text-yellow-400 font-semibold"> Same-day delivery available!</span>
                </p>
              </div>

              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Truck className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Same-Day Delivery</p>
                    <p className="text-gray-300 text-xs">Quick turnaround</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">55+ Years Experience</p>
                    <p className="text-gray-300 text-xs">Trusted service</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Best Prices</p>
                    <p className="text-gray-300 text-xs">Competitive rates</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200">Call or Text Now</p>
                      <a href="tel:+18012099013" className="text-2xl lg:text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                        (801) 209-9013
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200">Business Hours</p>
                      <p className="text-lg font-semibold text-white">Mon-Fri: 7AM-9PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+18012099013" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now - Free Quote
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </a>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Get Instant Quote
                </a>
              </div>
            </div>

            {/* Right Column - Enhanced Contact Form */}
            <div className="relative">
              {/* Form Background with enhanced styling */}
              <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-10 border border-blue-200/30">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 mx-auto">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                    Get Your Free Quote
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Fill out the form below and we'll call you within 15 minutes
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-blue-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-blue-50/50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-blue-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-blue-50/50"
                        placeholder="(801) 555-0123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-blue-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    >
                      <option value="Residential Dumpster Rentals">Residential Dumpster Rentals</option>
                      <option value="Commercial Dumpster Rentals">Commercial Dumpster Rentals</option>
                      <option value="Industrial Dumpster Rentals">Industrial Dumpster Rentals</option>
                      <option value="Short-Term Dumpster Rentals">Short-Term Dumpster Rentals</option>
                      <option value="Long-Term Dumpster Rentals">Long-Term Dumpster Rentals</option>
                      <option value="Vendor Dumpster Rentals">Vendor Dumpster Rentals</option>
                      <option value="Concrete Dumpsters">Concrete Dumpsters</option>
                      <option value="Estate Cleanout">Estate Cleanout</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-blue-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 resize-none bg-blue-50/50"
                      placeholder="Tell us about your project, timeline, and any special requirements..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={handleCaptchaChange}
                      theme="light"
                      size="normal"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className={`w-full py-4 px-6 text-lg font-bold text-white rounded-lg transition-all duration-300 ${
                      isSubmitting || !captchaToken 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Get My Free Quote Now'
                    )}
                  </button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-center space-x-6 text-sm text-blue-600">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="font-medium">Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">15min Response</span>
                    </div>
                  </div>
                </div>
              </div>
                             <div className="flex justify-center">
                 <ReCAPTCHA
                   ref={recaptchaRef}
                   sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                   onChange={handleCaptchaChange}
                   theme="light"
                   size="normal"
                 />
               </div>

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
                 disabled={isSubmitting || !captchaToken}
                 className={`w-full btn-primary ${isSubmitting || !captchaToken ? 'opacity-50 cursor-not-allowed' : ''}`}
               >
                 {isSubmitting ? 'Submitting...' : 'Submit Request'}
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

