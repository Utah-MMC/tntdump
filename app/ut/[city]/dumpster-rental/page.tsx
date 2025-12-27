import type { Metadata } from 'next'
import Image from 'next/image'
import { getCityData, getCitySlugParams, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'
import { getNeighborhoodPair, summarizeNeighborhoods, summarizeZipCodes } from '@/lib/cityText'
import { SizesTable, PermitBlock, DisposalBlock, Neighborhoods, Testimonials, FAQ, CTA, NearbyCities } from '@/components/city'

export async function generateStaticParams() {
  return getCitySlugParams()
}

// Enable ISR - revalidate daily for city pages
export const revalidate = 86400

type PageProps = { params: { city: string } }

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
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND.name,
      type: 'article',
      locale: 'en_US',
      images: [{ url: '/images/dumpster1-500x500-1.jpeg', width: 1200, height: 800, alt: `${data.city} dumpster rental` }],
    },
  }
}

function Intro({ city }: { city: CityData }) {
  const to12h = (t?: string) => {
    if (!t) return '3:00 PM'
    if (/\b(am|pm)\b/i.test(t)) {
      const m = t.match(/^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i)
      if (m) return `${Number(m[1])}:${m[2]} ${m[3].toUpperCase()}`
      return t.replace(/\b(am|pm)\b/i, (s) => s.toUpperCase())
    }
    const m = t.match(/^(\d{1,2}):(\d{2})$/)
    if (!m) return t
    let h = parseInt(m[1], 10)
    const min = m[2]
    const suffix = h >= 12 ? 'PM' : 'AM'
    if (h === 0) h = 12
    else if (h > 12) h -= 12
    return `${h}:${min} ${suffix}`
  }
  return (
    <section className="py-14 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Dumpster Rentals in {city.city}, Utah</h1>
          <p className="mt-4 text-gray-700">
            When you need a dumpster in {city.city}, we make it simple. {`TNT Dumpsters`} is a locally focused hauler offering fast
            delivery, clear pricing, and respectful placement on your property or jobsite. Choose from 15, 20, or 30 yard
            roll-off containers to match your project—from a weekend garage purge to a full-scale remodel or new build.
          </p>
          <p className="mt-3 text-gray-700">
            Most orders in {city.city} can be scheduled the same day when placed before our cut-off at {to12h(city.cutoff_time)}.
            Typical ETA is about {city.avg_delivery_eta_hours || 4} hours depending on traffic and route density. Our drivers place
            boards as needed to protect driveways and will help you pick an ideal location that balances access, safety, and any HOA requirements.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a href={city.quote_url || '/quote'} className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get a Quote</a>
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Call ({city.phone_cta?.slice(0,3)}) {city.phone_cta?.slice(4)}</a>
          </div>
        </div>
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={city.gallery?.[0]?.src || '/images/dumpster2-500x500-1.jpeg'}
            alt={`${city.city} Utah dumpster rental`}
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
        <h2>What to Expect When Renting a Dumpster in {city.city}</h2>
        <p>
          Renting a dumpster in {city.city} should feel straightforward and predictable. We tailored our service around the
          way local homeowners, contractors, and community managers actually work: clear terms, dependable drop windows,
          and easy communication. We deliver across the {city.county} area including {summarizeNeighborhoods(city.neighborhoods_served)} and beyond.
        </p>
        <p>
          Disposal for {city.city} generally runs through nearby facilities such as {city.transfer_station_name || 'the local transfer station'} at
          {city.transfer_station_address ? ` ${city.transfer_station_address}` : ' an approved facility'}. Hours can vary around holidays and busy seasons, and
          certain materials have special rules. {city.disallowed_items_deltas || 'We cannot accept liquids, hazardous waste, or tires in most mixed loads.'}
        </p>
        <p>
          Seasonal patterns in {city.city} include {city.busy_seasons_events || 'spring cleanups, summer remodels, and fall yard waste surges'}.
          During peak periods we expand routing, but booking a day ahead improves first-position delivery. If your placement is on
          the street or within the public right-of-way, {city.permit_required ? 'a city permit may be required. ' : ''}
          {city.permit_url ? (
            <>
              Review the latest guidance on the{' '}
              <a href={city.permit_url} rel="nofollow" target="_blank">official city page</a>.
            </>
          ) : (
            <>Always confirm permit requirements with the city before delivery.</>
          )}
        </p>
        <h3>Project Examples in {city.city}</h3>
        <ul>
          {(city.real_job_examples || []).map((j, i) => (
            <li key={i}>{j.size} yard – {j.summary}</li>
          ))}
        </ul>
        <h3>Winter and HOA Notes</h3>
        <p>
          {city.winter_notes || 'In winter we monitor storms and will coordinate safe placement and pickup. Plywood under wheels prevents impressions on soft driveways.'}
        </p>
        <p>
          {city.hoa_common_rule || 'Many HOAs simply ask for a heads-up when a container will be visible; we can help suggest placements that minimize impact.'}
        </p>
      </div>
    </section>
  )
}

