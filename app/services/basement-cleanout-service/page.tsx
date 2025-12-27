export const metadata: Metadata = {
  title: 'Basement Cleanout Service | TNT Dumpsters | Utah',
  description: 'Basement cleanout service in Utah for junk, furniture, and storage clutter. Fast scheduling and clear pricing—call (801) 209-9013.',
  keywords: 'basement cleanout, basement cleanup, basement junk removal, basement decluttering, storage cleanout, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/services/basement-cleanout-service' },
    openGraph: {
      title: 'Basement Cleanout Service | TNT Dumpsters | Utah',
      description: 'Basement cleanout service in Utah for junk, furniture, and storage clutter. Fast scheduling and clear pricing—call (801) 209-9013.',
      url: 'https://tntdump.com/services/basement-cleanout-service',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Basement Cleanout Service</h1>
            <p className="mt-4 text-lg text-gray-600">Basement cleanout service in Utah for junk, furniture, and storage clutter. Fast scheduling and clear pricing—call (801) 209-9013.</p>
        </div>
      </section>
    </main>
  )
}
