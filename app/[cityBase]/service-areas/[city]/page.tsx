import type { Metadata } from 'next'
import CityPageTemplate, { type CityPageTemplateProps } from '@/components/CityPageTemplate'
import { getCityData, getAllCities, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'

// Generate static params for all cities
// The cityBase should be {city-slug}-dumpster-rentals and city should be {city-slug}
export async function generateStaticParams() {
  const allCities = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === 'UT')
  return allCities.map((c) => ({
    cityBase: `${c.slug}-dumpster-rentals`,
    city: c.slug,
  }))
}

export const revalidate = 86400

type PageProps = { params: { cityBase: string; city: string } }

const BRAND = { name: 'TNT Dumpsters', url: 'https://tntdump.com', telephone: '(801) 209-9013' }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getCityData(params.city)
  if (!data) return {}
  const title = `Dumpster Rentals in ${data.city}, Utah | ${BRAND.name}`
  const description = `Local dumpster rental in ${data.city}, UT—${[15, 20, 30].join('/')} yard roll-offs with fast delivery and clear pricing. Call ${BRAND.telephone}.`
  const canonical = `${BRAND.url}/${data.slug}-dumpster-rentals/service-areas/${data.slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND.name,
      type: 'article',
      locale: 'en_US',
      images: [{ url: '/images/dumpster2-500x500-1.jpeg', width: 1200, height: 800, alt: `${data.city} dumpster rental` }],
    },
  }
}

function buildTemplateProps(city: CityData): CityPageTemplateProps {
  const phone = city.phone_cta || BRAND.telephone
  const neighborhoods = city.neighborhoods_served || []
  const districts = neighborhoods.length ? neighborhoods : [`${city.city} Central`, `${city.city} East`, `${city.city} West`]
  const landmarks = [
    {
      name: `${city.city} City Hall`,
      address: `${city.city}, ${city.state_code}`,
      url: `https://www.google.com/maps/search/${encodeURIComponent(`${city.city} city hall`)}`,
    },
    {
      name: `${city.city} Public Library`,
      address: `${city.city}, ${city.state_code}`,
      url: `https://www.google.com/maps/search/${encodeURIComponent(`${city.city} public library`)}`,
    },
    {
      name: `${city.city} Community Park`,
      address: `${city.city}, ${city.state_code}`,
      url: `https://www.google.com/maps/search/${encodeURIComponent(`${city.city} park`)}`,
    },
  ]

  const businessDistricts = districts.slice(0, 6).map((district) => ({
    name: district,
    description: `Frequently served area in ${city.city} for remodels, cleanouts, and job sites.`,
    link: `/${city.slug}-dumpster-rentals/service-areas/${city.slug}`,
  }))

  const permitRequirements = city.permit_notes
    || (city.permit_required ? `Street placement may require a permit from ${city.city}.` : `Driveway placements usually do not require permits in ${city.city}.`)

  return {
    cityName: city.city,
    citySlug: city.slug,
    state: city.state_code,
    phoneNumber: phone,
    latitude: typeof city.latitude === 'number' ? String(city.latitude) : undefined,
    longitude: typeof city.longitude === 'number' ? String(city.longitude) : undefined,
    landmarks,
    businessDistricts,
    permitInfo: {
      cityName: city.city,
      phoneNumber: phone,
      requirements: permitRequirements,
    },
    contentSections: {
      overview: `TNT Dumpsters provides reliable roll-off dumpster rental across ${city.city}. We combine delivery, pickup, and the rental window into one clear price so you can keep your project moving without surprise fees.`,
      residentialServices: [
        `Home renovations in ${city.city}`,
        `Garage and basement cleanouts`,
        `Yard waste and seasonal cleanup`,
      ],
      commercialServices: [
        `Retail and office renovations`,
        `Construction and demolition support`,
        `Property management turnovers`,
      ],
      whyChooseUs: city.busy_seasons_events
        ? `We plan around ${city.busy_seasons_events.toLowerCase()} to keep ${city.city} deliveries on schedule.`
        : `We coordinate routes daily to keep ${city.city} deliveries on time and easy to schedule.`,
      dumpsterSizes: [
        {
          size: '10',
          description: `Compact option for small cleanouts and tight driveways in ${city.city}.`,
          useCases: ['Small cleanouts', 'Light demo', 'Yard debris'],
        },
        {
          size: '15',
          description: `Right-sized for smaller cleanouts and remodels across ${city.city}.`,
          useCases: ['Bathroom remodels', 'Garage cleanouts', 'Flooring removal'],
        },
        {
          size: '20',
          description: `Balanced option for medium renovations and contractor jobs in ${city.city}.`,
          useCases: ['Kitchen remodels', 'Roofing projects', 'General construction'],
        },
        {
          size: '30',
          description: `Built for larger demo, construction, and estate cleanouts in ${city.city}.`,
          useCases: ['Large renovations', 'Whole-home cleanouts', 'Construction debris'],
        },
        {
          size: '40',
          description: `High-capacity option for major construction and commercial cleanouts in ${city.city}.`,
          useCases: ['Large construction', 'Commercial demo', 'Bulk debris'],
        },
      ],
      localInfo: city.local_testimonials?.length
        ? `Local customers in ${city.city} highlight our responsive scheduling and careful placement.`
        : `We serve ${city.city} with dependable delivery windows, careful placement, and quick pickups once you are finished.`,
      serviceAreas: city.adjacent_cities?.length
        ? `We serve ${city.city} plus nearby areas like ${city.adjacent_cities.slice(0, 3).join(', ')}.`
        : `We serve ${city.city} and surrounding neighborhoods throughout ${city.county} County.`,
    },
    faqItems: buildFaq(city),
  }
}

