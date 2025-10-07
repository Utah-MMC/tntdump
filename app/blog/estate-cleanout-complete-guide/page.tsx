import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout: A Complete Guide for Families | TNT Dumpsters',
  description: 'Step-by-step guidance for planning an estate cleanout with compassion and efficiency. Learn timelines, sorting strategies, and how dumpsters streamline the process.',
  keywords: 'estate cleanout guide, estate dumpster, home cleanout tips, bereavement cleanout help',
}

export default function EstateCleanoutCompleteGuidePage() {
  const steps = [
    'Set a realistic schedule and notify family members',
    'Sort items into keep, donate, sell, and discard',
    'Secure important documents and valuables first',
    'Use a mid-size dumpster for bulky, non-donatable items',
    'Plan a final walkthrough before pickup',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Estate Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Estate Cleanout: A Complete Guide for Families</h1>
            <p className="text-xl text-gray-600 mb-8">A thoughtful plan reduces stress and keeps the process organized. This guide walks through each step with practical advice.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 5, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Estate cleanout with organized boxes and a dumpster" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Compassionate, Organized Approach</h2>
              <p className="text-lg text-gray-700 mb-6">Start with high-value paperwork and keepsakes, then work room by room. Take photos of heirlooms and document donations to simplify decisions and taxes.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Steps</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {steps.map((s, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dumpster Tips</h3>
              <p className="text-lg text-gray-700">A 15â€“20 yard container fits most estate projects. Keep donation items separate, and load heavy items first to distribute weight.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with an Estate Cleanout?</h2>
            <p className="text-blue-100 mb-8">We provide timely delivery and careful placement to make the process easier.</p>
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



