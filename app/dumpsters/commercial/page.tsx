import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Building } from 'lucide-react'

export default function CommercialDumpsterPage() {
  const features = [
    'Office cleanouts and renovations',
    'Retail store waste management',
    'Restaurant and food service waste',
    'Manufacturing facility cleanouts',
    'Warehouse and storage cleanouts',
    'Business relocation projects',
    'Construction site waste management',
    'Regular commercial waste pickup'
  ]

  const businessTypes = [
    {
      type: 'Office Buildings',
      description: 'Comprehensive waste management for office cleanouts, renovations, and ongoing operations.',
      services: ['Office cleanouts', 'Renovation debris', 'Regular waste pickup', 'Document disposal']
    },
    {
      type: 'Retail Stores',
      description: 'Efficient waste management solutions for retail environments and store renovations.',
      services: ['Store cleanouts', 'Display removal', 'Packaging waste', 'Seasonal cleanups']
    },
    {
      type: 'Restaurants',
      description: 'Specialized waste management for food service establishments and kitchen renovations.',
      services: ['Kitchen equipment disposal', 'Renovation debris', 'Non-food waste', 'Equipment upgrades']
    },
    {
      type: 'Manufacturing',
      description: 'Heavy-duty waste management for manufacturing facilities and industrial operations.',
      services: ['Equipment disposal', 'Production waste', 'Facility cleanouts', 'Industrial debris']
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description: 'Ensure your business meets all waste disposal regulations and requirements.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your business hours to minimize disruption to your operations.'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'Consistent, dependable waste management to keep your business clean and compliant.'
    },
    {
      icon: Building,
      title: 'Business Focus',
      description: 'Let us handle waste management so you can focus on running your business.'
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
                Commercial Dumpster{' '}
                <span className="text-primary-600">Rental Service</span>
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive waste management solutions for businesses of all sizes. 
                Our commercial dumpster service ensures your business remains clean, compliant, and efficient.
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
                  <span className="font-semibold">Business-Focused Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Compliance Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/dumpster3-500x500-1.jpeg"
                  alt="Commercial dumpster rental service for businesses on the Wasatch Front"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Commercial Waste Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commercial dumpster service is designed to handle the unique waste management needs of businesses. 
              From office cleanouts to ongoing waste pickup, we provide reliable solutions that keep your business running smoothly.
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

      {/* Business Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All Types of Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that different businesses have different waste management needs. 
              Our commercial dumpster service is tailored to meet the specific requirements of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{business.type}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Services Include:</h4>
                  <ul className="space-y-1">
                    {business.services.map((service, serviceIndex) => (
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
              Why Choose Our Commercial Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commercial dumpster service is designed with your business needs in mind. 
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

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Commercial Service Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with our commercial dumpster service is simple and designed to minimize disruption to your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Consultation</h3>
              <p className="text-gray-600">
                We'll assess your business needs and create a customized waste management plan that fits your schedule and requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Implementation</h3>
              <p className="text-gray-600">
                We'll deliver dumpsters and establish pickup schedules that work around your business hours and operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Ongoing Service</h3>
              <p className="text-gray-600">
                We provide reliable, consistent service with regular pickups and maintenance to keep your business clean and compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Environmental Responsibility
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the importance of proper waste disposal and environmental compliance for businesses. 
                Our commercial dumpster service ensures your business meets all regulatory requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                    <p className="text-gray-600">We ensure all waste disposal meets local, state, and federal regulations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmental Responsibility</h3>
                    <p className="text-gray-600">We prioritize environmentally responsible waste disposal and recycling practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Documentation</h3>
                    <p className="text-gray-600">We provide proper documentation for all waste disposal activities for your records.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/construction-site-3688252_1280.jpg"
                  alt="Commercial dumpster rental service with compliance and environmental responsibility"
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
            Ready to Improve Your Business Waste Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation on your commercial dumpster rental needs. 
            Our team is ready to help you create an efficient waste management solution for your business.
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
    </main>
  )
}
