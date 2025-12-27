import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQs | Pricing, Sizes, Permits | TNT...',
  description:
    'Get clear answers on dumpster rental pricing, sizes, delivery timing, permits, and prohibited items in Utah. Call (801) 209-9013 for help choosing.',
  alternates: { canonical: 'https://tntdump.com/faqs' },
    openGraph: {
      title: 'Dumpster Rental FAQs | Pricing, Sizes, Permits | TNT Dumpsters',
      description: 'Get clear answers on dumpster rental pricing, sizes, delivery timing, permits, and prohibited items in Utah. Call (801) 209-9013 for help choosing.',
      url: 'https://tntdump.com/faqs',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children
}

