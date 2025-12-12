import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, Zap, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Same Day Dumpster Rental | TNT Dumpsters | Utah',
  description: 'Same-day dumpster rental in Utah for urgent cleanups and remodels. Fast delivery—call (801) 209-9013 to book.',
  keywords: 'same day dumpster rental, emergency dumpster rental, fast dumpster delivery, urgent dumpster rental, same day delivery, utah dumpster rental',
}

export default function SameDayDumpsterRentalPage() {
  const features = [
    'Same-day dumpster delivery available',
    'Emergency dumpster rental service',
    'Fast response for urgent projects',
    'Multiple sizes available same day',
    'Flexible scheduling for urgent needs',
    'Quick setup and placement',
    'Professional and reliable service',
    'Available throughout Utah'
  ]

  const useCases = [
    {
      type: 'Emergency Cleanup',
      description: 'Urgent cleanup after storms, floods, or accidents',
      icon: '🚨'
    },
    {
      type: 'Last-Minute Projects',
      description: 'Sudden project starts or deadline changes',
      icon: '⚡'
    },
    {
      type: 'Time-Sensitive Jobs',
      description: 'Projects with tight deadlines or schedules',
      icon: '⏰'
    },
    {
      type: 'Unexpected Debris',
      description: 'Sudden accumulation of waste or debris',
      icon: '📦'
    }
  ]

  const services = [
    'Same-day delivery in most Utah areas',
    'Emergency dumpster rental service',
    'Fast response and scheduling',
    'Multiple dumpster sizes available',
    'Flexible rental periods',
    'Quick setup and placement',
    'Professional service and support',
    'Competitive pricing with no hidden fees'
  ]

  const benefits = [
    'Get started on your project immediately',
    'No waiting for scheduled delivery dates',
    'Fast response for urgent situations',
    'Flexible scheduling to meet your needs',
    'Professional service you can count on',
    'Available in most Utah locations',
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
              Same Day Dumpster Rental
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Need a dumpster today? We offer same-day dumpster rental service throughout Utah. Fast delivery for urgent projects, emergency cleanups, and time-sensitive jobs. Call now for immediate service.
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Same Day Dumpster Rental FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Do you offer same-day dumpster delivery?</summary>
              <div className="mt-2">Yes—same-day delivery is available in most Utah areas. Call (801) 209-9013 to check availability for your location and schedule immediate delivery.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How quickly can I get a dumpster?</summary>
              <div className="mt-2">Same-day delivery is available when you call early in the day. We'll work to accommodate urgent requests and emergency situations whenever possible.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What sizes are available for same-day delivery?</summary>
              <div className="mt-2">Most sizes (10, 15, 20, 30, 40 yard) are available for same-day delivery, subject to availability. Call to confirm which sizes are available today.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Is there an extra fee for same-day delivery?</summary>
              <div className="mt-2">Same-day delivery may have a rush fee depending on timing and location. We'll provide transparent pricing when you call. Regular pricing applies when scheduled in advance.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What areas do you serve for same-day delivery?</summary>
              <div className="mt-2">We serve Salt Lake County, Utah County, and surrounding areas. Call (801) 209-9013 to confirm same-day availability for your specific location.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can I get a dumpster for an emergency cleanup?</summary>
              <div className="mt-2">Yes—we offer emergency dumpster rental service. Call (801) 209-9013 and we'll work to get a dumpster to you as quickly as possible for emergency situations.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do I get a same-day dumpster quote?</summary>
              <div className="mt-2">Call (801) 209-9013 immediately for same-day service. We'll provide pricing and check availability for your location. <a href="/quote" className="text-blue-600 hover:underline">Online quotes</a> are available for advance scheduling.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Do you offer same-day dumpster delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—same-day delivery is available in most Utah areas. Call (801) 209-9013 to check availability for your location and schedule immediate delivery.' } },
            { '@type': 'Question', name: 'How quickly can I get a dumpster?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day delivery is available when you call early in the day. We will work to accommodate urgent requests and emergency situations whenever possible.' } },
            { '@type': 'Question', name: 'What sizes are available for same-day delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Most sizes (10, 15, 20, 30, 40 yard) are available for same-day delivery, subject to availability. Call to confirm which sizes are available today.' } },
            { '@type': 'Question', name: 'Is there an extra fee for same-day delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Same-day delivery may have a rush fee depending on timing and location. We will provide transparent pricing when you call. Regular pricing applies when scheduled in advance.' } },
            { '@type': 'Question', name: 'What areas do you serve for same-day delivery?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Salt Lake County, Utah County, and surrounding areas. Call (801) 209-9013 to confirm same-day availability for your specific location.' } },
            { '@type': 'Question', name: 'Can I get a dumpster for an emergency cleanup?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—we offer emergency dumpster rental service. Call (801) 209-9013 and we will work to get a dumpster to you as quickly as possible for emergency situations.' } },
            { '@type': 'Question', name: 'How do I get a same-day dumpster quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call (801) 209-9013 immediately for same-day service. We will provide pricing and check availability for your location. Online quotes are available for advance scheduling.' } }
          ]
        }) }}
      />

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Same day dumpster rental for urgent projects and emergency cleanups"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              When You Need Same-Day Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our same-day dumpster rental service is perfect for urgent situations and time-sensitive projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.type}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
              Fast Same-Day Dumpster Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the dumpster you need today with our same-day delivery service.
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
              Why Choose Our Same-Day Service?
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
              Benefits of Same-Day Dumpster Rental
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
              Fast Same-Day Dumpster Service
            </h2>
            <p className="text-xl text-blue-100">
              When you need it today, we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day service available in most areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-blue-100">Fast scheduling for urgent needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Sizes</h3>
              <p className="text-blue-100">Various sizes available same day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p className="text-blue-100">Available for emergency situations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Need a Dumpster Today?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get same-day dumpster delivery for your urgent project. Fast service available throughout Utah. Call us now for immediate availability.
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

