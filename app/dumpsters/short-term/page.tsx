import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Truck, Zap, Timer } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Short-Term Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Short-term roll off dumpster rental for events, weekend cleanups, and fast projects. Same-day delivery available across Salt Lake & Utah County.',
}

export default function ShortTermDumpstersPage() {
  const features = [
    '1 to 7 day rentals with easy extensions when projects run long',
    'Driveway-safe delivery using protection boards on every drop-off',
    'Morning, afternoon, and evening drop windows based on your schedule',
    'Rapid swap-outs for contractors, events, and pop-up locations',
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Perfect for weekend cleanups or tight driveways',
      capacity: '5-6 pickup truck loads',
      dimensions: "12' x 8' x 6'",
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'charged after 2 tons' },
      ],
    },
    {
      size: '20 Yard',
      description: 'Great for remodels, roofing, and light demos',
      capacity: '7-8 pickup truck loads',
      dimensions: "17.08' x 7.54' x 5.00'",
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'charged after 2 tons' },
      ],
    },
    {
      size: '30 Yard',
      description: 'Ideal for fast commercial or multi-room renovations',
      capacity: '10-12 pickup truck loads',
      dimensions: "18.25' x 7.25' x 6.63'",
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'charged after 2 tons' },
      ],
    },
    {
      size: 'Concrete Dumpster',
      description: 'Concrete, brick, or asphalt only (no mixed waste)',
      capacity: 'Heavy material only',
      dimensions: "16.46' x 8.00' x 2.67'",
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' },
      ],
    },
  ]

  const useCases = [
    'Storm debris cleanup or emergency repairs',
    'Events, festivals, and short-run venues',
    'Pre-closing cleanouts for real estate transactions',
    'Rental turnovers, flips, and property refreshes',
  ]

  const processSteps = [
    {
      title: 'Request Delivery Window',
      description: 'Call, text, or request a quote to lock in morning, afternoon, or evening drop-off.',
      icon: Truck,
    },
    {
      title: 'Load On Your Schedule',
      description: 'Keep the dumpster 1 to 7 days with easy same-day swap-outs when the job needs more space.',
      icon: Timer,
    },
    {
      title: 'Quick Pickup & Sweep',
      description: 'We haul it away when you are done and sweep the area so the site is ready to reopen.',
      icon: Zap,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Short-Term Dumpster <span className="text-primary-600">Rental</span>
              </h1>
              <p className="text-xl text-gray-600">
                Need a dumpster for a few days? We specialize in short runs for events, emergency cleanups, and quick construction work with fast delivery across the Wasatch Front.
              </p>

              {/* SEO SWEEP START [/dumpsters/short-term] */}
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Compare <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> basics or check <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> availability before you book.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Weekend or 72-hour projects with flexible drop and pick times</li>
                  <li>Contractor punch lists, roofing tear-offs, and disaster response teams</li>
                </ul>
              </div>
              {/* SEO SWEEP END [/dumpsters/short-term] */}

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">
                  Call Now: +1 (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Reserve Your Dumpster
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Same-Day Drop-Off When Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Locally Operated Since 1968</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/construction-dumpster-for-rent.png"
                  alt="Short-term dumpster staged for rapid delivery on a job site"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built Around Fast Turnarounds</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every short-term rental comes with flexible timing, transparent pricing, and the support of a local dispatcher to keep your project on schedule.
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

      {/* Short-Term Sizes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Short-Term Dumpster Sizes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our most requested sizes. Pricing includes quick turn drop-off plus flexible pickup after 1 or 7 days.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((size, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col"
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">{size.size}</h3>
                  <p className="text-gray-600">{size.description}</p>
                </div>
                <div className="space-y-2 text-gray-700 text-sm mb-6">
                  <p>
                    <strong>Capacity:</strong> {size.capacity}
                  </p>
                  <p>
                    <strong>Dimensions:</strong> {size.dimensions}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-sm font-semibold text-gray-700 mb-2 text-center uppercase tracking-wide">
                    Pricing
                  </p>
                  <ul className="space-y-3">
                    {size.pricing.map((entry, priceIndex) => (
                      <li key={priceIndex} className="border border-gray-100 rounded-lg px-4 py-2">
                        <div className="flex items-center justify-between text-base text-gray-800">
                          <span className="font-medium">{entry.label}</span>
                          <span className="font-semibold text-primary-600">{entry.value}</span>
                        </div>
                        {entry.note && (
                          <p className="text-xs text-gray-500 mt-1 text-right">{entry.note}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Need the dumpster longer than a week? Let us know at booking and we will tailor a pickup window that matches your timeline.
          </p>
        </div>
      </section>

      {/* Popular Uses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Popular Short-Term Rental Uses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Short-term rentals cover the quick-turn work most haulers avoid. We keep dumpsters moving so you can wrap jobs without delays or surprise charges.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/residential-dumpster-for-rent.png"
                  alt="Short-term dumpster supporting a pop-up project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Short-Term Rental Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dispatch team handles the scheduling so you can focus on the project. Most deliveries land within a two-hour window.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                    <StepIcon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for a Short-Term Dumpster Drop-Off?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Call or request a quote and our dispatcher will confirm your delivery window, material type, and pickup plan in a few minutes.
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
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Serving Salt Lake & Utah County</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <QuickContactForm serviceType="Short-Term Dumpster Rental" buttonText="Get Free Estimate" />
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters/short-term-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Short-Term Dumpster Rental',
            areaServed: 'Salt Lake & Utah County',
            provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' },
          }),
        }}
      />
      {/* SEO SWEEP END [/dumpsters/short-term-schema] */}
    </main>
  )
}
