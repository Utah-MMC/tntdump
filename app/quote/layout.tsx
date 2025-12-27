import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Dumpster Rental Quote | TNT Dumpsters',
  description:
    'Request a free dumpster rental quote in Salt Lake & Utah County. Choose a size, share your project details, and get fast pricing from TNT Dumpsters.',
  alternates: { canonical: 'https://tntdump.com/quote' },
,
    openGraph: {
      title: 'Get a Dumpster Rental Quote | TNT Dumpsters',
      description: 'Request a free dumpster rental quote in Salt Lake & Utah County. Choose a size, share your project details, and get fast pricing from TNT Dumpsters.',
      url: 'https://tntdump.com/quote',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}


