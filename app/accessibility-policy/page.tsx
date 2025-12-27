export const metadata: Metadata = {
  title: 'Accessibility Policy | TNT Dumpsters',
  description: 'Accessibility policy for TNT Dumpsters. Our commitment to making our services accessible to all customers. Get fast deli',
  alternates: { canonical: 'https://tntdump.com/accessibility-policy' },
    openGraph: {
      title: 'Accessibility Policy | TNT Dumpsters',
      description: 'Accessibility policy for TNT Dumpsters. Our commitment to making our services accessible to all customers. Get fast deli',
      url: 'https://tntdump.com/accessibility-policy',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Accessibility Policy</h1>
            <p className="mt-4 text-lg text-gray-600">Accessibility policy for TNT Dumpsters. Our commitment to making our services accessible to all customers. Get fast deli</p>
        </div>
      </section>
    </main>
  )
}

