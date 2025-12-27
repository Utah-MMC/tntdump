export const metadata: Metadata = {
  title: 'Residential Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Local residential dumpster rental for cleanouts, remodels, and yard projects. Fast delivery and fair pricing in Salt Lake & Utah County. Call (801) 209-9013.',
,
  alternates: { canonical: 'https://tntdump.com/dumpsters/residential' },
    openGraph: {
      title: 'Residential Dumpster Rental | Dumpster Rental | TNT Dump',
      description: 'Local residential dumpster rental for cleanouts, remodels, and yard projects. Fast delivery and fair pricing in Salt Lake & Utah County. Call (801) 209-9013.',
      url: 'https://tntdump.com/dumpsters/residential',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Residential Dumpster Rental | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Local residential dumpster rental for cleanouts, remodels, and yard projects. Fast delivery and fair pricing in Salt Lake & Utah County. Call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}
