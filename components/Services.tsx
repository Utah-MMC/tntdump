import Link from 'next/link'
import Image from 'next/image'

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
      title: 'Industrial Dumpster Service',
      description: 'Our industrial dumpster service is designed to handle the heavy-duty waste disposal needs of industrial operations. With our industrial dumpster service, you can focus on your operations while we take care of your waste.',
      image: '/images/dumpster2-500x500-2.jpeg',
      href: '/dumpsters/industrial',
      alt: 'Industrial dumpster rental service for heavy-duty operations'
    },
    {
      title: 'Short-Term Dumpster Service',
      description: 'Our short-term dumpster service is perfect for projects with a defined timeline. Whether you\'re undertaking a home renovation or organizing a one-off event, our short-term dumpster service provides flexible and convenient waste management.',
      image: '/images/dumpsterSmallBanner.jpeg',
      href: '/dumpsters/short-term',
      alt: 'Short-term dumpster rental for temporary projects'
    },
    {
      title: 'Long-Term Dumpster Service',
      description: 'For ongoing projects or businesses with consistent waste disposal needs, T&T Dumpsters long-term dumpster service is the ideal choice. We provide reliable, regular pick-ups to ensure your site remains clean and safe.',
      image: '/images/dumpsters.jpeg',
      href: '/dumpsters/long-term',
      alt: 'Long-term dumpster rental for ongoing projects'
    },
    {
      title: 'Vendor Dumpster Rental Service',
      description: 'We offer a hassle-free solution for vendors needing waste management for their operations. If you\'re looking for reliable services, we deliver and pick up the dumpster according to your schedule, providing a seamless service experience.',
      image: '/images/dumpsters2.jpeg',
      href: '/dumpsters/vendor',
      alt: 'Vendor dumpster rental service for vendors and contractors'
    },
    {
      title: 'Concrete Dumpsters',
      description: 'Our concrete dumpsters are specifically designed to handle heavy materials such as concrete, brick, and asphalt. This service is ideal for construction and demolition projects, ensuring efficient and safe waste disposal, every single time.',
      image: '/images/Construction-Rental-480x480.jpg',
      href: '/dumpsters/concrete',
      alt: 'Concrete dumpsters for construction and demolition waste'
    },
    {
      title: 'Estate Cleanout Services',
      description: 'Looking for estate cleanout services? T&T Dumpsters offers efficient and reliable solutions for your estate cleanout needs. Choose our tailored residential dumpster rentals for managing inherited estates and let us do all the work for you.',
      image: '/images/pexels-pamelamariephoto-2625896.jpg',
      href: '/estate-cleanouts',
      alt: 'Estate cleanout services for inherited properties'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-4">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-semibold transition-colors">
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

