import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCityData, getAllCities, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'
import { getNeighborhoodPair, summarizeNeighborhoods, summarizeZipCodes } from '@/lib/cityText'
import { SizesTable, PermitBlock, DisposalBlock, Neighborhoods, Testimonials, FAQ, CTA, NearbyCities } from '@/components/city'

// Generate static params for all cities - 20-yard dumpster routes
export async function generateStaticParams() {
  const allCities = getAllCities().filter((c) => (c.state_code || '').toUpperCase() === 'UT')
  return allCities.map((c) => ({
    cityBase: `${c.slug}-dumpster-rentals`,
    city: c.slug,
  }))
}

type PageProps = { params: { cityBase: string; city: string } }

const BRAND = { name: 'TNT Dumpsters', url: 'https://tntdump.com', telephone: '(801) 209-9013' }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getCityData(params.city)
  if (!data) return {}
  const title = `20 Yard Dumpster Rental in ${data.city}, Utah | ${BRAND.name}`
  const description = `Rent a 20-yard dumpster in ${data.city}, UT for remodels and roof tear-offs. Fast delivery, clear pricing, easy pickup—call ${BRAND.telephone}.`
  const canonical = `${BRAND.url}/${data.slug}-dumpster-rentals/service-areas/${data.slug}/20-yard-dumpster`
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
      images: [{ url: '/images/dumpster1-500x500-1.jpeg', width: 1200, height: 800, alt: `20 yard dumpster rental ${data.city}` }],
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">20 Yard Dumpster Rental in {city.city}, Utah</h1>
          <p className="mt-4 text-gray-700">
            The <strong>20 yard dumpster is our most popular size</strong> in {city.city}—and for good reason. It's the perfect sweet spot for
            kitchen remodels, roof tear-offs (20–30 squares), multi-room renovations, and estate cleanouts. With dimensions of approximately
            <strong> 22 feet long × 7.5 feet wide × 4.5 feet high</strong>, it holds about <strong>8–10 pickup truck loads</strong> of debris
            and includes <strong>2–3 tons</strong> of disposal at our base rate.
          </p>
          <p className="mt-3 text-gray-700">
            Most 20 yard dumpster orders in {city.city} can be delivered <strong>same-day</strong> when placed before our cut-off at {to12h(city.cutoff_time)}.
            Typical arrival is within {city.avg_delivery_eta_hours || 4} hours. Our drivers protect your driveway with boards and will help you choose
            the ideal spot that balances access, safety, and HOA compliance. Whether you're gutting a kitchen, tearing off a roof, or clearing out
            a basement, the 20-yarder gives you room to work without the premium cost of a 30 yard container.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a href={city.quote_url || '/quote'} className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get a Quote</a>
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Call ({city.phone_cta?.slice(0,3)}) {city.phone_cta?.slice(4)}</a>
          </div>
        </div>
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={city.gallery?.[0]?.src || '/images/dumpster2-500x500-1.jpeg'}
            alt={`20 yard dumpster rental ${city.city} Utah`}
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

