import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | TNT Dumpsters',
  description: 'Terms of service for TNT Dumpsters. Learn about our service terms and conditions.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Terms of Service
        </h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            These terms of service govern your use of TNT Dumpsters services and website.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
          <p className="text-gray-600 mb-6">
            By using our services, you agree to these terms and conditions. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
          <p className="text-gray-600 mb-6">
            We strive to provide reliable service, but we cannot guarantee uninterrupted availability of our services.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these terms, please contact us at (801) 209-9013.
          </p>
        </div>
      </div>
    </div>
  )
}

