import Link from 'next/link'
import Image from 'next/image'
import HorizontalScroller from '@/components/HorizontalScroller'
import { CheckCircle, Phone, Clock } from 'lucide-react'

export default function DumpstersPage() {
  const services = [
    {
      title: 'Residential Dumpster Service',
      description: 'Perfect for home renovations, garage cleanouts, and residential projects. Our residential dumpster service provides reliable waste management solutions for homeowners.',
      image: '/images/dumpster500x500-2.jpeg',
      href: '/dumpsters/residential',
      features: ['Home renovations', 'Garage cleanouts', 'Yard waste removal', 'Furniture disposal'],
      alt: 'Residential dumpster rental service for homeowners'
    },
    {
      title: 'Commercial Dumpster Service',
      description: 'Comprehensive waste management solutions for businesses of all sizes. Our commercial dumpster service ensures your business remains clean and compliant.',
      image: '/images/dumpster3-500x500-1.jpeg',
      href: '/dumpsters/commercial',
      features: ['Office cleanouts', 'Retail waste management', 'Restaurant waste', 'Business renovations'],
      alt: 'Commercial dumpster rental service for businesses'
    },
    {
      title: 'Industrial Dumpster Service',
      description: 'Heavy-duty waste disposal solutions for industrial operations. Our industrial dumpster service handles the toughest waste management challenges.',
      image: '/images/dumpster2-500x500-2.jpeg',
      href: '/dumpsters/industrial',
      features: ['Manufacturing waste', 'Construction debris', 'Heavy materials', 'Large-scale projects'],
      alt: 'Industrial dumpster rental service for heavy-duty operations'
    },
    {
      title: 'Short-Term Dumpster Service',
      description: 'Flexible waste management for temporary projects. Our short-term dumpster service is perfect for events and quick cleanups.',
      image: '/images/dumpsterSmallBanner.jpeg',
      href: '/dumpsters/short-term',
      features: ['Event cleanup', 'Quick projects', 'Temporary needs', 'Flexible scheduling'],
      alt: 'Short-term dumpster rental for temporary projects'
    },
    {
      title: 'Long-Term Dumpster Service',
      description: 'Ongoing waste management solutions for continuous operations. Our long-term dumpster service provides reliable, regular pickups.',
      image: '/images/dumpsters.jpeg',
      href: '/dumpsters/long-term',
      features: ['Regular pickups', 'Ongoing projects', 'Business operations', 'Consistent service'],
      alt: 'Long-term dumpster rental for ongoing projects'
    },
    {
      title: 'Vendor Dumpster Rental Service',
      description: 'Hassle-free waste management for vendors and contractors. We deliver and pick up according to your schedule.',
      image: '/images/dumpsters2.jpeg',
      href: '/dumpsters/vendor',
      features: ['Contractor support', 'Vendor partnerships', 'Scheduled pickups', 'Professional service'],
      alt: 'Vendor dumpster rental service for vendors and contractors'
    },
    {
      title: 'Concrete Dumpsters',
      description: 'Specialized dumpsters designed for heavy materials like concrete, brick, and asphalt. Perfect for construction and demolition projects.',
      image: '/images/Construction-Rental-480x480.jpg',
      href: '/dumpsters/concrete',
      features: ['Concrete disposal', 'Brick removal', 'Asphalt waste', 'Construction debris'],
      alt: 'Concrete dumpsters for construction and demolition waste'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Dumpster Rental Services on the{' '}
              <span className="text-primary-600">Wasatch Front</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Over 55 years of experience providing reliable, affordable dumpster rental services. 
              From residential cleanouts to large-scale industrial projects, we have the right solution for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+18012099013" className="btn-primary text-center">
                Call Now: +1 (801) 209-9013
              </a>
              <a href="#contact" className="btn-secondary text-center">
                Request Free Estimate
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Free Same-Day Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Quick Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Our Dumpster Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of dumpster rental services to meet all your waste management needs. 
              Each service is designed to provide efficient, reliable, and cost-effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="mt-auto inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">
                Why Choose T&T Dumpsters?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Over 55 Years of Experience</h3>
                    <p className="text-gray-600">Decades of expertise in waste management and dumpster rental services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Same-Day Estimates</h3>
                    <p className="text-gray-600">Get quick, accurate quotes to make informed decisions fast.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for your money without compromising on service quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Turnaround Times</h3>
                    <p className="text-gray-600">Fast delivery and pickup to keep your project on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Locally Owned</h3>
                    <p className="text-gray-600">Family-owned business that understands and serves our community.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/15-NEW-01.png"
                  alt="T&T Dumpsters serving the Wasatch Front area with professional dumpster rental services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">55+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate and professional dumpster rental service. 
            We're here to help with all your waste management needs.
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
          </div>
        </div>
      </section>
    </main>
  )
}
