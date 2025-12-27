import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Size Calculator | Find the Right Size | TNT...',
  description:
    'Use our free dumpster size calculator to find the perfect dumpster for your project. Get instant recommendations, pricing, and free quotes. Call (801) 209-9013.',
  keywords:
    'dumpster size calculator, dumpster rental calculator, dumpster size guide, dumpster pricing, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/calculator' },
  openGraph: {
    title: 'Dumpster Size Calculator | Find the Right Size | TNT...',
    description:
      'Use our free dumpster size calculator to find the perfect dumpster for your project. Get instant recommendations, pricing, and free quotes. Call (801) 209-9013.',
    url: 'https://tntdump.com/calculator',
    siteName: 'TNT Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tntdump.com/' },
              { '@type': 'ListItem', position: 2, name: 'Calculator', item: 'https://tntdump.com/calculator' },
            ],
          })
        }}
      />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Size Calculator | Find the Right Size | TNT...</h1>
          <p className="mt-4 text-lg text-gray-600">
            Use our free dumpster size calculator to find the perfect dumpster for your project. Get instant
            recommendations, pricing, and free quotes. Call (801) 209-9013.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/dumpster-size-calculator', label: 'Dumpster Size Calculator' },
              { href: '/dumpster-rental-cost-calculator', label: 'Dumpster Rental Cost Calculator' },
              { href: '/tonnage-calculator', label: 'Tonnage Calculator' },
              { href: '/roofing-calculator', label: 'Roofing Calculator' },
              { href: '/demolition-calculator', label: 'Demolition Calculator' },
              { href: '/concrete-calculator', label: 'Concrete Calculator' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-gray-200 bg-white p-4 font-semibold text-teal-700 shadow-sm transition hover:border-teal-600 hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/dumpster-rental-process', label: 'Dumpster Rental Process' },
              { href: '/dumpster-rental-permits', label: 'Dumpster Rental Permits' },
              { href: '/pricing', label: 'Dumpster Pricing' },
              { href: '/fees', label: 'Fees & Surcharges' },
              { href: '/responsible-disposal', label: 'Responsible Disposal' },
              { href: '/dumpster-rental-faq', label: 'Dumpster Rental FAQs' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4 font-semibold text-teal-700 shadow-sm transition hover:border-teal-600 hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
