import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQs | Pricing, Sizes, Permits | TNT Dumpsters',
  description:
    'Get clear answers on dumpster rental pricing, sizes, delivery timing, permits, and prohibited items in Utah. Call (801) 209-9013 for help choosing.',
  alternates: { canonical: 'https://tntdump.com/faqs' },
}

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children
}
