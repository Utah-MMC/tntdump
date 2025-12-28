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
  title: 'Dumpster Rental & Roll-Off Services | TNT Dumpsters',
  description: 'Local container rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing. Get a free quote today.',
  keywords: 'dumpster rental, roll off container, container rental price, dumpster quote, delivery container, construction container, local dumpster service',
  authors: [{ name: 'TNT Dumpsters' }],
  creator: 'TNT Dumpsters',
  publisher: 'TNT Dumpsters',
  openGraph: {
    title: 'Dumpster Rental & Roll-Off Services | TNT Dumpsters',
    description: 'Local dumpster rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing. Get a free quote today.',
    url: 'https://tntdump.com',
    siteName: 'TNT Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'TNT Dumpsters - Professional container rental services in Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental & Roll-Off Services | TNT Dumpsters',
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
        {/* Microsoft Clarity tracking code for https://tntdump.com/ */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "un55u7bpa6");`}
        </Script>
        {/* Organization Schema - Helps Google identify site name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://tntdump.com/#organization",
              "name": "TNT Dumpsters",
              "url": "https://tntdump.com",
              "logo": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp",
              "description": "Professional container rental services in Salt Lake & Utah County. Fast delivery, clear pricing, and reliable service for residential and commercial projects.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "UT",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(801) 209-9013",
                "contactType": "customer service",
                "areaServed": ["US"],
                "availableLanguage": ["English"]
              },
              "sameAs": []
            })
          }}
        />
        {/* WebSite Schema with SearchAction - Critical for AI Overview */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://tntdump.com/#website",
              "name": "TNT Dumpsters",
              "url": "https://tntdump.com",
              "description": "Dumpster rental services in Salt Lake & Utah County. 15/20/30 yard roll-off containers with fast delivery and clear pricing.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://tntdump.com/cities?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TNT Dumpsters",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp"
                }
              }
            })
          }}
        />
        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": [
                "Dumpster Services",
                "Dumpster Sizes",
                "Calculator",
                "Blog",
                "Contact",
                "Get a Quote"
              ],
              "url": [
                "https://tntdump.com/dumpsters",
                "https://tntdump.com/dumpsters/short-term",
                "https://tntdump.com/calculator",
                "https://tntdump.com/blog",
                "https://tntdump.com/contact",
                "https://tntdump.com/quote"
              ]
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
              "@id": "https://tntdump.com/#localbusiness",
              "name": "TNT Dumpsters",
              "url": "https://tntdump.com",
              "telephone": "(801) 209-9013",
              "description": "Professional container rental services in Salt Lake & Utah County. Offering 15, 20, and 30 yard roll-off containers with fast delivery and transparent pricing.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Salt Lake City, UT"
                },
                {
                  "@type": "City",
                  "name": "Provo, UT"
                },
                {
                  "@type": "State",
                  "name": "Utah"
                }
              ],
              "openingHours": [
                "Mo-Fr 07:00-19:00",
                "Sa 08:00-17:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "sameAs": []
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
