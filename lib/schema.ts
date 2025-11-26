import type { CityData } from './cities'

type Brand = {
  name: string
  url: string
  telephone?: string
  logo?: string
}

export function buildLocalBusinessLD(brand: Brand, city: CityData) {
  const area = city.primary_zips?.map((z) => ({ '@type': 'PostalCodeSpecification', postalCode: z })) || []
  const geo = city.latitude && city.longitude ? { latitude: city.latitude, longitude: city.longitude } : undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    url: brand.url,
    telephone: brand.telephone,
    image: brand.logo ? [brand.logo] : undefined,
    areaServed: [
      {
        '@type': 'City',
        name: `${city.city}, ${city.state_code}`,
        ...(geo ? { geo: { '@type': 'GeoCoordinates', ...geo } } : {}),
      },
      ...area,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.city,
      addressRegion: city.state_code,
      addressCountry: 'US',
    },
  }
}

export function buildServiceLD(brand: Brand, city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Dumpster Rental in ${city.city}, ${city.state_code}`,
    provider: { '@type': 'LocalBusiness', name: brand.name, url: brand.url },
    areaServed: {
      '@type': 'City',
      name: `${city.city}, ${city.state_code}`,
    },
    serviceType: 'Dumpster Rental',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dumpster Sizes',
      itemListElement: [15, 20, 30].map((size) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: `${size} Yard Roll-Off Dumpster`,
          category: 'Dumpster',
        },
      })),
    },
  }
}

export function buildProductLD(size: number, city: CityData, brand: Brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${size} Yard Dumpster – ${city.city}, ${city.state_code}`,
    brand: { '@type': 'Brand', name: brand.name },
    category: 'Dumpster',
    offers: {
      '@type': 'Offer',
      url: `${brand.url}/${city.slug}-dumpster-rentals/service-areas/${city.slug}`,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
    areaServed: `${city.city}, ${city.state_code}`,
  }
}

export function buildFaqLD(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

export function buildAllLD(brand: Brand, city: CityData, faq: { question: string; answer: string }[]) {
  const local = buildLocalBusinessLD(brand, city)
  const service = buildServiceLD(brand, city)
  const products = [15, 20, 30].map((s) => buildProductLD(s, city, brand))
  const faqLD = buildFaqLD(faq)
  return [local, service, ...products, faqLD]
}
