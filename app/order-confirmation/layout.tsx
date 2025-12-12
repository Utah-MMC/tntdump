import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmation | TNT Dumpsters',
  description: 'Your dumpster rental order is confirmed. Save your order ID and contact us if you need to change delivery details.',
  alternates: { canonical: 'https://tntdump.com/order-confirmation' },
  robots: { index: false, follow: false },
}

export default function OrderConfirmationLayout({ children }: { children: React.ReactNode }) {
  return children
}


