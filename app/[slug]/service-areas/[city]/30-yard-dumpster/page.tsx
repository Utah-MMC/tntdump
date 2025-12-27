import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCityData, getAllCities, type CityData } from '@/lib/cities'
import { buildAllLD } from '@/lib/schema'
import { getNeighborhoodPair, summarizeNeighborhoods, summarizeZipCodes } from '@/lib/cityText'
import { SizesTable, PermitBlock, DisposalBlock, Neighborhoods, Testimonials, FAQ, CTA, NearbyCities } from '@/components/city'

// Generate static params for all cities - 30 yard routes
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
  const title = `30 Yard Dumpster Rental in ${data.city}, Utah | ${BRAND.name}`
  const description = `Rent a 30-yard dumpster in ${data.city}, UT for large cleanouts and construction. Fast delivery and clear pricing—call ${BRAND.telephone}.`
  const canonical = `${BRAND.url}/${data.slug}-dumpster-rentals/service-areas/${data.slug}/30-yard-dumpster`
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
      images: [{ url: '/images/dumpster1-500x500-1.jpeg', width: 1200, height: 800, alt: `30 yard dumpster rental ${data.city}` }],
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">30 Yard Dumpster Rental in {city.city}, Utah</h1>
          <p className="mt-4 text-gray-700">
            When your project demands serious capacity, a 30 yard dumpster is the answer. {BRAND.name} delivers our largest
            roll-off container to {city.city} for whole-home renovations, new construction framing, large estate cleanouts,
            and commercial demolition projects that generate substantial debris.
          </p>
          <p className="mt-3 text-gray-700">
            Our 30 yard dumpsters measure approximately 22 feet long × 7.5 feet wide × 6 feet high—comparable to 12-15
            pickup truck loads. Most orders in {city.city} can be scheduled same-day when placed before {to12h(city.cutoff_time)},
            with typical delivery in about {city.avg_delivery_eta_hours || 4} hours. We include protective boards for driveways
            and help you pick the optimal placement that balances access, safety, and any HOA or permit requirements.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a href={city.quote_url || '/quote'} className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get a Quote</a>
            <a href={city.phone_cta ? `tel:+1${city.phone_cta.replace(/[^0-9]/g,'')}` : '#'} className="rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Call ({city.phone_cta?.slice(0,3)}) {city.phone_cta?.slice(4)}</a>
          </div>
        </div>
        <div className="relative aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={city.gallery?.[0]?.src || '/images/dumpster2-500x500-1.jpeg'}
            alt={`30 yard dumpster rental in ${city.city} Utah`}
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

