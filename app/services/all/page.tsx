import ServiceCard from '@/components/ServiceCard'
import HeroSection from '@/components/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Services - T&T Dumpsters | Utah',
  description: 'Legacy services grid for T&T Dumpsters',
}

const services = [
  {
    title: 'Residential Dumpster Rental',
    description: 'Perfect for home renovations, cleanouts, and DIY projects. Available in various sizes to fit your specific needs.',
    image: '/images/pexels-cottonbro-4551310.jpg',
    slug: 'residential',
    features: ['Home renovations', 'Estate cleanouts', 'Yard waste removal', 'Moving cleanouts'],
    price: '$299'
  },
  {
    title: 'Commercial Dumpster Rental',
    description: 'Reliable waste management solutions for businesses, offices, and commercial properties.',
    image: '/images/construction-site-3688262_1280.jpg',
    slug: 'commercial',
    features: ['Office cleanouts', 'Retail renovations', 'Business waste', 'Regular service'],
    price: '$399'
  },
  {
    title: 'Industrial Dumpster Rental',
    description: 'Heavy-duty dumpsters for large-scale industrial projects and construction sites.',
    image: '/images/demolition-167738_1280.jpg',
    slug: 'industrial',
    features: ['Construction waste', 'Heavy materials', 'Large capacity', 'Extended rentals'],
    price: '$599'
  },
  {
    title: 'Short-Term Dumpster Rental',
    description: 'Flexible rental options for quick projects and temporary waste management needs.',
    image: '/images/pexels-olly-3760529.jpg',
    slug: 'short-term',
    features: ['Quick projects', 'Event cleanup', 'Temporary needs', 'Flexible scheduling'],
    price: '$199'
  },
  {
    title: 'Long-Term Dumpster Rental',
    description: 'Extended rental solutions for ongoing projects and continuous waste management.',
    image: '/images/pexels-olly-3771111.jpg',
    slug: 'long-term',
    features: ['Ongoing projects', 'Monthly service', 'Cost savings', 'Regular pickup'],
    price: '$299/month'
  },
  {
    title: 'Vendor Dumpster Rental',
    description: 'Specialized dumpster services for contractors, vendors, and service providers.',
    image: '/images/pexels-jplenio-2566826.jpg',
    slug: 'vendor',
    features: ['Contractor support', 'Vendor partnerships', 'Project coordination', 'Bulk pricing'],
    price: '$349'
  },
  {
    title: 'Concrete Dumpsters',
    description: 'Heavy-duty dumpsters specifically designed for concrete, asphalt, and construction debris.',
    image: '/images/construction-site-3688252_1280.jpg',
    slug: 'concrete',
    features: ['Concrete disposal', 'Asphalt removal', 'Construction debris', 'Heavy materials'],
    price: '$499'
  },
  {
    title: 'Estate Cleanout Services',
    description: 'Comprehensive estate cleanout services with professional dumpster rental and removal.',
    image: '/images/pexels-cottonbro-4551310.jpg',
    slug: 'estate-cleanout',
    features: ['Full estate cleanout', 'Professional service', 'Sensitive handling', 'Complete removal'],
    price: 'Custom Quote'
  }
]

export default function ServicesAllPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="All Services"
        description="Legacy services grid."
        primaryButton={{ text: 'Call (801) 209-9013', href: 'tel:+18012099013' }}
        secondaryButton={{ text: 'Back to Services', href: '/services' }}
        showPhoneButton={false}
        backgroundImage="/images/construction-site-3688252_1280.jpg"
      />
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} className="h-full flex">
                <div className="w-full flex flex-col">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    slug={service.slug}
                    features={service.features}
                    price={service.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}



