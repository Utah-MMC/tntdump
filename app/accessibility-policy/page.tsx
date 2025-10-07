import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Policy | TNT Dumpsters',
  description: 'Accessibility policy for TNT Dumpsters. Our commitment to making our services accessible to all customers.',
}

export default function AccessibilityPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Accessibility Policy
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            TNT Dumpsters is committed to ensuring our services are accessible to all customers.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            We strive to provide accessible services and accommodations for customers with disabilities.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
          <p className="text-gray-600 mb-6">
            Our website and services are designed to be accessible and user-friendly for all customers.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you need assistance or have accessibility concerns, please contact us at (801) 209-9013.
          </p>
        </div>
      </div>
    </div>
  )
}

