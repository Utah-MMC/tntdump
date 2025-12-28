import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Concrete Dumpsters | Dumpster Rental | TNT Dump',
  description:
    'Concrete dumpster rental for heavy materials: concrete, brick, asphalt. Delivery with weight guidance in Salt Lake & Utah County. Call (801) 209-9013.',
  alternates: { canonical: 'https://tntdump.com/dumpsters/concrete' },
    openGraph: {
      title: 'Concrete Dumpsters | Dumpster Rental | TNT Dump',
      description: 'Concrete dumpster rental for heavy materials: concrete, brick, asphalt. Delivery with weight guidance in Salt Lake & Utah County. Call (801) 209-9013.',
      url: 'https://tntdump.com/dumpsters/concrete',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Concrete Dumpsters | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Concrete dumpster rental for heavy materials: concrete, brick, asphalt. Delivery with weight guidance in Salt Lake & Utah County. Call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}

