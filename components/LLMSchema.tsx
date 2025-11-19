/**
 * LLMSchema Component
 * Additional structured data optimized for Large Language Models
 * Similar to AICitationSchema but can be customized for LLM-specific needs
 */

interface LLMSchemaProps {
  data: {
    organizationName: string
    description: string
    url: string
    telephone: string
    address?: {
      streetAddress?: string
      addressLocality: string
      addressRegion: string
      postalCode?: string
      addressCountry: string
    }
    geo?: {
      latitude: number
      longitude: number
    }
    services?: Array<{
      name: string
      description: string
      areaServed: string[]
    }>
    expertise?: string[]
    certifications?: string[]
    yearsInBusiness?: number
    customerCount?: number
    rating?: {
      value: number
      count: number
    }
  }
}

export default function LLMSchema({ data }: LLMSchemaProps) {
  // For now, LLMSchema uses the same structure as AICitationSchema
  // This can be customized later if needed for LLM-specific optimizations
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.organizationName,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
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
    knowsAbout: data.expertise,
    hasCredential: data.certifications?.map((cert: string) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
    })),
    additionalProperty: [
      ...(data.yearsInBusiness ? [{
        '@type': 'PropertyValue',
        name: 'Years in Business',
        value: String(data.yearsInBusiness),
      }] : []),
      ...(data.customerCount ? [{
        '@type': 'PropertyValue',
        name: 'Customer Count',
        value: String(data.customerCount),
      }] : []),
    ],
    ...(data.rating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.rating.value,
        reviewCount: data.rating.count,
      },
    } : {}),
  }

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

