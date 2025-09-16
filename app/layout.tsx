import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickySidebar from '@/components/StickySidebar'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T&T Dumpsters - Dumpster Rental Services on the Wasatch Front',
  description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
  keywords: 'dumpster rental, roll-off dumpster, dumpster rental near me, utah dumpster rental, dumpster rental utah, wasatch front dumpster rental',
  alternates: {
    canonical: 'https://tntdump.com',
  },
  openGraph: {
    title: 'T&T Dumpsters - Dumpster Rental Services on the Wasatch Front',
    description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
    url: 'https://tntdump.com',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Professional dumpster rental services in Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T&T Dumpsters - Dumpster Rental Services on the Wasatch Front',
    description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
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
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="J6l/Si6YRb7vUC03WX6kZQ" async></script>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17574419412"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17574419412');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "T&T Dumpsters",
              "description": "Professional dumpster rental services serving the Wasatch Front area for over 55 years. Residential, commercial, and industrial waste management solutions.",
              "url": "https://tntdump.com",
              "telephone": "(801) 209-9013",
              "email": "info@tntdump.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "West Jordan",
                "addressRegion": "UT",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.6097",
                "longitude": "-111.9391"
              },
              "areaServed": [
                "West Jordan, UT",
                "Salt Lake City, UT",
                "Murray, UT",
                "Sandy, UT",
                "Draper, UT",
                "Riverton, UT",
                "South Jordan, UT",
                "Taylorsville, UT",
                "Midvale, UT"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.6097",
                  "longitude": "-111.9391"
                },
                "geoRadius": "50000"
              },
              "openingHours": "Mo-Fr 07:00-21:00",
              "priceRange": "$$",
              "foundingDate": "1965",
              "numberOfEmployees": "10-50",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Credit Card",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dumpster Rental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Dumpster Rental",
                      "description": "Dumpster rental services for homeowners and residential projects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Dumpster Rental",
                      "description": "Dumpster rental services for businesses and commercial projects"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial Dumpster Rental",
                      "description": "Heavy-duty dumpster rental services for industrial operations"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "9"
              },
              "sameAs": [
                "https://tntdump.com"
              ]
            })
          }}
        />
        {/* Phone Call Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Track phone call clicks
              document.addEventListener('DOMContentLoaded', function() {
                const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
                phoneLinks.forEach(link => {
                  link.addEventListener('click', function() {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'engagement',
                        event_label: 'phone_click',
                        value: 1
                      });
                    }
                  });
                });
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
