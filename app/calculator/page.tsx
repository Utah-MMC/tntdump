import { Metadata } from 'next'
import DumpsterCalculator from '@/components/DumpsterCalculator'

export const metadata: Metadata = {
  title: 'Dumpster Rental Cost Calculator - T&T Dumpsters | Utah',
  description: 'Get an instant price estimate for your dumpster rental. Our calculator includes special rates, veteran discounts, and accurate pricing for Utah. Call (801) 209-9013.',
  keywords: 'dumpster rental calculator, dumpster pricing, utah dumpster rental cost, dumpster estimate, veteran discount dumpster',
  alternates: {
    canonical: 'https://tntdump.com/calculator',
  },
  openGraph: {
    title: 'Dumpster Rental Cost Calculator - T&T Dumpsters',
    description: 'Get an instant price estimate for your dumpster rental. Our calculator includes special rates, veteran discounts, and accurate pricing for Utah.',
    url: 'https://tntdump.com/calculator',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Dumpster Rental Cost Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Cost Calculator - T&T Dumpsters',
    description: 'Get an instant price estimate for your dumpster rental. Our calculator includes special rates, veteran discounts, and accurate pricing for Utah.',
    images: ['https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <DumpsterCalculator />
    </main>
  )
}