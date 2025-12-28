import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Rental | TNT Dumpsters | Utah',
  description: 'Roofing dumpster rental for shingle removal and roof tear-offs in Utah. Heavy debris capacity, fast delivery—call (801) 209-9013.',
  keywords: 'roofing dumpster, roof tear-off dumpster, shingle disposal, roofing debris removal, roof replacement dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/roofing-dumpster-rental' },
    openGraph: {
      title: 'Roofing Dumpster Rental | TNT Dumpsters | Utah',
      description: 'Roofing dumpster rental for shingle removal and roof tear-offs in Utah. Heavy debris capacity, fast delivery—call (801) 209-9013.',
      url: 'https://tntdump.com/services/roofing-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Roofing Dumpster Rental</h1>
            <p className="mt-4 text-lg text-gray-600">Roofing dumpster rental for shingle removal and roof tear-offs in Utah. Heavy debris capacity, fast delivery—call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}

