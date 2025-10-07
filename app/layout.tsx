import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickySidebar from '@/components/StickySidebar'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// Determine the base URL for absolute metadata URLs (OG/Twitter/canonical)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'TNT Dumpsters - Dumpster Rental Services on the Wasatch Front',
  description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
  keywords: 'dumpster rental, roll-off dumpster, dumpster rental near me, utah dumpster rental, dumpster rental utah, wasatch front dumpster rental',
  metadataBase: new URL('https://tntdump.com'),
  openGraph: {
    title: 'TNT Dumpsters - Dumpster Rental Services on the Wasatch Front',
    description: 'Over 55 years of experience providing reliable, affordable dumpster rental services. Residential, commercial, and industrial dumpster rentals throughout the Wasatch Front area.',
    url: 'https://tntdump.com',
    siteName: 'TNT Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'TNT Dumpsters - Professional dumpster rental services in Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNT Dumpsters - Dumpster Rental Services on the Wasatch Front',
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
            {/* Google Tag Manager */}
            <Script id="gtm-script" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?('&l='+l):'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WFJHM33W');`}
            </Script>
        {/* Inline critical CSS for header/hero; defer rest */}
        <style dangerouslySetInnerHTML={{__html: `
          /* critical CSS */
          #site-header{backdrop-filter:saturate(120%)}
          #hero{min-height:100vh;position:relative}
          #hero .hero-bg{will-change:transform}
          #hero .hero-overlay{pointer-events:none}
          h1{letter-spacing:-0.01em}
        `}} />
        {/* Defer main stylesheet load (if/when added) */}
        <link rel="preload" as="style" href="/css/main.4f897a.css" />
        <link rel="stylesheet" href="/css/main.4f897a.css" media="print" onLoad="this.media='all'" />
        <noscript><link rel="stylesheet" href="/css/main.4f897a.css" /></noscript>
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="J6l/Si6YRb7vUC03WX6kZQ" strategy="afterInteractive" />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PRG0NC3ZHB" strategy="afterInteractive" />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PRG0NC3ZHB');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TNT Dumpsters",
              "description": "Professional dumpster rental services serving the Wasatch Front area for over 55 years. Residential, commercial, and industrial waste management solutions.",
              "url": "https://tntdump.com",
              "telephone": "(801) 209-9013",
              "email": "admin@tntdump.com",
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
        <Script id="phone-click-tracking" strategy="idle">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
              phoneLinks.forEach(link => {
                link.addEventListener('click', function() {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'phone_call', {
                      event_category: 'engagement',
                      event_label: 'phone_click',
                      value: 1
                    });
                  }
                });
              });
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFJHM33W" height="0" width="0" style={{display:'none',visibility:'hidden'}} />
        </noscript>
        <PerformanceMonitor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

