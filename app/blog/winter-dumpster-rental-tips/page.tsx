import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Winter Dumpster Rental Tips for Cold Weather | TNT Dumpsters',
  description: 'Plan successful winter projects with these dumpster rental tips: placement, scheduling, safety, and how to prevent frozen loads and extra weight.',
  keywords: 'winter dumpster tips, cold weather dumpster rental, winter construction waste, frozen dumpster load prevention',
}

export default function WinterDumpsterRentalTipsPage() {
  const tips = [
    'Place the container on cleared, salted ground',
    'Use a tarp to keep snow and ice out of the dumpster',
    'Schedule swaps earlier in the day to avoid storms',
    'Keep access routes open for trucks',
    'Wear proper PPE and watch for slippery edges',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Seasonal Tips</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Winter Dumpster Rental Tips for Cold Weather</h1>
            <p className="text-xl text-gray-600 mb-8">Cold weather adds unique challenges to waste removal. These tips help you avoid delays, safety hazards, and unexpected fees.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>December 20, 2024</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpsterSmallBanner3.jpeg" alt="Dumpster in snowy conditions during winter project" fill className="object-cover" />
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
                    "headline": "Winter Dumpster Rental Tips for Cold Weather",
                    "description": metadata.description,
                    "datePublished": "2024-12-20",
                    "dateModified": "2024-12-20",
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
                    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/winter-dumpster-rental-tips" },
                    "image": ["https://tntdump.com/images/dumpster3-500x500-1.jpeg"]
                  })
                }}
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevent Weather Delays</h2>
              <p className="text-lg text-gray-700 mb-6">Confirm pickup windows around incoming storms and keep the lid or tarp secure to reduce added weight from snow and rain.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {tips.map((t, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{t}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-lg text-gray-700">Keep edges clear of ice and give yourself extra room when loading heavy items to avoid slips.</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Ahead—Lead Times, Permits, and HOA Rules</h3>
              <p className="text-lg text-gray-700 mb-6">I learned the hard way that winter timelines don’t care about your calendar. Storms roll in, plows block streets, and dispatch gets slammed. These days, I build a 3–5 day weather buffer into any winter dumpster rental. If I’m targeting a Monday delivery, I actually plan for Friday or Saturday, because weekends get funky with staffing, and Monday morning routes can be packed after snow. It feels overcautious—until your renovation demo pile is sitting in the living room because the truck got rerouted to a snow emergency area.</p>
              <p className="text-lg text-gray-700 mb-6">Permits matter more in winter. On my block, the city marks “snow routes,” and if a dumpster is on the street during a storm, you might get a fine or a forced relocation. Been there. I always check municipal rules for street placement, seasonal restrictions, and anything about plow corridors. If I do curbside placement, I print the permit and tape it inside a zip bag on the dumpster wall so the night shift officer doesn’t have to guess.</p>
              <p className="text-lg text-gray-700 mb-6">HOA rules can sneak up on you, too. In winter they tend to be stricter about placement and duration—nobody wants a roll-off snow magnet blocking sight lines for weeks. I ask for written guidelines, not just a “yeah that’s fine” in an email. Noise windows get narrower when it’s dark at 5 p.m., so communicate with neighbors. A tiny courtesy note on mailboxes (“Dumpster on Elm St. 12/8–12/15, daytime loading only. Call/text if issues.”) squashes 90% of complaints.</p>
              <p className="text-lg text-gray-700 mb-6">The other thing I watch: holiday schedules. Landfills and transfer stations shut early around big winter holidays. If your pickup date lands on one, you might slip two days. I build that into my contract and ask the hauler, “What’s your storm delay policy? Free reschedule if there’s a declared snow emergency?” If they hedge, I price in a few extra days of rental. It’s cheaper than emergency junk removal when you’re desperate.</p>
              <p className="text-lg text-gray-700 mb-6">Last bit—confirm access the day before delivery. I text dispatch a quick photo of the driveway, the approach, and any tight turns. If the driver knows what they’re rolling into, you’re already ahead of the weather.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose the Right Dumpster Size and Type for Cold Weather</h3>
              <p className="text-lg text-gray-700 mb-6">Sizing gets trickier in winter because debris expands—literally. Bulky coats, wet cardboard, extra tarps, even snow that sneaks in under a loose cover. I used to push a 10-yard dumpster for “light demo,” and then I’d end up playing Tetris with soaked drywall and a few heavy black bags. Now, if I’m on the fence, I bump one size up. A 20-yard with reasonable weight limits beats an overstuffed 10-yard every single time.</p>
              <p className="text-lg text-gray-700 mb-6">Weight is the silent budget killer. Frozen debris weighs more. Water-logged carpet? Evil. Roofing shingles with ice? Worse. I ask the hauler for the tonnage cap and the overage fee in writing. If it’s something like 2–3 tons included on a 20-yard, I’ll plan my loading order around that cap. Heavy stuff first, centered and low; lighter, bulky items after. When I know I’ve got masonry or dense demo, I’ll consider a shorter bin with lower walls just so loading with gloves isn’t a circus. Low-sides also help when you’re lifting in icy boots—less chance of a wobble.</p>
              <p className="text-lg text-gray-700 mb-6">Covered options are huge in wet or snowy climates. Some providers have lidded cans; others don’t. If they don’t, I’ll add a heavy-duty tarp with bungees or ratchet straps. Pro-tip: run the straps under the bin frame, not just through the side rails, because winter wind will test your setup. I also keep a second tarp just for staging—when I move material from garage to bin, I can toss the tarp over the pile during flurries.</p>
              <p className="text-lg text-gray-700 mb-6">Material type drives the size, too. Roofing tear-offs in winter can freeze together, creating odd angles and wasted air gaps. Renovation waste balloons with packaging from heaters and insulation. If I’m doing a garage cleanout plus light demo, I’ll split the loads mentally: “Half for furniture, half for demo scraps,” and that usually points me to a 20-yard minimum.</p>
              <p className="text-lg text-gray-700 mb-6">Final thought: ask for dimension specs in feet, not just “yardage.” Sometimes a 15-yard footprint fits a tight driveway better than a longer 20-yard, even if you’d prefer the volume. In winter, tighter turns and snowbanks make length and door swing more important than bragging rights on capacity.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Prep—Access, Ground Protection, and Snow Management</h3>
              <p className="text-lg text-gray-700 mb-6">First rule I teach crews: trucks need space—more in winter. I clear a 12–15 ft wide path with a straight 60–80 ft approach so the roll-off can back in without crab walking on ice. If there’s a bend, I salt the turn heavily and pre-plow an extra 2–3 ft beyond what looks “enough.” Drivers will thank you, and you’ll avoid a “couldn’t deliver” fee.</p>
              <p className="text-lg text-gray-700 mb-6">Mark the placement with tall stakes or cones. Snow piles can change the look of a driveway overnight, so clear visual cues help. I also flag the overhead clearance. You need around 20–25 ft for the roll-off to tilt up. Low tree branches get brittle in cold—one snap, and you’ve got a mess. I’ve watched gutters take a hit just because ice weighed them down an extra inch.</p>
              <p className="text-lg text-gray-700 mb-6">Ground protection is non-negotiable. I lay two runs of 3/4” plywood where the wheels will sit. If the driveway is new or prone to freeze–thaw cracks, I’ll use composite pads designed for equipment. Cheap insurance. On gravel, pads stop the bin from “biting in,” which becomes a slushy crater when temps rise.</p>
              <p className="text-lg text-gray-700 mb-6">Snow planning is the part most folks skip. Decide where the plow will stack snow before the dumpster arrives. Not in front of it. Not where the driver needs to swing. I put cones down to claim a snow dump zone. On steep approaches, I keep a bucket of sand and a scoop right by the door, and I re-sand before pickup day. Ice melt is great, but it can get sloppy; sand gives traction even when it’s single digits.</p>
              <p className="text-lg text-gray-700 mb-6">Last, think about drainage. When the sun peeks out, meltwater runs under bins and refreezes at night. If the bin sits slightly pitched, water can creep in. I’ll add a subtle shim under one wheel (ask your hauler first) or choose a spot with a tiny crown. That little slope keeps the floor drier, and a drier floor means easier unloading at the landfill.</p>
              <p className="text-lg text-gray-700 mb-6">Document everything with photos. If damage claims ever pop up, you’ll want proof that you had protection down and that access was safe and clear.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Winter Loading Best Practices (Keep It Dry, Safe, and Balanced)</h3>
              <p className="text-lg text-gray-700 mb-6">My winter mantra: keep it dry, keep it low, keep it tidy. Moisture is weight, and weight is money. I line the bin with plastic sheeting when I can—contractor-grade poly is fine. It doesn’t have to look pretty. It’s there to reduce freeze bonding so your load slides out cleanly. I learned this after a February pickup where the driver had to bang the can to break loose frozen carpet. Not fun for anybody.</p>
              <p className="text-lg text-gray-700 mb-6">Load heavy materials first, centered and low. Concrete chunks, tile, soaked carpet, even dense lumber. I make a “floor” of heavy stuff across the base. Then I add medium debris and finish with light, bulky items like packaging and insulation. Ladder loads can get sketchy in the cold, so I keep the height below the fill line and avoid spiky protrusions. Top-heavy stacks are bad news when the roads are icy.</p>
              <p className="text-lg text-gray-700 mb-6">Tarps matter. I keep one tarp tied on full-time, and I only peel back the side I’m loading. Then I cinch it tight again. If wind is gusty, I’ll use two cross-straps to prevent that awful flapping that rips grommets. For access, I like bins with a swing door, but I don’t leave the door open between trips. Snow drifts in faster than you think.</p>
              <p className="text-lg text-gray-700 mb-6">Safety around the bin is simple but easy to forget. I salt or sand a 3–4 ft perimeter so we’re not skating. I keep a small shovel tucked by the door to clear the lip before every session. With gloves on, grip strength goes down, so I avoid awkward one-handed lifts over the side wall. If visibility drops early, I’ll set a rechargeable LED beacon on a cone near the bin—drivers and neighbors can see you, and you look like you know what you’re doing (because you do).</p>
              <p className="text-lg text-gray-700 mb-6">I also separate especially wet materials. If I just pulled out a washer leak mess—soaked drywall, padding, carpet—I stage it in the garage on pallets overnight with a fan, then load in the morning. Even a tiny bit of air dry helps. It sounds fussy, but it’s saved me real money on tonnage.</p>
              <p className="text-lg text-gray-700 mb-6">Finally, maintain a clean approach. Every time I load, I do a quick sweep for screws and nails. In winter, tires are softer in the cold; one roofing nail can end your day fast.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weight, Overage Fees, and Frozen Debris</h3>
              <p className="text-lg text-gray-700 mb-6">Overage fees feel like a parking ticket you didn’t see coming. Winter hides weight in plain sight. I always ask two questions up front: “What’s the included tonnage?” and “What’s the per-ton overage rate?” If the numbers are vague, I push for clarity or choose another provider. Knowing whether you’ve got 2 tons versus 3 tons included changes how you stage materials.</p>
              <p className="text-lg text-gray-700 mb-6">Frozen loads are real. Wet drywall becomes a slush brick. Yard waste freezes into a log. I’ve had a load where the landfill operator said, “It won’t slide.” They tried, the can banged, and the time meter was running. Now, I avoid loading during active snow or right before a deep freeze if I can. If I must load in those conditions, I line the floor, layer materials, and keep a tarp tight to minimize water intrusion.</p>
              <p className="text-lg text-gray-700 mb-6">Here’s a trick: weigh the heavy categories mentally. Roofing? Figure ~200–250 lbs per square for asphalt shingles, worse when wet. Carpet and pad from a 500 sq ft room can tip 300–400 lbs soaked. If I’m flirting with the cap, I’ll either order a size up with a higher included tonnage or split heavy categories across two lighter pickups, depending on pricing. Sometimes two small, light loads are cheaper than one massive overage.</p>
              <p className="text-lg text-gray-700 mb-6">Avoid “mystery weight.” Snow shovelled into the bin by a helpful neighbor (thanks but no thanks) will cost you. I tape a simple sign on the bin: “No snow. No liquids. Please keep lid/tarp closed.” It’s not rude—it’s clarity.</p>
              <p className="text-lg text-gray-700 mb-6">Also ask how the hauler handles “frozen at the gate.” Some will bring the can back to your site (fee), others will charge standby at the landfill. I prefer vendors who’ll work with me: they’ll tilt, jostle, try again—but clear fees if it’s truly stuck. That policy can decide who gets my business in winter.</p>
              <p className="text-lg text-gray-700 mb-6">TL;DR: Track your heavy stuff, keep it dry, and know your numbers. Overage fees are avoidable with planning, even when the thermometer is unforgiving.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cold-Weather Safety—Crew, Neighbors, and Liability</h3>
              <p className="text-lg text-gray-700 mb-6">Winter work rewards boring safety habits. I require insulated gloves with grip, high-vis layers, and slip-resistant boots. It sounds basic, but one ankle slip on black ice can sideline a project. I keep a tote with extra gloves, beanies, and hand warmers near the door. When folks are warm, they move smarter.</p>
              <p className="text-lg text-gray-700 mb-6">Lighting gets overlooked. Sunset comes early, and alleys get dim. I set up two portable LEDs on tripods aimed away from neighbors’ windows. Add reflective cones around the work zone, especially near street placement. I’ve had delivery drivers say, “Yours was the only site we could find in the snow,” because the cones and flasher were obvious in low visibility.</p>
              <p className="text-lg text-gray-700 mb-6">Overhead hazards are winter specials. I scan for icicles and roof-slide risk above the bin. When temps warm after a freeze, ice sheets can slide like a hockey puck—right into your loading zone. I post a simple “Look up” note on the bin door. Corny? Sure. But people actually look.</p>
              <p className="text-lg text-gray-700 mb-6">Daily site logs help with liability. Five quick photos: approach, perimeter, tarp secured, door latched, and ground condition. If a neighbor claims you blocked the sidewalk or caused ice build-up, you have time-stamped proof of due diligence. It also helps if you need to show your insurance you weren’t negligent.</p>
              <p className="text-lg text-gray-700 mb-6">Communication is safety. I tell neighbors, “We’ll load between 9 and 4, no loud banging early or late.” That goodwill pays off when you need their car moved for pickup day. And if you ever work near a school bus route, be extra clear about timing. Those drivers are heroes in winter and appreciate predictable access.</p>
              <p className="text-lg text-gray-700 mb-6">Finally, don’t muscle through dangerous weather. If winds are gusting, tarps become sails. If it’s glare ice, call a pause. A half-day delay beats a workers’ comp claim or a damaged truck.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Can’t Toss (and What Changes in Winter)</h3>
              <p className="text-lg text-gray-700 mb-6">Cold weather doesn’t turn no-go items into yes-go. I’ve had people ask, “But the paint is frozen—can I toss it?” Nope. Liquids, paint, solvents, fuels, antifreeze—still prohibited. Batteries and electronics often have separate e-waste rules, and those drop-off sites sometimes run winter hours, so check schedules.</p>
              <p className="text-lg text-gray-700 mb-6">Ashes are sneaky. Around the holidays, folks clean out fireplaces and wood stoves. Even “cool” ashes can hold hot spots for days. I require metal containers with lids and a 72-hour cool-down. Then, and only then, do they go—if the hauler allows them. Many don’t. Call first.</p>
              <p className="text-lg text-gray-700 mb-6">Appliances and anything with refrigerant (fridges, freezers) usually need special handling. Winter can slow pickup timelines for those, so I plan those removals before the main bin arrives. Tires? Usually banned from roll-offs. Treated lumber? Depends on the facility—but I don’t assume. I maintain a printed “do not load” list taped inside the garage door as a final check before anyone makes a questionable toss.</p>
              <p className="text-lg text-gray-700 mb-6">Another winter quirk: liquids in containers freeze and then rupture, turning into a sticky disaster inside the bin. Even if the material itself is allowed (say, a half-empty juice bottle from a garage cleanout), I drain and bag it indoors first. Keeps the container weight down and avoids freeze-burst mess.</p>
              <p className="text-lg text-gray-700 mb-6">Finally, local rules can tighten during winter because landfill operations get stressed. If I’m working in a new city, I call the transfer station directly and say, “It’s a winter remodel. Anything seasonal I should know?” You’ll get gold—things like “No wet mattresses after storms,” or “Electronics drop-off is Thursdays only.” Knowing saves fees and headaches.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pickup Day Checklist—Avoid Weather-Related Misses</h3>
              <p className="text-lg text-gray-700 mb-6">Pickup day is where projects win or lose. I start the night before. Re-plow the approach. De-ice the slope. Clear parked cars. I shovel out the wheels and make sure no berms trap the bin. If there’s a curb lip, I clear a small ramp so the driver doesn’t spin trying to hook up.</p>
              <p className="text-lg text-gray-700 mb-6">Load level is big. Nothing above the fill line. Protruding lumber gets cut down or re-stacked. A clean top profile keeps the tarp or lid from ballooning on the highway. I untie tarps but keep them ready in case dispatch pushes the pickup an hour and it starts to snow again—Murphy’s Law.</p>
              <p className="text-lg text-gray-700 mb-6">I check the swing door: hinge clear, latch tight. Snow builds up around latches and freezes. A little silicone spray in the morning can be the difference between a smooth pull and a “can’t latch, can’t move” situation. I also grab two quick photos: the closed, level load and the cleared approach. Documentation protects you from “blocked access” fees you didn’t earn.</p>
              <p className="text-lg text-gray-700 mb-6">Communication is underrated. I keep the driver’s contact (or dispatch line) handy. I’ll send a text with a pin, “Bin is on left side of garage, cones mark path. Area sanded. Call if you need me to move the truck.” You become their easiest stop of the day, and they’ll prioritize you next time.</p>
              <p className="text-lg text-gray-700 mb-6">Last pass: scan overhead. After a sunny morning, icicles loosen up. Knock them down. Move anything that could blow into the path—plastic totes, cardboard, the random snow shovel that seems to migrate. When the truck arrives, get out there, say thanks, and ask, “All good?” If there’s a minor concern, you can fix it in real time.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Budgeting and Cost-Saving Strategies for Winter Rentals</h3>
              <p className="text-lg text-gray-700 mb-6">Winter can either save you money (off-season rates) or nickel-and-dime you (overages, delays). I start with timing. If I can, I book mid-week deliveries. Mondays and Fridays get weird with storms and holidays, and reschedules cascade. Mid-week means smoother routes and sometimes better pricing.</p>
              <p className="text-lg text-gray-700 mb-6">Ask directly about off-season pricing. Some haulers don’t advertise it, but they’ll sharpen their pencil in January. If you’re flexible, consider a 7-day rental at a small discount rather than two short stints—especially if storms are in the forecast. It’s cheaper than paying two separate delivery/pickup fees.</p>
              <p className="text-lg text-gray-700 mb-6">Right-sizing your bin is the best savings lever. If you’re flirting between sizes, price the overage scenario. A 15-yard with a low tonnage cap often costs more in the end than a 20-yard with an extra ton included. I’ll literally run the math: base + included tons + likely overage vs. the next size up. Nine times out of ten, the bigger bin wins in winter because of moisture creep.</p>
              <p className="text-lg text-gray-700 mb-6">Prevent overage with dryness. Tarps, quick loading during clear windows, and staging indoors reduce water weight. I separate ultra-dense materials. If I’ve got a bathroom demo with tile and mortar, I’ll stage those on a pallet and load last so I can eyeball the tonnage risk. When the bin looks “heavy,” I stop and call dispatch about options before I cross the line.</p>
              <p className="text-lg text-gray-700 mb-6">Budget for the little winter extras: de-icer, sand, plywood pads, and a plow return before pickup. These line items pay for themselves by preventing missed pickups and driveway damage claims. Also, ask about bundled pricing: “If I add a second bin for next month, can we lock in today’s rate?” Winter is negotiation season.</p>
              <p className="text-lg text-gray-700 mb-6">And don’t forget: mistakes are cost centers. A blocked bin by a plowed berm costs a re-roll fee. A frozen latch costs time. A soaked load costs overage. Budget for prevention, not reaction. Your wallet will notice.</p>
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
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
              <li><Link href="/blog/dumpster-rentals-2025-guide" className="text-blue-600 hover:text-blue-700">Dumpster Rentals: 2025 Guide to Sizes, Prices & Permits</Link></li>
              <li><Link href="/blog/dumpster-prohibited-items" className="text-blue-600 hover:text-blue-700">What Can and Cannot Go in a Dumpster</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay On Schedule This Winter</h2>
            <p className="text-blue-100 mb-8">We deliver safely in winter conditions and coordinate swaps around storms.</p>
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



