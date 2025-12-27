export const metadata: Metadata = {
  title: 'Utah Service Areas | TNT Dumpsters',
  description: 'Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get',
,
  alternates: { canonical: 'https://tntdump.com/ut/service-areas' },
    openGraph: {
      title: 'Utah Service Areas | TNT Dumpsters',
      description: 'Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get',
      url: 'https://tntdump.com/ut/service-areas',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Utah Service Areas</h1>
            <p className="mt-4 text-lg text-gray-600">Browse all Utah cities we serve. Find local dumpster rental details, pricing, and same-day delivery options by city. Get</p>
        </div>
      </section>
    </main>
  )
}
