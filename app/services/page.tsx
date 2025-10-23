import { Metadata } from 'next'
import DumpsterFinder from '@/components/DumpsterFinder'
import RecommendationCards from '@/components/RecommendationCards'
import SizeComparison from '@/components/SizeComparison'
import MaterialRules from '@/components/MaterialRules'
import ZipStickyBar from '@/components/ZipStickyBar'
import { FinderProvider } from '@/components/FinderContext'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services | Dumpster Rental | TNT Dump',
  description:
    'Local roll off dumpster rental for homes, remodels, and contractors in Salt Lake & Utah County. Fast delivery dumpster rental and clear dumpster rental price—call (801) 209-9013.',
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <FinderProvider>
        <section id="finder">
          <DumpsterFinder />
        </section>

        {/* SEO SWEEP START [/services] */}
        <section className="mt-8 text-gray-700 text-sm space-y-3">
          <p>
            Find local dumpster rental options that fit your project. We help homeowners and contractors choose the right roll off dumpster size with quick delivery in Salt Lake & Utah County.
          </p>
          <p>
            Planning a home cleanout, kitchen remodel, roof replacement, or landscaping project? Our team recommends sizes and confirms weight limits up front so your dumpster rental cost stays clear.
          </p>
          <p>
            Need speed or job site support? Check <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> availability and see how we support <a href="/#contractors" className="text-blue-600 hover:underline">construction dumpster rental</a> with swaps and reliable timing.
          </p>
          <p>
            For pricing details and what affects totals, review our <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> section on the homepage.
          </p>
        </section>
        {/* SEO SWEEP END [/services] */}

        <div id="recommendations" className="mt-10">
          <RecommendationCards />
        </div>
        <section className="mt-16">
          <SizeComparison />
        </section>
        <section id="material-rules" className="mt-16">
          <MaterialRules />
        </section>
        <ZipStickyBar />
      </FinderProvider>

      {/* SEO SWEEP START [/services-schema] */}
      {/* Service JSON-LD for Services page (no LocalBusiness here) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: [
              'Residential Dumpster Rental',
              'Commercial Dumpster Rental',
              'Construction Dumpster Rental',
            ],
            areaServed: 'Salt Lake & Utah County',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TNT Dump',
              telephone: '(801) 209-9013',
            },
          }),
        }}
      />

      {/* Short FAQ and matching FAQPage schema */}
      <section className="mt-12 max-w-3xl mx-auto">
        <div className="space-y-3">
          <details className="border rounded p-4 bg-gray-50">
            <summary className="font-semibold cursor-pointer">How do I choose a dumpster size?</summary>
            <div className="mt-2">
              Tell us your project—garage cleanout, kitchen remodel, or roofing—and well recommend a roll off dumpster with the right weight limit.
            </div>
          </details>
          <details className="border rounded p-4 bg-gray-50">
            <summary className="font-semibold cursor-pointer">What impacts dumpster rental price?</summary>
            <div className="mt-2">
              Size, material, tonnage, route distance, and time. See <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> for a quick overview.
            </div>
          </details>
          <details className="border rounded p-4 bg-gray-50">
            <summary className="font-semibold cursor-pointer">Do you offer fast delivery?</summary>
            <div className="mt-2">
              Yes—check <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> availability and well confirm your delivery window.
            </div>
          </details>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I choose a dumpster size?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Describe your project—garage cleanout, kitchen remodel, or roofing—and we will recommend a roll off dumpster with the right weight limit.',
                },
              },
              {
                '@type': 'Question',
                name: 'What impacts dumpster rental price?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Size, material, tonnage, route distance, and rental time affect totals. See the homepage pricing section for a quick overview.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer fast delivery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes, same-day delivery may be available depending on routes. We confirm your delivery window when you book.',
                },
              },
            ],
          }),
        }}
      />
      {/* SEO SWEEP END [/services-schema] */}

      <div className="sr-only">
        <a href="/services/all">View all services</a>
      </div>
    </main>
  )
}

