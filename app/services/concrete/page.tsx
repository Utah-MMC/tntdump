import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Shield, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Dumpster Rental | Heavy Debris Disposal | TNT Dumpsters',
  description:
    'Concrete dumpster rental for driveways, patios, brick, and masonry in Utah. Heavy-debris disposal with clear pricing—call (801) 209-9013.',
  alternates: { canonical: 'https://tntdump.com/services/concrete' },
}

export default function ConcreteServicePage() {
  const features = [
    'Concrete and cement disposal',
    'Brick and masonry waste',
    'Asphalt and paving materials',
    'Construction and demolition debris',
    'Heavy material handling',
    'Driveway and sidewalk removal',
    'Foundation and structural concrete',
    'Industrial concrete waste'
  ]

  const materialTypes = [
    {
      type: 'Concrete',
      description: 'Driveways, sidewalks, foundations, and structural concrete',
      icon: 'ðŸ§±'
    },
    {
      type: 'Brick & Masonry',
      description: 'Brick walls, stone work, and masonry materials',
      icon: 'ðŸ§±'
    },
    {
      type: 'Asphalt',
      description: 'Driveways, parking lots, and paving materials',
      icon: 'ðŸ›£ï¸'
    },
    {
      type: 'Demolition',
      description: 'Construction debris and building materials',
      icon: 'ðŸ—ï¸'
    }
  ]

  const sizes = [
    {
      size: 'Concrete Dumpster',
      description: 'For concrete, brick, or asphalt only (no mixed waste)',
      capacity: 'Heavy material only',
      dimensions: "16.46' x 8.00' x 2.67'",
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' }
      ]
    }
  ]

  const benefits = [
    'Heavy-duty dumpsters designed for concrete and heavy materials',
    'Specialized equipment for heavy material handling',
    'Proper disposal and recycling of concrete materials',
    'Compliance with construction waste regulations',
    'Flexible scheduling for construction projects',
    'Expert guidance on concrete disposal requirements',
    'Competitive pricing for heavy material disposal',
    'Reliable service for construction and demolition projects'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Concrete Dumpsters
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our concrete dumpsters are specifically designed to handle heavy materials such as concrete, brick, and asphalt. This service is ideal for construction and demolition projects, ensuring efficient and safe waste disposal, every single time.
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
                Get Concrete Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/concrete-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Concrete Dumpster FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can I mix concrete with other debris?</summary>
              <div className="mt-2">Noâ€”concrete dumpsters are for clean concrete, brick, or asphalt only to meet weight limits.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What size for concrete?</summary>
              <div className="mt-2">Smaller containers reduce overload risk. We'll advise based on volume and access.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How is pricing handled?</summary>
              <div className="mt-2">Flat rates differ for heavy materials. See <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a>.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Can I mix concrete with other debris?', acceptedAnswer: { '@type': 'Answer', text: 'Noâ€”concrete dumpsters are for clean concrete, brick, or asphalt only to meet weight limits.' } },
            { '@type': 'Question', name: 'What size for concrete?', acceptedAnswer: { '@type': 'Answer', text: 'Smaller containers reduce overload risk. We will advise based on volume and access.' } },
            { '@type': 'Question', name: 'How is pricing handled?', acceptedAnswer: { '@type': 'Answer', text: 'Flat rates differ for heavy materials. See the pricing section on the homepage.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/concrete-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Concrete dumpsters for construction and demolition waste"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Material Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Heavy Material Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized concrete dumpsters designed to handle the heaviest construction and demolition materials safely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materialTypes.map((material, index) => (
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
              Concrete & Heavy Material Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our concrete dumpsters are built to handle the toughest construction and demolition materials with specialized equipment and expertise.
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
              Concrete Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heavy-duty dumpsters designed specifically for concrete and heavy material disposal with reinforced construction.
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
              Why Choose Our Concrete Dumpsters?
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
              Heavy-Duty Concrete Service
            </h2>
            <p className="text-xl text-blue-100">
              Built for the toughest construction and demolition projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heavy-Duty Design</h3>
              <p className="text-blue-100">Built to handle concrete and heavy materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Specialized Equipment</h3>
              <p className="text-blue-100">Proper tools for heavy material handling</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Construction Focus</h3>
              <p className="text-blue-100">Designed for construction projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-blue-100">Professional advice for concrete disposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready for Your Concrete Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free quote for concrete dumpster rental and ensure proper disposal of your heavy construction materials.
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
                Get Concrete Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

