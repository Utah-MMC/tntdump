import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Email | TNT Dumpsters tes',
  description: 'Internal test route for email verification. Not intended for public search results. Get fast delivery and clear pricing.',
  alternates: { canonical: 'https://tntdump.com/test-email' },
  robots: { index: false, follow: false },
    openGraph: {
      title: 'Test Email | TNT Dumpsters tes',
      description: 'Internal test route for email verification. Not intended for public search results. Get fast delivery and clear pricing.',
      url: 'https://tntdump.com/test-email',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function TestEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Email Route</h1>
        <p className="text-lg text-gray-600">Internal verification page for email delivery.</p>
      </div>
    </div>
  )
}

