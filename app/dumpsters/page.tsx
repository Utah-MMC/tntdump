import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HorizontalScroller from '@/components/HorizontalScroller'
import { CheckCircle, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Services | Dumpster Rental | TNT Dump',
  description:
    'Roll off dumpster rental for residential, commercial, and construction projects. Fast delivery, fair dumpster rental price, and local service in Salt Lake & Utah County.',
}

export default function DumpstersPage() {
  const services = [
    {
      title: 'Residential Dumpster Service',
      description:
        "Perfect for home renovations, garage cleanouts, and residential projects. Our residential dumpster service provides reliable waste management solutions for homeowners.",
      image: '/images/dumpster2-500x500-2.jpeg',
      href: '/dumpsters/residential',
      features: ['Home renovations', 'Garage cleanouts', 'Yard waste removal', 'Furniture disposal'],
      alt: 'Residential dumpster rental service for homeowners',
    },
    {
      title: 'Commercial Dumpster Service',
      description:
        'Comprehensive waste management solutions for businesses of all sizes. Our commercial dumpster service ensures your business remains clean and compliant.',
      image: '/images/dumpster3-500x500-1.jpeg',
      href: '/dumpsters/commercial',
      features: ['Office cleanouts', 'Retail waste management', 'Restaurant waste', 'Business renovations'],
      alt: 'Commercial dumpster rental service for businesses',
    },
    {
      title: 'Industrial Dumpster Service',
      description:
        'Heavy-duty waste disposal solutions for industrial operations. Our industrial dumpster service handles the toughest waste management challenges.',
      image: '/images/dumpster2-500x500-2.jpeg',
      href: '/dumpsters/industrial',
      features: ['Manufacturing waste', 'Construction debris', 'Heavy materials', 'Large-scale projects'],
      alt: 'Industrial dumpster rental service for heavy-duty operations',
    },
    {
      title: 'Short-Term Dumpster Service',
      description:
        'Flexible waste management for temporary projects. Our short-term dumpster service is perfect for events and quick cleanups.',
      image: '/images/dumpsterSmallBanner.jpeg',
      href: '/dumpsters/short-term',
      features: ['Event cleanup', 'Quick projects', 'Temporary needs', 'Flexible scheduling'],
      alt: 'Short-term dumpster rental for temporary projects',
    },
    {
      title: 'Long-Term Dumpster Service',
      description:
        'Ongoing waste management solutions for continuous operations. Our long-term dumpster service provides reliable, regular pickups.',
      image: '/images/dumpsters.jpeg',
      href: '/dumpsters/long-term',
      features: ['Regular pickups', 'Ongoing projects', 'Business operations', 'Consistent service'],
      alt: 'Long-term dumpster rental for ongoing projects',
    },
    {
      title: 'Vendor Dumpster Rental Service',
      description:
        'Hassle-free waste management for vendors and contractors. We deliver and pick up according to your schedule.',
      image: '/images/dumpsters2.jpeg',
      href: '/dumpsters/vendor',
      features: ['Contractor support', 'Vendor partnerships', 'Scheduled pickups', 'Professional service'],
      alt: 'Vendor dumpster rental service for vendors and contractors',
    },
    {
      title: 'Concrete Dumpsters',
      description:
        'Specialized dumpsters designed for heavy materials like concrete, brick, and asphalt. Perfect for construction and demolition projects.',
      image: '/images/Construction-Rental-480x480.jpg',
      href: '/dumpsters/concrete',
      features: ['Concrete disposal', 'Brick removal', 'Asphalt waste', 'Construction debris'],
      alt: 'Concrete dumpsters for construction and demolition waste',
    },
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
              Over 55 years of experience providing reliable, affordable dumpster rental services. From residential cleanouts to large-scale industrial projects, we have the right solution for you.
            </p>

            {/* SEO SWEEP START [/dumpsters] */}
            <div className="text-left text-gray-700 text-sm space-y-3 max-w-3xl mx-auto">
              <p>
                Choose local dumpster rental with clear scheduling and careful placement. We handle driveway-safe roll off dumpster delivery and quick pickups for remodels, roof tear-offs, landscaping, and cleanouts.
              </p>
              <p>
                Asking about pricing? See our <a href="/#pricing" className="text-blue-700 hover:underline">dumpster rental cost</a> overview and call for a firm quote. Need help choosing? Use our <a href="/calculator" className="text-blue-700 hover:underline">dumpster size calculator</a> or browse our <a href="/services" className="text-blue-700 hover:underline">dumpster rental services</a>.
              </p>
              <p>
                Tight timelines? Check <a href="/#same-day" className="text-blue-700 hover:underline">same day dumpster rental</a> options and we'll confirm availability. Learn more in our <a href="/blog" className="text-blue-700 hover:underline">dumpster rental blog</a> with tips and guides.
              </p>
            </div>
            {/* SEO SWEEP END [/dumpsters] */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-6">
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
                <span className="font-semibold">Quick Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold">Competitive Pricing</span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group h-full" data-service-card>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48 md:h-52 flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={70}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 md:line-clamp-4 flex-1">
                      {service.description}
                    </p>
                    <div className="mt-auto inline-flex items-center text-blue-600 group-hover:text-blue-700 font-semibold transition-colors">
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">Why Choose TNT Dumpsters?</h2>
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
                  alt="TNT Dump serving Salt Lake & Utah County with professional dumpster rental services"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate and professional dumpster rental service. We're here to help with all your waste management needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+18012099013"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Call Now: +1 (801) 209-9013
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
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

      {/* Related Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore more dumpster rental information and services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Rental Services</h3>
              <p className="text-sm text-gray-600">Learn about our comprehensive service offerings</p>
            </a>
            <a href="/blog/choose-right-dumpster-size" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Choose the Right Size</h3>
              <p className="text-sm text-gray-600">Guide to selecting the perfect dumpster size</p>
            </a>
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Calculate the right dumpster for your project</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free dumpster rental quote</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find dumpster rental in your Utah city</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Dumpsters</h3>
              <p className="text-sm text-gray-600">Home dumpster rental services</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Dumpsters</h3>
              <p className="text-sm text-gray-600">Business dumpster rental solutions</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Rental Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and expert advice</p>
            </a>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters-faq] */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Dumpsters: Quick FAQs</h2>
          <div className="space-y-3">
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">What sizes do you carry?</summary>
              <div className="mt-2">Common roll off sizes for home projects and construction debris. We'll match size to your load type. Use our <a href="/calculator" className="text-blue-700 hover:underline">dumpster size calculator</a> or read our <a href="/blog/choose-right-dumpster-size" className="text-blue-700 hover:underline">size guide</a> for help.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How fast can you deliver?</summary>
              <div className="mt-2">Delivery timing depends on routes. See <a href="/#same-day" className="text-blue-700 hover:underline">same day dumpster rental</a> for rush options. <a href="/quote" className="text-blue-700 hover:underline">Request a quote</a> to check availability.</div>
            </details>
            <details className="border rounded p-4 bg-gray-50">
              <summary className="font-semibold cursor-pointer">How do quotes work?</summary>
              <div className="mt-2">We confirm size, tonnage, and placement so your dumpster rental price stays predictable. <a href="/quote" className="text-blue-700 hover:underline">Get a free quote</a> or browse our <a href="/services" className="text-blue-700 hover:underline">service options</a>.</div>
            </details>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What sizes do you carry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Common roll off sizes fit home projects and construction debris. We match size to your load type.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can you deliver?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Delivery timing depends on routes. Same-day may be available; call for options.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do quotes work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We confirm size, tonnage, and placement for a clear, upfront price.',
                },
              },
            ],
          }),
        }}
      />
      {/* SEO SWEEP END [/dumpsters-faq] */}
    </main>
  )
}


