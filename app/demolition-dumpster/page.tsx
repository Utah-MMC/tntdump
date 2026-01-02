import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, MapPin, Truck, HardHat, Building2, Wrench, Hammer, AlertTriangle, Shield } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export const metadata: Metadata = {
  title: 'Demolition Dumpster Rental | Commercial & Construction |...',
  description:
    'Demolition dumpster rental for construction, roofing, and heavy debris in Salt Lake & Utah County. Concrete and dirt dumpsters available—call (801) 209-9013.',
  keywords: [
    'demolition dumpster',
    'demolition dumpster rental',
    'commercial demolition dumpster',
    'construction dumpster rental',
    'roofing dumpster rental',
    'concrete dumpster rental',
    'dirt dumpster rental',
    'demolition waste disposal',
    'construction debris removal',
    'commercial dumpster rental',
    'heavy demolition dumpster',
    'roofing debris dumpster',
    'concrete disposal',
    'dirt disposal',
    'Salt Lake dumpster rental',
    'Utah County dumpster rental',
  ].join(', '),
  alternates: {
    canonical: 'https://tntdump.com/demolition-dumpster',
  },
  openGraph: {
    title: 'Demolition Dumpster Rental | Commercial & Construction | TNT Dump',
    description: 'Specialized demolition dumpster rental for commercial construction, roofing, and heavy demolition projects. Concrete and dirt dumpsters available.',
    url: 'https://tntdump.com/demolition-dumpster',
    type: 'website',
  
      images: [{ url: '/images/tand-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],},
}

export default function DemolitionDumpsterPage() {
  const industries = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Large-scale commercial building projects, office renovations, and retail construction require specialized dumpsters for heavy debris.',
      materials: ['Concrete slabs', 'Steel beams', 'Drywall', 'Insulation', 'Mixed construction debris'],
    },
    {
      icon: HardHat,
      title: 'Roofing Projects',
      description: 'Roofing contractors need dumpsters designed for heavy shingles, underlayment, and roofing materials from tear-offs and replacements.',
      materials: ['Asphalt shingles', 'Roofing felt', 'Wood decking', 'Gutters', 'Flashing materials'],
    },
    {
      icon: Wrench,
      title: 'Industrial Demolition',
      description: 'Factory and warehouse demolitions generate massive amounts of heavy materials requiring specialized concrete and dirt dumpsters.',
      materials: ['Concrete foundations', 'Industrial equipment', 'Heavy machinery', 'Steel structures', 'Mixed industrial waste'],
    },
    {
      icon: Hammer,
      title: 'Residential Demolition',
      description: 'Home demolitions and major renovations require dumpsters capable of handling concrete, brick, and heavy construction materials.',
      materials: ['Concrete foundations', 'Brick walls', 'Concrete driveways', 'Patios', 'Demolition debris'],
    },
  ]

  const specializedDumpsters = [
    {
      type: 'Concrete Dumpster',
      description: 'Heavy-duty dumpster designed specifically for concrete, brick, and masonry materials from demolition projects.',
      capacity: '12-yard capacity',
      weight: 'Up to 4,000 lbs per cubic yard',
      pricing: [
        { label: '1 Day', value: '$325', note: 'billed by weight' },
        { label: '7 Days', value: '$425', note: 'billed by weight' },
      ],
      bestFor: ['Concrete demolition', 'Foundation removal', 'Driveway removal', 'Brick/masonry disposal'],
    },
    {
      type: 'Dirt Dumpster',
      description: 'Specialized dumpster for clean dirt, soil, and earth materials from excavation and grading projects.',
      capacity: '10-yard capacity',
      weight: 'Up to 2,000 lbs per cubic yard',
      pricing: [
        { label: '1 Day', value: '$299', note: 'billed by weight' },
        { label: '7 Days', value: '$349', note: 'billed by weight' },
      ],
      bestFor: ['Excavation projects', 'Grading work', 'Landscaping', 'Clean fill dirt'],
    },
    {
      type: 'Mixed Demolition Dumpster',
      description: 'Versatile dumpster for mixed demolition debris including wood, drywall, metal, and light construction materials.',
      capacity: '15, 20, or 30-yard options',
      weight: 'Varies by material type',
      pricing: [
        { label: '15 Yard - 7 Days', value: '$325', note: 'billed by weight' },
        { label: '20 Yard - 7 Days', value: '$375', note: 'billed by weight' },
        { label: '30 Yard - 7 Days', value: '$450', note: 'billed by weight' },
      ],
      bestFor: ['General demolition', 'Renovation projects', 'Mixed construction debris', 'Roofing projects'],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Heavy-Duty Construction',
      description: 'Our demolition dumpsters are built to handle the toughest materials. Reinforced construction ensures they can withstand heavy concrete, steel, and masonry loads.',
    },
    {
      icon: Truck,
      title: 'Specialized Equipment',
      description: 'We use specialized trucks and equipment designed to safely transport and place heavy demolition dumpsters at your construction or demolition site.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work around your project timeline. We offer same-day delivery when routes allow, and flexible pickup schedules to keep your demolition project on track.',
    },
    {
      icon: AlertTriangle,
      title: 'Weight Compliance',
      description: 'We carefully monitor load weights to ensure compliance with transportation regulations. Our team provides guidance on proper loading to maximize capacity safely.',
    },
  ]

  const useCases = [
    {
      project: 'Commercial Building Demolition',
      dumpster: 'Concrete + Mixed Dumpsters',
      description: 'Large commercial demolitions require multiple specialized dumpsters for concrete, steel, and mixed debris.',
    },
    {
      project: 'Roofing Tear-Off',
      dumpster: 'Mixed Demolition Dumpster',
      description: 'Roofing contractors need dumpsters that can handle heavy shingles, underlayment, and roofing materials.',
    },
    {
      project: 'Foundation Removal',
      dumpster: 'Concrete Dumpster',
      description: 'Concrete foundations require specialized concrete dumpsters designed for heavy masonry materials.',
    },
    {
      project: 'Site Excavation',
      dumpster: 'Dirt Dumpster',
      description: 'Excavation and grading projects generate clean dirt and soil that requires specialized dirt dumpsters.',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Construction-Rental-480x480.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                SPECIALIZED DEMOLITION SOLUTIONS
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Demolition Dumpster Rental for{' '}
                <span className="text-yellow-400">Commercial & Construction</span>
              </h1>
              <p className="text-xl text-gray-200">
                Specialized dumpster rental for demolition, construction, and roofing projects. Heavy-duty concrete and dirt dumpsters designed for commercial contractors, roofers, and construction professionals.
              </p>
              
              {/* SEO Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200">
                <p>
                  <strong>Commercial demolition dumpster rental</strong> for construction sites, roofing projects, and heavy demolition. We offer specialized <a href="/dumpsters/concrete" className="text-yellow-400 hover:underline">concrete dumpsters</a> and <a href="/dumpsters" className="text-yellow-400 hover:underline">dirt dumpsters</a> designed for heavy materials. Serving Salt Lake & Utah County with fast delivery and competitive pricing. Call <a href="tel:+18012099013" className="text-yellow-400 hover:underline font-semibold">(801) 209-9013</a> for a quote.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg py-4 px-8">
                  Call Now: (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center bg-white/20 hover:bg-white/30 text-white border-2 border-white font-semibold text-lg py-4 px-8">
                  Get Free Estimate
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Heavy-Duty Construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Commercial Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Same-Day Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/Construction-Rental-480x480.jpg"
                  alt="Demolition dumpster rental for commercial construction and roofing projects"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Demolition Dumpster Rental',
            name: 'Demolition Dumpster Rental Service',
            description: 'Specialized demolition dumpster rental for commercial construction, roofing, and heavy demolition projects. Concrete and dirt dumpsters available.',
            areaServed: {
              '@type': 'State',
              name: 'Utah',
            },
            provider: {
              '@type': 'LocalBusiness',
              name: 'TNT Dump',
              telephone: '(801) 209-9013',
              url: 'https://tntdump.com',
            },
            offers: {
              '@type': 'Offer',
              description: 'Demolition dumpster rental with specialized concrete and dirt dumpster options',
            },
          }),
        }}
      />

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Demolition Dumpsters for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a commercial contractor, roofer, or demolition specialist, we have the specialized dumpster solutions you need for heavy materials and large-scale projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-lg p-4 flex-shrink-0">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Common Materials:</p>
                      <ul className="space-y-1">
                        {industry.materials.map((material, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Dumpster Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Demolition Dumpsters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized dumpsters are designed for specific demolition and construction materials. Choose the right dumpster type for your project to maximize efficiency and minimize costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedDumpsters.map((dumpster, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{dumpster.type}</h3>
                  <p className="text-gray-600">{dumpster.description}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Capacity:</strong> {dumpster.capacity}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Weight:</strong> {dumpster.weight}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Pricing:</p>
                  <ul className="space-y-2">
                    {dumpster.pricing.map((price, i) => (
                      <li key={i} className="flex items-center justify-between bg-white border border-gray-200 rounded p-2">
                        <span className="text-sm font-medium text-gray-700">{price.label}</span>
                        <span className="text-lg font-bold text-blue-600">{price.value}</span>
                      </li>
                    ))}
                  </ul>
                  {dumpster.pricing.some((p) => p.note) && (
                    <p className="text-xs text-gray-500 mt-2">
                      {dumpster.pricing.filter((p) => p.note).map((p) => `${p.label}: ${p.note}`).join(' • ')}
                    </p>
                  )}
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Best For:</p>
                  <ul className="space-y-1">
                    {dumpster.bestFor.map((use, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Demolition Dumpsters?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of demolition and construction projects. Our specialized dumpsters and professional service ensure your project stays on schedule and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Demolition Project Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different demolition projects require different dumpster solutions. Here's how our specialized dumpsters work for common project types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.project}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">Recommended: {useCase.dumpster}</p>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight & Safety Considerations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Weight & Safety Considerations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Demolition materials are significantly heavier than typical construction debris. Our specialized dumpsters and equipment ensure safe, compliant disposal of heavy materials like concrete, steel, and masonry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Weight Limits & Compliance</h3>
                    <p className="text-gray-600">We carefully monitor load weights to ensure compliance with transportation regulations and safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proper Loading Guidance</h3>
                    <p className="text-gray-600">Our team provides expert guidance on proper loading techniques to maximize capacity while maintaining safety.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialized Equipment</h3>
                    <p className="text-gray-600">We use specialized trucks and equipment designed to safely handle and transport heavy demolition materials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Project Coordination</h3>
                    <p className="text-gray-600">We work with your project timeline to coordinate delivery and pickup that minimizes disruption to your work site.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/4551310.jpg"
                  alt="Heavy-duty demolition dumpster for construction and demolition projects"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Calculator - Highlighted Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-4">
              FIND THE PERFECT DUMPSTER SIZE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Use Our Dumpster Size Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure which dumpster size you need for your demolition or construction project? Our free calculator helps you find the perfect size based on your project type, materials, and debris volume. Get instant recommendations and pricing.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <DumpsterCalculator embedded={true} />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Still have questions? Our team is here to help you choose the right dumpster for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18012099013" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <Link 
                href="/quote" 
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our other specialized dumpster rental services for construction and commercial projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/dumpsters/concrete" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500">
              <HardHat className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Concrete Dumpsters</h3>
              <p className="text-gray-600 text-sm">Specialized dumpsters for concrete, brick, and masonry materials.</p>
            </Link>
            <Link href="/services/commercial" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500">
              <Building2 className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Services</h3>
              <p className="text-gray-600 text-sm">Comprehensive commercial dumpster rental for businesses.</p>
            </Link>
            <Link href="/services/industrial" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500">
              <Truck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Services</h3>
              <p className="text-gray-600 text-sm">Heavy-duty dumpster solutions for industrial projects.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Demolition Project?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation on your demolition dumpster needs. Our team specializes in commercial construction, roofing, and heavy demolition projects. We'll help you choose the right specialized dumpster for your materials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+18012099013" 
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Call Now: (801) 209-9013
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-50">
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
              <span>Serving Salt Lake & Utah County</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm 
              serviceType="Demolition Dumpster Rental"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

