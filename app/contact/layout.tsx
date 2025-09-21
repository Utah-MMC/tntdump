import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact T&T Dumpsters - Free Estimates | (801) 209-9013',
  description: 'Contact T&T Dumpsters for free dumpster rental estimates. Call (801) 209-9013 or fill out our form for same-day quotes. Serving the Wasatch Front since 1965.',
  keywords: 'contact T&T Dumpsters, dumpster rental quote, free estimate, utah dumpster rental contact',
  alternates: {
    canonical: 'https://tntdump.com/contact',
  },
  openGraph: {
    title: 'Contact T&T Dumpsters - Free Estimates',
    description: 'Contact T&T Dumpsters for free dumpster rental estimates. Call (801) 209-9013 or fill out our form for same-day quotes. Serving the Wasatch Front since 1965.',
    url: 'https://tntdump.com/contact',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Contact us for free dumpster rental estimates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact T&T Dumpsters - Free Estimates',
    description: 'Contact T&T Dumpsters for free dumpster rental estimates. Call (801) 209-9013 or fill out our form for same-day quotes.',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
