import { Metadata } from 'next'
import Link from 'next/link'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export default function DumpsterRentals2025GuidePage() {
  return (
    <main className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Dumpster Rentals: 2025 Guide to Sizes, Prices & Permits
            </h1>

            <article className="prose-article">
              {/* BlogPosting JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Dumpster Rentals: 2025 Guide to Sizes, Prices & Permits",
                    "description": "Comprehensive 2025 guide to dumpster rentals: sizes, pricing, permits/HOA rules, prohibited items, rental process, tonnage, and cost-saving tips.",
                    "datePublished": "2025-01-08",
                    "dateModified": "2025-01-08",
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
                    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/dumpster-rentals-2025-guide" }
                  })
                }}
              />
              <p>
                Here’s a wild stat I share with every homeowner and GC I work with: a single 20-yard roll-off can hold 110–130 trash bags, yet I still see folks overfill it in one weekend. Why? Underestimating debris volume, forgetting about weight limits, or skipping the permit. I’ve made these mistakes, too—loaded a bin with soaked yard waste after an overnight storm and got smacked with overage. Oof!
              </p>
              <p>
                In this deep dive, I’ll walk you through roll-off dumpster sizes, real-world pricing, permits and HOA rules, what you can and can’t toss, the exact rental process, weight/tonnage, and how to avoid surprise dump fees. We’ll talk eco-friendly recycling, provider vetting, and safety, plus tricks for same-day delivery. I’ll use simple math, quick checklists, and I’ll even admit where I blew it, so you don’t have to. Let’s get you the right dumpster, at the right price, with zero drama.
              </p>

              <h2>What Is a Roll-Off Dumpster? (Types & Use Cases)</h2>
              <p>
                When people say “dumpster rentals,” they’re usually talking about roll-off dumpsters—those big, open-top steel boxes delivered by a special truck that literally rolls the container off the bed. They’re temporary, perfect for home renovations, roofing tear-offs, landscaping, estate cleanouts, and construction & demolition (C&amp;D). The other common type is the front-load dumpster, the lidded kind you see behind businesses for ongoing weekly service. Different tools for different jobs.
              </p>
              <p>
                I learned the hard way to clarify use case before ordering. One spring, I booked a 30-yard roll-off for a “light remodel,” but the crew swapped plans and demoed plaster and lath. That stuff is dense. The bin was only three-quarters full when we hit the weight limit, and the overage fee stung. Since then, I always ask: what materials exactly? Drywall? Cabinets? Roofing shingles? Concrete? Wet yard waste? “Construction debris” is too vague, and it’s how you get burned.
              </p>
              <p>
                Roll-offs come with rental periods (often 7–10 days), included tonnage (a weight cap), and pickup at the end—or a swap-out mid-project if you need a fresh container. You can add driveway protection boards, request a lock, and give placement instructions like “front left of driveway, three feet from garage.” If you’re in a tight alley or have a short drive, ask for a smaller footprint container or a shorter length bin. Hook-lift trucks can set containers more precisely; a nice perk on crowded streets.
              </p>
              <ul>
                <li>Bathroom or small cleanout: 10–15 yard roll-off</li>
                <li>Kitchen remodel, flooring, roofing: 20 yard</li>
                <li>Whole-home renovation, big demo, new build: 30 yard (plan swap-outs if needed)</li>
              </ul>
              <p>
                Last tip: roll-offs are open-top, which is amazing for speed—just toss and go—but light debris blows. I keep a tarp in the garage and strap it down overnight. It’s a small habit that stops messes, neighbor complaints, and “windblown litter” fees.
              </p>

              <h2>Dumpster Sizes &amp; Dimensions (10, 15, 20, 30 Yard)</h2>
              <p>
                Sizing is where most money is saved—or lost. A “yard” is a cubic yard, so a 20-yard roll-off holds roughly 20 cubic yards of material. People ask me for truck-load equivalents, so here’s a practical cheat:
              </p>
              <ul>
                <li><strong>10 yard (~12’L x 7’W x 3.5’H):</strong> ~50–60 trash bags; ~3 pickup-truck loads</li>
                <li><strong>15 yard (~16’L x 7’W x 4.5’H):</strong> ~80–90 bags; ~4–5 pickup loads</li>
                <li><strong>20 yard (~17'L x 7.5'W x 5'H):</strong> ~110–130 bags; ~6–8 pickup loads</li>
                <li><strong>30 yard (~18.3'L x 7.3'W x 6.6'H):</strong> ~170–190 bags; ~9–11 pickup loads</li>
                
              </ul>
              <p>
                Dimensions vary by hauler, but lengths are commonly 12–22 feet. Height matters more than folks think. I once ordered a tall container for a garage clear-out and… we couldn’t easily lift heavy furniture over the side walls. We had a walk-in door—thank goodness—but that slowed loading. If your crew is small or you’re moving bulky items, consider the 20 yard with lower walls and a swing door. Faster, safer.
              </p>
              <p>
                Material density is the silent killer. A 20 yard full of drywall is modest weight; a 20 yard of shingles, concrete, dirt, or wet yard waste can pound the scale. Many haulers restrict heavy materials to the bottom half of a container or require a smaller bin (like a 10 yard) for concrete/brick, because trucks and road laws have weight limits. If your job involves clean concrete, brick, or soil, ask for a dedicated “clean fill” dumpster. Cheaper processing, fewer headaches.
              </p>
              <p>Driveway fit is another constraint. Think about:</p>
              <ul>
                <li>Footprint: Will a 22-foot container block garage access?</li>
                <li>Overhead clearance: Power lines, carports, low tree limbs.</li>
                <li>Turning radius: Can the truck angle in and out safely?</li>
              </ul>
              <p>
                When in doubt between sizes, I tend to size up one step (e.g., 15 → 20, or 20 → 30). Paying a slightly higher base fee often beats a second haul or a painful overage. Learned that lesson on a siding job where we were “definitely done”—until the last wall came down.
              </p>

              <h2>Dumpster Rental Prices &amp; Cost Factors</h2>
              <p>
                Everyone wants the magic number, but dumpster pricing is local. That said, you can control it if you know the levers. Your total cost typically includes:
              </p>
              <ul>
                <li>Base rate (depends on size, market, and distance to transfer station/landfill)</li>
                <li>Included tonnage (e.g., 1–3 tons for smaller bins; 3–5+ tons for larger)</li>
                <li>Rental period (often 7–10 days; extra days billed daily)</li>
                <li>Delivery zone fees or fuel surcharges (distance = dollars)</li>
                <li>Contamination charges (for prohibited items mixed in)</li>
                <li>Overage fees (when you exceed the weight cap)</li>
              </ul>
              <p>
                Seasonality is real. Spring and early summer can push rates up because everyone’s remodeling and cleaning out. I’ve secured better pricing by booking mid-week or asking, “Do you have off-route availability?”—some haulers discount fills that fit an existing route. Also, apples-to-apples quotes matter. If Vendor A says “20 yard for $420” and Vendor B says “20 yard for $465,” don’t pick A yet. Ask both: “What’s the included tonnage? How many days? Anything that triggers a fee? What’s the per-ton overage?” I once took the “cheaper” bin and paid an extra $140 for overage. The “expensive” bin would’ve been $60 cheaper in the end.
              </p>
              <p>Other sneaky costs:</p>
              <ul>
                <li>Hard-to-access placement (tight alleys, steep drives)</li>
                <li>Heavy material restrictions (separate clean concrete dumpster may be cheaper)</li>
                <li>Permit (street/right-of-way fees; sometimes $25–$150+ depending on city)</li>
                <li>Swap-outs (plan your number of hauls for big projects)</li>
              </ul>
              <p>
                <strong>Pro tip:</strong> If you suspect you’ll run heavy, negotiate extra tonnage up front. Some haulers will bump included tons for a modest fee that’s far less than per-ton overage. Also ask for scale tickets with inbound/outbound weights for transparency.
              </p>

              <h2>How to Choose the Right Size (Decision Framework)</h2>
              <p>Here’s my three-step no-surprise sizing method:</p>
              <ol>
                <li>
                  <strong>Map the debris.</strong> Write down rooms and materials: “Kitchen: cabinets, countertops, flooring; Yard: shrubs, sod; Roof: 18 squares asphalt.” I estimate cubic yards by visualizing piles: a 3’ x 3’ x 3’ cube is one yard. Ten of those is a 10-yard bin. It’s not perfect, but it’s close enough to pick the right container.
                </li>
                <li>
                  <strong>Adjust for density.</strong> Use a simple scale:
                  <ul>
                    <li>Light: furniture, cardboard, insulation, cabinets</li>
                    <li>Medium: drywall, lumber, mixed household junk</li>
                    <li>Heavy: shingles, dirt, concrete, plaster, wet yard waste</li>
                  </ul>
                  If more than 30% of your load is heavy, choose a smaller bin with higher included tons or a dedicated clean fill dumpster. I once put wet sod on top of household junk. Rookie move. Always load heavy materials first, evenly distributed.
                </li>
                <li>
                  <strong>Add a buffer.</strong> People underestimate. That old shed has more nails, roofing, and paint cans than you think. If the budget allows, size up. A 20 yard with room to spare beats stuffing a 15 yard to the brim and paying overage—or calling for a costly second haul.
                </li>
              </ol>
              <p>Quick rules of thumb:</p>
              <ul>
                <li>Bathroom remodel: 10–15 yard</li>
                <li>Kitchen remodel (cabinets/flooring): 20 yard</li>
                <li>Roofing 15–25 squares: 10–20 yard (check shingle weight rules)</li>
                <li>Whole-home renovation: 30 yard (schedule swap-outs if bulky &amp; light)</li>
                <li>Concrete patio removal (clean): 10 yard dedicated clean fill</li>
              </ul>
              <p>
                Finally, share your timeline with the hauler. If you’re demo-heavy on day one, ask for a swap-out mid-day or next morning. Keeping crews moving is cheaper than waiting on a full bin.
              </p>

              <h2>Permits, HOA Rules &amp; City Regulations</h2>
              <p>
                Street placement triggers permits in many cities. Your hauler might help, but the responsibility usually lands on you or the GC. I’ve had jobs delayed because we “thought” the driveway would work, then realized a delivery truck needed those extra feet. Cue a scramble for a right-of-way permit. Don’t do that to yourself.
              </p>
              <p>Checklist I use:</p>
              <ul>
                <li>Street or sidewalk placement? Check your city’s Public Works/Right-of-Way portal.</li>
                <li>Setbacks &amp; safety: Distance from fire hydrants, bus stops, crosswalks; reflective cones or barricades at night.</li>
                <li>HOA requirements: Notice period, aesthetics (screening), time limits, noise windows.</li>
                <li>Driveway rules: Keep sightlines clear for neighbors and emergency access.</li>
                <li>Weight/ground protection: Hot asphalt, pavers, or soft soil need boards or mats.</li>
              </ul>
              <p>
                HOAs can be surprisingly strict. One neighborhood required a tan tarp to “blend.” It felt silly until I realized: comply and move on. Factor the cost/time into your plan. If in doubt, email the HOA manager with a photo of where you’ll place the dumpster and the delivery date/length. Having that in writing saved me once when a board member complained—we had pre-approval.
              </p>
              <p>
                Permit timing: some cities issue same-day online, others take 48–72 hours. Weekends complicate things. If you suspect you’ll need the street, start the permit as soon as you set the project start date. Also check holiday moratoriums (parades, marathons, street fairs). I got caught by a downtown 10K once; the city blocked deliveries before 11 a.m. We lost half a day.
              </p>

              <h2>What You Can &amp; Can’t Put In (Prohibited Items)</h2>
              <p>
                Most people assume “trash is trash.” Not in waste world. Haulers and facilities follow strict rules. Expect the following to be prohibited or special handling: paint, solvents, oils, gasoline, tires, car batteries, lithium batteries, electronics (TVs, monitors), appliances with Freon (fridges, AC units), medical waste, asbestos, railroad ties. Some allow mattresses for an extra fee. Some won’t. Ask before loading.
              </p>
              <p>
                Allowed in a typical mixed C&amp;D bin: wood, drywall, flooring, cabinets, doors, windows (no glass restrictions in many markets), roofing asphalt (limits apply), metal, cardboard, household junk. Yard waste may need its own bin if your facility runs a composting stream. I’ve saved serious cash by separating metal (often recycled free or paid by the yard) and clean cardboard (diverted at low cost). It’s not just eco-friendly—it reduces tonnage on your main bin.
              </p>
              <p>
                My worst contamination mistake: tossing paint cans into mixed debris because “they’re mostly empty.” Facility flagged it, pulled the load, and billed a contamination fee plus time. The fix was simple. Our county runs a household hazardous waste drop-off twice a month. Now I stage paint, chemicals, batteries, and e-waste in a corner and handle them separately. Takes an hour. Saves hundreds.
              </p>
              <p>Pro tips:</p>
              <ul>
                <li>Ask your hauler for a prohibited items list in writing.</li>
                <li>If you must load an appliance, remove doors (safety) and confirm Freon handling.</li>
                <li>Keep a labeled “hazmat corner” in the garage.</li>
                <li>If it’s liquid, flammable, or pressurized, don’t toss it in the dumpster.</li>
              </ul>

              <h2>The Rental Process (From Quote to Pickup)</h2>
              <p>I treat dumpster rentals like any other vendor process—clear scope, written details, smooth execution.</p>
              <ol>
                <li>
                  Get quotes with specifics. Share address, target delivery date, size, materials, rental days, expected tonnage, and placement constraints. Ask for: base price, included tons/days, per-ton overage, daily extension rate, swap-out fee, fuel/zone surcharges, contamination fees. Then confirm lead times (same-day, next-day, weekend).
                </li>
                <li>
                  Book and confirm placement. I text a photo with an “X” where the bin should sit. I mention gate codes, best approach, and no-park windows. If I’m worried about damage, I request plywood or rubber mats (or I set them myself). I also put a note on the garage: “Dumpster here ⟶ leave 3 ft clearance.”
                </li>
                <li>
                  Prep the site. Move cars, trim low branches if needed, ensure 14–18 feet of overhead clearance, and clear 60–80 feet of straight approach for the truck. If rain’s coming, I lay a tarp and keep a couple bricks handy to weight it down.
                </li>
                <li>
                  Load smart. Heavy stuff first and spread evenly. Break down cabinets and boxes to eliminate air pockets. Keep debris below the rim—haulers can’t legally transport over-full containers. If you hit 80–90% full, do a quick weight sanity check.
                </li>
                <li>
                  Call for pickup. I always ask for a pickup ETA and request a scale ticket after disposal. If there’s a dispute—rare, but it happens—having the numbers and photos from delivery day keeps everyone honest.
                </li>
              </ol>
              <p><strong>Pro move:</strong> On big projects, book a pre-scheduled swap-out. Crews keep moving; you avoid “we’re full” downtime.</p>

              <h2>Weight Limits, Tonnage &amp; Dump Fees (Avoid Overage)</h2>
              <p>
                Weight is where budgets go to blow up. Every bin comes with an included tonnage—say 2 tons for a 15 yard, 3 tons for a 20, and around 4–5 tons for a 30 (varies by market). Go over, and you’ll pay an overage per ton (or fraction). It adds up fast.
              </p>
              <ul>
                <li>Light debris: cabinets, trim, furniture, cardboard. A 20 yard might weigh 1.5–2.5 tons when full.</li>
                <li>Medium debris: drywall, lumber, mixed junk. A 20 yard can land 2.5–3.5 tons.</li>
                <li>Heavy debris: roofing shingles, plaster/lath, wet yard waste. A 20 yard can blow past 4 tons quickly.</li>
                <li>Ultra heavy: concrete, dirt. Use a 10 yard clean fill and never load to the top; weight, not volume, is your governor.</li>
              </ul>
              <p>
                I once loaded wet yard waste after a storm, thinking “it’s just leaves.” The scale said otherwise—water is heavy. Since then, I cover bins in the rain and keep light debris bagged so it doesn’t saturate. For roofing, I estimate weight by squares (100 sq ft = 1 square). Asphalt shingles run ~200–250 lbs per square (single layer). Tear off 20 squares and you’re flirting with 2.5 tons just in shingles.
              </p>
              <p>Fees decoded:</p>
              <ul>
                <li>Landfill/transfer fees are baked into your price but scale with weight.</li>
                <li>Overage kicks in after included tons. Negotiate extra included tonnage if you expect to be close.</li>
                <li>Contamination happens when prohibited items show up or loads don’t match the declared waste stream.</li>
              </ul>
              <p>Practical tips:</p>
              <ul>
                <li>Separate clean concrete/brick—often cheaper flat rates and avoids over-weighting your mixed bin.</li>
                <li>Load evenly to prevent “heavy corner” risk that makes pickups tricky.</li>
                <li>Photograph the load before pickup. If there’s a dispute, you have proof it wasn’t overloaded above the rim.</li>
                <li>Ask for the scale ticket with inbound/outbound weights—good haulers send them proactively.</li>
              </ul>

              <h2>Eco-Friendly Disposal &amp; Recycling</h2>
              <p>
                I like saving money, but I also like not junking up the planet. The win-win is diversion: keep valuable materials out of the landfill and shrink your tonnage.
              </p>
              <ul>
                <li>Pre-sort metal (doors, pipe, wire shelving, appliances without Freon). Scrap yards sometimes pay you.</li>
                <li>Flatten cardboard and stage it—many facilities divert it at low cost or free.</li>
                <li>Donate reusable items (cabinets, fixtures, doors, clean furniture) to local reuse centers before demo day.</li>
                <li>Clean concrete/brick → order a clean fill dumpster. It’s cheaper, and processors recycle it into road base.</li>
                <li>Yard waste → compost stream, not mixed C&amp;D, if available.</li>
              </ul>
              <p>
                On a big kitchen rehab, we pulled and stacked the cabinets first, donated them the same morning, then brought in the dumpster. The load weight dropped, the bin size dropped, and the client got a donation receipt. Everybody won.
              </p>
              <p>
                If you’re chasing LEED points or a sustainability goal, ask your hauler about diversion reporting. Many can provide material category weights and diversion percentages. Even without a formal program, I keep a simple note: “Metal ≈ 240 lbs, Cardboard ≈ 80 lbs diverted.” It keeps teams honest and makes for great client updates.
              </p>

              <h2>Finding the Best Local Provider (“Near Me”)</h2>
              <p>
                A “cheap dumpster rental” can be expensive if the hauler is late, damages your driveway, or plays pricing games. I vet providers like this:
              </p>
              <ul>
                <li>Licensing &amp; insurance: Ask for proof; legit haulers don’t hesitate.</li>
                <li>Transparent quotes: Base rate, included tons/days, overage per ton, daily extensions, swap-out fee, fuel/zone surcharge, contamination fee—in writing.</li>
                <li>Equipment fit: Do they run hook-lift trucks for precise placement? Short containers for tight drives?</li>
                <li>Reviews: I read for patterns—on-time delivery, fair billing, responsive support.</li>
                <li>Service map &amp; lead times: Same-day and weekend capabilities are clutch during crunch weeks.</li>
                <li>Damage prevention: Do they carry boards/mats, or should you place your own? What’s the process if damage occurs?</li>
              </ul>
              <p>Two situational questions:</p>
              <ul>
                <li>“If I call by 10 a.m., can you swap-out same day?”</li>
                <li>“If we discover heavy material, can you increase included tonnage before pickup?”</li>
              </ul>

              <h2>Same-Day &amp; Weekend Delivery Tips</h2>
              <p>
                Speed costs less when you plan around it. If I need a same-day dumpster rental, I call early (7–8 a.m.) and say, “I’ll take a 15 or a 20, whichever you can drop first.” Flexibility on size helps you snag a truck already routed near you. I also give clear placement instructions and payment details upfront so dispatch isn’t chasing me.
              </p>
              <p>Weekend playbook:</p>
              <ul>
                <li>Confirm their Saturday dispatch window and any weekend surcharges.</li>
                <li>Share gate codes and after-hours contacts.</li>
                <li>If Sunday is dead, arrange a late Friday drop with a Monday pickup—often same price, more useful.</li>
              </ul>
              <p>
                Backup plans matter. If dumpsters are booked out, I’ll hire a junk removal crew for bulky items and schedule a smaller bin for the remainder. Or I’ll use a bag system for micro-projects. It’s not as cheap per yard, but it keeps timelines intact.
              </p>

              <h2>Residential vs. Construction Dumpster Rentals</h2>
              <p>
                Residential projects live and die by driveway protection, noise windows, and neighbor relations. I use plywood or rubber mats, keep debris covered, and text neighbors if the street gets tight. Households also change scope mid-stream (“Let’s clean the attic too!”), so I plan for one size up or a swap-out.
              </p>
              <p>
                Construction sites are a different beast: multiple hauls, heavy debris, and diversion targets. GCs need COIs, weight tickets, and sometimes LEED reporting. The schedule is everything; a late pickup stalls a crew. I set buffer windows (“swap-out by 10 a.m.”) and ask dispatch for a live load option when we’re cranking—truck waits while we top off, then leaves. It’s pricier, but cheaper than idle labor.
              </p>

              <h2>Commercial &amp; Long-Term Service (Front-Load)</h2>
              <p>
                If you need ongoing service (restaurants, apartments, offices), skip roll-offs and look at front-load dumpsters (2–8 yard). You’ll pick a pickup cadence (1–6x/week), set service windows, and train staff to prevent contamination (cardboard separate, food waste where required). Compactors can help in high-volume scenarios. Pricing improves with longer terms and clean streams.
              </p>

              <h2>Safety &amp; Site Prep</h2>
              <ul>
                <li>Wear gloves, boots, and eye protection.</li>
                <li>Keep kids and pets far away.</li>
                <li>Load evenly and never exceed the rim. Watch overhead lines.</li>
                <li>Don’t place on soft ground after rain unless you want ruts; use plywood or mats.</li>
              </ul>

              <h2>Alternatives to Dumpster Rentals</h2>
              <ul>
                <li>Junk removal crews for single-room cleanouts or heavy, awkward items.</li>
                <li>Dumpster bags for small DIY projects.</li>
                <li>Municipal bulk pickup days for couches and mattresses.</li>
                <li>For rural jobs, a trailer and dump run may be cheaper—verify transfer station hours and fees first.</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Dumpster rentals aren’t glamorous, but they make projects move. You now know how to pick the right roll-off size, compare dumpster rental prices, navigate permits/HOA rules, avoid weight overage fees, and boost recycling diversion without slowing down. My final advice? Map your debris, assume you’ll have more than you think, and get everything in writing—size, included tonnage, rental days, fees.
              </p>
              <p>
                Got a clever loading trick or a hard-won “never again” story? Share it. The best dumpster rental tips come from people in the trenches—like you and me. Let’s save money, stay safe, and keep your project humming along!
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related articles</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/dumpster-prohibited-items" className="text-blue-600 hover:text-blue-700">What Can and Cannot Go in a Dumpster</Link></li>
              <li><Link href="/blog/winter-dumpster-rental-tips" className="text-blue-600 hover:text-blue-700">Winter Dumpster Rental Tips for Cold Weather</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />
    </main>
  )
}


