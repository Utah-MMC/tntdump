export const metadata: Metadata = {
  title: 'Privacy Policy | TNT Dumpsters',
  description: 'Privacy policy for TNT Dumpsters. Learn how we collect, use, and protect your personal information. Get fast delivery an',
  alternates: { canonical: 'https://tntdump.com/privacy-policy' },
    openGraph: {
      title: 'Privacy Policy | TNT Dumpsters',
      description: 'Privacy policy for TNT Dumpsters. Learn how we collect, use, and protect your personal information. Get fast delivery an',
      url: 'https://tntdump.com/privacy-policy',
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-600">Privacy policy for TNT Dumpsters. Learn how we collect, use, and protect your personal information. Get fast delivery an</p>
        </div>
      </section>
    </main>
  )
}

