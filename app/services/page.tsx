export const metadata: Metadata = {
  title: 'Dumpster Rental Services | Dumpster Rental | TNT Dump',
  description:
    'Dumpster rental services in Salt Lake & Utah County for homes and contractors. Find the right size, get clear pricing, and schedule fast delivery.',
,
  alternates: { canonical: 'https://tntdump.com/services' },
    openGraph: {
      title: 'Dumpster Rental Services | Dumpster Rental | TNT Dump',
      description: 'Dumpster rental services in Salt Lake & Utah County for homes and contractors. Find the right size, get clear pricing, and schedule fast delivery.',
      url: 'https://tntdump.com/services',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Services | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Dumpster rental services in Salt Lake & Utah County for homes and contractors. Find the right size, get clear pricing, and schedule fast delivery.</p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Planning Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a href="/dumpster-rental-process" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">How the Process Works</h3>
              <p className="text-sm text-gray-600">Delivery, loading, and pickup explained.</p>
            </a>
            <a href="/dumpster-rental-permits" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Permits & Placement</h3>
              <p className="text-sm text-gray-600">Street placement rules and tips.</p>
            </a>
            <a href="/pricing" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Pricing Overview</h3>
              <p className="text-sm text-gray-600">What affects cost and how to plan.</p>
            </a>
            <a href="/dumpster-size-calculator" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Size Calculator</h3>
              <p className="text-sm text-gray-600">Estimate the right size quickly.</p>
            </a>
            <a href="/responsible-disposal" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Responsible Disposal</h3>
              <p className="text-sm text-gray-600">Keep loads compliant and safe.</p>
            </a>
            <a href="/dumpster-rental-faq" className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Rental FAQ</h3>
              <p className="text-sm text-gray-600">Common questions answered.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
