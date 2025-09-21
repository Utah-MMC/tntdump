import { Metadata } from 'next'

export function generateCityMetadata(city: string, state: string): Metadata {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-')
  const canonicalUrl = `https://tntdump.com/cities/${citySlug}`
  
  return {
    title: `Dumpster Rental ${city}, ${state} | T&T Dumpsters | (801) 209-9013`,
    description: `Professional dumpster rental services in ${city}, ${state}. Fast delivery, competitive pricing, and reliable service. Call (801) 209-9013 for free same-day estimates.`,
    keywords: `dumpster rental ${city.toLowerCase()}, ${city.toLowerCase()} dumpster rental, dumpster rental near me, roll-off dumpster ${city.toLowerCase()}, ${state.toLowerCase()} dumpster rental`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Dumpster Rental ${city}, ${state} | T&T Dumpsters`,
      description: `Professional dumpster rental services in ${city}, ${state}. Fast delivery, competitive pricing, and reliable service.`,
      url: canonicalUrl,
      siteName: 'T&T Dumpsters',
      images: [
        {
          url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
          width: 1200,
          height: 630,
          alt: `T&T Dumpsters - Professional dumpster rental services in ${city}, ${state}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Dumpster Rental ${city}, ${state} | T&T Dumpsters`,
      description: `Professional dumpster rental services in ${city}, ${state}. Fast delivery, competitive pricing, and reliable service.`,
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
}
