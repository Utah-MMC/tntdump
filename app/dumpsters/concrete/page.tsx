import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, HardHat } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export default function ConcreteDumpstersPage() {
  const features = [
    'Heavy-duty construction for concrete disposal',
    'Reinforced design for heavy materials',
    'Construction and demolition waste',
    'Brick and masonry disposal',
    'Asphalt and paving materials',
    'Large capacity for heavy debris',
    'Specialized equipment for placement',
    'Compliance with weight regulations'
  ]

  const sizes = [
    {
      size: 'Concrete Dumpster',
      description: 'Concrete, brick, or asphalt only (no mixed waste)',
      capacity: 'Heavy material only',
      dimensions: 'Contact for available sizes',
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' }
      ]
    }
  ]

  const materials = [
    {
      material: 'Concrete',
      description: 'Broken concrete, slabs, foundations, and concrete debris from construction projects.',
      weight: 'Heavy - up to 4,000 lbs per cubic yard'
    },
    {
      material: 'Brick & Masonry',
      description: 'Bricks, blocks, stone, and other masonry materials from demolition or renovation.',
      weight: 'Heavy - up to 3,000 lbs per cubic yard'
    },
    {
      material: 'Asphalt',
      description: 'Asphalt paving, driveways, and road materials from resurfacing projects.',
      weight: 'Heavy - up to 3,500 lbs per cubic yard'
    },
    {
      material: 'Construction Debris',
      description: 'Mixed construction materials including concrete, brick, and other heavy debris.',
      weight: 'Varies - typically 2,000-4,000 lbs per cubic yard'
    }
  ]

  const benefits = [
    {
      icon: HardHat,
      title: 'Heavy-Duty Construction',
      description: 'Specially designed dumpsters built to handle the weight and density of concrete and masonry materials.'
    },
    {
      icon: Truck,
      title: 'Specialized Equipment',
      description: 'Equipment designed to safely transport and place heavy concrete dumpsters at your site.'
    },
    {
      icon: CheckCircle,
      title: 'Weight Compliance',
      description: 'We ensure all loads meet weight regulations and safety standards for transportation.'
    },
    {
      icon: Clock,
      title: 'Project Efficiency',
      description: 'Keep your construction or demolition project on schedule with reliable concrete waste disposal.'
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
                Concrete Dumpsters for{' '}
                <span className="text-primary-600">Heavy Materials</span>
              </h1>
              <p className="text-xl text-gray-600">
                Specialized dumpsters designed for heavy materials like concrete, brick, and asphalt. 
                Perfect for construction and demolition projects requiring robust waste management solutions.
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
                  <span className="font-semibold">Heavy-Duty Construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Weight Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Project Ready</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/Construction-Rental-480x480.jpg"
                  alt="Concrete dumpsters for heavy construction and demolition waste disposal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Dumpster Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Concrete Dumpster Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pricing shown includes 1-day and 7-day options for concrete-only loads.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-6">{size.description}</p>
                <div className="space-y-2 text-base text-gray-700 mb-4">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                </div>
                <div className="mt-2 text-left inline-block">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center">Pricing</p>
                  <ul className="text-base text-gray-700">
                    {size.pricing.map((p, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 py-1">
                        <span className="font-medium">{p.label}</span>
                        <span className="font-bold text-blue-600">{p.value}</span>
                      </li>
                    ))}
                  </ul>
                  {size.pricing.some(p => p.note) && (
                    <p className="text-xs text-gray-500 mt-2 text-center">Notes: {size.pricing.filter(p => p.note).map(p => `${p.label} ${p.note}`).join(' · ')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Concrete Waste Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our concrete dumpsters are specifically designed to handle the unique challenges of heavy construction materials. 
              From reinforced construction to specialized placement, we provide solutions that keep your project moving forward.
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

      {/* Materials We Handle */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Materials We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our concrete dumpsters are designed to handle a variety of heavy construction and demolition materials. 
              We ensure proper disposal while maintaining safety and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{material.material}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Weight:</strong> {material.weight}
                  </p>
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
              Why Choose Our Concrete Dumpsters?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our concrete dumpster service is designed with construction and demolition projects in mind. 
              We provide reliable, compliant, and efficient solutions for heavy material disposal.
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

      {/* Weight Considerations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Weight Considerations for Concrete Disposal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Concrete and masonry materials are significantly heavier than typical construction debris. 
                Our specialized dumpsters and equipment ensure safe, compliant disposal of these heavy materials.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Weight Limits</h3>
                    <p className="text-gray-600">We carefully monitor load weights to ensure compliance with transportation regulations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proper Loading</h3>
                    <p className="text-gray-600">Our team can provide guidance on proper loading techniques to maximize capacity safely.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Equipment Safety</h3>
                    <p className="text-gray-600">We use specialized equipment designed to handle the weight and density of concrete materials.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexels-cottonbro-4551310.jpg"
                  alt="Concrete dumpster weight considerations and safety compliance"
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
            Need Concrete Waste Disposal?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation on your concrete disposal needs. 
            Our team is ready to help you with reliable, compliant concrete waste management.
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

      {/* Quick Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm 
              serviceType="Concrete Disposal"
              buttonText="Get Free Estimate"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
