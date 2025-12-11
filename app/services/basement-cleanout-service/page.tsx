import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, Home, Box } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Basement Cleanout Service | TNT Dumpsters | Utah',
  description: 'Basement cleanout service in Utah. Complete basement cleanup and junk removal. Furniture, appliances, storage items, and debris disposal. Same-day service available. Call (801) 209-9013.',
  keywords: 'basement cleanout, basement cleanup, basement junk removal, basement decluttering, storage cleanout, utah dumpster rental',
}

export default function BasementCleanoutServicePage() {
  const features = [
    'Complete basement cleanout services',
    'Furniture and appliance removal',
    'Storage items and boxes disposal',
    'Old carpet and flooring removal',
    'Basement debris and junk cleanup',
    'Water damage cleanup materials',
    'Organizing and sorting services',
    'Complete basement preparation'
  ]

  const cleanoutTypes = [
    {
      type: 'Storage Cleanout',
      description: 'Remove old boxes, furniture, and stored items',
      icon: '📦'
    },
    {
      type: 'Furniture Removal',
      description: 'Dispose of old couches, tables, and furniture',
      icon: '🪑'
    },
    {
      type: 'Appliance Disposal',
      description: 'Remove old washers, dryers, and appliances',
      icon: '🔌'
    },
    {
      type: 'Debris Cleanup',
      description: 'Clear construction debris and junk',
      icon: '🗑️'
    }
  ]

  const services = [
    'Complete basement assessment and planning',
    'Sorting and organization of items',
    'Donation coordination for usable items',
    'Safe disposal of unwanted materials',
    'Basement cleaning and preparation',
    'Flexible scheduling to fit your needs',
    'Professional and respectful service',
    'Detailed documentation and reporting'
  ]

  const benefits = [
    'Reclaim valuable basement space',
    'Professional and efficient cleanup',
    'Proper disposal of all materials',
    'Donation coordination for reusable items',
    'Flexible scheduling to work around your timeline',
    'Complete service from start to finish',
    'Competitive pricing with transparent costs',
    'Local Utah service you can trust'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Basement Cleanout Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Complete basement cleanout service in Utah. Professional cleanup and junk removal for basements, storage areas, and below-grade spaces. Reclaim your basement space with our efficient cleanout service.
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

      {/* SEO FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Basement Cleanout Service FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What size dumpster do I need for a basement cleanout?</summary>
              <div className="mt-2">Most basement cleanouts use 15–20 yard dumpsters. Larger basements or full cleanouts may need 30 yards. We'll help you choose the right size based on your basement size and contents.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you place a dumpster on my driveway?</summary>
              <div className="mt-2">Yes—we can place dumpsters on driveways with protective boards. We'll assess access and ensure convenient placement during scheduling.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What items can you remove from my basement?</summary>
              <div className="mt-2">Furniture, appliances, boxes, storage items, carpet, flooring, construction debris, and most basement materials. We can coordinate donations for usable items.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you help sort items for donation?</summary>
              <div className="mt-2">Yes—we can help identify items suitable for donation and coordinate with local charities. This helps reduce disposal costs and benefits the community.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How quickly can you start a basement cleanout?</summary>
              <div className="mt-2">Same-day dumpster delivery available in most areas. Call (801) 209-9013 to schedule your basement cleanout project.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do I get a quote?</summary>
              <div className="mt-2">Call (801) 209-9013 or <a href="/quote" className="text-blue-600 hover:underline">request a free quote online</a>. We'll provide transparent pricing based on your basement size and contents.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What size dumpster do I need for a basement cleanout?', acceptedAnswer: { '@type': 'Answer', text: 'Most basement cleanouts use 15–20 yard dumpsters. Larger basements or full cleanouts may need 30 yards. We will help you choose the right size based on your basement size and contents.' } },
            { '@type': 'Question', name: 'Can you place a dumpster on my driveway?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—we can place dumpsters on driveways with protective boards. We will assess access and ensure convenient placement during scheduling.' } },
            { '@type': 'Question', name: 'What items can you remove from my basement?', acceptedAnswer: { '@type': 'Answer', text: 'Furniture, appliances, boxes, storage items, carpet, flooring, construction debris, and most basement materials. We can coordinate donations for usable items.' } },
            { '@type': 'Question', name: 'Do you help sort items for donation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—we can help identify items suitable for donation and coordinate with local charities. This helps reduce disposal costs and benefits the community.' } },
            { '@type': 'Question', name: 'How quickly can you start a basement cleanout?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day dumpster delivery available in most areas. Call (801) 209-9013 to schedule your basement cleanout project.' } },
            { '@type': 'Question', name: 'How do I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call (801) 209-9013 or request a free quote online. We will provide transparent pricing based on your basement size and contents.' } }
          ]
        }) }}
      />

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Basement cleanout service for storage and junk removal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cleanout Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Basement Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide complete basement cleanout services to help you reclaim your basement space efficiently and professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleanoutTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.type}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Basement Cleanout Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our basement cleanout service handles every aspect of basement cleanup and organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Our Basement Cleanout Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Benefits of Basement Cleanout Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Professional Basement Cleanout Service
            </h2>
            <p className="text-xl text-blue-100">
              Helping Utah homeowners reclaim their basement space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Service</h3>
              <p className="text-blue-100">Full basement cleanout from start to finish</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-blue-100">Same-day dumpster delivery available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Donation Help</h3>
              <p className="text-blue-100">Coordinate donations for usable items</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-blue-100">Professional guidance throughout the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Reclaim Your Basement Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get professional basement cleanout service. Complete cleanup and junk removal. Same-day service available. Call us today for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8012099013" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <a 
                href="/quote" 
                className="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors"
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

