import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Dumpster Rental Online | TNT Dumpsters',
  description:
    'Order a dumpster rental online in minutes. Choose your size, schedule delivery, and checkout securely with TNT Dumpsters in Utah.',
  alternates: { canonical: 'https://tntdump.com/cart' },
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children
}


