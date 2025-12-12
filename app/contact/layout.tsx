import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TNT Dumpsters | Dumpster Rental in Utah',
  description:
    'Call (801) 209-9013 or message TNT Dumpsters for pricing, availability, and fast dumpster delivery in Salt Lake & Utah County.',
  alternates: { canonical: 'https://tntdump.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}


