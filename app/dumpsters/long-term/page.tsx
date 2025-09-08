import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Long-Term Dumpster Rental Services | T&T Dumpsters',
  description: 'Professional long-term dumpster rental services in Utah. Flexible contracts, competitive pricing, and reliable service for ongoing waste management needs.',
  keywords: 'long-term dumpster rental, extended dumpster rental, ongoing waste management, utah dumpster rental',
}

export default function LongTermDumpsters() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Long-Term Dumpster Rental Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Professional long-term dumpster rental solutions for ongoing waste management needs.
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
