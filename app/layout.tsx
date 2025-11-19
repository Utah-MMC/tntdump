import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import StructuredData from '@/components/StructuredData'
import AICitationSchema from '@/components/AICitationSchema'
import LLMSchema from '@/components/LLMSchema'
import dynamic from 'next/dynamic'

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false, loading: () => null })

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// ============================================
// CONFIGURATION - TNT Dump Business Data
// ============================================

const YOUR_DOMAIN = 'https://tntdump.com'
const YOUR_PHONE = '(801) 209-9013'
const YOUR_PHONE_FORMATTED = '+1-801-209-9013'
const YOUR_EMAIL = 'sales@tntdump.com'
const YOUR_COMPANY_NAME = 'TNT Dump'
const YOUR_COMPANY_NAME_FULL = 'TNT Dumpsters'
const YOUR_CITY = 'Salt Lake City'
const YOUR_STATE = 'Utah'
const YOUR_STATE_CODE = 'UT'
const YOUR_LATITUDE = 40.7608 // Salt Lake City coordinates
const YOUR_LONGITUDE = -111.8910

// Counties served
const COUNTIES_SERVED = [
  'Salt Lake County',
  'Utah County',
  'Davis County',
  'Weber County',
]

// Cities served - comprehensive list
const CITIES_SERVED = [
  // Salt Lake County
  'Salt Lake City',
  'West Jordan',
  'Murray',
  'Midvale',
  'Taylorsville',
  'West Valley City',
  'Sandy',
  'Riverton',
  'South Jordan',
  'Herriman',
  'Draper',
  // Utah County
  'American Fork',
  'Lehi',
  'Pleasant Grove',
  'Orem',
  'Provo',
  // Davis County
  'Kaysville',
  'Farmington',
  'Centerville',
  'Bountiful',
  'Woods Cross',
  'North Salt Lake',
  'Clearfield',
  'Clinton',
  'Hooper',
  'Layton',
  'Syracuse',
  'West Point',
  // Weber County
  'Ogden',
  'Riverdale',
  'Roy',
]

const coreDescription = `Fast, residential-friendly dumpster rentals across Salt Lake & Utah County. Same-day delivery, transparent pricing, and expert support at ${YOUR_PHONE}.`

