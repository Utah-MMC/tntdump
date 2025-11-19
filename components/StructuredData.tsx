/**
 * StructuredData Component
 * Renders JSON-LD structured data for SEO
 * Supports: Organization, LocalBusiness, Website, ItemList
 */

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'website' | 'itemList'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const buildSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name,
          legalName: data.legalName || data.name,
          description: data.description,
          url: data.url,
          logo: data.logo ? { '@type': 'ImageObject', url: data.logo } : undefined,
          email: data.email,
          telephone: data.telephone,
          foundingDate: data.foundingDate,
          knowsAbout: data.knowsAbout,
          areaServed: data.areaServed?.map((area: any) => ({
            '@type': area.type === 'State' ? 'State' : area.type === 'AdministrativeArea' ? 'AdministrativeArea' : 'City',
            name: area.name,
          })),
        }

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': data.businessType || 'LocalBusiness',
          '@id': data.id,
          name: data.name,
          legalName: data.legalName || data.name,
          description: data.description,
          url: data.url,
          telephone: data.telephone,
          email: data.email,
          image: data.image,
          logo: data.logo ? { '@type': 'ImageObject', url: data.logo } : undefined,
          priceRange: data.priceRange,
          currenciesAccepted: data.currenciesAccepted || 'USD',
          paymentAccepted: data.paymentAccepted,
          keywords: data.keywords,
          knowsAbout: data.knowsAbout,
          sameAs: data.sameAs || [],
          areaServed: data.areaServed?.map((area: any) => ({
            '@type': area.type === 'State' ? 'State' : area.type === 'AdministrativeArea' ? 'AdministrativeArea' : 'City',
            name: area.name,
          })),
          serviceArea: data.serviceArea ? {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: data.serviceArea.latitude,
              longitude: data.serviceArea.longitude,
            },
            geoRadius: {
              '@type': 'Distance',
              value: data.serviceArea.radius,
              unitCode: 'KMT', // kilometers
            },
          } : undefined,
          hasMap: data.hasMap,
          hasCredential: data.hasCredential,
          foundingDate: data.foundingDate,
          brand: data.brand,
          contactPoints: data.contactPoints,
          address: data.address ? {
            '@type': 'PostalAddress',
            streetAddress: data.address.streetAddress,
            addressLocality: data.address.addressLocality,
            addressRegion: data.address.addressRegion,
            postalCode: data.address.postalCode,
            addressCountry: data.address.addressCountry,
          } : undefined,
          geo: data.geo ? {
            '@type': 'GeoCoordinates',
            latitude: data.geo.latitude,
            longitude: data.geo.longitude,
          } : undefined,
          openingHours: data.openingHours,
          makesOffer: data.makesOffer?.map((offer: any) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer.name,
              description: offer.description,
              serviceType: offer.serviceType,
              areaServed: offer.areaServed?.map((area: string) => ({
                '@type': 'City',
                name: area,
              })),
            },
            url: offer.url,
          })),
          hasOfferCatalog: data.hasOfferCatalog ? {
            '@type': 'OfferCatalog',
            name: data.hasOfferCatalog.name,
            itemListElement: data.hasOfferCatalog.itemListElement?.map((item: any, index: number) => ({
              '@type': 'Offer',
              position: index + 1,
              itemOffered: {
                '@type': 'Service',
                name: item.name,
                description: item.description,
                url: item.url,
              },
              price: item.price,
              priceCurrency: item.priceCurrency || 'USD',
            })),
          } : undefined,
          offers: data.offers?.map((offer: any) => ({
            '@type': 'Offer',
            name: offer.name,
            description: offer.description,
            price: offer.price,
            priceCurrency: offer.priceCurrency || 'USD',
            eligibleRegion: offer.eligibleRegion,
            url: offer.url,
          })),
          slogan: data.slogan,
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name,
          url: data.url,
          description: data.description,
          potentialAction: data.potentialAction,
        }

      case 'itemList':
        return {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: data.name,
          description: data.description,
          itemListElement: data.itemListElement?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': item['@type'] || 'Service',
              name: item.name,
              description: item.description,
              url: item.url,
              image: item.image,
            },
          })),
        }

      default:
        return null
    }
  }

  const schema = buildSchema()
  if (!schema) return null

  // Remove undefined values
  const cleanSchema = JSON.parse(JSON.stringify(schema, (key, value) => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      return undefined
    }
    return value
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  )
}

