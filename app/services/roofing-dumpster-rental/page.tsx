import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, Home, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Rental | TNT Dumpsters | Utah',
  description: 'Roofing dumpster rental for shingle removal, roof tear-off, and roofing debris disposal in Utah. Heavy-duty dumpsters for roofing projects. Same-day delivery. Call (801) 209-9013.',
  keywords: 'roofing dumpster, roof tear-off dumpster, shingle disposal, roofing debris removal, roof replacement dumpster, utah dumpster rental',
}

export default function RoofingDumpsterRentalPage() {
  const features = [
    'Heavy-duty dumpsters for roofing materials',
    'Shingle and tile disposal',
    'Roofing felt and underlayment removal',
    'Gutter and flashing disposal',
    'Wood decking and sheathing removal',
    'Nails and metal debris collection',
    'Complete roof tear-off cleanup',
    'Large capacity for full roof projects'
  ]

  const materials = [
    {
      type: 'Asphalt Shingles',
      description: 'Old shingles, tiles, and roofing materials',
      icon: '🏠'
    },
    {
      type: 'Wood Decking',
      description: 'Damaged sheathing and decking boards',
      icon: '🪵'
    },
    {
      type: 'Metal Components',
      description: 'Gutters, flashing, and metal roofing',
      icon: '🔩'
    },
    {
      type: 'Roofing Felt',
      description: 'Underlayment and waterproofing materials',
      icon: '📦'
    }
  ]

  const services = [
    '30-40 yard dumpsters for large roofing projects',
    'Heavy-duty containers for roofing materials',
    'Same-day delivery available',
    'Flexible rental periods',
    'Proper disposal of all roofing debris',
    'Driveway or job site placement',
    'Competitive pricing',
    'Professional roofing project support'
  ]

  const benefits = [
    'Keep your job site clean and safe',
    'Proper disposal of heavy roofing materials',
    'Large capacity for full roof projects',
    'Heavy-duty containers built for roofing debris',
    'Flexible scheduling to match your timeline',
    'Professional service and support',
    'Competitive pricing with no hidden fees',
    'Local Utah service you can trust'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Roofing Dumpster Rental
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Heavy-duty dumpster rental for roofing projects. Perfect for roof tear-off, shingle removal, and all roofing debris disposal. Large capacity containers for full roof replacements throughout Utah.
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Roofing Dumpster Rental FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What size dumpster do I need for a roof replacement?</summary>
              <div className="mt-2">Most residential roofs need 30–40 yard dumpsters. Commercial roofs may require multiple containers. We'll help you determine the right size based on your roof square footage.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you place a dumpster on my driveway?</summary>
              <div className="mt-2">Yes—we can place dumpsters on driveways with protective boards. We'll assess access and ensure safe placement during scheduling.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What roofing materials can I dispose of?</summary>
              <div className="mt-2">Shingles, tiles, wood decking, roofing felt, gutters, flashing, and all roofing debris. No hazardous materials like asbestos or chemicals.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How heavy are roofing materials?</summary>
              <div className="mt-2">Roofing materials are heavy—a typical roof can produce 2–4 tons of debris. Our 30–40 yard dumpsters handle heavy loads with proper weight limits.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How quickly can I get a roofing dumpster?</summary>
              <div className="mt-2">Same-day delivery available in most areas. Call (801) 209-9013 to check availability and schedule delivery for your roofing project.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do I get a quote?</summary>
              <div className="mt-2">Call (801) 209-9013 or <a href="/quote" className="text-blue-600 hover:underline">request a free quote online</a>. We'll provide transparent pricing based on size, weight, and location.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What size dumpster do I need for a roof replacement?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential roofs need 30–40 yard dumpsters. Commercial roofs may require multiple containers. We will help you determine the right size based on your roof square footage.' } },
            { '@type': 'Question', name: 'Can you place a dumpster on my driveway?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—we can place dumpsters on driveways with protective boards. We will assess access and ensure safe placement during scheduling.' } },
            { '@type': 'Question', name: 'What roofing materials can I dispose of?', acceptedAnswer: { '@type': 'Answer', text: 'Shingles, tiles, wood decking, roofing felt, gutters, flashing, and all roofing debris. No hazardous materials like asbestos or chemicals.' } },
            { '@type': 'Question', name: 'How heavy are roofing materials?', acceptedAnswer: { '@type': 'Answer', text: 'Roofing materials are heavy—a typical roof can produce 2–4 tons of debris. Our 30–40 yard dumpsters handle heavy loads with proper weight limits.' } },
            { '@type': 'Question', name: 'How quickly can I get a roofing dumpster?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day delivery available in most areas. Call (801) 209-9013 to check availability and schedule delivery for your roofing project.' } },
            { '@type': 'Question', name: 'How do I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call (801) 209-9013 or request a free quote online. We will provide transparent pricing based on size, weight, and location.' } }
          ]
        }) }}
      />

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Roofing dumpster rental for roof tear-off and shingle disposal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Roofing Materials We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our heavy-duty dumpsters are designed to handle all types of roofing materials and debris from your roof replacement project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{material.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{material.type}</h3>
                <p className="text-gray-600">{material.description}</p>
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
              Complete Roofing Dumpster Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our roofing dumpster rental service provides everything you need for efficient roof project waste disposal.
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
              Why Choose Our Roofing Dumpster Service?
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
              Benefits of Roofing Dumpster Rental
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
              Professional Roofing Dumpster Service
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by roofing contractors and homeowners throughout Utah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heavy-Duty</h3>
              <p className="text-blue-100">Built to handle heavy roofing materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day delivery available in most areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Large Capacity</h3>
              <p className="text-blue-100">30–40 yard dumpsters for full roof projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-blue-100">Professional guidance for your roofing project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready for Your Roofing Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the right dumpster for your roof replacement or repair project. Heavy-duty containers with large capacity. Same-day delivery available. Call us today for a free quote.
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

