import Image from 'next/image'
const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Icon Dumpsters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for reliable, affordable, and fast dumpster rental services throughout Utah
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Utah Business</h3>
                <p className="text-gray-600">
                  We're proud to be a locally owned and operated business serving Utah communities with dedication and care.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable Service</h3>
                <p className="text-gray-600">
                  Quick delivery and pickup times to keep your project moving forward without delays.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Competitive rates with no hidden fees, making dumpster rental accessible for every budget.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Full licensing and insurance coverage for your peace of mind and project protection.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/dumpster2-500x500-2.jpeg"
                    alt="Professional dumpster rental service in Utah with blue Icon Dumpsters branding"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/dumpster3-500x500-1.jpeg"
                    alt="Roll-off dumpster ready for delivery with Icon Dumpsters logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/construction-site-3688252_1280.jpg"
                    alt="Local dumpster rental service near you with fast delivery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/construction-site-3688262_1280.jpg"
                    alt="Utah dumpster rental company serving residential and commercial customers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Icon Dumpsters?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              With years of experience serving Utah communities, we understand the importance of reliable waste management solutions. 
              Our commitment to customer satisfaction, competitive pricing, and environmental responsibility sets us apart.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Same Day</div>
                <div className="text-blue-100">Delivery Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
