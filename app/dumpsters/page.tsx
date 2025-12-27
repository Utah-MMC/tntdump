export const metadata: Metadata = {
  title: 'Dumpster Services | Dumpster Rental | TNT Dump',
  description:
    'Roll-off dumpster rentals for residential, commercial, and construction projects in Salt Lake & Utah County. Fast delivery, clear pricing, easy pickup.',
  alternates: { canonical: 'https://tntdump.com/dumpsters' },
    openGraph: {
      title: 'Dumpster Services | Dumpster Rental | TNT Dump',
      description: 'Roll-off dumpster rentals for residential, commercial, and construction projects in Salt Lake & Utah County. Fast delivery, clear pricing, easy pickup.',
      url: 'https://tntdump.com/dumpsters',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Services | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Roll-off dumpster rentals for residential, commercial, and construction projects in Salt Lake & Utah County. Fast delivery, clear pricing, easy pickup.</p>
        </div>
      </section>
    </main>
  )
}