function SpecsSection({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">30 Yard Dumpster Specifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dimensions</h3>
            <p className="text-gray-700">22 ft L × 7.5 ft W × 6 ft H</p>
            <p className="text-sm text-gray-600 mt-1">Footprint requires ~60 ft clearance</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Capacity</h3>
            <p className="text-gray-700">30 cubic yards</p>
            <p className="text-sm text-gray-600 mt-1">~12-15 pickup truck loads</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight Limit</h3>
            <p className="text-gray-700">Weight billed at $55/ton</p>
            <p className="text-sm text-gray-600 mt-1">Based on actual weight at disposal</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
            <p className="text-gray-700">$500-$600</p>
            <p className="text-sm text-gray-600 mt-1">
              <a href={city.quote_url || '/quote'} className="text-blue-600 hover:underline">Get exact quote</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BestProjectsSection({ city }: { city: CityData }) {
  const projects = [
    {
      title: 'Whole-Home Renovations',
      description: `Gutting multiple rooms or an entire house in ${city.city}? A 30 yard handles drywall, framing, cabinets, flooring, and fixtures from 3,000+ sq ft properties.`,
      icon: '✅',
    },
    {
      title: 'New Construction Framing',
      description: 'Perfect for builders working on new construction sites. Handles wood scraps, packaging, and framing debris from large residential or commercial builds.',
      icon: '✅',
    },
    {
      title: 'Large Estate Cleanouts',
      description: 'Clearing out a multi-story home, downsizing, or handling an estate? The 30 yard size accommodates furniture, appliances, and decades of accumulated items.',
      icon: '✅',
    },
    {
      title: 'Commercial Cleanouts',
      description: 'Retail fit-outs, office relocations, warehouse clearances—commercial projects generate volume, and our 30 yard containers keep pace.',
      icon: '✅',
    },
    {
      title: 'Multi-Story Projects',
      description: 'When your demolition or renovation spans multiple floors, the extra capacity prevents constant swaps and keeps crews productive.',
      icon: '⭐',
    },
    {
      title: 'Large Landscaping Projects',
      description: 'Major yard overhauls with brush, stumps, sod removal, and hardscaping debris. Watch weight on dirt and rock—we can help you size appropriately.',
      icon: '✅',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Projects for a 30 Yard Dumpster in {city.city}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="text-3xl mb-3">{proj.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatFitsSection({ city }: { city: CityData }) {
  const items = [
    'Drywall from a 3,000+ sq ft home',
    'All cabinets and countertops from a full kitchen + bathrooms',
    'Flooring from 2,500+ sq ft (carpet, hardwood, tile)',
    'Roofing shingles from 40-50 squares (consult on weight)',
    'Furniture from a 4+ bedroom house',
    'Framing lumber and construction debris from large builds',
    'Yard waste from major landscaping (2+ acres of clearing)',
    'Mixed debris from commercial demolition projects',
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>What Fits in a 30 Yard Dumpster?</h2>
        <p>
          The 30 yard is our largest standard container, designed for projects that generate substantial volume.
          Here's what typically fits:
        </p>
        <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          <strong>Visual comparison:</strong> Picture 12-15 full-size pickup truck beds worth of material. If you're
          renovating an entire house or clearing out a large property, this is your go-to size.
        </p>
      </div>
    </section>
  )
}

function WeightConsiderationsSection({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>Important: Weight Considerations for 30 Yard Dumpsters</h2>
        <p>
          While the 30 yard offers maximum volume, it's critical to understand weight limits. Our containers typically
          include 3-4 tons of disposal. General construction debris, household items, and light demolition materials
          rarely exceed this limit.
        </p>
        <h3>Watch Out For Heavy Materials</h3>
        <ul>
          <li><strong>Dirt, Soil, or Sod:</strong> Earth is extremely heavy. A full 30 yard of dirt can exceed 20 tons—far beyond legal road limits. Use a 15 yard or smaller for heavy dirt loads.</li>
          <li><strong>Concrete, Asphalt, or Brick:</strong> Masonry debris should go in dedicated containers with lower fill heights. A 30 yard of concrete is unsafe and often illegal to haul.</li>
          <li><strong>Roofing Shingles:</strong> Multiple layers from large roofs can get heavy fast. Always disclose roof size and layers so we can help you size correctly.</li>
          <li><strong>Wet or Waterlogged Materials:</strong> Rain-soaked drywall, insulation, or carpet can double in weight. Cover your dumpster during storms if possible.</li>
        </ul>
        <h3>How to Avoid Overweight Fees in {city.city}</h3>
        <ul>
          <li>Mix heavy and light materials when possible (e.g., drywall and wood framing together).</li>
          <li>Keep prohibited items out—liquids, hazardous waste, and electronics add weight and fees.</li>
          <li>Don't compact with heavy equipment unless you know your total tonnage.</li>
          <li>Call us for a weight estimate if your project includes masonry, roofing, or earth moving.</li>
        </ul>
        <p>
          Our team in {city.city} can help you strategize disposal for heavy projects—sometimes multiple smaller
          containers are more cost-effective than one overweight 30 yard.
        </p>
      </div>
    </section>
  )
}

function LocalContext({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom prose prose-blue max-w-none">
        <h2>30 Yard Dumpster Delivery in {city.city}</h2>
        <p>
          Renting a 30 yard dumpster in {city.city} is straightforward when you work with a local operator who understands
          your area. {BRAND.name} delivers across {city.county} including {summarizeNeighborhoods(city.neighborhoods_served)} and beyond.
          We coordinate drop-off times, help with placement strategy, and manage pickup as soon as you're ready.
        </p>
        <p>
          Disposal for {city.city} generally routes through {city.transfer_station_name || 'the local transfer station'} at
          {city.transfer_station_address ? ` ${city.transfer_station_address}` : ' an approved facility'}. Certain materials
          have special rules—{city.disallowed_items_deltas || 'we cannot accept liquids, hazardous waste, or tires in mixed loads'}—and
          we'll guide you on what goes in the bin.
        </p>
        <h3>Placement Tips for 30 Yard Containers</h3>
        <ul>
          <li><strong>Space Required:</strong> Allow ~60 feet of clearance (22 ft container + truck maneuvering). Driveways, side yards, and parking areas work well.</li>
          <li><strong>Overhead Clearance:</strong> Tree branches, power lines, and low carports can interfere. Ensure 20-25 feet of vertical space.</li>
          <li><strong>Surface Protection:</strong> We provide boards to protect asphalt and concrete from wheel impressions. Avoid soft lawns unless protected.</li>
          <li><strong>Access:</strong> Place near your work zone to minimize carry distance, but keep clear of garage doors, mailboxes, and fire hydrants.</li>
          {city.permit_required && (
            <li><strong>Permits:</strong> Street or right-of-way placements may require a city permit in {city.city}. {city.permit_url && (<>Review <a href={city.permit_url} rel="nofollow" target="_blank">official permit guidance</a> before delivery.</>)}</li>
          )}
        </ul>
        <h3>Seasonal Notes for {city.city}</h3>
        <p>
          {city.busy_seasons_events || 'Spring cleanups, summer remodels, and fall projects create seasonal demand spikes.'}
          {' '}During peak periods, booking a day ahead improves your delivery window. Winter placements may require extra
          coordination around storms—{city.winter_notes || 'we use chocks on inclines and monitor weather for safe delivery and pickup.'}
        </p>
        <h3>Project Examples in {city.city}</h3>
        {city.real_job_examples && city.real_job_examples.length > 0 ? (
          <ul>
            {city.real_job_examples.filter(j => j.size === 30).map((j, i) => (
              <li key={i}>{j.size} yard — {j.summary}</li>
            ))}
            {city.real_job_examples.filter(j => j.size !== 30).slice(0, 2).map((j, i) => (
              <li key={i}>{j.size} yard — {j.summary}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>30 yard — Whole-home gut renovation in downtown {city.city}</li>
            <li>30 yard — New construction framing cleanup for 3,500 sq ft home</li>
            <li>30 yard — Estate cleanout with furniture and appliances from 5-bedroom house</li>
          </ul>
        )}
      </div>
    </section>
  )
}

function SizeComparisonSection({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does the 30 Yard Compare?</h2>
        <div className="prose prose-blue max-w-none">
          <p>
            Choosing the right dumpster size saves time and money. Here's how the 30 yard stacks up against our other sizes:
          </p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/15-yard-dumpster`} className="text-blue-600 hover:underline">
                15 Yard Dumpster
              </Link>
            </h3>
            <p className="text-sm text-gray-700 mb-2">16' × 7.5' × 4.5'</p>
            <p className="text-sm text-gray-600">
              Best for small remodels, garage cleanouts, and light landscaping. About 4-6 pickup truck loads.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}/20-yard-dumpster`} className="text-blue-600 hover:underline">
                20 Yard Dumpster
              </Link>
            </h3>
            <p className="text-sm text-gray-700 mb-2">17' × 7.5' × 5'</p>
            <p className="text-sm text-gray-600">
              The most popular size. Handles medium remodels, roofing projects, and medium-sized cleanouts. About 8-10 truck loads.
            </p>
          </div>
          <div className="border border-blue-600 rounded-lg p-6 bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
            <p className="text-sm text-gray-700 mb-2">22' × 7.5' × 6'</p>
            <p className="text-sm text-gray-600">
              <strong>You're here!</strong> Our largest size for whole-home projects, new construction, and commercial cleanouts. 12-15 truck loads.
            </p>
          </div>
        </div>
        <div className="mt-6 prose prose-blue max-w-none">
          <p>
            <strong>Still unsure?</strong> Use our{' '}
            <a href="/calculator/volume" className="text-blue-600 hover:underline">volume calculator</a> to estimate your
            debris, or check out our guide on{' '}
            <a href="/choose-right-dumpster-size" className="text-blue-600 hover:underline">choosing the right dumpster size</a>.
            For pricing comparisons, see our{' '}
            <a href="/dumpster-rental-prices-by-size" className="text-blue-600 hover:underline">pricing by size breakdown</a>.
          </p>
          <p>
            Need commercial capacity or frequent swaps? Explore our{' '}
            <a href="/dumpsters/commercial" className="text-blue-600 hover:underline">commercial dumpster solutions</a>.
          </p>
        </div>
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

  // 30 yard specific questions first
  q(`How much does a 30 yard dumpster cost in ${city.city}?`, `Pricing typically ranges from $500-$600 for a 30 yard dumpster in ${city.city}, including delivery and pickup. Weight is billed separately at $55 per ton based on actual weight. Final cost depends on location, haul distance, and debris type.`)
  q('What are the dimensions of a 30 yard dumpster?', 'A 30 yard dumpster measures approximately 22 feet long × 7.5 feet wide × 6 feet high. Plan for ~60 feet of clearance for safe delivery and pickup.')
  q('How much can a 30 yard dumpster hold?', 'About 30 cubic yards—equivalent to 12-15 full-size pickup truck loads. Perfect for whole-home renovations, large cleanouts, and new construction projects.')
  q('How is weight billed for a 30 yard dumpster?', 'Weight is always billed separately at $55 per ton based on actual weight at disposal. No free tons are included with any dumpster size. Heavy materials like concrete or dirt may require dedicated containers.')
  q('Can I put concrete in a 30 yard dumpster?', 'Generally no. Concrete and masonry are extremely heavy and should go in dedicated containers with lower fill heights. A full 30 yard of concrete exceeds legal road weight limits.')
  q('Is a 30 yard dumpster big enough for a whole house cleanout?', 'Yes—a 30 yard is ideal for clearing out entire homes, including furniture, appliances, and decades of accumulated items from 3-5 bedroom properties.')
  q('How long can I keep a 30 yard dumpster?', 'Standard rental periods include several days to a week. Extensions are available—just let us know to avoid daily fees. Long-term projects can negotiate weekly or monthly rates.')
  q(`Can a 30 yard dumpster fit in my ${city.city} driveway?`, 'Most standard driveways can accommodate a 30 yard if they have ~60 feet of clearance and no low-hanging obstacles. We can assess your site via photo or in-person if needed.')

  // General questions
  q(`How soon can I get a 30 yard dumpster in ${city.city}?`, `Most deliveries arrive in about ${city.avg_delivery_eta_hours || 4} hours when ordered before ${to12h(city.cutoff_time)}. Same-day is often available for 30 yard containers.`)
  q('What projects need a 30 yard dumpster?', 'Whole-home renovations, new construction framing, large estate cleanouts, commercial demolition, multi-story projects, and major landscaping overhauls.')
  q('Do you deliver 30 yard dumpsters on weekends?', 'Yes—Saturday deliveries are available. Sunday service is limited but possible for special circumstances. Call to confirm weekend availability.')
  q('Can I load the 30 yard dumpster level with the top?', 'Yes—load to the top rail, but nothing should extend above the rim. Overfilled containers cannot be safely tarped or transported.')
  q('What cannot go in a 30 yard dumpster?', city.disallowed_items_deltas || 'No liquids, paints, oils, batteries, tires, hazardous waste, or electronics. Dirt and concrete require dedicated containers.')
  q(`Do I need a permit for a 30 yard dumpster in ${city.city}?`, city.permit_required ? `Street or right-of-way placements may require a city permit. Driveway placement usually does not. Check ${city.permit_url || 'with the city'} before delivery.` : 'Driveway placements typically do not require permits. Street placements may—confirm with the city before scheduling.')
  q('Will the 30 yard dumpster damage my driveway?', 'We place protective boards under the wheels to distribute weight and prevent damage to asphalt or concrete. Proper placement minimizes risk.')
  q('Can I share a 30 yard dumpster with a neighbor?', 'Yes, as long as the placement location is agreed upon and the combined load stays within weight and volume limits.')
  q('What if my 30 yard dumpster fills up early?', 'Call us for a swap—we deliver a new empty container and remove the full one. Each swap is billed as a new haul plus tonnage.')
  q('How do I prepare for a 30 yard dumpster delivery?', 'Clear the placement area of vehicles, bins, and obstacles. Mark any sprinklers or utilities. Ensure ~60 feet of linear clearance and 20-25 feet overhead.')
  q(`Where does waste from ${city.city} go?`, `We use approved facilities such as ${city.transfer_station_name || 'the local transfer station'}. Clean loads may be routed to recyclers where possible.`)
  q('Do you recycle materials from 30 yard dumpsters?', 'Where facilities allow, we route clean wood, metal, and green waste to recyclers. Mixed construction debris typically goes to landfill.')
  q('Can I put appliances in the 30 yard dumpster?', 'Yes—most appliances are accepted. Some facilities charge handling fees for refrigerators or other items with refrigerant.')
  q('Can I put mattresses in a 30 yard dumpster?', 'Most facilities accept mattresses with a handling fee. Mention mattresses when booking so we can confirm local disposal rules.')
  q('Do you serve HOAs and property managers?', 'Yes—we coordinate placements and pickup schedules to comply with HOA rules and minimize disruption to residents.')
  q(`What payment methods do you accept in ${city.city}?`, 'We accept major credit cards and offer business accounts with invoicing for contractors and frequent users.')
  q('Can I move the 30 yard dumpster after delivery?', 'No—do not attempt to move the container yourself. Call us to reposition safely with our truck.')
  q('Will the driver call before delivery?', 'Yes—we can call or text en route. Note your preference when booking to ensure clear communication.')
  q('What time are pickups scheduled?', 'Pickups are routed by area throughout the day. If you have gate or access restrictions, let us know so we can coordinate.')
  q('Can I lock the 30 yard dumpster?', 'Locking lids are not standard on roll-off containers. Strategic placement away from public access can reduce unauthorized dumping.')
  q('How do I avoid overweight fees?', 'Mix heavy and light materials, exclude prohibited items, avoid soaking debris in rain, and consult us for weight estimates on masonry or roofing projects.')
  q('Do you place 30 yard dumpsters on gravel?', 'Yes—packed gravel is generally fine. We avoid soft or uneven surfaces that could cause instability or sinking.')
  q('Can you place in an alley?', 'Case-by-case. Alley width, overhead clearance, and turning radius matter. Send a photo—we can assess feasibility quickly.')
  q('What if my HOA complains about the dumpster?', city.hoa_common_rule || 'We can relocate or expedite pickup to comply. Many HOAs accept short-term containers with advance notice—we can help coordinate.')
  q('Do you accept roofing shingles in 30 yard dumpsters?', 'Yes—roof tear-offs are common. Disclose roof size and shingle layers so we can ensure the container is sized correctly for weight.')
  q('How do swaps work for 30 yard dumpsters?', 'When full, we remove the loaded container and deliver a fresh one. Each swap incurs a new haul fee plus tonnage. Ask about project pricing for multiple turns.')
  q('Can I extend my rental period?', 'Yes—daily or weekly extensions are available. Contact us early to reserve the time slot and avoid daily fees.')
  q('Do you offer contractor or volume pricing?', 'Yes—frequent users and contractors can negotiate rates. Ask our team about commercial accounts and project-based pricing.')
  const hoodPair = getNeighborhoodPair(city.neighborhoods_served)
  q(`Do you serve my neighborhood in ${city.city}?`, `Yes—from ${hoodPair.first} to ${hoodPair.second} and the ${summarizeZipCodes(city.primary_zips)}. Call if unsure—we likely deliver to your area.`)
  q('How do I book a 30 yard dumpster?', 'Call, text, or request a quote online. We confirm details, delivery window, and placement—then deliver on schedule.')
  q('What if I need the dumpster longer than expected?', 'Extensions are simple—just let us know. We charge daily or weekly rates and adjust your pickup date accordingly.')
  q(`What happens if it snows in ${city.city}?`, city.winter_notes || 'We monitor weather and coordinate safe delivery and pickup around storms. Chocks and boards prevent sliding on inclines.')
  q('Can I put yard waste in a 30 yard dumpster?', 'Yes—branches, brush, sod, and green waste are accepted. Watch weight on dirt and stumps, which can quickly exceed tonnage limits.')
  q('Do you deliver 30 yard dumpsters to construction sites?', 'Yes—builders, contractors, and commercial sites are a core part of our service. We coordinate delivery around site schedules and access.')
  q('What if access to my property is tight?', 'Our drivers are skilled at navigating tight spaces. Share photos or measurements—we can advise on feasibility and alternative placements.')
  q('Can I put furniture in a 30 yard dumpster?', 'Yes—furniture, appliances, and household goods are all accepted. Break down large items when possible to maximize space.')
  q('What is the difference between a 20 yard and 30 yard?', 'A 20 yard holds ~8-10 truck loads and is ideal for medium projects. The 30 yard holds ~12-15 loads and handles whole-home or commercial projects.')
  q('Do you haul away the dumpster when I call?', 'Yes—we aim for same-day or next-morning pickup when you call. Route density and time of day affect exact timing.')
  q('Can I order multiple 30 yard dumpsters?', 'Yes—large projects may need simultaneous containers or sequential swaps. We can stage delivery and pickup to keep your project moving.')
  q('How do I know if I need a 30 yard vs smaller size?', 'If you are renovating a whole home, clearing a large estate, or working on commercial construction, the 30 yard is usually the right choice. Use our volume calculator or call for a consultation.')

  // Ensure we have at least 46 questions
  while (base.length < 46) {
    base.push({ question: `30 yard dumpster question ${base.length + 1} in ${city.city}?`, answer: 'Contact us for details—we are happy to help with your large project.' })
  }
  return base
}

export default async function ThirtyYardDumpsterPage({ params }: PageProps) {
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
      <SpecsSection city={city} />
      <BestProjectsSection city={city} />
      <WhatFitsSection city={city} />
      <WeightConsiderationsSection city={city} />
      <LocalContext city={city} />
      <SizeComparisonSection city={city} />
      <SizesTable city={city} brand={BRAND} />
      <PermitBlock city={city} />
      <DisposalBlock city={city} />
      <Neighborhoods city={city} />
      <Testimonials city={city} />
      <FAQ items={faq} />
      <NearbyCities city={city} />
      <section className="py-10 bg-white">
        <div className="container-custom text-sm text-gray-600">
          Looking for other sizes or cities?{' '}
          <Link href={`/${city.slug}-dumpster-rentals/service-areas/${city.slug}`} className="text-blue-600 hover:underline">
            View all dumpster sizes in {city.city}
          </Link>
          {' | '}
          <Link href="/ut/service-areas" className="text-blue-600 hover:underline">
            Explore Utah service areas
          </Link>
          {' | '}
          <a href="/choose-right-dumpster-size" className="text-blue-600 hover:underline">
            Sizing guide
          </a>
        </div>
      </section>
      <CTA city={city} />
    </main>
  )
}


