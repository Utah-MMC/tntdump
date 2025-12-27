export const metadata: Metadata = {
  title: 'Same Day Dumpster Rental | TNT Dumpsters | Utah',
  description: 'Same-day dumpster rental in Utah for urgent cleanups and remodels. Fast delivery—call (801) 209-9013 to book. Get fast d',
  keywords: 'same day dumpster rental, emergency dumpster rental, fast dumpster delivery, urgent dumpster rental, same day delivery, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/services/same-day-dumpster-rental' },
    openGraph: {
      title: 'Same Day Dumpster Rental | TNT Dumpsters | Utah',
      description: 'Same-day dumpster rental in Utah for urgent cleanups and remodels. Fast delivery—call (801) 209-9013 to book. Get fast d',
      url: 'https://tntdump.com/services/same-day-dumpster-rental',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Same Day Dumpster Rental</h1>
            <p className="mt-4 text-lg text-gray-600">Same-day dumpster rental in Utah for urgent cleanups and remodels. Fast delivery—call (801) 209-9013 to book. Get fast d</p>
        </div>
      </section>
    </main>
  )
}

