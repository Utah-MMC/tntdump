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
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
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
  const basePrice = size === 15 ? 325 : size === 20 ? 375 : 400
  const canonicalCityUrl = `${brand.url}/${city.slug}-dumpster-rentals/service-areas/${city.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${size} Yard Dumpster – ${city.city}, ${city.state_code}`,
    description: `Professional ${size} yard roll-off dumpster rental in ${city.city}, ${city.state_code}. Ideal for ${size === 15 ? 'small cleanouts and garage purges' : size === 20 ? 'medium remodels and construction projects' : 'large construction and demolition projects'}.`,
    brand: { '@type': 'Brand', name: brand.name },
    category: 'Dumpster Rental',
    offers: {
      '@type': 'Offer',
      url: canonicalCityUrl,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      price: basePrice,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: basePrice,
        priceCurrency: 'USD',
        unitText: '7-day rental',
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${city.city}, ${city.state_code}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
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

export function buildHowToLD(city: CityData, brand: Brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Rent a Dumpster in ${city.city}, ${city.state_code}`,
    description: `Step-by-step guide to renting a dumpster in ${city.city}, Utah from ${brand.name}.`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact Us',
        text: `Call ${brand.telephone} or request a quote online. Provide details about your project, location in ${city.city}, and preferred delivery date.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Size',
        text: 'Select from 15, 20, or 30 yard dumpsters based on your project size. Our team can help recommend the right size.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Schedule Delivery',
        text: `We schedule delivery, typically within ${city.avg_delivery_eta_hours || 4} hours when ordered before ${city.cutoff_time || '3:00 PM'}. Same-day service often available.`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Load Your Dumpster',
        text: 'Fill the dumpster with your debris. Keep materials level with the top rail and avoid prohibited items.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Schedule Pickup',
        text: 'Call or text when ready for pickup. We typically retrieve same day or next morning.',
      },
    ],
  }
}

export function buildBreadcrumbListLD(city: CityData, brand: Brand) {
  const canonicalCityUrl = `${brand.url}/${city.slug}-dumpster-rentals/service-areas/${city.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: brand.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Utah Service Areas',
        item: `${brand.url}/ut/service-areas`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city.city} Dumpster Rentals`,
        item: canonicalCityUrl,
      },
    ],
  }
}

export function buildWebSiteLD(brand: Brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: brand.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${brand.url}/cities?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      logo: {
        '@type': 'ImageObject',
        url: brand.logo || `${brand.url}/images/t-and-t-dumpsters-logo-176w.webp`,
      },
    },
  }
}

export function buildArticleLD(title: string, description: string, url: string, datePublished: string, dateModified: string, brand: Brand, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: brand.name,
      url: brand.url,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      logo: {
        '@type': 'ImageObject',
        url: brand.logo || `${brand.url}/images/t-and-t-dumpsters-logo-176w.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: image ? [image] : undefined,
  }
}

export function buildAllLD(brand: Brand, city: CityData, faq: { question: string; answer: string }[]) {
  const local = buildLocalBusinessLD(brand, city)
  const service = buildServiceLD(brand, city)
  const products = [15, 20, 30].map((s) => buildProductLD(s, city, brand))
  const faqLD = buildFaqLD(faq)
  const howTo = buildHowToLD(city, brand)
  const breadcrumbs = buildBreadcrumbListLD(city, brand)
  return [local, service, ...products, faqLD, howTo, breadcrumbs]
}
