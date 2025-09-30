import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Waste Management: Best Practices | T&T Dumpsters',
  description: 'Learn practical construction waste management strategies including segregation, recycling, safe disposal, and cost control for residential and commercial projects.',
  keywords: 'construction waste management, jobsite dumpsters, recycling construction debris, construction dumpster tips',
}

export default function ConstructionWasteManagementPage() {
  const bestPractices = [
    'Create a simple waste plan before work begins',
    'Stage materials to minimize off-cuts and waste',
    'Use separate containers for clean wood, metal, and concrete',
    'Keep tarps on dumpsters to prevent rainwater weight',
    'Schedule pickups around project milestones',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Construction</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Construction Waste Management: Best Practices</h1>
            <p className="text-xl text-gray-600 mb-8">Reduce costs, keep the site safe, and improve sustainability by planning how materials are handled, recycled, and disposed of from day one.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>T&T Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>December 15, 2024</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>8 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Construction site with dumpster for debris management" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Waste Streams</h2>
              <p className="text-lg text-gray-700 mb-6">Start with a simple plan that identifies the main material streams on your job: clean wood, drywall, metal, concrete, and mixed debris. Label areas on-site and communicate the plan during the kickoff.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jobsite Best Practices</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {bestPractices.map((tip, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{tip}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recycling Opportunities</h3>
              <p className="text-lg text-gray-700 mb-6">Concrete, metal, and clean cardboard are commonly recyclable. Keeping these materials separate reduces disposal fees and supports sustainability goals.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Right-Size Your Dumpster</h3>
              <p className="text-lg text-gray-700">Choose a container size that matches your production schedule. For phased work, multiple smaller swaps often cost less than overflowing a single large bin.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Construction Dumpster?</h2>
            <p className="text-blue-100 mb-8">We offer flexible swaps and clear recycling options for contractors and homeowners.</p>
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


