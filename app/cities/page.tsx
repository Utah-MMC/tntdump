export const metadata: Metadata = {
  title: 'Cities We Serve | Dumpster Rental in Utah | TNT Dumpsters',
  description:
    'Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.',
  alternates: { canonical: 'https://tntdump.com/cities' },
    openGraph: {
      title: 'Cities We Serve | Dumpster Rental in Utah | TNT Dumpsters',
      description: 'Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.',
      url: 'https://tntdump.com/cities',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cities We Serve | Dumpster Rental in Utah</h1>
            <p className="mt-4 text-lg text-gray-600">Browse all cities we serve across the Wasatch Front. Find your city and view local dumpster rental services, pricing, and same-day estimates.</p>
        </div>
      </section>
    </main>
  )
}

