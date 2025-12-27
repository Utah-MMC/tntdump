import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TNT Dumpsters | Get a Dumpster Rental Quote',
  description:
    'Contact TNT Dumpsters for a fast dumpster rental quote in Salt Lake & Utah County. Call or request a callback—15/20/30 yard roll-offs with quick delivery.',
  alternates: { canonical: 'https://tntdump.com/contact' },
,
    openGraph: {
      title: 'Contact TNT Dumpsters | Get a Dumpster Rental Quote',
      description: 'Contact TNT Dumpsters for a fast dumpster rental quote in Salt Lake & Utah County. Call or request a callback—15/20/30 yard roll-offs with quick delivery.',
      url: 'https://tntdump.com/contact',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
