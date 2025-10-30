import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Building } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export default function IndustrialDumpsterPage() {
  const features = [
    'Heavy-duty waste disposal solutions',
    'Manufacturing facility cleanouts',
    'Construction site waste management',
    'Industrial equipment disposal',
    'Large-scale project support',
    'Regular industrial waste pickup',
    'Compliance with industrial regulations',
    '24/7 emergency service availability'
  ]

  const industries = [
    {
      industry: 'Manufacturing',
      description: 'Comprehensive waste management for manufacturing facilities and production operations.',
      services: ['Production waste disposal', 'Equipment removal', 'Facility cleanouts', 'Regular pickups']
    },
    {
      industry: 'Construction',
      description: 'Heavy-duty waste management for construction sites and demolition projects.',
      services: ['Construction debris', 'Demolition waste', 'Site cleanups', 'Equipment disposal']
    },
    {
      industry: 'Warehousing',
      description: 'Efficient waste management for warehouse operations and storage facilities.',
      services: ['Warehouse cleanouts', 'Inventory disposal', 'Equipment removal', 'Regular service']
    },
    {
      industry: 'Processing Plants',
      description: 'Specialized waste management for processing and industrial plants.',
      services: ['Industrial waste', 'Processing debris', 'Equipment disposal', 'Compliance support']
    }
  ]

  const benefits = [
    {
      icon: Building,
      title: 'Industrial Expertise',
      description: 'Over 55 years of experience handling industrial waste management challenges.'
    },
    {
      icon: Truck,
      title: 'Heavy-Duty Equipment',
      description: 'Specialized equipment designed to handle the toughest industrial waste.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description: 'We ensure all waste disposal meets industrial and environmental regulations.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency service available for urgent industrial waste management needs.'
    }
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Medium industrial cleanups and light projects',
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
      description: 'Medium to large industrial operations',
      capacity: '10-12 pickup truck loads',
      dimensions: '18.25\' x 7.25\' x 6.63\'',
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' }
      ]
    },
    {
      size: 'Concrete Dumpster',
      description: 'Concrete, brick, or asphalt only (no mixed waste)',
      capacity: 'Heavy material only',
      dimensions: "16.46' x 8.00' x 2.67'",
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Industrial Dumpster{' '}
                <span className="text-primary-600">Rental Service</span>
              </h1>
              <p className="text-xl text-gray-600">
                Heavy-duty waste disposal solutions for industrial operations. Our industrial dumpster service handles the toughest waste management challenges with specialized equipment and expertise.
              </p>
              {/* SEO SWEEP START [/dumpsters/industrial] */}
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Scheduling or cost questions? See <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> and ask about <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> when routes allow.
                </p>
                <p>
                  For job sites, review our <a href="/#contractors" className="text-blue-600 hover:underline">construction dumpster rental</a> notes on swaps, weight, and staging.
                </p>
              </div>
              {/* SEO SWEEP END [/dumpsters/industrial] */}
              
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
                  <span className="font-semibold">Heavy-Duty Equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Compliance Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/construction-site-3688252_1280.jpg"
                  alt="Industrial dumpster rental service for heavy-duty waste management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters/industrial-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Industrial Dumpster Rental',
          areaServed: 'Salt Lake & Utah County',
          provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' }
        }) }}
      />
      {/* SEO SWEEP END [/dumpsters/industrial-schema] */}

      {/* Industrial Dumpster Sizes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industrial Dumpster Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our most popular sizes. Pricing shown includes 1-day and 7-day options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                <h3 className="text-3xl font-bold text-primary-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-6">{size.description}</p>
                <div className="space-y-2 text-base text-gray-700 mb-4">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                </div>
                <div className="mt-2 text-left inline-block">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Pricing</p>
                  <ul className="text-base text-gray-700">
                    {size.pricing.map((p, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-1">
                        <span className="font-medium">{p.label}</span>
                        <span className="font-bold text-primary-600">{p.value}</span>
                      </li>
                    ))}
                  </ul>
                  {size.pricing.some(p => p.note) && (
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
              Industrial Waste Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our industrial dumpster service is designed to handle the unique waste management needs of industrial operations. 
              From manufacturing facilities to construction sites, we provide reliable solutions that keep your operations running smoothly.
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

      {/* Industries Served */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have different waste management needs. 
              Our industrial dumpster service is tailored to meet the specific requirements of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{industry.industry}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Services Include:</h4>
                  <ul className="space-y-1">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Industrial Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our industrial dumpster service is designed with your industrial needs in mind. 
              We provide reliable, compliant, and efficient waste management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Industrial Waste Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation on your industrial dumpster rental needs. 
            Our team is ready to help you create an efficient waste management solution for your operations.
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
              serviceType="Industrial Dumpster Rental"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
