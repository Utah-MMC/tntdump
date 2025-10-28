import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, MapPin, HeartHandshake, ArrowLeftRight, ClipboardList } from 'lucide-react'
import QuickContactForm from '@/components/QuickContactForm'

export const metadata: Metadata = {
  title: 'Vendor Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Contractor and vendor dumpster rentals with dependable delivery windows, swap-outs, and coordinated site access across Salt Lake & Utah County.',
}

export default function VendorDumpstersPage() {
  const features = [
    'Same-day swaps for fast-moving crews and phased demolition schedules',
    'Clear site notes kept on file including gate codes, staging zones, and contacts',
    'Priority dispatch during peak construction hours for repeat vendor partners',
    'Flexible billing options with job numbers, lien releases, and email invoices',
  ]

  const sizes = [
    {
      size: '15 Yard',
      description: 'Ideal for tight job sites, service contractors, and punch lists',
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
      description: 'The go-to size for remodelers, roofers, and multi-trade teams',
      capacity: '7-8 pickup truck loads',
      dimensions: "22' x 8' x 6'",
      pricing: [
        { label: '1 Day', value: '$335', note: 'no tons included' },
        { label: '7 Days', value: '$375', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'applies after 2 tons' },
      ],
    },
    {
      size: '30 Yard',
      description: 'Best for general contractors and large build-out phases',
      capacity: '10-12 pickup truck loads',
      dimensions: "22' x 8' x 8'",
      pricing: [
        { label: '1 Day', value: '$345', note: 'no tons included' },
        { label: '7 Days', value: '$400', note: '2 tons included' },
        { label: 'Overage', value: '$55/ton', note: 'applies after 2 tons' },
      ],
    },
    {
      size: 'Concrete Dumpster',
      description: 'Dedicated boxes for concrete, masonry, and asphalt loads',
      capacity: 'Heavy material only (no mixed waste)',
      dimensions: 'Contact for available sizes',
      pricing: [
        { label: '1 Day', value: '$325', note: 'no tons included' },
        { label: '7 Days', value: '$425', note: 'no tons included' },
      ],
    },
  ]

  const partnerTypes = [
    'Tenant improvement crews and retail build-outs',
    'Restoration specialists handling water, fire, or mold remediation',
    'Roofing and siding contractors rotating across neighborhoods',
    'Facility maintenance teams managing recurring cleanouts',
  ]

  const processSteps = [
    {
      title: 'Lock In Your Drop Plan',
      description: 'Share access details, staging layout, and site contacts so we can deliver without delays.',
      icon: HeartHandshake,
    },
    {
      title: 'Swap When The Crew Needs It',
      description: 'Text, call, or request swaps online and we dispatch drivers that already know your site rules.',
      icon: ArrowLeftRight,
    },
    {
      title: 'Close Out With Clean Paperwork',
      description: 'Receive digital tickets, invoices, and weight slips for every haul to streamline billing.',
      icon: ClipboardList,
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
                Vendor & Contractor <span className="text-primary-600">Dumpster Rentals</span>
              </h1>
              <p className="text-xl text-gray-600">
                Keep your crews moving with punctual delivery windows, quick swaps, and a dispatcher who understands job site urgency.
              </p>

              {/* SEO SWEEP START [/dumpsters/vendor] */}
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Check <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> guidelines or visit <a href="/#contractors" className="text-blue-600 hover:underline">construction dumpster rental</a> for additional job site planning tips.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Coordinated drops before crew call times</li>
                  <li>Haul-away support for vendor fairs and pop-up events</li>
                </ul>
              </div>
              {/* SEO SWEEP END [/dumpsters/vendor] */}

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18012099013" className="btn-primary text-center">
                  Call Now: +1 (801) 209-9013
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Reserve Vendor Service
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Subcontractor-Friendly Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Verified Drivers With Site Training</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/construction-site-3688252_1280.jpg"
                  alt="Contractor coordinating a dumpster drop-off"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built Around Job Site Speed</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We run a contractor-first dispatch schedule with real people on the phone to confirm access, timing, and safety requirements before every delivery.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vendor Dumpster Sizes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pick the right container for each phase. We can stage multiple boxes or rotate one unit as crews advance across the property.
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
            Have multiple crews on different schedules? We can stage extra cans or add weekend pickups to keep things clear.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Which Vendor Programs We Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From rapid-response restoration to seasonal retail resets, the TNT dispatch team runs the dumpster logistics so your crews do not slow down.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {partnerTypes.map((item, index) => (
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
                  src="/images/dumpster3-500x500-1.jpeg"
                  alt="Contractor crew loading a vendor dumpster"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Contractor Dispatch Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You get direct access to dispatch, not a call center. That means faster responses when schedules shift or weather hits.
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
            Need A Dumpster Partner For Your Next Job?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Reach out for a customized vendor program including delivery windows, swap cadence, and billing details built around your crews.
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
            <QuickContactForm serviceType="Vendor Dumpster Rental" buttonText="Get Free Estimate" />
          </div>
        </div>
      </section>

      {/* SEO SWEEP START [/dumpsters/vendor-schema] */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Vendor Dumpster Rental',
            areaServed: 'Salt Lake & Utah County',
            provider: { '@type': 'LocalBusiness', name: 'TNT Dump', telephone: '(801) 209-9013' },
          }),
        }}
      />
      {/* SEO SWEEP END [/dumpsters/vendor-schema] */}
    </main>
  )
}
