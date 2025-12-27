import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Heart, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Service | Utah | TNT Dumpsters',
  description:
    'Estate cleanout service in Utah for downsizing, inheritances, and property sales. Professional hauling, flexible scheduling, and clear pricing.',
  alternates: { canonical: 'https://tntdump.com/services/estate-cleanout' },
,
    openGraph: {
      title: 'Estate Cleanout Service | Utah | TNT Dumpsters',
      description: 'Estate cleanout service in Utah for downsizing, inheritances, and property sales. Professional hauling, flexible scheduling, and clear pricing.',
      url: 'https://tntdump.com/services/estate-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function EstateCleanoutServicePage() {
  const features = [
    'Complete estate and property cleanouts',
    'Furniture and appliance disposal',
    'Personal belongings organization',
    'Property preparation for sale',
    'Moving and relocation assistance',
    'Hoarding cleanup services',
    'Senior downsizing support',
    'Property management cleanouts'
  ]

  const cleanoutTypes = [
    {
      type: 'Estate Cleanouts',
      description: 'Complete property cleanouts after inheritance or sale',
      icon: 'ðŸ '
    },
    {
      type: 'Senior Downsizing',
      description: 'Compassionate assistance with moving and downsizing',
      icon: 'ðŸ‘´'
    },
    {
      type: 'Property Preparation',
      description: 'Getting properties ready for sale or rental',
      icon: 'ðŸ”‘'
    },
    {
      type: 'Hoarding Cleanup',
      description: 'Sensitive cleanup of accumulated belongings',
      icon: 'ðŸ“¦'
    }
  ]

  const services = [
    'Compassionate and respectful service',
    'Complete property assessment and planning',
    'Sorting and organization of belongings',
    'Donation coordination for usable items',
    'Safe disposal of unwanted materials',
    'Property cleaning and preparation',
    'Flexible scheduling to accommodate families',
    'Detailed documentation and reporting'
  ]

  const benefits = [
    'Sensitive and respectful handling of personal belongings',
    'Complete property cleanout from start to finish',
    'Donation coordination for items that can be reused',
    'Flexible scheduling to work with family needs',
    'Professional organization and sorting services',
    'Property preparation for sale or rental',
    'Comprehensive cleanup and disposal services',
    'Detailed documentation for estate purposes'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Estate Cleanout Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Looking for estate cleanout services? TNT Dumpsters offers efficient and reliable solutions for your estate cleanout needs. Choose our tailored residential dumpster rentals for managing inherited estates and let us do all the work for you.
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
                Get Estate Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/services/estate-cleanout-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Estate Cleanout FAQs</h2>
          <div className="space-y-3 text-sm">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What size fits an estate cleanout?</summary>
              <div className="mt-2">Most homes use 20–30 yard roll offs. We'll help size to your load.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">Can you place on a driveway?</summary>
              <div className="mt-2">Yes—careful placement with boards when needed. Access details help us plan.
              </div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do I get a quote?</summary>
              <div className="mt-2">Call (801) 209-9013 or see <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> for what affects price.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What size fits an estate cleanout?', acceptedAnswer: { '@type': 'Answer', text: 'Most homes use 20–30 yard roll offs. We will help size to your load.' } },
            { '@type': 'Question', name: 'Can you place on a driveway?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—careful placement with boards when needed. Access details help us plan.' } },
            { '@type': 'Question', name: 'How do I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call (801) 209-9013 or see the homepage pricing section for details on what affects price.' } }
          ]
        }) }}
      />
      {/* SEO SWEEP END [/services/estate-cleanout-faq] */}

      {/* Service Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Estate cleanout services for inherited properties"
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
              Comprehensive Estate Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide sensitive and professional estate cleanout services to help families during difficult times with compassion and efficiency.
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
              Complete Estate Cleanout Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive estate cleanout services handle every aspect of property cleanup with care and professionalism.
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
              Our Estate Cleanout Process
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
              Why Choose Our Estate Cleanout Services?
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
              Compassionate Estate Cleanout Service
            </h2>
            <p className="text-xl text-blue-100">
              Serving families with care, respect, and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compassionate Service</h3>
              <p className="text-blue-100">Sensitive handling during difficult times</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Service</h3>
              <p className="text-blue-100">Full property cleanout from start to finish</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-blue-100">Work around your family's needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Support</h3>
              <p className="text-blue-100">Expert guidance throughout the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Need Estate Cleanout Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you with compassionate and professional estate cleanout services. Get a free quote and discover how we can assist your family during this difficult time.
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
                Get Estate Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


