import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Dumpster Rental Services | T&T Dumpsters',
  description: 'Professional short-term dumpster rental services in Utah. Quick delivery, flexible rental periods, and competitive pricing for temporary projects.',
  keywords: 'short-term dumpster rental, temporary dumpster rental, project dumpster rental, utah dumpster rental',
}

export default function ShortTermDumpsters() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Short-Term Dumpster Rental Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Professional short-term dumpster rental solutions for temporary projects and cleanouts.
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
