import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | TNT Dumpsters',
  description: 'Terms of service for TNT Dumpsters. Learn about our service terms and conditions. Get fast delivery and clear pricing. C',
  alternates: { canonical: 'https://tntdump.com/terms-of-service' },
    openGraph: {
      title: 'Terms of Service | TNT Dumpsters',
      description: 'Terms of service for TNT Dumpsters. Learn about our service terms and conditions. Get fast delivery and clear pricing. C',
      url: 'https://tntdump.com/terms-of-service',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-600">Terms of service for TNT Dumpsters. Learn about our service terms and conditions. Get fast delivery and clear pricing. C</p>
        </div>
      </section>
    </main>
  )
}

