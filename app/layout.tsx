import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T&T Dumpsters - Dumpster Rental Services on the Wasatch Front',
  description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
  keywords: 'dumpster rental, roll-off dumpster, dumpster rental near me, utah dumpster rental, dumpster rental utah, wasatch front dumpster rental',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
