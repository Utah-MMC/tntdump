import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Dumpster Rental | Dumpster Rental | TNT Dump',
  description:
    'Short-term roll off dumpster rental for events, weekend cleanups, and fast projects. Same-day delivery available across Salt Lake & Utah County.',
  alternates: { canonical: 'https://tntdump.com/dumpsters/short-term' },
    openGraph: {
      title: 'Short-Term Dumpster Rental | Dumpster Rental | TNT Dump',
      description: 'Short-term roll off dumpster rental for events, weekend cleanups, and fast projects. Same-day delivery available across Salt Lake & Utah County.',
      url: 'https://tntdump.com/dumpsters/short-term',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Short-Term Dumpster Rental | Dumpster Rental | TNT Dump</h1>
            <p className="mt-4 text-lg text-gray-600">Short-term roll off dumpster rental for events, weekend cleanups, and fast projects. Same-day delivery available across Salt Lake & Utah County.</p>
        </div>
      </section>
    </main>
  )
}

