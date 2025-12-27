export const metadata: Metadata = {
  title: 'All Services - TNT Dumpsters | Utah',
  description: 'Legacy services grid for TNT Dumpsters Get fast delivery and clear pricing. Call for a free quote today. Get fast delive',
  alternates: { canonical: 'https://tntdump.com/services/all' },
    openGraph: {
      title: 'All Services - TNT Dumpsters | Utah',
      description: 'Legacy services grid for TNT Dumpsters Get fast delivery and clear pricing. Call for a free quote today. Get fast delive',
      url: 'https://tntdump.com/services/all',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Services - TNT Dumpsters | Utah</h1>
            <p className="mt-4 text-lg text-gray-600">Legacy services grid for TNT Dumpsters Get fast delivery and clear pricing. Call for a free quote today. Get fast delive</p>
        </div>
      </section>
    </main>
  )
}

