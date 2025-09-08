import ServiceCard from '@/components/ServiceCard'
import HeroSection from '@/components/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services - T&T Dumpsters | Utah',
  description: 'Professional dumpster rental services in Utah. Residential, commercial, industrial, and specialty dumpster rentals with fast delivery and competitive pricing.',
  keywords: 'dumpster rental services, residential dumpster, commercial dumpster, industrial dumpster, roll-off dumpster, utah dumpster rental',
}

const services = [
  {
    title: 'Residential Dumpster Rental',
    description: 'Perfect for home renovations, cleanouts, and DIY projects. Available in various sizes to fit your specific needs.',
    image: '/images/residential-dumpster-rental.jpg',
    slug: 'residential',
    features: ['Home renovations', 'Estate cleanouts', 'Yard waste removal', 'Moving cleanouts'],
    price: '$299'
  },
  {
    title: 'Commercial Dumpster Rental',
    description: 'Reliable waste management solutions for businesses, offices, and commercial properties.',
    image: '/images/commercial-dumpster-rental.jpg',
    slug: 'commercial',
    features: ['Office cleanouts', 'Retail renovations', 'Business waste', 'Regular service'],
    price: '$399'
  },
  {
    title: 'Industrial Dumpster Rental',
    description: 'Heavy-duty dumpsters for large-scale industrial projects and construction sites.',
    image: '/images/industrial-dumpster-rental.jpg',
    slug: 'industrial',
    features: ['Construction waste', 'Heavy materials', 'Large capacity', 'Extended rentals'],
    price: '$599'
  },
  {
    title: 'Short-Term Dumpster Rental',
    description: 'Flexible rental options for quick projects and temporary waste management needs.',
    image: '/images/short-term-dumpster-rental.jpg',
    slug: 'short-term',
    features: ['Quick projects', 'Event cleanup', 'Temporary needs', 'Flexible scheduling'],
    price: '$199'
  },
  {
    title: 'Long-Term Dumpster Rental',
    description: 'Extended rental solutions for ongoing projects and continuous waste management.',
    image: '/images/long-term-dumpster-rental.jpg',
    slug: 'long-term',
    features: ['Ongoing projects', 'Monthly service', 'Cost savings', 'Regular pickup'],
    price: '$299/month'
  },
  {
    title: 'Vendor Dumpster Rental',
    description: 'Specialized dumpster services for contractors, vendors, and service providers.',
    image: '/images/vendor-dumpster-rental.jpg',
    slug: 'vendor',
    features: ['Contractor support', 'Vendor partnerships', 'Project coordination', 'Bulk pricing'],
    price: '$349'
  },
  {
    title: 'Concrete Dumpsters',
    description: 'Heavy-duty dumpsters specifically designed for concrete, asphalt, and construction debris.',
    image: '/images/concrete-dumpsters.jpg',
    slug: 'concrete',
    features: ['Concrete disposal', 'Asphalt removal', 'Construction debris', 'Heavy materials'],
    price: '$499'
  },
  {
    title: 'Estate Cleanout Services',
    description: 'Comprehensive estate cleanout services with professional dumpster rental and removal.',
    image: '/images/estate-cleanout-services.jpg',
    slug: 'estate-cleanout',
    features: ['Full estate cleanout', 'Professional service', 'Sensitive handling', 'Complete removal'],
    price: 'Custom Quote'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Dumpster Rental Services"
        description="Professional dumpster rental services for all your waste management needs. From residential cleanouts to large commercial projects."
        primaryButton={{
          text: "Call (801) 209-9013",
          href: "tel:+18012099013"
        }}
        secondaryButton={{
          text: "View Services",
          href: "#services"
        }}
        showPhoneButton={false}
        backgroundImage="/images/construction-site-3688252_1280.jpg"
      />

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              T&T Dumpsters offers a comprehensive range of dumpster rental services to meet all your waste management needs. 
              Click on any service below to learn more about pricing, availability, and specific features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Don't see exactly what you need? Contact us for custom dumpster solutions tailored to your specific project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+18012099013" className="btn-primary">
                  Call Now
                </a>
                <a href="/contact" className="btn-secondary">
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0003d5] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose T&T Dumpsters?
            </h2>
            <p className="text-xl text-blue-100">
              Over 55 years of experience serving Utah with reliable dumpster rental services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day delivery available</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Best rates guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-blue-100">Family-owned since 1965</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our dumpster rental services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What sizes do you offer?</h3>
                <p className="text-gray-600">We offer dumpsters from 10 to 40 cubic yards to accommodate projects of all sizes.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">How long can I keep the dumpster?</h3>
                <p className="text-gray-600">Rental periods range from 1 day to several months, depending on your needs and service type.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you deliver on weekends?</h3>
                <p className="text-gray-600">Yes, we offer weekend delivery and pickup services for your convenience.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What can I put in the dumpster?</h3>
                <p className="text-gray-600">Most construction debris, household items, and general waste. Hazardous materials are not permitted.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you provide same-day delivery?</h3>
                <p className="text-gray-600">Yes, same-day delivery is available in most areas when ordered before 2 PM.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I get a quote?</h3>
                <p className="text-gray-600">Call us at (801) 209-9013 for a free same-day estimate, or fill out our online contact form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
