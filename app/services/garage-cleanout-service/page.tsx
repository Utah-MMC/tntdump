export const metadata: Metadata = {
  title: 'Garage Cleanout Service | TNT Dumpsters | Utah',
  description: 'Garage cleanout service in Utah for tools, junk, and old furniture. Quick scheduling, clear pricing—call (801) 209-9013.',
  keywords: 'garage cleanout, garage cleanup, garage junk removal, garage decluttering, garage organization, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/services/garage-cleanout-service' },
    openGraph: {
      title: 'Garage Cleanout Service | TNT Dumpsters | Utah',
      description: 'Garage cleanout service in Utah for tools, junk, and old furniture. Quick scheduling, clear pricing—call (801) 209-9013.',
      url: 'https://tntdump.com/services/garage-cleanout-service',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Garage Cleanout Service</h1>
            <p className="mt-4 text-lg text-gray-600">Garage cleanout service in Utah for tools, junk, and old furniture. Quick scheduling, clear pricing—call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}
