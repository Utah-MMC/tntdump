'use client'

import { useState } from 'react'

interface QuickContactFormProps {
  serviceType?: string
  buttonText?: string
  className?: string
}

export default function QuickContactForm({ 
  serviceType = 'General Inquiry', 
  buttonText = 'Get Free Estimate',
  className = ''
}: QuickContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceType,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submit triggered', formData)
    
    // Reset status
    setSubmitStatus('idle')
    setErrorMessage('')
    
    // Validate required fields
    if (!formData.name.trim()) {
      console.log('Name validation failed')
      setErrorMessage('Please enter your name')
      setSubmitStatus('error')
      return
    }
    
    if (!formData.phone.trim()) {
      console.log('Phone validation failed')
      setErrorMessage('Please enter your phone number')
      setSubmitStatus('error')
      return
    }

    console.log('Form validation passed, submitting...')
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
        email: '',
        service: serviceType,
        message: ''
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

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact Form</h3>
      
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
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
            <option value="Residential Dumpster Rental">Residential Dumpster Rental</option>
            <option value="Commercial Dumpster Rental">Commercial Dumpster Rental</option>
            <option value="Industrial Dumpster Rental">Industrial Dumpster Rental</option>
            <option value="Estate Cleanout">Estate Cleanout</option>
            <option value="Concrete Disposal">Concrete Disposal</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about your project..."
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </button>
      </form>
    </div>
  )
}