function SpecsBlock({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">20 Yard Dumpster Specifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Dimensions</h3>
            <p className="text-gray-700">
              <strong>22 ft L × 7.5 ft W × 4.5 ft H</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">Fits in most driveways</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Capacity</h3>
            <p className="text-gray-700">
              <strong>20 cubic yards</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">~8–10 pickup truck loads</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Weight Limit</h3>
            <p className="text-gray-700">
              <strong>Weight billed at $55/ton</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">Overages billed per ton</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Typical Cost</h3>
            <p className="text-gray-700">
              <strong>$400–$500</strong>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <Link href="/calculator/cost" className="text-blue-600 hover:underline">Calculate your price</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BestProjects({ city }: { city: CityData }) {
  const projects = [
    {
      title: 'Kitchen Remodels (Full Gut)',
      description: `The 20 yarder is ideal for a full kitchen tear-out in ${city.city}—cabinets, countertops, flooring, drywall, and old appliances all fit comfortably.`,
      icon: '🏠',
    },
    {
      title: 'Roof Tear-Offs (20–30 Squares)',
      description: `Perfect for most single-family roofs. Whether you're replacing asphalt shingles or upgrading to metal, a 20 yard container handles 20–30 squares with ease.`,
      icon: '🏚️',
    },
    {
      title: 'Multi-Room Renovations',
      description: `Renovating 2–3 rooms? The 20 yard size gives you enough capacity for demo debris, old fixtures, and flooring without overpaying for unused space.`,
      icon: '🔨',
    },
    {
      title: 'Estate Cleanouts',
      description: `When clearing out a loved one's home in ${city.city}, a 20 yarder handles furniture, personal items, and household goods efficiently.`,
      icon: '📦',
    },
    {
      title: 'Deck & Fence Removal',
      description: `Tearing down an old deck or fence? The 20 yard dumpster accommodates boards, posts, and hardware from medium to large structures.`,
      icon: '🪵',
    },
    {
      title: 'Basement Cleanouts',
      description: `Years of accumulated storage, old furniture, exercise equipment, and boxes—all of it fits in a 20 yard container for a full basement cleanout.`,
      icon: '🗄️',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Projects for a 20 Yard Dumpster in {city.city}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-3xl mb-3">{project.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 prose prose-blue max-w-none">
          <p className="text-gray-700">
            Not sure if 20 yards is right for your project? Check out our{' '}
            <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/15-yard-dumpster`} className="text-blue-600 hover:underline">
              15 yard dumpster page
            </Link>{' '}
            for lighter cleanouts or our{' '}
            <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/30-yard-dumpster`} className="text-blue-600 hover:underline">
              30 yard dumpster page
            </Link>{' '}
            for whole-home or commercial projects. You can also read our{' '}
            <Link href="/20-yard-dumpster-complete-guide" className="text-blue-600 hover:underline">
              complete 20 yard dumpster guide
            </Link>{' '}
            or{' '}
            <Link href="/kitchen-remodel-dumpster-guide" className="text-blue-600 hover:underline">
              kitchen remodel dumpster guide
            </Link>{' '}
            for more details.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatFits({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>What Fits in a 20 Yard Dumpster?</h2>
        <p>
          A 20 cubic yard dumpster can hold approximately <strong>8–10 pickup truck loads</strong> of debris. Here's a visual breakdown
          of what typically fits:
        </p>
        <ul>
          <li><strong>Kitchen remodel debris:</strong> All cabinets, countertops, appliances, flooring, drywall, and trim from a full kitchen gut</li>
          <li><strong>Roofing materials:</strong> 20–30 squares of asphalt shingles, underlayment, and nails</li>
          <li><strong>Furniture:</strong> 10–15 pieces including sofas, tables, chairs, dressers, and mattresses</li>
          <li><strong>Flooring:</strong> Carpet, padding, hardwood, or tile from ~1,500–2,000 sq ft</li>
          <li><strong>Drywall & framing:</strong> Demo debris from 2–3 rooms including studs, drywall, and insulation</li>
          <li><strong>Deck or fence:</strong> A 12×16 deck or 150–200 linear feet of fencing</li>
          <li><strong>Yard waste:</strong> Brush, branches, leaves, and shrubs from extensive landscaping projects</li>
        </ul>
        <h3>Loading Tips</h3>
        <p>
          To maximize space and stay within weight limits in {city.city}:
        </p>
        <ul>
          <li>Break down large items (furniture, cabinets) before loading</li>
          <li>Distribute weight evenly—heavy items on the bottom, lighter on top</li>
          <li>Fill voids with smaller debris to use every cubic foot efficiently</li>
          <li>Do not load above the top rail—tarping and transport require level fills</li>
          <li>Avoid soaking materials (wet drywall, saturated carpet) which add unnecessary weight</li>
        </ul>
      </div>
    </section>
  )
}

function WhyPopular({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>Why the 20 Yard Dumpster is the Most Popular Size</h2>
        <p>
          In {city.city} and across Utah, the <strong>20 yard dumpster</strong> consistently ranks as the top choice for homeowners and contractors.
          Here's why:
        </p>
        <ol>
          <li>
            <strong>Perfect middle ground:</strong> Not too small to require multiple hauls, not so large that you're paying for unused capacity.
            It's the Goldilocks size for most residential projects.
          </li>
          <li>
            <strong>Versatile applications:</strong> From remodels to cleanouts to roofing, the 20-yarder handles the widest range of common projects
            without requiring project-specific sizing.
          </li>
          <li>
            <strong>Driveway-friendly dimensions:</strong> At 22 feet long, it fits in most standard driveways in {city.city} without blocking garages
            or extending into the street.
          </li>
          <li>
            <strong>Cost-effective:</strong> You get significantly more capacity than a 15 yard for only a modest price increase—typically $50–$75 more—while
            avoiding the premium of a 30 yard container.
          </li>
          <li>
            <strong>Fair weight billing:</strong> Weight is billed at $55 per ton based on actual weight, ensuring transparent and fair pricing for all customers.
          </li>
          <li>
            <strong>Easy walk-in access:</strong> The 4.5-foot sidewall height allows most people to toss bags and boxes over the side while still being
            low enough to walk materials in via the rear door.
          </li>
        </ol>
        <p>
          Whether you're a DIY homeowner tackling a kitchen remodel or a contractor managing a roof replacement in {city.city}, the 20 yard dumpster
          delivers the capacity, convenience, and value that make it the go-to choice.
        </p>
      </div>
    </section>
  )
}

function LocalContext({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>Renting a 20 Yard Dumpster in {city.city}: Local Details</h2>
        <p>
          When you rent a 20 yard dumpster in {city.city}, here's what to expect. We operate throughout {city.county} including neighborhoods
          like {summarizeNeighborhoods(city.neighborhoods_served)} and deliver to {summarizeZipCodes(city.primary_zips)}.
        </p>
        <p>
          Your dumpster will be hauled to {city.transfer_station_name || 'an approved local transfer station'}
          {city.transfer_station_address ? ` located at ${city.transfer_station_address}` : ''}. Disposal regulations vary by facility and season,
          so certain materials may have special handling requirements. {city.disallowed_items_deltas || 'We cannot accept liquids, hazardous waste, electronics, or tires in mixed loads.'}
        </p>
        <h3>Permits for 20 Yard Dumpsters in {city.city}</h3>
        <p>
          {city.permit_required
            ? `If you plan to place your 20 yard dumpster on the street or in a public right-of-way in ${city.city}, you may need a permit. Driveway placements typically do not require permits.`
            : `Driveway placements in ${city.city} typically do not require permits, but street or right-of-way placements may. Always confirm with the city before delivery.`
          }
          {city.permit_url && (
            <>
              {' '}Check the{' '}
              <a href={city.permit_url} rel="nofollow" target="_blank">official city permit page</a> for the latest requirements.
            </>
          )}
        </p>
        <h3>Seasonal Considerations</h3>
        <p>
          {city.busy_seasons_events || 'Spring cleanups, summer remodels, and fall yard waste surges are peak times in ' + city.city + '.'}
          During busy periods we expand routing to keep delivery windows tight, but booking a day ahead ensures priority placement.
          {city.winter_notes || ' In winter, we monitor storms and coordinate safe delivery and pickup. Plywood boards protect driveways from heavy equipment on cold asphalt.'}
        </p>
        <h3>HOA-Friendly Placements</h3>
        <p>
          {city.hoa_common_rule || `Many HOAs in ${city.city} simply ask for advance notice when a dumpster will be visible from the street. We can help suggest placements that minimize visual impact and ensure compliance.`}
        </p>
      </div>
    </section>
  )
}

function buildFaq(city: CityData) {
  const base: { question: string; answer: string }[] = []
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

  // 20-yard specific FAQs
  q(`How big is a 20 yard dumpster?`, `A 20 yard dumpster is approximately 22 feet long, 7.5 feet wide, and 4.5 feet high. It holds 20 cubic yards or about 8–10 pickup truck loads.`)
  q(`How much does a 20 yard dumpster cost in ${city.city}?`, `Typical pricing for a 20 yard dumpster in ${city.city} ranges from $400–$500 including delivery and pickup. Weight is billed separately at $55 per ton based on actual weight.`)
  q(`How soon can I get a 20 yard dumpster in ${city.city}?`, `Most 20 yard dumpster deliveries in ${city.city} arrive within ${city.avg_delivery_eta_hours || 4} hours when ordered before ${to12h(city.cutoff_time)}. Same-day delivery is often available.`)
  q(`What can I put in a 20 yard dumpster?`, `General construction debris, household junk, furniture, appliances, roofing shingles, flooring, drywall, yard waste, and more. No hazardous materials, liquids, or electronics.`)
  q(`How is weight billed for a 20 yard dumpster?`, `Weight is always billed separately at $55 per ton based on actual weight at disposal. No free tons are included with any dumpster size.`)
  q(`Will a 20 yard dumpster fit in my driveway?`, `Most standard driveways in ${city.city} accommodate a 20 yard dumpster (22 ft long). We need about 45–50 feet of clearance including truck positioning.`)
  q(`Can I use a 20 yard dumpster for a roof tear-off?`, `Yes—a 20 yard dumpster is perfect for roofing projects of 20–30 squares. Make sure to communicate the square footage when booking so we can confirm capacity.`)
  q(`What is the best dumpster size for a kitchen remodel?`, `A 20 yard dumpster is the most popular choice for full kitchen remodels in ${city.city}. It holds all cabinets, countertops, appliances, flooring, and drywall from a typical kitchen gut.`)
  q(`Do I need a permit for a 20 yard dumpster in ${city.city}?`, city.permit_required ? `Street placements may require a right-of-way permit in ${city.city}. Driveway placements typically do not.` : `Driveway placements usually do not require permits. Street placements may—check with the city beforehand.`)
  q(`How long can I keep a 20 yard dumpster?`, `Standard rental periods include several days. Extensions are available—let us know ahead of time to avoid daily fees and ensure the container stays scheduled for your project.`)
  q(`Can I load the 20 yard dumpster above the rim?`, `No—debris must stay level with the top rail for safe tarping and transport. Overfilled containers cannot be picked up until brought to legal fill height.`)
  q(`How is weight calculated?`, `Weight is measured at the disposal facility and billed at $55 per ton. To minimize costs, keep out prohibited materials, avoid soaking debris with water, and separate heavy materials when possible.`)
  q(`Can a 20 yard dumpster be placed on the street?`, `Often yes, but it may require a city permit and must not obstruct traffic or visibility. Check local regulations before placing in the right-of-way.`)
  q(`Will the 20 yard dumpster damage my driveway?`, `We place protective boards under the dumpster to distribute weight and prevent cracks or impressions on asphalt and concrete driveways in ${city.city}.`)
  q(`Can I share a 20 yard dumpster with my neighbor?`, `Yes—just coordinate on placement, access, and splitting costs. Ensure combined loads stay within weight and volume limits.`)
  q(`What cannot go in a 20 yard dumpster?`, city.disallowed_items_deltas || `No liquids, paints, oils, hazardous waste, electronics, tires, or batteries. Concrete and dirt require dedicated containers.`)
  q(`How do I prepare for 20 yard dumpster delivery?`, `Clear the placement area of vehicles, move trash cans and obstacles, and mark any sprinklers or utilities. Leave 50 feet of clearance for truck maneuvering.`)
  q(`Can I walk into a 20 yard dumpster?`, `Yes—the rear door swings open so you can walk heavy or awkward items in. The 4.5-foot sidewall also allows tossing lighter bags and boxes over the side.`)
  q(`Do you deliver 20 yard dumpsters on weekends in ${city.city}?`, `Saturday deliveries are available. Sunday service is limited to special circumstances—call to confirm availability.`)
  q(`What if I need to move the 20 yard dumpster?`, `Please do not attempt to move the container yourself. Call us and we'll reposition it safely using proper equipment.`)
  q(`Can I put a mattress in a 20 yard dumpster?`, `Yes—most facilities accept mattresses but may charge a handling fee. Let us know when booking if you'll be disposing of mattresses.`)
  q(`Can I put appliances in a 20 yard dumpster?`, `Yes—refrigerators, stoves, washers, and dryers are accepted. Some facilities charge extra for freon removal from refrigerators and AC units.`)
  q(`How many shingle layers fit in a 20 yard dumpster?`, `A 20 yard container typically handles a 20–30 square roof with one layer of shingles. Multi-layer tear-offs or larger roofs may require a 30 yard or swap service.`)
  q(`What's the difference between a 20 yard and 30 yard dumpster?`, `A 30 yard dumpster is larger (22×8×6 ft vs 22×7.5×4.5 ft) and holds 50% more debris. Choose 20 yard for most remodels; upgrade to 30 yard for whole-home or commercial projects.`)
  q(`What's the difference between a 15 yard and 20 yard dumpster?`, `A 20 yard dumpster holds about 33% more than a 15 yard and costs only slightly more. If your project is borderline, the 20 yard offers better value and prevents needing a second haul.`)
  q(`Can I put concrete in a 20 yard dumpster?`, `Concrete and dirt require dedicated containers filled to lower heights due to weight. Do not mix concrete with general debris—call for a special heavy-debris dumpster.`)
  q(`What happens if I finish my project early?`, `Text or call for early pickup. We often retrieve containers same-day or the next morning, depending on route schedules.`)
  q(`Do you offer 20 yard dumpster swaps?`, `Yes—jobsite swaps allow you to fill one 20 yard container, have it hauled away, and receive a fresh one without downtime. Each swap bills as a new haul plus tonnage.`)
  q(`Can I lock a 20 yard dumpster?`, `Roll-off dumpsters do not come with locking lids. Choose strategic placements (garages, gated areas) to reduce unauthorized dumping.`)
  q(`How do I avoid overage fees on a 20 yard dumpster?`, `Choose the right size, avoid prohibited and soaked materials, break down bulky items to maximize space, and do not overload with heavy debris like concrete.`)
  q(`Do you recycle materials from 20 yard dumpsters?`, `Where facilities allow, we route recyclable materials like clean wood, metal, cardboard, and green waste to appropriate processors.`)
  q(`What if it snows during my 20 yard dumpster rental?`, city.winter_notes || `We monitor weather and coordinate safe pickups. We use chocks on inclines and may adjust timing around storms for driver and property safety.`)
  q(`Can I put yard waste in a 20 yard dumpster?`, `Yes—brush, branches, leaves, shrubs, sod, and small stumps are accepted. Large tree trunks or root balls may require special handling.`)
  q(`How much notice do you need for 20 yard dumpster delivery?`, `Same-day is often available when you call before ${to12h(city.cutoff_time)}. For guaranteed timing or busy seasons, booking a day ahead is recommended.`)
  q(`Will you call before delivering the 20 yard dumpster?`, `Yes—we can call or text before arrival. Note your preference (call, text, or both) when booking.`)
  q(`Do you serve HOAs with 20 yard dumpsters?`, `Yes—we coordinate placements and schedules with HOA managers to ensure compliance with community rules and minimize visual impact.`)
  q(`What payment methods do you accept?`, `We accept all major credit cards and offer invoicing for approved business accounts. Payment is typically due upon delivery or pickup.`)
  q(`Can I extend my 20 yard dumpster rental?`, `Yes—daily extensions are available. Let us know early to reserve the slot and avoid automatic pickup.`)
  q(`Where does the debris go from ${city.city}?`, `We use approved facilities such as ${city.transfer_station_name || 'the local landfill/transfer station'}. Disposal regulations vary by material type.`)
  const hoodPair = getNeighborhoodPair(city.neighborhoods_served)
  q(`Do you deliver 20 yard dumpsters to all neighborhoods in ${city.city}?`, `Yes—we serve ${hoodPair.first}, ${hoodPair.second}, and all ${summarizeZipCodes(city.primary_zips)}.`)
  q(`How do I book a 20 yard dumpster in ${city.city}?`, `Call ${BRAND.telephone}, text, or request a quote online. We'll confirm size, placement, delivery window, and pricing—then get you scheduled.`)
  q(`Can I put drywall in a 20 yard dumpster?`, `Yes—drywall and framing debris from remodels are common loads. Avoid soaking drywall, as wet material adds significant weight and may incur overage fees.`)
  q(`Can I put carpet in a 20 yard dumpster?`, `Yes—carpet, padding, and tack strips from flooring removal fit well in 20 yard containers. Roll or fold carpet to maximize space.`)
  q(`What are the dimensions of a 20 yard dumpster?`, `Approximately 22 feet long, 7.5 feet wide, and 4.5 feet high. These dimensions fit most residential driveways in ${city.city}.`)
  q(`Can I put wood in a 20 yard dumpster?`, `Yes—lumber, plywood, framing, cabinets, and furniture are all accepted. Breaking down large wooden items helps you use space efficiently.`)
  q(`How high can I load a 20 yard dumpster?`, `Load debris level with the top rail. Do not pile above the rim—overfilled containers cannot be safely tarped or transported.`)
  q(`Do you offer contractor pricing for 20 yard dumpsters?`, `Yes—frequent users and contractors can negotiate volume pricing. Contact our team to discuss your project needs.`)

  // Ensure at least 46 FAQs
  while (base.length < 46) {
    base.push({ question: `20 yard dumpster question ${base.length + 1} in ${city.city}?`, answer: 'Contact us for details—we are happy to help.' })
  }
  return base
}

export default async function TwentyYardDumpsterPage({ params }: PageProps) {
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
      <SpecsBlock city={city} />
      <BestProjects city={city} />
      <WhatFits city={city} />
      <WhyPopular city={city} />
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
          Looking for a different size?{' '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}`} className="text-blue-600 hover:underline">
            View all dumpster sizes in {city.city}
          </Link>
          {' | '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/15-yard-dumpster`} className="text-blue-600 hover:underline">
            15 Yard
          </Link>
          {' | '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/30-yard-dumpster`} className="text-blue-600 hover:underline">
            30 Yard
          </Link>
          {' '}or explore our{' '}
          <a href="/ut/service-areas" className="text-blue-600 hover:underline">Utah service areas</a>.
        </div>
      </section>
      <CTA city={city} />
    </main>
  )
}
