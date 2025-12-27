import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmation | TNT Dumpsters',
  description: 'Your dumpster rental order is confirmed. Save your order ID and contact us if you need to change delivery details. Get f',
  alternates: { canonical: 'https://tntdump.com/order-confirmation' },
  robots: { index: false, follow: false },
    openGraph: {
      title: 'Order Confirmation | TNT Dumpsters',
      description: 'Your dumpster rental order is confirmed. Save your order ID and contact us if you need to change delivery details.',
      url: 'https://tntdump.com/order-confirmation',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function OrderConfirmationLayout({ children }: { children: React.ReactNode }) {
  return children
}



