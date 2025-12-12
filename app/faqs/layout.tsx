import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQs | Sizes, Pricing & Rules | TNT Dumpsters',
  description:
    'Dumpster rental FAQs: pricing, sizes, weight limits, delivery timing, permits, and what you can toss. Serving Salt Lake & Utah County.',
  alternates: { canonical: 'https://tntdump.com/faqs' },
}

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children
}


