import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, Calendar, RefreshCw, ClipboardCheck } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Long-Term Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Long-term dumpster rental programs with reliable pickups, scheduled swaps, and dedicated dispatcher support throughout Salt Lake & Utah County.',
}

export default function LongTermDumpstersPage() {
  const features = [
    'Weekly, bi-weekly, and on-demand pickup schedules customized to your workflow',
    'Consolidated billing with project codes and PO references for clean accounting',
    'Driveway and dock-safe delivery using boards, spotters, and seasoned drivers',
    'Dedicated dispatcher who monitors fill levels and coordinates swap-outs in advance',
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Ideal for steady commercial maintenance or small facilities',
      capacity: '5-6 pickup truck loads',
      dimensions: "12' x 8' x 6'",
      pricing: [
        { label: '1 Day', value: '$300', note: 'no tons included' },
        { label: '7 Days', value: '$325', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'applies after 2 tons' },
      ],
    },
    {
      size: '20 Yard',
      description: 'Our most popular size for manufacturing and multi-unit housing',
      capacity: '7-8 pickup truck loads',
      dimensions: "17.08' x 7.54' x 5.00'",
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'applies after 2 tons' },
      ],
    },
    {
      size: '30 Yard',
      description: 'Great for phased builds, remodel rollouts, or campus projects',
      capacity: '10-12 pickup truck loads',
      dimensions: "18.25' x 7.25' x 6.63'",
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'applies after 2 tons' },
      ],
    },
    {
      size: 'Concrete Dumpster',
      description: 'Dedicated heavy-material boxes for concrete, brick, or asphalt',
      capacity: 'Heavy material only (no mixed waste)',
      dimensions: "16.46' x 8.00' x 2.67'",
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' },
      ],
    },
  ]

  const programHighlights = [
    'Multi-month site staging with regular swap cadence',
    'Centralized invoicing for regional facility managers',
    'LEED reporting assistance for diversion tracking',
    'Locked or monitored placements on request',
  ]

  const processSteps = [
    {
      title: 'Plan Your Service Calendar',
      description: 'We align delivery windows, swap cadence, and seasonal needs before the first drop.',
      icon: Calendar,
    },
    {
      title: 'Monitor And Adjust',
      description: 'Stay in touch with your dispatcher for fill updates, overflow alerts, and special material handling.',
      icon: RefreshCw,
    },
    {
      title: 'Review & Report',
      description: 'Monthly summaries include tonnage, pickup dates, and notes so you can report back to stakeholders.',
      icon: ClipboardCheck,
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
                Long-Term Dumpster <span className="text-primary-600">Programs</span>
              </h1>
              <p className="text-xl text-gray-600">
                Keep operations moving with scheduled dumpster swaps, proactive reminders, and a local team that knows your site and priorities.
              </p>

              {/* SEO SWEEP START [/dumpsters/long-term] */}
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Review <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> basics or ask for bundled pricing on multi-site placements.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Facility waste programs with weekly swap rotations</li>
                  <li>Construction site trailers through multi-phase builds</li>
                </ul>
              </div>
              {/* SEO SWEEP END [/dumpsters/long-term] */}

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">
                  Call Now: +1 (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Schedule A Program Review
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Route Mapping & Dedicated Dispatcher</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Local Drivers Since 1968</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/dumpsters2.jpeg"
                  alt="Long-term dumpster staged on a job site"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built For Ongoing Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Long-term rentals require more than a single drop. We coordinate drivers, billing, and compliance so your team stays focused on production.
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

      {/* Sizes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Long-Term Dumpster Sizes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the container that matches your volume and pickup schedule. Adjust or swap anytime your project requirements change.
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
            Need routing for multiple sites? Our dispatcher can stagger deliveries and pickups to keep crews supplied without delay.
          </p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Long-Term Partners We Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From facilities to campus expansions, our team keeps dumpsters cycling through the job without the miscommunication that slows production.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {programHighlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/construction-site-3688262_1280.jpg"
                  alt="Crew managing long-term dumpster placements"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Our Program Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We act like an extension of your team—coordinating service calendars, tracking tonnage, and staying flexible when priorities shift.
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
            Ready To Map Your Long-Term Dumpster Plan?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Call or request a quote to lock in your delivery calendar, pickup cadence, and site requirements with our dispatcher.
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
            <QuickContactForm serviceType="Long-Term Dumpster Rental" buttonText="Get Free Estimate" />
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters/long-term-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Long-Term Dumpster Rental',
            areaServed: 'Salt Lake & Utah County',
            provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' },
          }),
        }}
      />
      {/* SEO SWEEP END [/dumpsters/long-term-schema] */}
    </main>
  )
}
