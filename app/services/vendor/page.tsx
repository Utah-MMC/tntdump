import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vendor & Contractor Dumpster Service | TNT Dumpsters',
  description:
    'Vendor and contractor dumpster service for job sites, events, and recurring hauling in Utah. Reliable scheduling and clear pricing from TNT Dumpsters.',
  alternates: { canonical: 'https://tntdump.com/services/vendor' },
}

export default function VendorServicePage() {
  const features = [
    'Contractor waste management',
    'Construction site cleanup',
    'Vendor event waste disposal',
    'Trade show and exhibition cleanup',
    'Vendor facility maintenance',
    'Supplier waste management',
    'Vendor partnership programs',
    'Custom vendor solutions'
  ]

  const vendorTypes = [
    {
      type: 'Contractors',
      description: 'Construction and renovation waste management',
      icon: 'ðŸ”¨'
    },
    {
      type: 'Event Vendors',
      description: 'Trade shows, festivals, and event cleanup',
      icon: 'ðŸŽª'
    },
    {
      type: 'Suppliers',
      description: 'Manufacturing and distribution waste',
      icon: 'ðŸ“¦'
    },
    {
      type: 'Service Providers',
      description: 'Maintenance and service company waste',
      icon: 'ðŸ”§'
    }
  ]

  const benefits = [
    'Flexible scheduling to match your operations',
    'Competitive vendor partnership rates',
    'Reliable service for your business needs',
    'Custom waste management solutions',
    'Regular pickup schedules available',
    'Dedicated vendor support team',
    'Volume discounts for frequent service',
    'Easy billing and payment options'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Vendor Dumpster Rental Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We offer a hassle-free solution for vendors needing waste management for their operations. If you're looking for reliable services, we deliver and pick up the dumpster according to your schedule, providing a seamless service experience.
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
                Get Vendor Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/vendor-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Vendor Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you offer contractor pricing?</summary>
              <div className="mt-2">Yes—call for vendor rates and recurring schedules.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you coordinate with subs?</summary>
              <div className="mt-2">We'll align deliveries and swaps with your project plan.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Where can I check costs?</summary>
              <div className="mt-2">See the homepage <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> and call for a firm quote.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Do you offer contractor pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—call for vendor rates and recurring schedules.' } },
            { '@type': 'Question', name: 'Can you coordinate with subs?', acceptedAnswer: { '@type': 'Answer', text: 'We align deliveries and swaps with your project plan.' } },
            { '@type': 'Question', name: 'Where can I check costs?', acceptedAnswer: { '@type': 'Answer', text: 'See the homepage pricing section and call for a firm quote.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/vendor-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Vendor dumpster rental service for vendors and contractors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vendor Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All Types of Vendors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide specialized waste management solutions for vendors across various industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorTypes.map((vendor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{vendor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.type}</h3>
                <p className="text-gray-600">{vendor.description}</p>
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
              Vendor Waste Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive waste management services tailored to vendor operations and business needs.
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Vendor Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              Your Trusted Vendor Partner
            </h2>
            <p className="text-xl text-blue-100">
              Reliable waste management solutions for your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership Focus</h3>
              <p className="text-blue-100">Built for vendor relationships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-blue-100">Vendor-specific account management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Service</h3>
              <p className="text-blue-100">Scheduled to match your operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-blue-100">Consistent delivery and pickup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Partner with TNT Dumpsters?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free vendor quote and discover how we can provide reliable waste management for your business operations.
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
                Get Vendor Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


