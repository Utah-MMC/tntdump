import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Dumpster Rental Online | TNT Dumpsters',
  description:
    'Order a dumpster rental online in minutes. Choose your size, schedule delivery, and checkout securely with TNT Dumpsters in Utah.',
  alternates: { canonical: 'https://tntdump.com/cart' },
    openGraph: {
      title: 'Order Dumpster Rental Online | TNT Dumpsters',
      description: 'Order a dumpster rental online in minutes. Choose your size, schedule delivery, and checkout securely with TNT Dumpsters in Utah.',
      url: 'https://tntdump.com/cart',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children
}



