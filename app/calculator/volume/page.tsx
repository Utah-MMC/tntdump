export const metadata: Metadata = {
  title: 'Dumpster Volume Calculator | Calculate Debris Size | TNT...',
  description: 'Estimate debris volume and get a recommended dumpster size. Room-by-room and material calculators—call (801) 209-9013. G',
  keywords: 'dumpster volume calculator, how much fits in dumpster, debris volume calculator, cubic yard calculator, construction debris calculator, renovation volume estimator',
,
  alternates: { canonical: 'https://tntdump.com/calculator/volume' },
    openGraph: {
      title: 'Dumpster Volume Calculator | Calculate Debris Size | TNT...',
      description: 'Estimate debris volume and get a recommended dumpster size. Room-by-room and material calculators—call (801) 209-9013. G',
      url: 'https://tntdump.com/calculator/volume',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tntdump.com/' },
              { '@type': 'ListItem', position: 2, name: 'Calculator', item: 'https://tntdump.com/calculator' },
              { '@type': 'ListItem', position: 3, name: 'Volume Calculator', item: 'https://tntdump.com/calculator/volume' },
            ],
          })
        }}
      />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dumpster Volume Calculator | Calculate Debris Size | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Estimate debris volume and get a recommended dumpster size. Room-by-room and material calculators—call (801) 209-9013. G</p>
        </div>
      </section>
    </main>
  )
}
