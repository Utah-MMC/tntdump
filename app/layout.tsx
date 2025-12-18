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
  title: 'Dumpster Rental & Roll-Off Container Services | TNT Dumpsters',
  description: 'Local container rental in Salt Lake & Utah County. 15/20/30 yard roll-offs, fast delivery, clear pricing. Get a free quote today.',
  keywords: 'dumpster rental, roll off container, container rental price, dumpster quote, delivery container, construction container, local dumpster service',
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
        alt: 'TNT Dumpsters - Professional container rental services in Utah',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does it cost to rent a dumpster?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Container prices start at $325 for a 15-yard container, $375 for a 20-yard, and $400 for a 30-yard. All prices include a 7-day rental period. Additional charges apply for extra weight ($55 per ton) and extended rental days. Final pricing depends on size, material type, location, and rental duration. Call (801) 209-9013 for a detailed quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What affects container rental cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Several factors affect pricing: container size (15, 20, or 30 yards), material weight (billed at $55 per ton), rental duration (standard 7 days, then daily fees), route distance, disposal fees, and material type. Heavy materials like concrete or dirt may need special containers. We provide clear pricing upfront with no hidden fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer same day dumpster delivery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, same-day dumpster delivery is often available in Salt Lake & Utah County when orders are placed before our cutoff time (typically 3:00 PM). Delivery typically takes 4-6 hours depending on route and traffic. Contact us early in the day to secure same-day service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does dumpster delivery and pickup work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We schedule delivery at your preferred time, carefully place the container on your driveway or job site using protective boards when needed, and return for pickup when you call or on the preset date. Our drivers will call or text before arrival. Pickup is typically same-day or next morning when requested."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What dumpster sizes do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer three dumpster sizes: 15-yard (16' x 8' x 3.5') for small cleanouts, 20-yard (17' x 7.5' x 5') for medium remodels, and 30-yard (18' x 7.25' x 6.6') for large construction projects. Our team can help you choose the right size based on your project type and debris volume."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What items are prohibited in dumpsters?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prohibited items include liquids, paints, oils, hazardous waste, batteries, electronics, tires, and appliances (with some exceptions). Dirt and concrete require dedicated containers. We'll review restrictions when you book to ensure proper disposal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for dumpster placement?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Driveway placements typically don't require permits. Street or public right-of-way placements may require a city permit. Permit requirements vary by city in Utah. We can help you understand local requirements and provide guidance on obtaining permits if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve Salt Lake County, Utah County, Davis County, and Weber County, including cities like Salt Lake City, Provo, Orem, Lehi, West Jordan, Sandy, Murray, Layton, Ogden, and many more. Contact us to confirm service in your specific location."
                  }
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

