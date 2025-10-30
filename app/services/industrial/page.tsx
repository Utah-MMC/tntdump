import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Shield, Zap } from 'lucide-react'

export default function IndustrialServicePage() {
  const features = [
    'Manufacturing waste and production debris',
    'Construction and demolition projects',
    'Heavy machinery and equipment disposal',
    'Industrial facility cleanouts',
    'Large-scale renovation projects',
    'Plant shutdown and maintenance waste',
    'Hazardous material handling (with proper permits)',
    'Emergency cleanup and disaster response'
  ]

  const industries = [
    {
      industry: 'Manufacturing',
      description: 'Production waste, equipment disposal, facility maintenance',
      icon: 'ðŸ­'
    },
    {
      industry: 'Construction',
      description: 'Large-scale demolition, building materials, heavy debris',
      icon: 'ðŸ—ï¸'
    },
    {
      industry: 'Mining',
      description: 'Industrial equipment, facility waste, maintenance debris',
      icon: 'â›ï¸'
    },
    {
      industry: 'Energy',
      description: 'Power plant maintenance, equipment disposal, facility cleanouts',
      icon: 'âš¡'
    }
  ]

  const sizes = [
    {
      size: '20 Yard',
      description: 'Small industrial projects and maintenance',
      capacity: '7-8 pickup truck loads',
      dimensions: '17.08\' x 7.54\' x 5.00\'',
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '30 Yard',
      description: 'Medium industrial operations',
      capacity: '10-12 pickup truck loads',
      dimensions: '18.25\' x 7.25\' x 6.63\'',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: 'Custom',
      description: 'Specialized industrial solutions',
      capacity: 'Custom sizing available',
      dimensions: 'Tailored to your needs',
      pricing: [
        { label: 'Contact', value: 'Call for pricing' }
      ]
    }
  ]

  const capabilities = [
    'Heavy-duty equipment for industrial waste handling',
    'Specialized permits for hazardous material disposal',
    '24/7 emergency response capabilities',
    'Compliance with industrial waste regulations',
    'Custom waste management solutions',
    'Documentation and reporting for regulatory compliance',
    'Volume discounts for large-scale operations',
    'Dedicated project management for complex jobs'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Industrial Dumpster Rental Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Heavy-duty waste disposal solutions for industrial operations. Our industrial dumpster service is designed to handle the toughest waste management challenges with professional expertise and regulatory compliance.
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
                Get Industrial Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/industrial-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Industrial Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you handle heavy materials?</summary>
              <div className="mt-2">Yes—concrete, masonry, and mixed construction debris with proper weight guidance.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you coordinate swaps?</summary>
              <div className="mt-2">We schedule swaps and pickups to maintain uptime on busy sites.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How is pricing set?</summary>
              <div className="mt-2">By size, tonnage, and time. See <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a>.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Do you handle heavy materials?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we handle concrete, masonry, and mixed construction debris with proper weight guidance.' } },
            { '@type': 'Question', name: 'Can you coordinate swaps?', acceptedAnswer: { '@type': 'Answer', text: 'We schedule swaps and pickups to maintain uptime on busy sites.' } },
            { '@type': 'Question', name: 'How is pricing set?', acceptedAnswer: { '@type': 'Answer', text: 'By size, tonnage, and time. See the pricing section on the homepage.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/industrial-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Industrial dumpster rental service for heavy-duty operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving Industrial Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our industrial dumpster service is designed to handle the heavy-duty waste disposal needs of industrial operations. With our industrial dumpster service, you can focus on your operations while we take care of your waste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.industry}</h3>
                <p className="text-gray-600">{industry.description}</p>
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
              Industrial Waste Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We handle the most challenging industrial waste management needs with specialized equipment and expertise.
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

      {/* Dumpster Sizes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industrial Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heavy-duty dumpsters designed for industrial operations with custom solutions available for specialized needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-4">{size.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                </div>
                {(size as any).pricing && (
                  <div className="mt-2 text-left inline-block">
                    <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Pricing</p>
                    <ul className="text-sm text-gray-700">
                      {(size as any).pricing.map((p: any, i: number) => (
                        <li key={i} className="flex items-center justify-between gap-3 py-1">
                          <span className="font-medium">{p.label}</span>
                          <span className="font-bold text-green-600">{p.value}</span>
                        </li>
                      ))}
                    </ul>
                    {(size as any).pricing.some((p: any) => p.note) && (
                      <p className="text-xs text-gray-500 mt-2 text-center">Notes: {(size as any).pricing.filter((p: any) => p.note).map((p: any) => `${p.label} ${p.note}`).join(' Â· ')}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Industrial Service Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{capability}</p>
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
              Industrial-Grade Service
            </h2>
            <p className="text-xl text-blue-100">
              Built for heavy-duty operations and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compliance Focused</h3>
              <p className="text-blue-100">Full regulatory compliance and documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
              <p className="text-blue-100">24/7 availability for urgent situations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heavy Equipment</h3>
              <p className="text-blue-100">Specialized equipment for industrial waste</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Project Management</h3>
              <p className="text-blue-100">Dedicated support for complex operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Handle Your Industrial Waste Management?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free industrial quote and discover how TNT Dumpsters can provide reliable, compliant waste management for your operations.
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
                Get Industrial Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

