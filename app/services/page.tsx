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
    'Dumpster rental services in Salt Lake & Utah County for homes and contractors. Find the right size, get clear pricing, and schedule fast delivery.',
}

// Enable ISR - revalidate daily
export const revalidate = 86400

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
            Find local dumpster rental options that fit your project. We help homeowners and contractors choose the right roll off dumpster size with quick delivery in Salt Lake & Utah County. Browse our <a href="/dumpsters" className="text-blue-600 hover:underline">dumpster types</a> or use our <a href="/calculator" className="text-blue-600 hover:underline">size calculator</a>.
          </p>
          <p>
            Planning a home cleanout, kitchen remodel, roof replacement, or landscaping project? Our team recommends sizes and confirms weight limits up front so your dumpster rental cost stays clear. See our <a href="/dumpsters/residential" className="text-blue-600 hover:underline">residential dumpster rental</a> or <a href="/dumpsters/commercial" className="text-blue-600 hover:underline">commercial dumpster rental</a> pages.
          </p>
          <p>
            Need speed or job site support? Check <a href="/services/same-day-dumpster-rental" className="text-blue-600 hover:underline">same day dumpster rental</a> availability and see how we support <a href="/#contractors" className="text-blue-600 hover:underline">construction dumpster rental</a> with swaps and reliable timing. Read our <a href="/blog" className="text-blue-600 hover:underline">dumpster rental blog</a> for tips.
          </p>
          <p>
            For pricing details and what affects totals, review our <a href="/#pricing" className="text-blue-600 hover:underline">dumpster rental cost</a> section on the homepage. <a href="/quote" className="text-blue-600 hover:underline">Get a free quote</a> for your specific project needs, or <a href="/cart" className="text-blue-600 hover:underline">order your dumpster rental online</a>.
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
              Tell us your project—garage cleanout, kitchen remodel, or roofing—and we'll recommend a roll off dumpster with the right weight limit.
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
              Yes—check <a href="/#same-day" className="text-blue-600 hover:underline">same day dumpster rental</a> availability and we'll confirm your delivery window.
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

      {/* Related Resources Section */}
      <section className="mt-16 py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Explore more dumpster rental information and services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dumpsters" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">All Dumpster Types</h3>
              <p className="text-sm text-gray-600">Browse residential, commercial, and specialty dumpsters</p>
            </a>
            <a href="/dumpsters/residential" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Residential Dumpsters</h3>
              <p className="text-sm text-gray-600">Home dumpster rental for cleanouts and remodels</p>
            </a>
            <a href="/dumpsters/commercial" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Commercial Dumpsters</h3>
              <p className="text-sm text-gray-600">Business and construction dumpster solutions</p>
            </a>
            <a href="/calculator" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Find the perfect dumpster size for your project</p>
            </a>
            <a href="/quote" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Get Free Quote</h3>
              <p className="text-sm text-gray-600">Request a free dumpster rental quote</p>
            </a>
            <a href="/blog/choose-right-dumpster-size" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Size Guide</h3>
              <p className="text-sm text-gray-600">Learn how to choose the right dumpster size</p>
            </a>
            <a href="/cities" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Cities We Serve</h3>
              <p className="text-sm text-gray-600">Find dumpster rental in your Utah city</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-600 mb-2">Dumpster Rental Blog</h3>
              <p className="text-sm text-gray-600">Tips, guides, and expert advice</p>
            </a>
          </div>
        </div>
      </section>

      <div className="sr-only">
        <a href="/services/all">View all services</a>
      </div>
    </main>
  )
}


