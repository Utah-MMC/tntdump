'use client'

import React, { useState, useRef } from 'react'
import { Phone, Clock, CheckCircle } from 'lucide-react'
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
  const recaptchaRef = useRef<ReCAPTCHA>(null)

     // Debug reCAPTCHA loading
   React.useEffect(() => {
     console.log('reCAPTCHA site key:', "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
   }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification')
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
      
      alert('Thank you! Your request has been submitted successfully. We will contact you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
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
     <section className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24" style={{backgroundImage: "url('/images/tand-t-dumpsters-hero-home-1920w.webp')"}}>
               <div className="absolute inset-0 bg-gradient-to-r from-primary-600/60 to-primary-700/60"></div>
       <div className="relative z-10">
       <div className="container-custom">
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                     {/* Left Column - Content */}
           <div className="space-y-6 sm:space-y-8">
             <div className="space-y-4">
               <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                 Dumpster Rental on the{' '}
                 <span className="text-yellow-400">Wasatch Front</span>
               </h1>
               
               <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 sm:gap-6 text-base sm:text-lg">
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                   <span className="font-semibold text-white">Over 55 Years of Experience</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                   <span className="font-semibold text-white">Quick Turnaround</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                   <span className="font-semibold text-white">Competitive Pricing</span>
                 </div>
               </div>
             </div>

                         {/* Contact Info */}
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
               <div className="flex items-center space-x-3">
                 <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                 <div>
                   <p className="text-xs sm:text-sm text-gray-100">Call or Text</p>
                                  <a href="tel:+18012099013" className="text-xl sm:text-2xl font-bold text-yellow-400 hover:text-yellow-300">
                 (801) 209-9013
               </a>
                 </div>
               </div>
               
               <div className="flex items-center space-x-3">
                 <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                 <div>
                   <p className="text-xs sm:text-sm text-gray-100">Hours:</p>
                   <p className="text-sm sm:text-base font-semibold text-white">Mon - Fri: 7:00 am - 9:00 pm</p>
                 </div>
               </div>
             </div>

                         {/* CTA Button */}
             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
               <a href="tel:+18012099013" className="btn-primary text-center py-3 sm:py-3 px-6 text-base sm:text-lg">
                 Call Now
               </a>
               <a href="#contact" className="btn-secondary text-center py-3 sm:py-3 px-6 text-base sm:text-lg">
                 Request Call Back
               </a>
             </div>
          </div>

                     {/* Right Column - Contact Form */}
           <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8">
             <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Request Call Back</h3>
            
                         <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                   NAME
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                   required
                 />
               </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Dumpster Service*
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
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
                 className={`w-full btn-primary ${isSubmitting || !captchaToken ? 'opacity-50 cursor-not-allowed' : ''}`}
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

