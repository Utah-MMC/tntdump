import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Dumpster Rental Quote | TNT Dumpsters',
  description:
    'Request a free dumpster rental quote in Salt Lake & Utah County. Choose a size, share your project details, and get fast pricing from TNT Dumpsters.',
  alternates: { canonical: 'https://tntdump.com/quote' },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}


