import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Can and Cannot Go in a Dumpster Rental | TNT Dumpsters',
  description: 'Understand prohibited items in dumpster rentals and the right way to dispose of household chemicals, electronics, tires, and other restricted materials.',
  keywords: 'dumpster prohibited items, what cannot go in dumpster, hazardous waste disposal, dumpster rules',
}

export default function DumpsterProhibitedItemsPage() {
  const prohibited = [
    'Liquids, paints, oils, and household chemicals',
    'Batteries and electronics (Eâ€‘waste)',
    'Tires, propane tanks, and fuel containers',
    'Asbestos and other hazardous materials',
    'Refrigerants without proper certification',
  ]

  const allowedWithLimits = [
    'Dirt, concrete, and brick (weight limits apply)',
    'Appliances without refrigerants',
    'Mattresses and furniture (fees may apply in some areas)',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Waste Management</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Can and Cannot Go in a Dumpster Rental</h1>
            <p className="text-xl text-gray-600 mb-8">Knowing the rules keeps your project safe and avoids extra fees. Hereâ€™s a quick guide and where to take restricted items.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 10, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>4 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster3-500x500-1.jpeg" alt="Dumpster with sorted materials and safety signage" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Items</h2>
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {prohibited.map((item, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Allowed With Restrictions</h3>
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {allowedWithLimits.map((item, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Take Restricted Items</h3>
              <p className="text-lg text-gray-700">Local household hazardous waste facilities and eâ€‘waste recyclers can properly handle restricted materials. Call us if you are unsureâ€”weâ€™ll point you in the right direction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions About an Item?</h2>
            <p className="text-blue-100 mb-8">Weâ€™ll help you determine whatâ€™s allowed and the best disposal option.</p>
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