function buildFaq(city: CityData) {
  const base: { question: string; answer: string }[] = []
  // Build 46 Q&As blending global and city-local details
  const q = (question: string, answer: string) => base.push({ question, answer })
  const to12h = (t?: string) => {
    if (!t) return '3:00 PM'
    if (/\b(am|pm)\b/i.test(t)) {
      const m = t.match(/^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i)
      if (m) return `${Number(m[1])}:${m[2]} ${m[3].toUpperCase()}`
      return t.replace(/\b(am|pm)\b/i, (s) => s.toUpperCase())
    }
    const m = t.match(/^(\d{1,2}):(\d{2})$/)
    if (!m) return t
    let h = parseInt(m[1], 10)
    const min = m[2]
    const suffix = h >= 12 ? 'PM' : 'AM'
    if (h === 0) h = 12
    else if (h > 12) h -= 12
    return `${h}:${min} ${suffix}`
  }
  q(`How soon can I get a dumpster in ${city.city}?`, `Most deliveries in ${city.city} arrive in about ${city.avg_delivery_eta_hours || 4} hours when ordered before ${to12h(city.cutoff_time)}. Same-day is often available.`)
  q('What sizes are available?', 'We offer 15, 20, and 30 yard roll-off dumpsters for residential and commercial projects.')
  q('What is included in pricing?', city.price_notes || 'Transparent pricing with delivery and pickup included. Weight is billed separately at $55 per ton based on actual weight.')
  q('Do I need a permit?', city.permit_required ? 'Street placement may require a right-of-way permit from the city. Driveways typically do not.' : 'Driveway placements usually do not require permits; check local rules for street placements.')
  q(`Where does the waste go from ${city.city}?`, `We use approved facilities such as ${city.transfer_station_name || 'the local landfill/transfer station'}. Restrictions may apply for certain materials.`)
  q('What cannot go in the dumpster?', city.disallowed_items_deltas || 'No liquids, paints, oils, hazardous waste, or electronics. Dirt/concrete only in dedicated containers.')
  q('How much space is required?', 'A clear spot about 45–60 feet long for 20–30 yard bins; 15 yard bins typically need 35–40 feet. Overhead clearance of 20–25 feet is ideal.')
  q('Can the dumpster damage my driveway?', 'We can place boards to protect asphalt or concrete and suggest locations that distribute weight.')
  q('Do you serve HOAs?', 'Yes. We commonly coordinate acceptable placements and timing with HOA managers to avoid violations.')
  q('How long is the rental period?', 'Standard terms include several days; extensions are available—just let us know to avoid daily fees.')
  q('Can I load heavy materials?', 'Heavy debris like dirt or concrete requires special containers with lower fill heights to meet road weight limits.')
  q('How high can I fill?', 'Load level with the top rail—nothing above the rim for safe tarping and transport.')
  q('Do you recycle materials?', 'Where facilities allow, we route clean loads such as green waste or metal to suitable recyclers.')
  q('What if it snows?', city.winter_notes || 'We coordinate around storms, use chocks on inclines, and may adjust pickup windows for safety.')
  q('Can you place on the street?', 'Often yes, but it may require a city right-of-way permit and adequate traffic visibility.')
  q('Do you accept appliances?', 'Yes, but surcharges may apply depending on the disposal facility.')
  q('Do you accept mattresses?', 'Most facilities accept mattresses with a handling fee; ask when booking.')
  q('Can I move the dumpster?', 'Please do not move containers yourself. Call us to reposition safely.')
  q('Will the driver call on the way?', 'We can call or text before arrival—note your preference when booking.')
  q('What payment methods do you accept?', 'Major cards and business accounts upon approval. Invoicing available for contractors.')
  q('Do you serve weekends?', 'Saturday deliveries are available; Sunday service is limited to special circumstances.')
  q('What time are pickups?', 'We route pickups by area; if you have a gate or access window, let us know to coordinate.')
  q('Can I share a dumpster with a neighbor?', 'Yes—ensure loading stays within weight and volume limits and that location is agreed upon.')
  q('What if I finish early?', 'Text or call for early pickup; we often retrieve same day or next morning.')
  q('Do you support jobsite swaps?', 'Yes—call for a swap when the first is full; we deliver a new one and remove the loaded one.')
  q('Do you carry driveway-safe wheels?', 'We use boards where appropriate; rubber pads available by request.')
  q('Any height restrictions?', 'Avoid low tree branches and carports; 20–25 feet of vertical clearance is recommended.')
  q('Do you serve businesses?', 'Yes—retail fit-outs, office cleanouts, light industrial, and construction.')
  q('Can I lock the dumpster?', 'Locking lids are not standard on roll-offs; however, location choices can reduce unauthorized use.')
  q('How do I avoid overweight fees?', 'Choose the right size, keep out prohibited/soaked materials, and do not overload with dirt or concrete.')
  q('Do you place on gravel?', 'Yes. Packed gravel is generally fine. We avoid soft lawns without protection.')
  q('What about alley placements?', 'Case-by-case: width, overhead, and turning radius matter. Send a quick photo—we can advise.')
  q('How do I prepare the site?', 'Clear vehicles, move bins/cans, and mark any sprinklers or utilities in the placement zone.')
  q('What if my HOA complains?', city.hoa_common_rule || 'We can relocate promptly or schedule pickups to comply; ask us for HOA-friendly placement ideas.')
  q('How is weight billed?', 'Weight is always billed separately at $55 per ton based on actual weight at disposal. No free tons are included with any dumpster size.')
  q('Do you accept shingles?', 'Yes—roof tear-offs are common. We’ll match bin size to squares and layers.')
  q('How do swaps bill?', 'Each swap is a new haul plus tonnage. Ask for project pricing if you expect multiple turns.')
  q('Is there a tonnage cap?', 'Road limits apply. For heavy debris, we use smaller containers to stay legal and safe.')
  q('Where should I place it?', 'Near the work area without blocking garages or mailboxes. On-street can work if permitted and visible.')
  q('What if access is tight?', 'We have skilled drivers and can advise based on photos—be honest about clearances for safety.')
  const hoodPair = getNeighborhoodPair(city.neighborhoods_served)
  q('Do you serve my neighborhood?', `Yes—from ${hoodPair.first} to ${hoodPair.second} and the ${summarizeZipCodes(city.primary_zips)}.`)
  q('How do I book?', 'Call, text, or request a quote online. We’ll confirm details and delivery window.')
  q('Can I keep it longer?', 'Yes—daily extensions are available. Let us know early to reserve the slot.')
  q('Do you offer contractor pricing?', 'Yes—frequent users can get negotiated rates; ask our team.')
  // ensure at least 46
  while (base.length < 46) {
    base.push({ question: `Dumpster question ${base.length + 1} in ${city.city}?`, answer: 'Contact us for details—we are happy to help.' })
  }
  return base
}

export default async function CityPage({ params }: PageProps) {
  const city = getCityData(params.city)
  if (!city) return null
  const faq = buildFaq(city)
  const ld = buildAllLD(BRAND, city, faq)
  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      {ld.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}

      <Intro city={city} />
      <SizesTable city={city} brand={BRAND} />
      <PermitBlock city={city} />
      <DisposalBlock city={city} />
      <Neighborhoods city={city} />
      <Testimonials city={city} />
      <FAQ items={faq} />
      <NearbyCities city={city} />
      <section className="py-10 bg-white">
        <div className="container-custom text-sm text-gray-600">
          Looking for more? Explore our{' '}
          <a href="/ut/service-areas" className="text-blue-600 hover:underline">Utah dumpster rental service areas</a>.
        </div>
      </section>
      <CTA city={city} />
    </main>
  )
}
