"use client"
import Link from 'next/link'
import Image from 'next/image'
import HorizontalScroller from './HorizontalScroller'

const Services = () => {
  const services = [
    {
      title: 'Residential Dumpster Service',
      description: 'Our residential dumpster service is designed to meet the waste disposal needs of homeowners. Whether you\'re renovating, cleaning out a garage, or simply need a reliable waste management solution, our residential dumpster service is the perfect fit.',
      image: '/images/residential-dumpster-sizes.jpg',
      href: '/dumpsters/residential',
      alt: 'Residential dumpster rental service for homeowners'
    },
    {
      title: 'Commercial Dumpster Service',
      description: 'TNT Dumpsters offers a comprehensive commercial dumpster service. Ideal for businesses of all sizes, our commercial dumpster service ensures that your business remains clean and compliant with waste disposal regulations.',
      image: '/images/Construction-Rental-480x480.jpg',
      href: '/dumpsters/commercial',
      alt: 'Commercial dumpster rental service for businesses'
    },
    {
      title: 'Construction Dumpster Service',
      description: 'Our construction dumpster service is built for contractors and DIY projects. Perfect for debris from construction and demolition—like concrete, lumber, drywall, and roofing—so your job site stays clean and safe.',
      image: '/images/construction-dumpster-sizes.jpg',
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
            We offer a comprehensive range of dumpster rental services to meet all your waste management needs. From residential cleanouts to large-scale industrial projects, we have the right solution for you. Learn about <a href="#pricing" className="text-blue-600 font-semibold">dumpster rental cost</a> or jump to <a href="#quote" className="text-blue-600 font-semibold">get a quote</a>.
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

        {/* Services mini-subsections */}
        <div className="mt-12 grid gap-8">
          <div id="same-day">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day & Delivery</h3>
            <p className="text-gray-700 text-sm">
              Need speed? Our <a href="#same-day" className="text-blue-600 font-semibold">same day dumpster rental</a> depends on route capacity, but we always move fast. Expect reliable delivery dumpster rental with careful driveway placement, options for a roll off dumpster in tight spots, and local dumpster rental pros who communicate ETA and pickup windows.
            </p>
          </div>
          <div id="contractors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contractors & Job Sites</h3>
            <p className="text-gray-700 text-sm">
              Built for crews: <a href="#contractors" className="text-blue-600 font-semibold">construction dumpster rental</a> sized for roofing, demo, and heavy debris with easy swaps/haul-offs to keep production moving. Count on dependable routes, job site dumpster rental guidance, and clear paperwork for your GC or homeowner.
            </p>
          </div>
        </div>

        {/* Use-case bullets */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div id="cleanouts-moves">
            <h3 className="font-semibold text-gray-900 mb-2">Cleanouts & Moves</h3>
            <p className="text-gray-700 text-sm mb-2">Perfect for quick home cleanups and seasonal purges.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for attic cleanout</Link> <span className="text-gray-600">(typical size: 10–20 yd)</span></li>
              <li><Link href="/services/basement-cleanout-service" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for basement cleanout</Link> <span className="text-gray-600">(typical size: 15–20 yd)</span></li>
              <li><Link href="/services/garage-cleanout-service" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for garage cleanout</Link> <span className="text-gray-600">(typical size: 10–15 yd)</span></li>
              <li><Link href="/services/estate-cleanout" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for estate cleanout</Link> <span className="text-gray-600">(typical size: 20–30 yd)</span></li>
              <li><Link href="/services/estate-cleanout" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for foreclosure cleanout</Link> <span className="text-gray-600">(typical size: 20–30 yd)</span></li>
              <li><Link href="/services/estate-cleanout" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for hoarder cleanup</Link> <span className="text-gray-600">(typical size: 20–30 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for home cleanout</Link> <span className="text-gray-600">(typical size: 15–20 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for moving</Link> <span className="text-gray-600">(typical size: 10–15 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for spring cleaning</Link> <span className="text-gray-600">(typical size: 10–20 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for storm cleanup</Link> <span className="text-gray-600">(typical size: 20 yd)</span></li>
            </ul>
          </div>
          <div id="remodels-projects">
            <h3 className="font-semibold text-gray-900 mb-2">Remodels & Projects</h3>
            <p className="text-gray-700 text-sm mb-2">Keep work areas clean and safe during upgrades.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li><Link href="/services/kitchen-remodel-dumpster" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for kitchen remodel</Link> <span className="text-gray-600">(typical size: 15–20 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for bathroom remodel</Link> <span className="text-gray-600">(typical size: 10–15 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for remodel</Link> <span className="text-gray-600">(typical size: 15–20 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for renovation</Link> <span className="text-gray-600">(typical size: 20 yd)</span></li>
              <li><Link href="/services/roofing-dumpster-rental" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for roof replacement</Link> <span className="text-gray-600">(typical size: 10–20 yd)</span></li>
              <li><Link href="/dumpsters/residential" className="text-blue-600 hover:text-blue-700 hover:underline">bin rental for landscaping</Link> <span className="text-gray-600">(typical size: 10–15 yd)</span></li>
            </ul>
          </div>
        </div>

        {/* What we take - materials grid */}
        <div id="what-we-take" className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What We Take</h3>
          <div className="materials-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              ['appliances','Dumpster rental for appliances.', '/dumpsters/residential'],
              ['cardboard','Dumpster rental for cardboard.', '/dumpsters/residential'],
              ['concrete','Dumpster rental for concrete.', '/dumpsters/concrete'],
              ['construction debris','Dumpster rental for construction debris.', '/dumpsters/concrete'],
              ['demolition debris','Dumpster rental for demolition debris.', '/dumpsters/concrete'],
              ['dirt','Dumpster rental for dirt.', '/dumpsters/concrete'],
              ['drywall','Dumpster rental for drywall.', '/dumpsters/concrete'],
              ['furniture','Dumpster rental for furniture.', '/dumpsters/residential'],
              ['green waste','Dumpster rental for green waste.', '/dumpsters/residential'],
              ['household junk','Dumpster rental for household junk.', '/dumpsters/residential'],
              ['mattress','Dumpster rental for mattress.', '/dumpsters/residential'],
              ['metal','Dumpster rental for metal.', '/dumpsters/residential'],
              ['recycling','Dumpster rental for recycling.', '/dumpsters/residential'],
              ['roofing','Dumpster rental for roofing.', '/services/roofing-dumpster-rental'],
              ['shingles','Dumpster rental for shingles.', '/services/roofing-dumpster-rental'],
              ['soil','Dumpster rental for soil.', '/dumpsters/concrete'],
              ['wood','Dumpster rental for wood.', '/dumpsters/concrete'],
              ['yard waste','Dumpster rental for yard waste.', '/dumpsters/residential'],
            ].map(([title, caption, href], i) => (
              <Link key={i} href={href} className="materials-item p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-blue-600">{title}</h4>
                <p className="text-gray-700 text-xs">{caption}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Microcopy variants for cards (sr-only) */}
        <div className="sr-only" aria-hidden="true">
          <p>Fast local dumpster rental for home cleanups and small projects.</p>
          <p>Roll off dumpster solutions for contractors needing reliable swaps.</p>
          <p>Construction dumpster rental priced right with transparent weight billing at $55/ton.</p>
        </div>

        {/* Image alt/filename suggestions (non-functional note) */}
        {/* ALT/FILENAME SUGGESTIONS:
          driveway placement -> driveway-dumpster-placement-utah.webp
          construction site -> jobsite-roll-off-dumpster-utah.webp
          roof tear-off -> roofing-shingle-tearoff-dumpster.webp
          kitchen remodel debris -> kitchen-remodel-dumpster-load.webp
          landscaping -> landscaping-green-waste-dumpster.webp
          appliance haul -> appliance-haul-away-dumpster.webp
          concrete load -> concrete-dumpster-load.webp
          yard waste -> yard-waste-dumpster-utah.webp
          garage cleanout -> garage-cleanout-dumpster-utah.webp
          same-day delivery -> same-day-dumpster-delivery-utah.webp
        */}
        
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


