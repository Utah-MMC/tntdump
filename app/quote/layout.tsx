import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Free Dumpster Rental Quote - T&T Dumpsters | (801) 209-9013',
  description: 'Get a free same-day dumpster rental quote from T&T Dumpsters. No obligation, competitive pricing guaranteed. Fill out our form or call (801) 209-9013.',
  keywords: 'dumpster rental quote, free dumpster estimate, utah dumpster pricing, same-day quote',
  alternates: {
    canonical: 'https://tntdump.com/quote',
  },
  openGraph: {
    title: 'Get Free Dumpster Rental Quote - T&T Dumpsters',
    description: 'Get a free same-day dumpster rental quote from T&T Dumpsters. No obligation, competitive pricing guaranteed.',
    url: 'https://tntdump.com/quote',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Get your free dumpster rental quote',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Dumpster Rental Quote - T&T Dumpsters',
    description: 'Get a free same-day dumpster rental quote from T&T Dumpsters. No obligation, competitive pricing guaranteed.',
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

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
