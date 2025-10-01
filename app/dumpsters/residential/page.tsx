import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export default function ResidentialDumpsterPage() {
  const features = [
    'Home renovations and remodeling projects',
    'Garage and basement cleanouts',
    'Yard waste and landscaping debris',
    'Furniture and appliance disposal',
    'Construction and demolition waste',
    'Moving and relocation cleanouts',
    'Estate cleanouts and property preparation',
    'Seasonal cleanup projects'
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Ideal for medium-sized home projects',
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
      description: 'Great for larger renovations and cleanouts',
      capacity: '7-8 pickup truck loads',
      dimensions: '22\' x 8\' x 6\'',
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: '30 Yard',
      description: 'Perfect for major home renovations',
      capacity: '10-12 pickup truck loads',
      dimensions: '22\' x 8\' x 8\'',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: 'Concrete Dumpster',
      description: 'For concrete, brick, or asphalt only',
      capacity: 'Heavy material only (no mixed waste)',
      dimensions: 'Contact for available sizes',
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' }
      ]
    }
  ]

  const prohibitedItems = [
    'Hazardous materials (paint, chemicals, batteries)',
    'Tires and automotive parts',
    'Appliances with refrigerants',
    'Medical waste and pharmaceuticals',
    'Asbestos-containing materials',
    'Radioactive materials',
    'Explosives and ammunition',
    'Liquid waste and oils'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Residential Dumpster{' '}
                <span className="text-primary-600">Rental Service</span>
              </h1>
              <p className="text-xl text-gray-600">
                Perfect for home renovations, garage cleanouts, and residential projects. 
                Our residential dumpster service provides reliable waste management solutions for homeowners throughout the Wasatch Front.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">
                  Call Now: +1 (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Get Free Estimate
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Free Same-Day Estimates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Quick Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Competitive Pricing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/dumpster2-500x500-2.jpeg"
                  alt="Residential dumpster rental service for homeowners on the Wasatch Front"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Size for Your Project
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of dumpster sizes to accommodate projects of all sizes. 
              Our team can help you choose the perfect size for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-4">{size.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                </div>
                <div className="mt-4 text-left inline-block">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Pricing</p>
                  <ul className="text-sm text-gray-700">
                    {Array.isArray(size.pricing) && size.pricing.map((p, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-1">
                        <span className="font-medium">{p.label}</span>
                        <span className="font-bold text-primary-600">{p.value}</span>
                      </li>
                    ))}
                  </ul>
                  {Array.isArray(size.pricing) && size.pricing.some(p => p.note) && (
                    <p className="text-xs text-gray-500 mt-2 text-center">Notes: {size.pricing.filter(p => p.note).map(p => `${p.label} ${p.note}`).join(' · ')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for All Your Residential Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our residential dumpster service is designed to handle a wide variety of home projects and cleanouts. 
              From small garage cleanouts to major home renovations, we have the right solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Residential Dumpster Service Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with our residential dumpster service is simple and straightforward. 
              Here's how the process works:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Call for Estimate</h3>
              <p className="text-gray-600">
                Contact us for a free same-day estimate. We'll help you choose the right dumpster size and provide competitive pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Fast Delivery</h3>
              <p className="text-gray-600">
                We'll deliver your dumpster to your location at your convenience. Our team ensures safe and proper placement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Quick Pickup</h3>
              <p className="text-gray-600">
                When you're done, simply call us and we'll pick up the dumpster promptly. No hassle, no mess left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Cannot Go in Our Dumpsters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For safety and environmental reasons, certain items are prohibited from our dumpsters. 
                Please review this list before loading your dumpster.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Note:</strong> If you're unsure about any items, please contact us for clarification. 
                  We're here to help ensure safe and compliant disposal.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Residential dumpster rental service with proper waste disposal guidelines"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Residential Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate on your residential dumpster rental. 
            Our team is ready to help you with all your waste management needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+18012099013" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Call Now: +1 (801) 209-9013
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
              Contact Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-100">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call or Text</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Mon - Fri: 7:00 am - 9:00 pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Serving the Wasatch Front</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm 
              serviceType="Residential Dumpster Rental"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
