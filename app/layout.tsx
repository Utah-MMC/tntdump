import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { SITE_URL, canonicalizePath } from '@/lib/seo/canonical'
import CanonicalFallback from './(seo)/CanonicalFallback'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import dynamic from 'next/dynamic'

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false, loading: () => null })

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// Canonical/absolute URLs base

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  alternates: { canonical: '/' },
  title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dump',
  description: 'Local dumpster rental in Salt Lake & Utah County with fast delivery, same day options, and upfront prices. Get a dumpster rental quote for construction or home cleanups.',
  keywords: 'dumpster rental, roll off dumpster rental, dumpster rental price, dumpster rental quote, delivery dumpster rental, construction dumpster rental, local dumpster rental',
  openGraph: {
    title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dump',
    description: 'Local dumpster rental in Salt Lake & Utah County. Fast delivery, same day options, and honest pricing. Get a dumpster rental quote today.',
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
    title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dump',
    description: 'Local dumpster rental with delivery and same day availability. Get a price and quote fast.',
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
        {/* Fallback canonical for top-level routes */}
        <CanonicalFallback path={canonicalizePath('/')} />
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
        {/* Main stylesheet */}
        <link rel="preload" as="style" href="/css/main.4f897a.css" />
        <link rel="stylesheet" href="/css/main.4f897a.css" />
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon-16x16.png" />
        <link rel="manifest" href="/images/logo/site.webmanifest" />
        <link rel="icon" href="/images/logo/favicon.ico" />
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
              "name": "TNT Dump",
              "url": "https://tntdump.com",
              "telephone": "(801) 209-9013",
              "areaServed": "Salt Lake & Utah County",
              "openingHours": [
                "Mo-Fr 07:00-19:00",
                "Sa 08:00-17:00"
              ],
              "sameAs": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is a dumpster rental?",
                  "acceptedAnswer": {"@type":"Answer","text":"Dumpster rental price depends on size, material, and service area. Call (801) 209-9013 for a quick dumpster rental quote and upfront options."}
                },
                {
                  "@type": "Question",
                  "name": "What affects dumpster rental cost?",
                  "acceptedAnswer": {"@type":"Answer","text":"Weight, roll off dumpster size, rental time, route distance, and disposal fees affect dumpster rental cost. We confirm delivery dumpster rental details before drop-off."}
                },
                {
                  "@type": "Question",
                  "name": "Do you offer same day dumpster rental?",
                  "acceptedAnswer": {"@type":"Answer","text":"Yes, same day service is often available in Salt Lake & Utah County. Contact us early for availability."}
                },
                {
                  "@type": "Question",
                  "name": "How do delivery and pick-up work?",
                  "acceptedAnswer": {"@type":"Answer","text":"We schedule delivery dumpster rental, place the bin safely, and pick up on call or by preset date. Simple and fast."}
                }
              ]
            })
          }}
        />
        {/* Phone Call Tracking */}
        <Script id="phone-click-tracking" strategy="lazyOnload">
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
        <ChatWidget />
      </body>
    </html>
  )
}