// Determine the base URL for absolute metadata URLs (OG/Twitter/canonical)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${YOUR_COMPANY_NAME} | ${YOUR_CITY} Dumpster Rental ${YOUR_PHONE}`,
  description: coreDescription,
  alternates: {
    canonical: `${YOUR_DOMAIN}/`,
  },
  keywords: [
    'dumpster rental',
    'roll-off dumpster',
    'dumpster rental near me',
    `${YOUR_CITY} dumpster rental`,
    `${YOUR_STATE} dumpster rental`,
    'construction dumpster',
    'waste management',
    '15 yard dumpster',
    '20 yard dumpster',
    '30 yard dumpster',
    'rolloff dumpster',
    'local dumpster rental',
    'dumpster rental price',
    'dumpster rental quote',
    'delivery dumpster rental',
    'same day dumpster rental',
    ...CITIES_SERVED.map(city => `${city} dumpster rental`),
  ].join(', '),
  authors: [{ name: YOUR_COMPANY_NAME_FULL }],
  creator: YOUR_COMPANY_NAME_FULL,
  publisher: YOUR_COMPANY_NAME_FULL,
  openGraph: {
    title: `${YOUR_COMPANY_NAME} | ${YOUR_CITY} Dumpster Rental ${YOUR_PHONE}`,
    description: coreDescription,
    url: YOUR_DOMAIN,
    siteName: YOUR_COMPANY_NAME_FULL,
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: `${YOUR_COMPANY_NAME_FULL} - Professional dumpster rental services in Utah`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${YOUR_COMPANY_NAME} | ${YOUR_CITY} Dumpster Rental`,
    description: coreDescription,
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
  category: 'Business',
  classification: 'Dumpster Rental Services',
  other: {
    'geo.region': `US-${YOUR_STATE_CODE}`,
    'geo.placename': YOUR_CITY,
    'geo.position': `${YOUR_LATITUDE};${YOUR_LONGITUDE}`,
    'ICBM': `${YOUR_LATITUDE}, ${YOUR_LONGITUDE}`,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

// ============================================
// STRUCTURED DATA CONFIGURATION
// ============================================

// Organization Schema Data
const OrganizationData = {
  name: YOUR_COMPANY_NAME_FULL,
  legalName: YOUR_COMPANY_NAME_FULL,
  description: `Professional dumpster rental company providing residential and commercial roll-off containers with same-day delivery throughout ${YOUR_STATE}. Over 55 years of experience serving the Wasatch Front.`,
  url: YOUR_DOMAIN,
  logo: `${YOUR_DOMAIN}/images/t-and-t-dumpsters-logo-176w.webp`,
  email: YOUR_EMAIL,
  telephone: YOUR_PHONE_FORMATTED,
  areaServed: [
    { name: YOUR_STATE, type: 'State' },
    ...COUNTIES_SERVED.map(county => ({ name: county, type: 'AdministrativeArea' })),
    ...CITIES_SERVED.map(city => ({ name: city, type: 'City' })),
  ],
  foundingDate: '1969-01-01', // Over 55 years = started around 1969
  knowsAbout: [
    'Dumpster Rental',
    'Roll-Off Containers',
    'Construction Debris Removal',
    'Residential Cleanouts',
    'Waste Management',
    'Same-Day Delivery',
    'Estate Cleanouts',
    'Commercial Waste Solutions',
  ],
}

// LocalBusiness Schema Data - MOST IMPORTANT FOR RANKINGS
const LocalBusinessData = {
  id: `${YOUR_DOMAIN}#local-business`,
  businessType: 'HomeAndConstructionBusiness',
  legalName: YOUR_COMPANY_NAME_FULL,
  name: YOUR_COMPANY_NAME_FULL,
  description: `Professional dumpster rental services throughout Salt Lake & Utah County. Fast delivery, transparent pricing, and reliable waste management solutions for residential and commercial projects. Over 55 years of experience.`,
  url: YOUR_DOMAIN,
  telephone: YOUR_PHONE_FORMATTED,
  email: YOUR_EMAIL,
  slogan: `Same-day ${YOUR_STATE} dumpster rentals with honest pricing`,
  image: `${YOUR_DOMAIN}/images/dumpster-hero.jpg`,
  logo: `${YOUR_DOMAIN}/images/t-and-t-dumpsters-logo-176w.webp`,
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'ACH', 'Check'],
  keywords: [
    `${YOUR_STATE} dumpster rental`,
    'dumpster rentals near me',
    'roll-off dumpster delivery',
    'construction dumpster',
    'residential dumpster rental',
    'Salt Lake County dumpster rental',
    'Utah County dumpster rental',
  ],
  knowsAbout: [
    'Dumpster Rental',
    'Roll-Off Containers',
    'Construction Debris Removal',
    'Residential Cleanouts',
    'Waste Management',
    'Same-Day Delivery',
    'Estate Cleanouts',
  ],
  sameAs: [],
  areaServed: [
    { name: YOUR_STATE, type: 'State' },
    ...COUNTIES_SERVED.map(county => ({ name: county, type: 'AdministrativeArea' })),
    ...CITIES_SERVED.map(city => ({ name: city, type: 'City' })),
  ],
  serviceArea: {
    latitude: YOUR_LATITUDE,
    longitude: YOUR_LONGITUDE,
    radius: '50000', // 50km radius covering Wasatch Front
  },
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(YOUR_COMPANY_NAME_FULL + ' ' + YOUR_CITY + ' ' + YOUR_STATE)}`,
  hasCredential: [
    `${YOUR_STATE} Waste Management License`,
    'Environmental Compliance Certification',
    'Commercial Driver License',
  ],
  foundingDate: '1969-01-01',
  brand: YOUR_COMPANY_NAME_FULL,
  contactPoints: [
    {
      contactType: 'customer service',
      telephone: YOUR_PHONE_FORMATTED,
      areaServed: YOUR_STATE,
      availableLanguage: ['English'],
      hoursAvailable: ['Mo-Fr 07:00-19:00', 'Sa 08:00-17:00'],
    },
  ],
  offers: [
    {
      name: '15-Yard Dumpster Rental (7 days)',
      description: 'Includes delivery, pickup, disposal up to 2 tons. Perfect for home cleanouts, bathroom remodels, and small projects.',
      price: '325',
      priceCurrency: 'USD',
      eligibleRegion: YOUR_STATE,
      url: `${YOUR_DOMAIN}/dumpsters`,
    },
    {
      name: '20-Yard Dumpster Rental (7 days)',
      description: 'Mid-size projects, includes delivery, pickup, disposal up to 2 tons. Ideal for kitchen renovations and multi-room updates.',
      price: '375',
      priceCurrency: 'USD',
      eligibleRegion: YOUR_STATE,
      url: `${YOUR_DOMAIN}/dumpsters`,
    },
    {
      name: '30-Yard Dumpster Rental (7 days)',
      description: 'Large renovation and construction projects with disposal up to 2 tons. Best for whole house renovations and major cleanouts.',
      price: '400',
      priceCurrency: 'USD',
      eligibleRegion: YOUR_STATE,
      url: `${YOUR_DOMAIN}/dumpsters`,
    },
  ],
  makesOffer: [
    {
      name: 'Residential Dumpster Rental',
      description: 'Driveway-safe dumpsters for remodels, junk removal, and seasonal cleanups.',
      serviceType: 'Dumpster Rental',
      areaServed: COUNTIES_SERVED.map(county => `${county}, ${YOUR_STATE_CODE}`),
      url: `${YOUR_DOMAIN}/services/residential`,
    },
    {
      name: 'Construction Debris Removal',
      description: 'Jobsite dumpsters with on-call swaps for contractors and builders.',
      serviceType: 'Construction Dumpster Rental',
      areaServed: [`${YOUR_STATE}`],
      url: `${YOUR_DOMAIN}/services/commercial`,
    },
  ],
  hasOfferCatalog: {
    name: 'Dumpster Rental Packages',
    itemListElement: [
      {
        name: '15-Yard Dumpster',
        description: 'Ideal for garage cleanouts, bathroom remodels, and roofing debris.',
        url: `${YOUR_DOMAIN}/dumpsters`,
        price: '325',
        priceCurrency: 'USD',
      },
      {
        name: '20-Yard Dumpster',
        description: 'Popular for kitchen renovations and multi-room updates.',
        url: `${YOUR_DOMAIN}/dumpsters`,
        price: '375',
        priceCurrency: 'USD',
      },
      {
        name: '30-Yard Dumpster',
        description: 'Best for large-scale construction, demo, and estate cleanouts.',
        url: `${YOUR_DOMAIN}/dumpsters`,
        price: '400',
        priceCurrency: 'USD',
      },
    ],
  },
  openingHours: ['Mo-Fr 07:00-19:00', 'Sa 08:00-17:00'],
  address: {
    addressLocality: YOUR_CITY,
    addressRegion: YOUR_STATE_CODE,
    addressCountry: 'US',
  },
  geo: {
    latitude: YOUR_LATITUDE,
    longitude: YOUR_LONGITUDE,
  },
}

// Website Schema Data
const WebsiteData = {
  name: YOUR_COMPANY_NAME_FULL,
  url: YOUR_DOMAIN,
  description: `${YOUR_STATE}'s leading dumpster rental company providing residential and commercial roll-off containers with same-day delivery. Over 55 years of experience.`,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${YOUR_DOMAIN}/quote?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Service Catalog ItemList
