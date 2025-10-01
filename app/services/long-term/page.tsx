import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Calendar, DollarSign } from 'lucide-react'

export default function LongTermServicePage() {
  const features = [
    'Ongoing construction projects',
    'Regular business waste management',
    'Long-term facility maintenance',
    'Multi-phase renovation projects',
    'Seasonal business operations',
    'Extended cleanup projects',
    'Regular property management',
    'Continuous manufacturing operations'
  ]

  const benefits = [
    'Volume discounts for extended rentals',
    'Regular pickup schedules',
    'Dedicated account management',
    'Flexible contract terms',
    'Priority service and support',
    'Customized waste management solutions',
    'Monthly billing options',
    'Contract renewal flexibility'
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Small ongoing operations',
      capacity: '5-6 pickup truck loads',
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '20 Yard',
      description: 'Medium business operations',
      capacity: '7-8 pickup truck loads',
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '30 Yard',
      description: 'Large ongoing projects',
      capacity: '10-12 pickup truck loads',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Long-Term Dumpster Rental Service
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              For ongoing projects or businesses with consistent waste disposal needs, T&T Dumpsters long-term dumpster service is the ideal choice. We provide reliable, regular pick-ups to ensure your site remains clean and safe.
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
                Get Long-Term Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster3-500x500-1.jpeg"
              alt="Long-term dumpster rental for ongoing projects"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Long-Term Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our long-term dumpster service provides consistent, reliable waste management for ongoing projects and business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Long-Term Service Benefits
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Long-Term Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Competitive monthly rates with volume discounts for extended contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-4">{size.description}</p>
                <p className="text-sm text-gray-500 mb-4">{size.capacity}</p>
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
                      <p className="text-xs text-gray-500 mt-2 text-center">Notes: {(size as any).pricing.filter((p: any) => p.note).map((p: any) => `${p.label} ${p.note}`).join(' · ')}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Reliable Long-Term Partnership
            </h2>
            <p className="text-xl text-blue-100">
              Your trusted waste management partner for ongoing operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volume Discounts</h3>
              <p className="text-blue-100">Better rates for longer contracts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Pickups</h3>
              <p className="text-blue-100">Scheduled service to keep you clean</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Service</h3>
              <p className="text-blue-100">Account management for your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Priority Support</h3>
              <p className="text-blue-100">Fast response for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready for Long-Term Partnership?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free quote for long-term dumpster rental and discover the benefits of a reliable waste management partnership.
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
                Get Long-Term Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
