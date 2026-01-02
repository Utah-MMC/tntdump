'use client'

import FAQ, { type QA } from '@/components/city/FAQ'
import Link from 'next/link'

type ServicePageTemplateProps = {
  title: string
  subtitle: string
  description: string
  heroImage: string
  benefits: string[]
  useCases: string[]
  faqs: QA[]
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  useCases,
  faqs,
  primaryCta,
  secondaryCta,
}: ServicePageTemplateProps) {
  const resourceLinks = [
    { label: 'Dumpster Rental Process', href: '/dumpster-rental-process' },
    { label: 'Dumpster Rental Permits', href: '/dumpster-rental-permits' },
    { label: 'Responsible Disposal', href: '/responsible-disposal' },
    { label: 'Property Protection Tips', href: '/property-protection' },
    { label: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
    { label: 'Dumpster Rental Pricing', href: '/pricing' },
    { label: 'Dumpster Rental Fees', href: '/fees' },
  ]
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    serviceType: 'Dumpster Rental',
    areaServed: 'Utah',
    provider: {
      '@type': 'Organization',
      '@id': 'https://tntdump.com/#organization',
      name: 'TNT Dumpsters',
      url: 'https://tntdump.com',
      telephone: '(801) 209-9013',
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tntdump.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tntdump.com/services' },
      { '@type': 'ListItem', position: 3, name: title, item: 'https://tntdump.com/services' },
    ],
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-blue-50 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={primaryCta.href}
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{description}</h2>
          <p className="text-gray-700">
            TNT Dumpsters keeps delivery windows tight, pricing transparent, and pickups fast so your project stays on schedule.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why This Service Works</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-700">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Helpful Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Call for a quick quote or book online. We'll confirm size, timing, and placement details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryCta.href}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
