import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import DeferredChatWidget from '@/components/DeferredChatWidget'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// Determine the base URL for absolute metadata URLs (OG/Twitter/canonical)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dumpsters',
  description: 'Local dumpster rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing. Get a free quote today.',
  keywords: 'dumpster rental, roll off dumpster rental, dumpster rental price, dumpster rental quote, delivery dumpster rental, construction dumpster rental, local dumpster rental',
  authors: [{ name: 'TNT Dumpsters' }],
  creator: 'TNT Dumpsters',
  publisher: 'TNT Dumpsters',
  openGraph: {
    title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dumpsters',
    description: 'Local dumpster rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing. Get a free quote today.',
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
    title: 'Dumpster Rental & Roll Off Dumpster Rental | TNT Dumpsters',
    description: 'Local dumpster rental in Salt Lake & Utah County. Fast delivery, clear pricing, easy pickup. Get a free quote today.',
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
}

// Allow easy runtime control over non-essential third-party analytics
const ENABLE_AHREFS =
  typeof process.env.NEXT_PUBLIC_ENABLE_AHREFS === 'undefined'
    ? true
    : process.env.NEXT_PUBLIC_ENABLE_AHREFS !== 'false'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* GTM - deferred until user interaction or 4s timeout for better TBT */}
        <Script id="gtm-deferred" strategy="lazyOnload">
          {`(function(){
            var loaded=false;
            function loadGTM(){
              if(loaded)return;loaded=true;
              window.dataLayer=window.dataLayer||[];
              window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var s=document.createElement('script');s.async=true;
              s.src='https://www.googletagmanager.com/gtm.js?id=GTM-WFJHM33W';
              document.head.appendChild(s);
            }
            if('requestIdleCallback' in window){
              requestIdleCallback(loadGTM,{timeout:4000});
            }else{
              setTimeout(loadGTM,4000);
            }
            ['scroll','click','touchstart','keydown'].forEach(function(e){
              document.addEventListener(e,loadGTM,{once:true,passive:true});
            });
          })();`}
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
        {/* Favicon links (root paths preferred by Google Search) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {ENABLE_AHREFS && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="J6l/Si6YRb7vUC03WX6kZQ"
            strategy="lazyOnload"
          />
        )}
        {/* Note: GA4 (G-PRG0NC3ZHB) should be configured in GTM to avoid loading duplicate scripts */}
        {/* Organization Schema - Helps Google identify site name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TNT Dumpsters",
              "url": "https://tntdump.com",
              "logo": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp",
              "sameAs": []
            })
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TNT Dumpsters",
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
                  "name": "How much does it cost?",
                  "acceptedAnswer": {"@type":"Answer","text":"Price depends on size, material, and service area. Call (801) 209-9013 for a quick quote and upfront options."}
                },
                {
                  "@type": "Question",
                  "name": "What affects the cost?",
                  "acceptedAnswer": {"@type":"Answer","text":"Weight, roll-off container size, rental time, route distance, and disposal fees affect cost. We confirm delivery details before drop-off."}
                },
                {
                  "@type": "Question",
                  "name": "Do you offer same day service?",
                  "acceptedAnswer": {"@type":"Answer","text":"Yes, same day service is often available in Salt Lake & Utah County. Contact us early for availability."}
                },
                {
                  "@type": "Question",
                  "name": "How do delivery and pick-up work?",
                  "acceptedAnswer": {"@type":"Answer","text":"We schedule delivery, place the container safely, and pick up on call or by preset date. Simple and fast."}
                }
              ]
            })
          }}
        />
        {/* Phone Call Tracking - uses dataLayer for GTM */}
        <Script id="phone-click-tracking" strategy="lazyOnload">
          {`
            document.querySelectorAll('a[href^="tel:"]').forEach(function(link){
              link.addEventListener('click',function(){
                window.dataLayer=window.dataLayer||[];
                window.dataLayer.push({event:'phone_call',event_category:'engagement',event_label:'phone_click'});
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
        <DeferredChatWidget />
      </body>
    </html>
  )
}

