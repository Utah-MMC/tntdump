"use client"
import Link from 'next/link'
import Image from 'next/image'
import HorizontalScroller from './HorizontalScroller'

const Services = () => {
  const services = [
    {
      title: 'Residential Dumpster Service',
      description: 'Our residential dumpster service is designed to meet the waste disposal needs of homeowners. Whether you\'re renovating, cleaning out a garage, or simply need a reliable waste management solution, our residential dumpster service is the perfect fit.',
      image: '/images/dumpster2-500x500-2.jpeg',
      href: '/dumpsters/residential',
      alt: 'Residential dumpster rental service for homeowners'
    },
    {
      title: 'Commercial Dumpster Service',
      description: 'T&T Dumpsters offers a comprehensive commercial dumpster service. Ideal for businesses of all sizes, our commercial dumpster service ensures that your business remains clean and compliant with waste disposal regulations.',
      image: '/images/dumpster3-500x500-1.jpeg',
      href: '/dumpsters/commercial',
      alt: 'Commercial dumpster rental service for businesses'
    },
    {
      title: 'Construction Dumpster Service',
      description: 'Our construction dumpster service is built for contractors and DIY projects. Perfect for debris from construction and demolition—like concrete, lumber, drywall, and roofing—so your job site stays clean and safe.',
      image: '/images/Construction-Rental-480x480.jpg',
      href: '/dumpsters/concrete',
      alt: 'Construction dumpster rental service for construction and demolition debris'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            Our Dumpster Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dumpster rental services to meet all your waste management needs. 
            From residential cleanouts to large-scale industrial projects, we have the right solution for you.
          </p>
        </div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-stretch justify-center">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group h-full" data-service-card>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 md:h-52 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
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
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services

