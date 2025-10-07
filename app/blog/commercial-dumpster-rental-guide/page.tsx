import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental Guide | TNT Dumpsters',
  description: 'Everything businesses need to know about commercial dumpster rentals: container sizes, scheduling, compliance, and cost control for offices, retail, and construction.',
  keywords: 'commercial dumpster rental, business waste service, roll-off dumpsters for business, commercial trash solutions',
}

export default function CommercialDumpsterRentalGuidePage() {
  const points = [
    'Match service frequency to production schedule',
    'Designate a safe delivery area with clear access',
    'Understand weight limits and overage fees',
    'Keep prohibited items out to avoid contamination fees',
    'Set a single point of contact for scheduling swaps',
  ]

  return (
    <main className="min-h-screen">
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Commercial Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Commercial Dumpster Rental: What Businesses Need to Know</h1>
            <p className="text-xl text-gray-600 mb-8">From small retail stores to large facilities, this guide explains how to choose the right dumpster, schedule service, and stay compliant.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>December 28, 2024</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster500x500-2.jpeg" alt="Commercial property with roll-off dumpster" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Container</h2>
              <p className="text-lg text-gray-700 mb-6">Most businesses do well with 10â€“20 yard containers for regular cleanouts. Construction sites or warehouse projects may need 30 yard containers for bulky items.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{p}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Placement</h3>
              <p className="text-lg text-gray-700">Ensure access for trucks, protect pavement where necessary, and verify city or property management placement rules before delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Set Up Reliable Service</h2>
            <p className="text-blue-100 mb-8">We offer responsive swaps and flexible terms for commercial customers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8012099013" className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">Call (801) 209-9013</a>
              <a href="/quote" className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



