import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dumpster Rental FAQs - T&T Dumpsters | Utah',
  description: 'Find answers to common questions about dumpster rentals. Learn about pricing, sizes, delivery, and more from T&T Dumpsters, serving Utah since 1965.',
  keywords: 'dumpster rental FAQ, dumpster questions, utah dumpster rental help, dumpster rental information',
  alternates: {
    canonical: 'https://tntdump.com/faqs',
  },
  openGraph: {
    title: 'Dumpster Rental FAQs - T&T Dumpsters',
    description: 'Find answers to common questions about dumpster rentals. Learn about pricing, sizes, delivery, and more from T&T Dumpsters.',
    url: 'https://tntdump.com/faqs',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Frequently Asked Questions about dumpster rentals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental FAQs - T&T Dumpsters',
    description: 'Find answers to common questions about dumpster rentals. Learn about pricing, sizes, delivery, and more.',
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

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
