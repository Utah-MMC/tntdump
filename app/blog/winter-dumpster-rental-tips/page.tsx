import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Winter Dumpster Rental: Tips for Cold Weather Projects | T&T Dumpsters',
  description: 'Plan successful winter projects with these dumpster rental tips: placement, scheduling, safety, and how to prevent frozen loads and extra weight.',
  keywords: 'winter dumpster tips, cold weather dumpster rental, winter construction waste, frozen dumpster load prevention',
}

export default function WinterDumpsterRentalTipsPage() {
  const tips = [
    'Place the container on cleared, salted ground',
    'Use a tarp to keep snow and ice out of the dumpster',
    'Schedule swaps earlier in the day to avoid storms',
    'Keep access routes open for trucks',
    'Wear proper PPE and watch for slippery edges',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Seasonal Tips</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Winter Dumpster Rental: Tips for Cold Weather Projects</h1>
            <p className="text-xl text-gray-600 mb-8">Cold weather adds unique challenges to waste removal. These tips help you avoid delays, safety hazards, and unexpected fees.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>T&T Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>December 20, 2024</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster3-500x500-1.jpeg" alt="Dumpster in snowy conditions during winter project" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevent Weather Delays</h2>
              <p className="text-lg text-gray-700 mb-6">Confirm pickup windows around incoming storms and keep the lid or tarp secure to reduce added weight from snow and rain.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {tips.map((t, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{t}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-lg text-gray-700">Keep edges clear of ice and give yourself extra room when loading heavy items to avoid slips.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay On Schedule This Winter</h2>
            <p className="text-blue-100 mb-8">We deliver safely in winter conditions and coordinate swaps around storms.</p>
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