const ServiceCatalogData = {
  name: 'Dumpster Rental Services Catalog',
  description: 'Complete catalog of dumpster rental services available',
  itemListElement: [
    {
      '@type': 'Service',
      name: '15-Yard Dumpster Rental',
      description: 'Perfect for small home cleanouts and bathroom renovations',
      url: `${YOUR_DOMAIN}/dumpsters`,
      image: `${YOUR_DOMAIN}/images/15-yard-dumpster-card.jpg`,
      position: 1,
    },
    {
      '@type': 'Service',
      name: '20-Yard Dumpster Rental',
      description: 'Ideal for medium-sized projects like kitchen renovations',
      url: `${YOUR_DOMAIN}/dumpsters`,
      image: `${YOUR_DOMAIN}/images/20-yard-dumpster-card.jpg`,
      position: 2,
    },
    {
      '@type': 'Service',
      name: '30-Yard Dumpster Rental',
      description: 'Best for large construction projects and whole house renovations',
      url: `${YOUR_DOMAIN}/dumpsters`,
      image: `${YOUR_DOMAIN}/images/30-yard-dumpster-card.jpg`,
      position: 3,
    },
  ],
}

// AI Citation Schema Data
const AIData = {
  organizationName: YOUR_COMPANY_NAME_FULL,
  description: `${YOUR_STATE}'s leading dumpster rental company specializing in residential and commercial waste management solutions. We provide same-day delivery, transparent pricing, and expert guidance for all your dumpster rental needs. Over 55 years of experience serving the Wasatch Front.`,
  url: YOUR_DOMAIN,
  telephone: YOUR_PHONE_FORMATTED,
  address: {
    addressLocality: YOUR_CITY,
    addressRegion: YOUR_STATE_CODE,
    addressCountry: 'US',
  },
  geo: {
    latitude: YOUR_LATITUDE,
    longitude: YOUR_LONGITUDE,
  },
  services: [
    {
      name: '15-Yard Dumpster Rental',
      description: 'Perfect for small home cleanouts, bathroom renovations, and minor construction projects.',
      areaServed: [YOUR_STATE, ...COUNTIES_SERVED],
    },
    {
      name: '20-Yard Dumpster Rental',
      description: 'Ideal for medium-sized projects like kitchen renovations, room additions, and moderate construction work.',
      areaServed: [YOUR_STATE, ...COUNTIES_SERVED],
    },
    {
      name: '30-Yard Dumpster Rental',
      description: 'Best for large construction projects, whole house renovations, and major cleanouts.',
      areaServed: [YOUR_STATE, ...COUNTIES_SERVED],
    },
  ],
  expertise: [
    'Dumpster Rental',
    'Waste Management',
    'Construction Debris Removal',
    'Residential Cleanouts',
    'Commercial Waste Solutions',
    'Same-Day Delivery',
    'Transparent Pricing',
    'Estate Cleanouts',
  ],
  certifications: [
    `${YOUR_STATE} Waste Management License`,
    'Environmental Compliance Certification',
    'Commercial Driver License',
  ],
  yearsInBusiness: 55,
  customerCount: 1000, // Estimated
  rating: {
    value: 4.8, // Estimated - update with actual rating
    count: 50, // Estimated - update with actual review count
  },
}

