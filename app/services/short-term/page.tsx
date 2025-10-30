import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Calendar } from 'lucide-react'

export default function ShortTermServicePage() {
  const features = [
    'Home renovation projects',
    'One-time cleanout events',
    'Seasonal yard cleanup',
    'Moving and relocation',
    'Event cleanup and preparation',
    'Small construction projects',
    'Garage and storage cleanouts',
    'Estate and property preparation'
  ]

  const projectTypes = [
    {
      type: 'Home Renovations',
      description: 'Kitchen, bathroom, and room remodeling projects',
      duration: '1-7 days',
      icon: 'ðŸ '
    },
    {
      type: 'Cleanouts',
      description: 'Garage, basement, and storage area cleanouts',
      duration: '1-3 days',
      icon: 'ðŸ§¹'
    },
    {
      type: 'Moving',
      description: 'Relocation and moving preparation',
      duration: '1-5 days',
      icon: 'ðŸ“¦'
    },
    {
      type: 'Events',
      description: 'Party cleanup and event preparation',
      duration: '1-2 days',
      icon: 'ðŸŽ‰'
    }
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Ideal for medium-sized projects',
      capacity: '5-6 pickup truck loads',
      dimensions: '12\' x 8\' x 6\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '20 Yard',
      description: 'Great for larger projects and cleanouts',
      capacity: '7-8 pickup truck loads',
      dimensions: '17.08\' x 7.54\' x 5.00\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '30 Yard',
      description: 'Perfect for major projects with quick turnarounds',
      capacity: '10-12 pickup truck loads',
      dimensions: '18.25\' x 7.25\' x 6.63\'',
      duration: '1-7 days',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    }
  ]

  const benefits = [
    'Flexible rental periods from 1-7 days',
    'Quick delivery and pickup scheduling',
    'No long-term commitment required',
    'Perfect for one-time projects',
    'Competitive short-term pricing',
    'Same-day delivery available in most areas'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Short-Term Dumpster Rental Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Perfect for projects with a defined timeline. Whether you're undertaking a home renovation or organizing a one-off event, our short-term dumpster service provides flexible and convenient waste management.
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
                Get Short-Term Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/short-term-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Short-Term Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can I get quick delivery?</summary>
              <div className="mt-2">Often yesâ€”see <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a>.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What about weekend projects?</summary>
              <div className="mt-2">We'll align drop-off and pickup to your schedule when routes allow.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How are prices set?</summary>
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
            { '@type': 'Question', name: 'Can I get quick delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Often yesâ€”same-day may be available depending on routes.' } },
            { '@type': 'Question', name: 'What about weekend projects?', acceptedAnswer: { '@type': 'Answer', text: 'We align drop-off and pickup to your schedule when routes allow.' } },
            { '@type': 'Question', name: 'How are prices set?', acceptedAnswer: { '@type': 'Answer', text: 'By size, tonnage, and time. Review the homepage pricing section for details.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/short-term-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Short-term dumpster rental for temporary projects"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Short-Term Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our short-term dumpster service is perfect for projects with a defined timeline. Whether you're undertaking a home renovation or organizing a one-off event, our short-term dumpster service provides flexible and convenient waste management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.type}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-blue-600 font-semibold">Typical Duration: {project.duration}</p>
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
              Short-Term Project Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide flexible short-term dumpster rentals for a wide range of temporary projects and events.
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
              Short-Term Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect size for your short-term project with flexible rental periods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-4">{size.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                  <p><strong>Rental Period:</strong> {size.duration}</p>
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
              Why Choose Short-Term Rental?
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
              Fast & Flexible Short-Term Service
            </h2>
            <p className="text-xl text-blue-100">
              Quick delivery, flexible scheduling, no long-term commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Duration</h3>
              <p className="text-blue-100">1-7 day rental periods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
              <p className="text-blue-100">Same-day delivery available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Pickup</h3>
              <p className="text-blue-100">Scheduled pickup when you're done</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Commitment</h3>
              <p className="text-blue-100">Perfect for one-time projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready for Your Short-Term Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free quote for your short-term dumpster rental and start your project today.
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
                Get Short-Term Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

