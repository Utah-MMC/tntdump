import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, Wrench, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kitchen Remodel Dumpster Rental | TNT Dumpsters | Utah',
  description: 'Kitchen remodel dumpster rental in Utah for cabinets, countertops, and demo debris. Fast delivery and clear pricing—call (801) 209-9013.',
  keywords: 'kitchen remodel dumpster, kitchen renovation dumpster, cabinet disposal, countertop removal, kitchen remodel waste, utah dumpster rental',
}

export default function KitchenRemodelDumpsterPage() {
  const features = [
    'Perfect for kitchen cabinet removal',
    'Countertop and tile disposal',
    'Appliance removal and disposal',
    'Kitchen demolition debris',
    'Flooring and subfloor removal',
    'Drywall and insulation disposal',
    'Plumbing fixture removal',
    'Complete kitchen renovation cleanup'
  ]

  const materials = [
    {
      type: 'Cabinets & Countertops',
      description: 'Old cabinets, countertops, and hardware disposal',
      icon: '🏠'
    },
    {
      type: 'Appliances',
      description: 'Refrigerators, stoves, dishwashers, and more',
      icon: '🔌'
    },
    {
      type: 'Flooring',
      description: 'Tile, hardwood, laminate, and subfloor removal',
      icon: '🧱'
    },
    {
      type: 'Demolition Debris',
      description: 'Drywall, insulation, and construction materials',
      icon: '🔨'
    }
  ]

  const services = [
    'Right-sized dumpsters for kitchen remodels',
    'Same-day delivery available',
    'Flexible rental periods',
    'Proper disposal of all materials',
    'Driveway placement available',
    'Competitive pricing',
    'No hidden fees',
    'Professional service'
  ]

  const benefits = [
    'Convenient on-site waste disposal',
    'Keep your project moving smoothly',
    'Proper disposal of all kitchen materials',
    'Save time with one container for all debris',
    'Professional service and support',
    'Flexible scheduling to fit your timeline',
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
              Kitchen Remodel Dumpster Rental
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Perfect dumpster rental for your kitchen remodel project. Handle cabinets, countertops, appliances, and all renovation debris in one convenient container. Same-day delivery available throughout Utah.
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Kitchen Remodel Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What size dumpster do I need for a kitchen remodel?</summary>
              <div className="mt-2">Most kitchen remodels use 15–20 yard dumpsters. Full gut remodels may need 30 yards. We'll help you choose the right size based on your project scope.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you deliver to my driveway?</summary>
              <div className="mt-2">Yes—we can place dumpsters on driveways with protective boards. We'll assess access and placement during scheduling.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What kitchen materials can I dispose of?</summary>
              <div className="mt-2">Cabinets, countertops, appliances, flooring, drywall, insulation, and most construction debris. No hazardous materials like paint, chemicals, or batteries.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How quickly can I get a dumpster?</summary>
              <div className="mt-2">Same-day delivery available in most areas. Call (801) 209-9013 to check availability for your location.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do I get a quote?</summary>
              <div className="mt-2">Call (801) 209-9013 or <a href="/quote" className="text-blue-600 hover:underline">request a free quote online</a>. We'll provide transparent pricing based on size and location.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What size dumpster do I need for a kitchen remodel?', acceptedAnswer: { '@type': 'Answer', text: 'Most kitchen remodels use 15–20 yard dumpsters. Full gut remodels may need 30 yards. We will help you choose the right size based on your project scope.' } },
            { '@type': 'Question', name: 'Can you deliver to my driveway?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—we can place dumpsters on driveways with protective boards. We will assess access and placement during scheduling.' } },
            { '@type': 'Question', name: 'What kitchen materials can I dispose of?', acceptedAnswer: { '@type': 'Answer', text: 'Cabinets, countertops, appliances, flooring, drywall, insulation, and most construction debris. No hazardous materials like paint, chemicals, or batteries.' } },
            { '@type': 'Question', name: 'How quickly can I get a dumpster?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day delivery available in most areas. Call (801) 209-9013 to check availability for your location.' } },
            { '@type': 'Question', name: 'How do I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call (801) 209-9013 or request a free quote online. We will provide transparent pricing based on size and location.' } }
          ]
        }) }}
      />

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Kitchen remodel dumpster rental for renovation projects"
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
              Kitchen Remodel Materials We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dumpsters are perfect for disposing of all types of kitchen renovation materials and debris.
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
              Complete Kitchen Remodel Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our kitchen remodel dumpster rental service handles every aspect of your renovation waste disposal.
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
              Why Choose Our Kitchen Remodel Dumpster Service?
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
              Benefits of Kitchen Remodel Dumpster Rental
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
              Professional Kitchen Remodel Dumpster Service
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by homeowners and contractors throughout Utah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Right Size</h3>
              <p className="text-blue-100">Perfect dumpster size for your kitchen project</p>
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
              <h3 className="text-xl font-bold mb-2">Driveway Placement</h3>
              <p className="text-blue-100">Convenient placement on your driveway</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-blue-100">Professional guidance throughout your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Kitchen Remodel?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the right dumpster for your kitchen renovation project. Same-day delivery available. Call us today for a free quote.
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

