import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TNT Dumpsters | Get a Dumpster Rental Quote',
  description:
    'Contact TNT Dumpsters for a fast dumpster rental quote in Salt Lake & Utah County. Call or request a callback—15/20/30 yard roll-offs with quick delivery.',
  alternates: { canonical: 'https://tntdump.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
