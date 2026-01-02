'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import FAQ, { type QA } from '@/components/city/FAQ'

export interface CityPageTemplateProps {
  cityName: string
  citySlug: string
  state: string
  phoneNumber: string
  latitude?: string
  longitude?: string
  landmarks: Array<{
    name: string
    address: string
    url?: string
    description?: string
  }>
  businessDistricts: Array<{
    name: string
    description: string
    link: string
  }>
  permitInfo: {
    cityName: string
    phoneNumber: string
    requirements: string
  }
  contentSections: {
    overview: string
    residentialServices: string[]
    commercialServices: string[]
    whyChooseUs: string
    dumpsterSizes: Array<{
      size: string
      description: string
      useCases: string[]
    }>
    localInfo: string
    serviceAreas: string
  }
  faqItems: QA[]
}

function formatList(items: string[]): string {
  if (!items || items.length === 0) return ''
  if (items.length === 1) return items[0]
  const head = items.slice(0, -1).join(', ')
  const tail = items[items.length - 1]
  return `${head}, and ${tail}`
}

function prioritizeSummaryItems(items: string[], maxItems = 3): string[] {
  const filtered = items.filter((item) => item && item.trim().length > 0)
  if (filtered.length <= maxItems) return filtered
  if (maxItems < 2) return filtered.slice(0, maxItems)
  const head = filtered.slice(0, maxItems - 1)
  const tail = filtered[filtered.length - 1]
  return [...head, tail]
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections,
  faqItems,
}: CityPageTemplateProps) {
  const [activeTab, setActiveTab] = useState(contentSections.dumpsterSizes?.[0]?.size || '15')

  const canonicalUrl = `https://tntdump.com/${citySlug}-dumpster-rentals/service-areas/${citySlug}`
  const sizeLinks = contentSections.dumpsterSizes.map((size) => ({
    label: `${size.size} Yard Dumpster`,
    href: `/${citySlug}-dumpster-rentals/service-areas/${citySlug}/${size.size}-yard-dumpster`,
  }))

  const summaryCandidates = [
    `Same-day dumpster rentals across ${cityName}, ${state} with driveway-safe placement`,
    contentSections.residentialServices?.length
      ? `Top home projects: ${formatList(contentSections.residentialServices.slice(0, 3))}`
      : '',
    contentSections.commercialServices?.length
      ? `Commercial partnerships: ${formatList(contentSections.commercialServices.slice(0, 3))}`
      : '',
    permitInfo?.requirements ? `Permits: ${permitInfo.requirements}` : '',
  ]

  const quickSummaryItems = useMemo(
    () =>
      prioritizeSummaryItems(
        [...summaryCandidates, `Call ${phoneNumber} or book online for ${cityName} delivery windows`],
        3
      ),
    [cityName, phoneNumber, summaryCandidates]
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dumpster2-500x500-2.jpeg"
            alt={`Roll-off dumpster rental in ${cityName}, UT`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/cities" className="hover:text-white transition-colors">Cities</a>
            <span className="mx-2">/</span>
            <span className="text-white">{cityName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {cityName === 'Salt Lake City'
                  ? 'Dumpster Rental Salt Lake City - Same Day Delivery'
                  : `Dumpster Rental ${cityName}, UT - Professional Service`}
              </h1>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
              >
                {phoneNumber}
              </a>

              <p className="text-white text-lg">Mon - Fri: 6 am - 4 pm MST</p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="mb-4">
                  <Image
                    src="/images/dumpster3-500x500-1.jpeg"
                    alt={`Dumpster size chart for ${cityName}`}
                    width={220}
                    height={130}
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-gray-900 text-sm mb-4">
                  Rent dumpsters in {cityName}, from small cleanouts to large builds.
                </p>
                <a
                  href="/dumpsters"
                  className="inline-block w-full bg-teal-700 hover:bg-teal-800 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View Available Sizes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="relative z-20 -mt-12 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
            <div className="text-sm uppercase text-gray-500 mb-2">{cityName}, {state}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dumpster rental snapshot for {cityName}
            </h2>
            <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
              {quickSummaryItems.map((item) => (
                <li key={item} className="bg-gray-50 rounded-lg p-4">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rent a Roll Off Dumpster for an Affordable Rate
          </h2>
          <p className="text-lg text-gray-700 mb-6">{contentSections.overview}</p>
          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-3">With us, you&apos;ll enjoy:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">-</span>
                Professional local service that keeps your project on schedule.
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">-</span>
                Quick deliveries so you can get to work sooner.
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">-</span>
                Transparent pricing that keeps your budget on track.
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Call for an affordable rate: <a href={`tel:${phoneNumber}`} className="text-teal-600 hover:text-teal-700">{phoneNumber}</a>
            </p>
            <a
              href="/quote"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section id="dumpster-sizes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Household & Construction Dumpsters
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Use our roll off dumpsters for cleanouts, remodeling, construction, and demolition projects across {cityName}.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.dumpsterSizes.map((size) => (
              <button
                key={size.size}
                onClick={() => setActiveTab(size.size)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === size.size
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-teal-600'
                }`}
              >
                {size.size} yd
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
            {contentSections.dumpsterSizes.map((size) => (
              <div key={size.size} className={activeTab === size.size ? 'block' : 'hidden'}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {size.size} Yard Dumpster
                </h3>
                <div className="border-t border-b border-gray-200 py-4 mb-6 text-center">
                  <span className="font-semibold text-gray-900">Ideal For:</span>
                </div>
                <ul className="space-y-2">
                  {size.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start text-gray-700">
                      <span className="text-teal-600 mr-2">-</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-gray-600">{size.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
            {sizeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 transition hover:border-teal-600 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg mb-4"
            >
              Call for Best Pricing {phoneNumber}
            </a>
            <p className="text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
              Prices and availability are subject to change without notice. Capacity estimates assume standard household debris.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose TNT Dumpsters in {cityName}?</h2>
          <p className="text-xl text-blue-50 mb-10">{contentSections.whyChooseUs}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Fast Delivery', 'Clear Pricing', 'Local Support', 'Flexible Scheduling'].map((item) => (
              <div key={item} className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Convenient Dumpster Rental Service in {cityName}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{contentSections.localInfo}</p>
          <p className="text-lg text-gray-700">
            Call us at <a href={`tel:${phoneNumber}`} className="text-teal-600 hover:text-teal-700 font-semibold">{phoneNumber}</a> to order a roll off dumpster today.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Materials Our Dumpster Rentals Accept
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                Accepted Household Debris
              </h3>
              <ul className="space-y-2 text-gray-700">
                {['Household junk', 'Carpet', 'Flooring', 'Appliances', 'Furniture', 'Mattresses', 'Yard waste'].map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                Accepted Construction Debris
              </h3>
              <ul className="space-y-2 text-gray-700">
                {['Construction debris', 'Wood & drywall', 'Roofing materials', 'Concrete (separate loads)', 'Brick & block', 'Dirt (dedicated bins)'].map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-8 text-center max-w-3xl mx-auto">
            Please call to confirm restrictions for your specific materials.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our {cityName} Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              '"Fast delivery and careful placement. Great experience."',
              '"Clear pricing and great communication from start to finish."',
              '"Professional, on-time, and hassle-free service."',
            ].map((quote) => (
              <div key={quote} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <p className="text-gray-700 mb-4">{quote}</p>
                <p className="text-sm text-gray-600 font-semibold">- Verified Customer</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/reviews"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      {/* Landmarks & Districts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Service Areas Around {cityName}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Landmarks</h3>
              <ul className="space-y-2 text-gray-700">
                {landmarks.map((item) => (
                  <li key={item.name}>
                    {item.url ? (
                      <a href={item.url} className="text-teal-600 hover:underline">{item.name}</a>
                    ) : (
                      item.name
                    )}
                    {item.address ? ` - ${item.address}` : ''}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Districts</h3>
              <ul className="space-y-2 text-gray-700">
                {businessDistricts.map((district) => (
                  <li key={district.name}>
                    <a href={district.link} className="text-teal-600 hover:underline">{district.name}</a>
                    <span className="block text-sm text-gray-600">{district.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            {contentSections.serviceAreas}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
            >
              Call {phoneNumber}
            </a>
            <a
              href="/quote"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Hauling Partner</h2>
          <p className="text-xl mb-8">
            Want more business? Work with us and sell more dumpsters without the added overhead.
          </p>
          <a
            href="/partners"
            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  )
}
