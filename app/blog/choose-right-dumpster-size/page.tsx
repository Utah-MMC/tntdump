import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose the Right Dumpster Size for Your Project | T&T Dumpsters',
  description: 'Learn how to select the perfect dumpster size for your home renovation, construction project, or cleanout. Our comprehensive guide covers all dumpster sizes and their best uses.',
  keywords: 'dumpster size guide, choose dumpster size, dumpster rental planning, project dumpster size, waste management planning',
}

export default function ChooseRightDumpsterSizePage() {
  const dumpsterSizes = [
    {
      size: '10 Yard',
      dimensions: '12\' x 8\' x 4\'',
      capacity: '3-4 pickup truck loads',
      bestFor: [
        'Small bathroom renovations',
        'Kitchen cabinet removal',
        'Single room cleanouts',
        'Small landscaping projects',
        'Garage organization'
      ],
      price: 'Starting at $299'
    },
    {
      size: '15 Yard',
      dimensions: '12\' x 8\' x 6\'',
      capacity: '5-6 pickup truck loads',
      bestFor: [
        'Medium bathroom renovations',
        'Small kitchen remodels',
        'Basement cleanouts',
        'Roofing projects (single story)',
        'Deck removal'
      ],
      price: 'Starting at $399'
    },
    {
      size: '20 Yard',
      dimensions: '22\' x 8\' x 6\'',
      capacity: '7-8 pickup truck loads',
      bestFor: [
        'Large kitchen renovations',
        'Whole house cleanouts',
        'Multi-room projects',
        'Roofing projects (two story)',
        'Large landscaping projects'
      ],
      price: 'Starting at $499'
    },
    {
      size: '30 Yard',
      dimensions: '22\' x 8\' x 8\'',
      capacity: '10-12 pickup truck loads',
      bestFor: [
        'Major home renovations',
        'Whole house remodeling',
        'Large construction projects',
        'Commercial cleanouts',
        'Estate cleanouts'
      ],
      price: 'Starting at $699'
    }
  ]

  const tips = [
    'Measure your project area to estimate waste volume',
    'Consider the weight of materials (concrete, brick, etc.)',
    'Plan for 10-20% more capacity than estimated',
    'Check local regulations for placement requirements',
    'Consider access routes for delivery and pickup'
  ]

  return (
    <main className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Project Planning
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Choose the Right Dumpster Size for Your Project
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Selecting the correct dumpster size is crucial for project success. Our comprehensive guide helps you make the right choice for your specific needs.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>T&T Dumpsters Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpster500x500-2.jpeg"
                alt="Different dumpster sizes for various projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Dumpster Sizes
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Choosing the right dumpster size is one of the most important decisions you'll make for your project. 
                Too small, and you'll need multiple rentals or face overflow issues. Too large, and you're paying 
                for unused capacity. Our guide helps you make the perfect choice.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dumpster Size Comparison
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {dumpsterSizes.map((dumpster, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-600 mb-3">{dumpster.size}</h4>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><strong>Dimensions:</strong> {dumpster.dimensions}</p>
                      <p><strong>Capacity:</strong> {dumpster.capacity}</p>
                      <p><strong>Price:</strong> {dumpster.price}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Best for:</p>
                      <ul className="space-y-1">
                        {dumpster.bestFor.map((use, useIndex) => (
                          <li key={useIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Planning Tips for Success
              </h3>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold text-blue-900 mb-4">Essential Planning Tips</h4>
                <ul className="space-y-2">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Common Project Examples
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Kitchen Renovation</h4>
                  <p className="text-gray-700">
                    A typical kitchen renovation generates 2-4 tons of waste. A 15-20 yard dumpster is usually 
                    perfect for cabinets, countertops, flooring, and drywall.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Bathroom Remodel</h4>
                  <p className="text-gray-700">
                    Bathroom projects typically need a 10-15 yard dumpster for fixtures, tile, drywall, 
                    and plumbing materials.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Whole House Cleanout</h4>
                  <p className="text-gray-700">
                    Estate cleanouts and whole house projects often require a 20-30 yard dumpster to handle 
                    furniture, appliances, and accumulated belongings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing the Right Size?
            </h2>
            <p className="text-blue-100 mb-8">
              Our experienced team can help you select the perfect dumpster size for your project. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8012099013" 
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <a 
                href="/quote" 
                className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
