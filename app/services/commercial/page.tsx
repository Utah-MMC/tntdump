import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Building } from 'lucide-react'

export default function CommercialServicePage() {
  const features = [
    'Office renovations and remodeling',
    'Retail store cleanouts and updates',
    'Restaurant and food service waste',
    'Warehouse and storage facility cleanouts',
    'Business relocation and moving',
    'Construction and demolition projects',
    'Seasonal business cleanup',
    'Event and conference cleanup'
  ]

  const businessTypes = [
    {
      type: 'Office Buildings',
      description: 'Professional office renovations and cleanouts',
      icon: 'ðŸ¢'
    },
    {
      type: 'Retail Stores',
      description: 'Store updates, renovations, and inventory disposal',
      icon: 'ðŸ›ï¸'
    },
    {
      type: 'Restaurants',
      description: 'Kitchen renovations and food service waste',
      icon: 'ðŸ½ï¸'
    },
    {
      type: 'Warehouses',
      description: 'Large-scale cleanouts and facility maintenance',
      icon: 'ðŸ­'
    }
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Perfect for small office cleanouts',
      capacity: '5-6 pickup truck loads',
      dimensions: '12\' x 8\' x 6\'',
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '20 Yard',
      description: 'Ideal for retail store renovations',
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
      description: 'Great for restaurant renovations',
      capacity: '10-12 pickup truck loads',
      dimensions: '18.25\' x 7.25\' x 6.63\'',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    }
  ]

  const benefits = [
    'Flexible scheduling to minimize business disruption',
    'Competitive commercial pricing and volume discounts',
    'Compliance with local business waste regulations',
    'Professional service with detailed documentation',
    'Same-day delivery and pickup available',
    'Dedicated account management for regular customers'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Dumpster Rental Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive waste management solutions for businesses of all sizes. Professional service, competitive pricing, and flexible scheduling to keep your business running smoothly.
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
                Get Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/commercial-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Commercial Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you support build-outs and remodels?</summary>
              <div className="mt-2">Yes—reliable swaps and job site placement. See <a href="/#contractors" className="text-blue-600 hover:underline">contractor notes</a>.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do quotes work?</summary>
              <div className="mt-2">We confirm size, tonnage, and timing up front. Review <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a>.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you offer rush delivery?</summary>
              <div className="mt-2">When routes allow, we can offer quick delivery in Salt Lake & Utah County.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Can you support build-outs and remodels?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—reliable swaps and job site placement. See contractor notes on the homepage.' } },
            { '@type': 'Question', name: 'How do quotes work?', acceptedAnswer: { '@type': 'Answer', text: 'We confirm size, tonnage, and timing up front. Review the dumpster rental cost section on the homepage.' } },
            { '@type': 'Question', name: 'Do you offer rush delivery?', acceptedAnswer: { '@type': 'Answer', text: 'When routes allow, quick delivery is available in Salt Lake & Utah County.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/commercial-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster3-500x500-1.jpeg"
              alt="Commercial dumpster rental service for businesses"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All Types of Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TNT Dumpsters offers comprehensive commercial dumpster service. Ideal for businesses of all sizes, our commercial dumpster service ensures that your business remains clean and compliant with waste disposal regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{business.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{business.type}</h3>
                <p className="text-gray-600">{business.description}</p>
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
              Commercial Project Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commercial dumpster service handles a wide range of business waste management needs with professional efficiency.
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
              Commercial Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of commercial dumpster sizes designed to handle business waste efficiently and cost-effectively.
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Why Choose TNT Dumpsters for Your Business?
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
              Professional Commercial Service
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by Utah businesses for over 55 years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Focused</h3>
              <p className="text-blue-100">Designed specifically for commercial needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-blue-100">Work around your business hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-blue-100">Consistent delivery and pickup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Account Management</h3>
              <p className="text-blue-100">Dedicated support for regular customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Streamline Your Business Waste Management?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free commercial quote and discover how TNT Dumpsters can help your business stay clean and compliant.
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
                Get Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