function buildFaq(city: CityData) {
  const base: { question: string; answer: string }[] = []
  const q = (question: string, answer: string) => base.push({ question, answer })
  const phone = city.phone_cta || BRAND.telephone

  q(`How soon can I get a dumpster in ${city.city}?`, `Most deliveries in ${city.city} arrive within ${city.avg_delivery_eta_hours || 4} hours when ordered before ${city.cutoff_time || '3:00 PM'}. Same-day is often available.`)
  q('What sizes are available?', 'We offer 15, 20, and 30 yard roll-off dumpsters for residential and commercial projects.')
  q('What is included in pricing?', city.price_notes || 'Delivery and pickup are included. Disposal is billed by weight at $55 per ton.')
  q('Do I need a permit?', city.permit_required ? 'Street placement may require a right-of-way permit. Driveway placements typically do not.' : 'Driveway placements usually do not require permits; check local rules for street placement.')
  q(`Where does the waste go from ${city.city}?`, `We use approved facilities such as ${city.transfer_station_name || 'the local transfer station'}. Restrictions may apply to certain materials.`)
  q('What cannot go in the dumpster?', city.disallowed_items_deltas || 'No liquids, paints, oils, hazardous waste, or tires in mixed loads.')
  q('How much space is required?', 'A clear spot about 45-60 feet long for 20-30 yard bins; 15 yard bins need about 35-40 feet. Overhead clearance of 20-25 feet is ideal.')
  q('Can the dumpster damage my driveway?', 'We place boards to protect asphalt or concrete and suggest locations that distribute weight.')
  q('How do I book?', `Call ${phone} or request a quote online. We will confirm size, delivery window, and placement.`)

  while (base.length < 12) {
    base.push({ question: `Dumpster rental question ${base.length + 1} in ${city.city}?`, answer: 'Contact us for details—we are happy to help.' })
  }
  return base
}

export default async function CityPage({ params }: PageProps) {
  const city = getCityData(params.city)
  if (!city) return null
  const templateProps = buildTemplateProps(city)
  const ld = buildAllLD(BRAND, city, templateProps.faqItems)

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">:City</h1>
      {ld.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}
      <CityPageTemplate {...templateProps} />
    </main>
  )
}