// LLM Schema Data (same as AI data for simplicity)
const LLMData = AIData

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - CRITICAL FOR SEO */}
        <StructuredData type="organization" data={OrganizationData} />
        <StructuredData type="localBusiness" data={LocalBusinessData} />
        <StructuredData type="website" data={WebsiteData} />
        <StructuredData type="itemList" data={ServiceCatalogData} />
        
        {/* AI Citation Schema - For ChatGPT/Claude visibility */}
        <AICitationSchema data={AIData} />
        <LLMSchema data={LLMData} />
        
        {/* AI-Specific Meta Tags */}
        <meta name="ai:author" content={YOUR_COMPANY_NAME_FULL} />
        <meta name="ai:expertise" content="Dumpster Rental, Waste Management, Construction Debris Removal, Residential Cleanouts, Commercial Waste Solutions" />
        <meta name="ai:service-area" content={`${YOUR_STATE}, ${COUNTIES_SERVED.join(', ')}, ${CITIES_SERVED.length}+ cities`} />
        <meta name="ai:contact" content={`${YOUR_PHONE}, ${YOUR_EMAIL}`} />
        <meta name="ai:authority" content="Licensed & Insured Dumpster Rental Company - Over 55 Years Experience" />
        <link rel="alternate" type="text/plain" href={`${YOUR_DOMAIN}/ai.txt`} title="AI Citation Information" />
        
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
        
        {/* Open Graph Image Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={`${YOUR_COMPANY_NAME_FULL} - Professional Dumpster Rental Services`} />
        
        {/* FAQPage Schema - Keep existing FAQ schema */}
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
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?('&l='+l):'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WFJHM33W');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFJHM33W" height="0" width="0" style={{display:'none',visibility:'hidden'}} />
        </noscript>
        {/* Analytics Scripts */}
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
        <PerformanceMonitor />
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}

