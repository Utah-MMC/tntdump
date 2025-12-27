import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCityData, getAllCities, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'
import { summarizeNeighborhoods, summarizeZipCodes } from '@/lib/cityText'
import { SizesTable, PermitBlock, DisposalBlock, Neighborhoods, Testimonials, FAQ, CTA, NearbyCities } from '@/components/city'

export async function generateStaticParams() {
  const allCities = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === 'UT')
  return allCities.map((c) => ({
    slug: `${c.slug}-dumpster-rentals`,
    city: c.slug,
  }))
}

type PageProps = { params: { slug: string; city: string } }

const BRAND = { name: 'TNT Dumpsters', url: 'https://tntdump.com', telephone: '(801) 209-9013' }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getCityData(params.city)
  if (!data) return {}
  const title = `40 Yard Dumpster Rental in ${data.city}, Utah | ${BRAND.name}`
  const description = `Rent a 40-yard dumpster in ${data.city} for large construction, demolition, and major cleanouts. Fast delivery and clear pricing—call ${BRAND.telephone}.`
  const canonical = `${BRAND.url}/${data.slug}-dumpster-rentals/service-areas/${data.slug}/40-yard-dumpster`
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
      images: [{ url: '/images/dumpster3-500x500-1.jpeg', width: 1200, height: 800, alt: `40 yard dumpster rental in ${data.city}` }],
    },
  }
}

function Intro({ city }: { city: CityData }) {
  return (
    <section className="py-14 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">40 Yard Dumpster Rental in {city.city}, Utah</h1>
          <p className="mt-4 text-gray-700">
            A 40 yard dumpster is built for large commercial cleanouts, major demolition work, and high-volume construction.
            It is the best fit when a 30 yard bin is not enough and you need maximum capacity on site.
          </p>
          <p className="mt-3 text-gray-700">
            {BRAND.name} coordinates 40 yard delivery across {city.city} with clear scheduling and careful placement. Call us
            to confirm access requirements and weight limits for your job site.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a href={city.quote_url || '/quote'} className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get a Quote</a>
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Call ({city.phone_cta?.slice(0,3)}) {city.phone_cta?.slice(4)}</a>
          </div>
        </div>
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={city.gallery?.[0]?.src || '/images/dumpster3-500x500-1.jpeg'}
            alt={`40 yard dumpster rental in ${city.city}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            quality={70}
          />
        </div>
      </div>
    </section>
  )
}

function LocalContext({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>40 Yard Dumpster Delivery in {city.city}</h2>
        <p>
          Forty yard dumpsters require more space and access planning. We deliver across {summarizeNeighborhoods(city.neighborhoods_served)}
          and all {summarizeZipCodes(city.primary_zips)} ZIP codes with coordinated placement.
        </p>
        <p>
          {city.permit_required ? 'Street placement may require a permit. ' : 'Driveway placements usually do not require permits. '}
          If the job site is tight, send a photo and we will advise on placement and clearance.
        </p>
      </div>
    </section>
  )
}

function buildFaq(city: CityData) {
  const base: { question: string; answer: string }[] = []
  const q = (question: string, answer: string) => base.push({ question, answer })
  q(`When do I need a 40 yard dumpster?`, 'Choose a 40 yard dumpster for large construction, commercial cleanouts, or demolition projects.')
  q('How much does a 40 yard dumpster hold?', 'A 40 yard dumpster can hold roughly 12-16 pickup truck loads of debris.')
  q(`How quickly can you deliver in ${city.city}?`, `Same-day delivery is often available when ordered before ${city.cutoff_time || '3:00 PM'}.`)
  q('What items are restricted?', city.disallowed_items_deltas || 'No liquids, paints, oils, hazardous waste, or tires.')
  q(`Do you serve all neighborhoods in ${city.city}?`, `Yes—we deliver across ${summarizeNeighborhoods(city.neighborhoods_served)} and all ${summarizeZipCodes(city.primary_zips)}.`)
  while (base.length < 10) {
    base.push({ question: `40 yard dumpster question ${base.length + 1}?`, answer: 'Call us for details—we are happy to help.' })
  }
  return base
}

export default async function FortyYardPage({ params }: PageProps) {
  const city = getCityData(params.city)
  if (!city) return null
  const faq = buildFaq(city)
  const ld = buildAllLD(BRAND, city, faq)

  return (
    <main className="min-h-screen">
      {ld.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}
      <Intro city={city} />
      <LocalContext city={city} />
      <SizesTable city={city} brand={BRAND} />
      <PermitBlock city={city} />
      <DisposalBlock city={city} />
      <Neighborhoods city={city} />
      <Testimonials city={city} />
      <FAQ items={faq} />
      <NearbyCities city={city} />
      <section className="py-10 bg-white">
        <div className="container-custom text-sm text-gray-600">
          Need a smaller size? See our{' '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/30-yard-dumpster`} className="text-blue-600 hover:underline">
            30 yard dumpsters
          </Link>
          {' '}or the{' '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}`} className="text-blue-600 hover:underline">
            main {city.city} page
          </Link>
          .
        </div>
      </section>
      <CTA city={city} />
    </main>
  )
}

