export const metadata: Metadata = {
  title: 'Dumpster Rental Cost Calculator | Estimate Pricing | TNT...',
  description: 'Estimate dumpster rental pricing in Utah by size and rental period. Transparent rates for 10–30 yard roll-offs—call (801) 209-9013.',
  keywords: 'dumpster rental cost calculator, estimate dumpster cost, dumpster pricing calculator, dumpster rental price estimator, utah dumpster cost, dumpster rental rates',
,
  alternates: { canonical: 'https://tntdump.com/calculator/cost' },
    openGraph: {
      title: 'Dumpster Rental Cost Calculator | Estimate Pricing | TNT...',
      description: 'Estimate dumpster rental pricing in Utah by size and rental period. Transparent rates for 10–30 yard roll-offs—call (801) 209-9013.',
      url: 'https://tntdump.com/calculator/cost',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

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
              { '@type': 'ListItem', position: 3, name: 'Cost Calculator', item: 'https://tntdump.com/calculator/cost' },
            ],
          })
        }}
      />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Rental Cost Calculator | Estimate Pricing | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Estimate dumpster rental pricing in Utah by size and rental period. Transparent rates for 10–30 yard roll-offs—call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}
