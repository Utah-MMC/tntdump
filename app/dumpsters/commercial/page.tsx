export const metadata: Metadata = {
  title: 'Commercial Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Construction and commercial dumpster rental with reliable swaps and delivery. Local service in Salt Lake & Utah County. Call (801) 209-9013 for a quote.',
  alternates: { canonical: 'https://tntdump.com/dumpsters/commercial' },
    openGraph: {
      title: 'Commercial Dumpster Rental | Dumpster Rental | TNT Dump',
      description: 'Construction and commercial dumpster rental with reliable swaps and delivery. Local service in Salt Lake & Utah County. Call (801) 209-9013 for a quote.',
      url: 'https://tntdump.com/dumpsters/commercial',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Commercial Dumpster Rental | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Construction and commercial dumpster rental with reliable swaps and delivery. Local service in Salt Lake & Utah County. Call (801) 209-9013 for a quote.</p>
        </div>
      </section>
    </main>
  )
}

