import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Can and Cannot Go in a Dumpster | TNT Dumpsters',
  description: 'Understand prohibited items in dumpster rentals and the right way to dispose of household chemicals, electronics, tires, and other restricted materials.',
  keywords: 'dumpster prohibited items, what cannot go in dumpster, hazardous waste disposal, dumpster rules',
}

export default function DumpsterProhibitedItemsPage() {
  const prohibited = [
    'Liquids, paints, oils, and household chemicals',
    'Batteries and electronics (E‑waste)',
    'Tires, propane tanks, and fuel containers',
    'Asbestos and other hazardous materials',
    'Refrigerants without proper certification',
  ]

  const allowedWithLimits = [
    'Dirt, concrete, and brick (weight limits apply)',
    'Appliances without refrigerants',
    'Mattresses and furniture (fees may apply in some areas)',
  ]

  return (
    <main className="min-h-screen">
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Waste Management</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Can and Cannot Go in a Dumpster</h1>
            <p className="text-xl text-gray-600 mb-8">Knowing the rules keeps your project safe and avoids extra fees. Here’s a quick guide and where to take restricted items.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 10, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>4 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster3-500x500-1.jpeg" alt="Dumpster with sorted materials and safety signage" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* BlogPosting JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "What Can and Cannot Go in a Dumpster",
                    "description": metadata.description,
                    "datePublished": "2025-01-10",
                    "dateModified": "2025-01-10",
                    "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "TNT Dumpsters",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp",
                        "width": 176,
                        "height": 176
                      }
                    },
                    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/dumpster-prohibited-items" },
                    "image": ["https://tntdump.com/images/dumpster3-500x500-1.jpeg"]
                  })
                }}
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Items</h2>
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {prohibited.map((item, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Allowed With Restrictions</h3>
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {allowedWithLimits.map((item, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Take Restricted Items</h3>
              <p className="text-lg text-gray-700">Local household hazardous waste facilities and e‑waste recyclers can properly handle restricted materials. Call us if you are unsure—we’ll point you in the right direction.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Can Go in a Dumpster (Common Acceptable Materials)</h2>
              <p>The first time I ordered a 20-yard dumpster, I spent an hour staring into it like it was a bottomless rulebook. Can I toss this? What about that? Here’s the simple version I wish someone had handed me on day one: most household junk and construction debris is fair game. Think drywall scraps, lumber offcuts, flooring, trim, doors, windows, and those kitchen cabinets you swore you’d repaint three summers in a row. I’ve loaded carpet and padding by the armful—rolled tight and taped—so it stacks like little burritos. Furniture? Usually fine. Couches, dressers, broken chairs. Mattresses are hit-or-miss; some areas allow them with a fee, so I ask the hauler up front and save the email.</p>
              <p>Yard waste is also typically accepted if it’s non-contaminated. That means branches, hedge clippings, leaves, even sod if you’re lucky. I keep anything stringy like vines bagged because it gets tangled and snaggy, and the loader doesn’t appreciate wrestling a plant octopus at 6 a.m. Large stumps are a different beast—heavy and sometimes restricted—so I plan a separate yard-waste drop if needed. A quick tip that saved me: check if your hauler offers a green waste or clean wood stream; those can be cheaper due to diversion.</p>
              <p>Now, the big one: heavy materials. Concrete, brick, block, dirt, gravel, roofing shingles—all technically “okay,” but not in unlimited quantities. I’ve rented specific “heavy debris” dumpsters with lower volume limits (they’re filled halfway, often) and strict rules about mixing. When I demo a walkway, I stage the concrete into a dedicated bin or pile. Mixing concrete with household junk is how you quietly invent an overage nightmare. Load heavy stuff first, close to the door, and keep it clean of trash. Clean concrete can sometimes be recycled for less—gold star for your budget.</p>
              <p>Appliances without refrigerants (think washers, dryers, stoves) are usually fine. Microwaves often pass, though I’ve had haulers prefer separate metal recycling. Electronics vary by city. Some will accept them in small quantities; others insist on e-waste events. I treat TVs and monitors like they’re radioactive (figuratively!) because nothing spikes your fees like a surprise CRT.</p>
              <p>Packaging is a sleeper category. Cardboard, plastic wrap, empty moving boxes—great filler for the weird spaces between bulky items. If it’s food-soiled or greasy, it’s landfill, not recycling. I break boxes flat and stack them along one wall to keep the loading lane clear. It’s all about air management in a dumpster—the less wasted air, the more value you squeeze from your rental.</p>
              <p>Bottom line: if it’s non-hazardous and not a regulated material, it probably goes. I keep a quick list taped inside my garage—household junk, wood, drywall, flooring, furniture, non-contaminated yard waste, clean packaging, non-Freon appliances—and I’ve avoided 90% of headaches. It’s not perfect, but it keeps me moving fast and within the dumpster rental guidelines that matter most.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Cannot Go in a Dumpster (Prohibited &amp; Regulated Items)</h2>
              <p>This is where folks get burned. I once watched a driver peek into my bin, spot a half-full paint can, and just… close the door and leave. Rejected pickup. Fee. Shame spiral. So let’s get painfully clear about prohibited items—these aren't “eh, maybe.” They’re no.</p>
              <p>Wet paint, solvents, stains, adhesives, pesticides, pool chemicals, and any mystery liquids—nope. That’s hazardous waste territory. Latex paint becomes acceptable only when fully solid (I use paint hardener or cat litter, lids off to show it’s cured). Oil-based paint? Hazardous, period. Batteries are another minefield: car batteries, lithium-ion, even those chunky UPS backups—they belong at battery recycling points, not in your roll-off. I keep a plastic tote labeled “batteries &amp; bulbs” and make one run at the end.</p>
              <p>Flammables and pressurized containers are on the hard-no list. Propane tanks, butane cylinders, oxygen tanks, aerosols that aren’t empty—these can literally explode under compaction. I once found a torch cylinder in a cabinet we were trashing and it nearly cost us a load. Same goes for fuel, motor oil, and antifreeze—take those to an auto parts store or household hazardous waste event.</p>
              <p>Appliances with refrigerants (AC units, refrigerators, freezers, some coolers) are prohibited unless the refrigerant is evacuated by a licensed technician. The trick is: get a refrigerant removal certification receipt and keep it. The driver isn’t guessing; they need proof. If I can’t arrange removal, I schedule an appliance recycling pickup instead.</p>
              <p>Asbestos and lead-based materials require special handling. Old popcorn ceilings, vintage floor tiles, certain insulations, and lead-painted trim—don’t assume. If it’s a pre-1980s renovation, I test. It’s not paranoia; it’s the difference between a normal day and a compliance issue. Contaminated soil—fuel spills, pesticide runoff, or mystery stains—gets sidelined for labelling and separate disposal. Medical waste or sharps? Never in a dumpster. Use a pharmacy drop or medical sharps container.</p>
              <p>Other common bans or restrictions: tires, railroad ties, fluorescent bulbs and mercury items, many categories of e-waste (TVs, CRTs, monitors, some printers). These rules flex by city and state-specific waste codes, so I always ask my hauler for their prohibited materials list in writing. Best move I ever made, honestly.</p>
              <p>Simple rule I share with clients: if it can spill, puncture, pressurize, leach, or require a hazmat suit, it doesn’t belong in your roll-off. If you’re unsure, shoot your hauler a photo. A 2-minute email has saved me hundreds in contamination fees.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Prepare Materials So They’re Accepted</h2>
              <p>Prepping is the difference between a clean, quick pickup and an expensive “try again.” My system starts in the driveway with staging zones. I lay out blue tape squares for wood/drywall, flooring, metal, cardboard, and question mark. That last one is crucial; anything sketchy goes there until I verify. It keeps prohibited items from sneaking in during the chaos.</p>
              <p>Paint gets triage first. Latex? I crack the lids, toss in paint hardener (or kitty litter), stir, and let it cure. Lids stay off so the driver sees it’s solid. Oil-based paint never goes in the dumpster—straight to hazardous waste. Adhesives like mastic or thinset? If it’s fully cured and rock-hard, it usually passes. If it’s goopy, it doesn’t.</p>
              <p>Appliances are next. If there’s refrigerant, I call a tech for Freon evacuation and keep the receipt. For washers/dryers and stoves, I remove cords, tape doors shut, and load them upright against the back wall so they don’t shift. Microwaves go in the metal pile if my hauler prefers recycling; it’s five extra steps that can lower landfill tipping fees.</p>
              <p>For construction debris, I de-nail boards and cut long runs under 6 feet so they nest. Drywall gets stacked flat in bundles—less air, safer loading. Flooring (especially tile) goes in stout contractor bags; it’s dense and can slice hands. I bag insulation and crumbly materials; tiny bits love to jump fences and anger neighbors. Pro tip: keep a magnetic sweeper handy for nails along the loading path.</p>
              <p>Heavy debris (concrete, brick, dirt) stays pure. I never mix it with household junk; that’s how you trigger overage fees and rejected hauls. If I must combine, I ask for a mixed C&amp;D bin and confirm the limit in writing. Even rain can mess you up, so I carry a tarp and bungees. A surprise storm once added a quarter-ton of water to my load—soaked drywall is sneaky heavy.</p>
              <p>Finally, load order matters. Heavy first, tight to the door. Then bulky furniture (broken down if you can), then boxes and soft goods to fill voids. Cardboard goes last as a topper, broken flat to create a tidy cap under the fill line. Keep a bright tape stripe around the rim to remind your crew: level loads only. You’ll be amazed how much smoother pickup day feels when everything looks squared away and intentional.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Weight Limits, Load Levels, and Overage Fees</h2>
              <p>Ask me how I learned about overage fees. Go on. I’ll wait. Yep—blew past my allowance on a roof tear-off because I mixed asphalt shingles with a bunch of soaked carpet and two pallets of tile. The invoice read like a cautionary tale: base rate, per-ton overage, contamination charge for “mixed heavy debris.” Brutal, but fixable once you understand the math.</p>
              <p>Each dumpster size usually comes with a tonnage allowance (e.g., a 20-yard might include a couple of tons, sometimes more, sometimes less). The reality is this varies by market and by what you’re tossing. Heavy debris is the silent budget killer. Concrete and dirt weigh 2,000–3,000 lbs per cubic yard when moist. Shingles can average 200–350 lbs per square (100 sq. ft.), piling up fast. I now estimate worst-case weight using a simple list taped to my clipboard, and I pad by 20%.</p>
              <p>You also need to respect load levels. A dumpster heaped like a muffin top is a no-go. Drivers need level loads for safe tarping and legal transport. If it’s above the rim, expect them to refuse or to ask you to pull it back down. I keep a cheap contractor rake for leveling and a sawzall to break long pieces that poke up. It looks fussy, but it’s faster than repacking in the rain.</p>
              <p>Contamination fees are the other gut punch. Mix concrete with household trash and you’ll likely pay both overage and sorting fees. Toss a prohibited item like a propane tank and you may get a full rejected pickup plus a return trip charge. My mitigation playbook: keep heavy debris separate, bag fine particulates, and label any questionable items with painter’s tape notes (“latex paint—cured solid”). Drivers are human; clarity helps.</p>
              <p>If you suspect you’re near the allowance, call for a swap-out before you cross it. I’ve done mid-project swaps to keep everything under thresholds. Another trick: avoid water weight. Cover the dumpster when rain is forecast, and don’t toss wet carpet or pressure-washed debris the same day. Water is sneaky. It can add hundreds of pounds with zero visual change.</p>
              <p>Finally, ask your hauler for a printed weight ticket after disposal. It’s standard and super helpful for learning your project’s profile. On my next job, I cut the bill by 18% just by sequencing loads and swapping earlier. Weight management isn’t glamorous, but it’s where the money is.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Local Rules, Permits, and Placement (Driveway, Street, HOA)</h2>
              <p>There’s the stuff you throw in—and then there’s where you put the darn thing. I’ve set a dumpster perfectly… only to learn it sat two feet into the right-of-way and required a street placement permit I didn’t pull. Cue the scramble. Here’s how I plan now.</p>
              <p>If the dumpster goes on a public street, most cities require a permit. Some are online, others need a visit, a fee, and reflective barricades. I call Public Works or check the city website the same day I book the dumpster. Typical details: container size, placement dates, contact person, and sometimes a site sketch. Approval can take 1–3 business days, so I pad my schedule, especially around holidays.</p>
              <p>HOAs can be trickier than cities. I’ve seen rules about container color (seriously), placement hours, and even mandatory driveway protection. I always email the HOA manager with dates, a photo of the container style, and a polite promise to keep things clean. It sounds overkill, but it’s saved me fines and cranky emails. Speaking of protection, lay ¾-inch plywood under the wheels or rollers to prevent driveway dents—especially on hot days when asphalt softens.</p>
              <p>Placement is both safety and sanity. I measure the drop zone, confirm overhead clearance (watch for power lines and tree limbs), and check the approach angle for the delivery truck. Tight alleys and steep driveways are not theoretical problems; they’re tow bills. I snap a site photo with markings (chalk works) and text it to the dispatcher with notes like “back left of driveway, door facing garage, keep clear of sprinkler heads.” Clear notes make for smooth mornings.</p>
              <p>I also think about neighbor impact. If we’re loading dusty drywall or demo debris, I schedule during the day and keep a leaf blower and broom handy for street cleanup. If we’re using saws or breaking concrete, I let the neighbor know the timeframe. People are surprisingly chill when they feel informed.</p>
              <p>Final pro move: add gate codes, contact on site, and delivery window into your order notes. If you’ve ever had a driver loop your block because they couldn’t reach you, you know the pain. I prefer morning drops—it leaves the day to adjust if something goes sideways. And once placed, I throw bright cones around the perimeter the first day; it’s a simple way to avoid “whoops” from delivery vans.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Recycling vs. Landfill: Greener (and Sometimes Cheaper) Choices</h2>
              <p>I didn’t start out green—just cheap. Then I learned recycling streams can be both. When a hauler offers mixed C&amp;D (construction &amp; demolition) sorting, I’ll take it, but I still pre-sort the easy wins because that’s where the savings hide.</p>
              <p>Clean wood is the low-hanging fruit. Studs, trim, pallets—keep it free of paint and hardware when possible. Some centers chip it into mulch or biomass fuel, which can carry lower tipping fees. Metal is the sleeper moneymaker. I’ve offset an entire pickup fee by staging steel racks, copper wire, and aluminum into a separate run. Even if you don’t scrap it yourself, many haulers credit metal-heavy loads.</p>
              <p>Cardboard is another easy stream. Flatten boxes, keep them dry, and you might qualify for free or reduced disposal. When I manage a kitchen remodel, I stage a separate cardboard-only bin just to keep it clean. Concrete and brick recycling is huge: clean loads get crushed into base material, typically at a lower rate than landfill. I keep a dedicated concrete pile with zero trash mixed in; one gum wrapper won’t ruin it, but a plastic bag full of tile mastic might.</p>
              <p>Donation is the best “recycling.” Habitat ReStore will often take cabinets, doors, light fixtures, sometimes even countertops. We remove carefully, take good photos, and schedule a pickup. It keeps tonnage out of your dumpster and frankly feels good. Clients notice. If something is borderline—like a couch that’s tired but clean—I list it locally with a “curb alert” and a two-hour window. Gone, nine times out of ten.</p>
              <p>For projects chasing LEED points or just better reporting, ask your hauler for diversion receipts and weight tickets by material type. I keep a simple spreadsheet: date, material, weight, destination. On a recent office cleanout, we hit a 72% diversion rate by routing metal, cardboard, and concrete to dedicated facilities and leaving true trash for the mixed C&amp;D.</p>
              <p>One honest note: recycling isn’t always cheaper if your load is contaminated or you’re driving across town for tiny quantities. I set a rule of thumb: if I can stage a full pickup or a clean, significant pile, I do it. If not, I lean on mixed C&amp;D and keep the dumpster as uncontaminated as possible. Green isn’t all-or-nothing; it’s a series of small, smart choices that add up.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Special Cases That Trip People Up</h2>
              <p>If I had a nickel for every mattress that caused drama, I’d fund my own landfill. Mattresses and box springs look innocent, but they’re space hogs and often carry extra fees. Some areas ban them in standard dumpsters; others require tagging. I now ask up front and, if allowed, I compress them with ratchet straps, stack vertically, and load late so they don’t balloon the center of the bin.</p>
              <p>Roofing is another trap. Asphalt shingles are heavy; cedar or slate has different pathways. I never mix roofing with household junk anymore. It’s clean shingles or nothing. I’ll even tarp the roof debris on the ground if rain is coming—wet shingles are crazy heavy. If you’re near the tonnage limit, consider a dedicated roofing bin.</p>
              <p>Yard waste surprises people. Dirt, sod, stumps, and large branches can be accepted—but as heavy debris or green waste, and rarely mixed. If I’m pulling stumps, I either book a green waste bin or haul them to a yard-waste facility myself. They’re dense and awkward. Sod? It’s wet by definition. I let it dry a day if weather cooperates, then load in shallow layers with cardboard sheets between to keep it from matting into a sod brick.</p>
              <p>Cleanouts of sheds and garages always cough up paint, pesticides, pool chemicals, and propane cylinders. I keep a folding table labeled “special waste approval” and everything questionable lands there. I’ll check the local hauler acceptance list and city sites, then make one consolidated hazardous-waste run. It prevents the last-minute “oh no” when the driver is already backing down your driveway.</p>
              <p>Finally, watch timing. After storms or around holidays, demand spikes. Containers are scarce, drivers are slammed, and pickup windows stretch. I book early, set realistic load timelines, and avoid “hero loads” at midnight before pickup. Sloppy packing and prohibited items show up when everyone’s tired. Ask me how I know.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Commercial vs. Residential Dumpster Nuances</h2>
              <p>Residential jobs are emotional—“please don’t scratch the driveway, the baby’s napping”—but commercial work is logistical. You’re juggling property managers, landlords, and sometimes audits. On a retail buildout, we staged three 20-yarders across two alleys with swap-out scheduling every other day. The magic wasn’t the dumpsters; it was the paperwork.</p>
              <p>Commercial sites love documentation. I attach certificates of insurance, weight tickets, and diversion reports to every invoice. For restaurants, contamination is a serious deal—food waste mixed with C&amp;D can turn a load. We keep food waste out of the construction bins entirely and line any temporary cans to prevent leaks. In offices, pallets, racking, and metal fixtures are prime for metal recycling; plan a dedicated pickup and watch your costs drop.</p>
              <p>Safety expectations are higher. I place cones and barricade tape around the container, especially if the public can pass nearby. Flagging for active loading and a clean path reduces risk and complaints. We also use site maps so drivers don’t block fire lanes or loading docks. For tight urban sites, a morning or evening drop avoids traffic and keeps neighbors friendly.</p>
              <p>Residential still has its quirks. You’re navigating HOA dumpster rules, kids on bikes, and neighbors who really love their hedges. I keep driveway protection plywood in the truck and snap “before” photos with timestamps. If we’re on a narrow street, I coordinate with neighbors about parking for the drop window. It’s five minutes of courtesy that saves a day of headache.</p>
              <p>In both worlds, communication is your superpower. I send a pre-delivery email with key points: placement photo, contact on site, gate codes, expected fill line, prohibited items, and the plan for weather. On pickup day, we do a final sweep, level the load, and take photos. If a dispute ever arises, those photos and docs are the difference between “your word vs mine” and a clean, professional record.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Quick FAQ (Straight Answers to Common Questions)</h2>
              <p><strong>“Can I put a TV or computer in the dumpster?”</strong><br />
              Short answer: usually no, because e-waste rules. Some regions allow small electronics in mixed C&amp;D, but many require e-waste recycling events. I treat monitors and TVs as off-limits unless my hauler says otherwise in writing. A rejected haul over one monitor is not the hill to die on.</p>
              <p><strong>“Are tires allowed?”</strong><br />
              Typically banned or fee-based. I’ll collect them separately and call a tire recycling center. If your hauler accepts a limited number with a surcharge, get the fee in writing and tag each tire so it’s visible during pickup.</p>
              <p><strong>“Is drywall always okay?”</strong><br />
              Generally yes if it’s clean and dry. In some areas, very old buildings can have contamination concerns (think asbestos in adjoining materials), so I keep demo layers separate and test when dealing with pre-1980s renovations. Wet drywall also adds ugly weight, so keep it covered.</p>
              <p><strong>“What about fridges or AC units?”</strong><br />
              Only after refrigerant removal by a licensed tech. Keep the refrigerant removal certification on hand. Without it, most drivers have to refuse by policy. For me, scheduling the tech two days prior keeps the project moving.</p>
              <p><strong>“How do I avoid overage fees?”</strong><br />
              Three moves: keep heavy debris pure and separate, cover the dumpster against rain, and call for a swap before you’re at the limit. Load heavy materials first and evenly. Grab the weight ticket afterward and log it for the next job; your future self will thank you.</p>
              <p><strong>“What if I’m not sure about an item?”</strong><br />
              Snap a photo and email your hauler. I also keep the city’s prohibited materials list bookmarked. Two minutes of checking beats a contamination fee or a rejected pickup every single time.</p>
              <p><strong>“Do I need a permit for street placement?”</strong><br />
              Often, yes. Check your city’s right-of-way permit requirement. Plan for a small fee, possible barricades, and lead time. If it’s driveway-only and private property, you’re usually fine—but HOA rules can still apply.</p>
              <p><strong>“Bagster vs. roll-off?”</strong><br />
              If your volume is light and access is easy, a dumpster alternative like a Bagster works. For renovation waste removal, roll-offs are more cost-effective per cubic yard and handle bulkier debris. I choose based on density: heavy debris gets a proper roll-off and clear tonnage terms.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wrap-Up</h2>
              <p>If you made it here, you’re already ahead of most weekend warriors and even a few pros. Knowing what can and cannot go in a dumpster rental, how to prep materials, and how to dodge overage fees turns an anxious chore into a predictable process. Customize these steps for your city, document anything with refrigerants or hazardous waste, and keep your load level and clean. Got a hairy item you’re unsure about? Tell me what it is and your city—we’ll help you route it the right way so pickup day is a total non-event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related articles</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li><Link href="/blog/dumpster-rentals-2025-guide" className="text-blue-600 hover:text-blue-700">Dumpster Rentals: 2025 Guide to Sizes, Prices & Permits</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/winter-dumpster-rental-tips" className="text-blue-600 hover:text-blue-700">Winter Dumpster Rental Tips for Cold Weather</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions About an Item?</h2>
            <p className="text-blue-100 mb-8">We’ll help you determine what’s allowed and the best disposal option.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8012099013" className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">Call (801) 209-9013</a>
              <a href="/quote" className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



