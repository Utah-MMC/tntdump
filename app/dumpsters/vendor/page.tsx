export const metadata: Metadata = {
  title: 'Vendor Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Contractor and vendor dumpster rentals with dependable delivery windows, swap-outs, and coordinated site access across Salt Lake & Utah County.',
  alternates: { canonical: 'https://tntdump.com/dumpsters/vendor' },
    openGraph: {
      title: 'Vendor Dumpster Rental | Dumpster Rental | TNT Dump',
      description: 'Contractor and vendor dumpster rentals with dependable delivery windows, swap-outs, and coordinated site access across Salt Lake & Utah County.',
      url: 'https://tntdump.com/dumpsters/vendor',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vendor Dumpster Rental | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Contractor and vendor dumpster rentals with dependable delivery windows, swap-outs, and coordinated site access across Salt Lake & Utah County.</p>
        </div>
      </section>
    </main>
  )
}

