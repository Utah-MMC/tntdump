import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vendor Dumpster Rental Services | T&T Dumpsters',
  description: 'Professional vendor dumpster rental services in Utah. Specialized solutions for contractors, builders, and service providers.',
  keywords: 'vendor dumpster rental, contractor dumpster rental, builder dumpster rental, utah dumpster rental',
}

export default function VendorDumpsters() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Vendor Dumpster Rental Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Professional vendor dumpster rental solutions for contractors, builders, and service providers.
        </p>
        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  )
}
