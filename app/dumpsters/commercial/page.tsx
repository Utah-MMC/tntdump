import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Building } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Construction and commercial dumpster rental with reliable swaps and delivery. Local service in Salt Lake & Utah County. Call (801) 209-9013 for a quote.',
}

export default function CommercialDumpsterPage() {
  const features = [
    'Office cleanouts and renovations',
    'Retail store waste management',
    'Restaurant and food service waste',
    'Manufacturing facility cleanouts',
    'Warehouse and storage cleanouts',
    'Business relocation projects',
    'Construction site waste management',
    'Regular commercial waste pickup',
  ]

  const businessTypes = [
    {
      type: 'Office Buildings',
      description: 'Comprehensive waste management for office cleanouts, renovations, and ongoing operations.',
      services: ['Office cleanouts', 'Renovation debris', 'Regular waste pickup', 'Document disposal'],
    },
    {
      type: 'Retail Stores',
      description: 'Efficient waste management solutions for retail environments and store renovations.',
      services: ['Store cleanouts', 'Display removal', 'Packaging waste', 'Seasonal cleanups'],
    },
    {
      type: 'Restaurants',
      description: 'Specialized waste management for food service establishments and kitchen renovations.',
      services: ['Kitchen equipment disposal', 'Renovation debris', 'Non-food waste', 'Equipment upgrades'],
    },
    {
      type: 'Manufacturing',
      description: 'Heavy-duty waste management for manufacturing facilities and industrial operations.',
      services: ['Equipment disposal', 'Production waste', 'Facility cleanouts', 'Industrial debris'],
    },
  ]

  const benefits = [
    { icon: CheckCircle, title: 'Compliance Assurance', description: 'Ensure your business meets all waste disposal regulations and requirements.' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'We work around your business hours to minimize disruption to your operations.' },
    { icon: Truck, title: 'Reliable Service', description: 'Consistent, dependable waste management to keep your business clean and compliant.' },
    { icon: Building, title: 'Business Focus', description: 'Let us handle waste management so you can focus on running your business.' },
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Perfect for small commercial cleanouts and renovations',
      capacity: '5-6 pickup truck loads',
      dimensions: "12' x 8' x 6'",
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' },
      ],
    },
    {
      size: '20 Yard',
      description: 'Ideal for retail store renovations and office projects',
      capacity: '7-8 pickup truck loads',
      dimensions: "22' x 8' x 6'",
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' },
      ],
    },
    {
      size: '30 Yard',
      description: 'Great for construction debris and build-outs',
      capacity: '10-12 pickup truck loads',
      dimensions: "22' x 8' x 8'",
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton' },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Commercial Dumpster <span className="text-primary-600">Rental</span></h1>
              <p className="text-xl text-gray-600">Reliable delivery, swaps, and clear communication for business renovations and job sites.</p>
              {/* SEO SWEEP START [/dumpsters/commercial] */}
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Contractor or facilities lead? See our <a href="/#contractors" className="text-blue-600 hover:underline">construction dumpster rental</a> notes and <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> overview. Serving Salt Lake & Utah County.
                </p>
              </div>
              {/* SEO SWEEP END [/dumpsters/commercial] */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">Call Now: +1 (801) 209-9013</a>
                <a href="#contact" className="btn-secondary text-center">Get Free Estimate</a>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/construction-dumpster-for-rent.png" alt="Commercial roll off dumpster rental at a job site" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Popular Sizes</h2>
            <p className="text-gray-600 text-sm">Full pricing lives on the homepage <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> section.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizes.map((size, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{size.size}</h3>
                <p className="text-gray-600 mb-4">{size.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Capacity:</strong> {size.capacity}</p>
                  <p><strong>Dimensions:</strong> {size.dimensions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Commercial Quote?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">Call for delivery windows and on-site placement guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+18012099013" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">Call Now</a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">Contact Us</a>
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters/commercial-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Commercial Dumpster Rental',
            areaServed: 'Salt Lake & Utah County',
            provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' },
          }),
        }}
      />
      {/* SEO SWEEP END [/dumpsters/commercial-schema] */}
    </main>
  )
}

