import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Sizes Explained (Cubic Yards, Dimensions & Capacity) | TNT Dumpsters',
  description: 'Plain-English guide to dumpster sizes. Match common projects to the right box, avoid weight overages, estimate debris volume, plan site access, and understand pricing & fees.',
  keywords: 'dumpster sizes explained, cubic yards, dumpster dimensions, dumpster capacity, choose dumpster size, weight limits, debris tonnage, dumpster pricing fees',
}

export default function ChooseRightDumpsterSizePage() {
  return (
    <main className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Project Planning
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dumpster Sizes Explained (Cubic Yards, Dimensions & Capacity)
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              A plain-English guide to choosing the right dumpster by volume and weight, matching common projects to sizes, estimating debris accurately, planning site access, and avoiding surprise fees.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>TNT Dumpsters Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
              src="/images/dumpster2-500x500-2.jpeg"
              alt="Different dumpster sizes for various projects"
              fill
              className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */
      // Structured prose layout inspired by components/prompts/Blog5StepPrompt.tsx
      }
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Dumpster Sizes Explained (Cubic Yards, Dimensions &amp; Capacity)</h2>
              <p>The first time I rented a roll-off dumpster, I kept nodding like I understood “cubic yards.” I didn’t. Here’s the plain-English version: one cubic yard is a cube that’s 3 ft × 3 ft × 3 ft. Picture a standard washing machine—that’s roughly a cubic yard of volume. So when we say a 10 yard dumpster, it holds about ten of those “washing machine cubes.” Simple, right?</p>
              <p>Now, sizes aren’t just about volume. Dimensions matter because your site has limits. A 10 yard dumpster is usually around 12 ft long × 7–8 ft wide × 3.5 ft high. It’s short and squat—great for tight driveways, small cleanouts, and heavy debris like tile or concrete (with weight restrictions, of course). A 15 yard dumpster bumps the height a bit (about 4–4.5 ft high), keeping a compact footprint. The 20 yard dumpster is the crowd favorite: commonly ~22 ft long × 7–8 ft wide × 4–4.5 ft high. It fits most residential driveways and handles moderate renovation debris—drywall, cabinets, flooring, roofing shingles.</p>
              <p>When you step up to a 30 yard dumpster (~22 ft × 7–8 ft × 6 ft), you’re in renovation territory: multi-room projects, basement cleanouts, light construction debris. The 40 yard dumpster (~22 ft × 7–8 ft × 7–8 ft) is a tall box, fantastic for bulky, lighter material like demoed framing lumber, large furniture, cardboard, and packaging. If you’re tossing dense stuff (think brick, dirt, concrete), don’t assume bigger is better. You’ll hit dumpster weight limits before you run out of space. That’s when smaller, “heavy debris” boxes or clean concrete containers make sense.</p>
              <p>Quick sanity check: a full-size pickup bed heaped to the brim is about 2–3 cubic yards. So a 20 yard dumpster equals roughly 7–10 pickup loads. That mental math saved me once when I underestimated a kitchen + bath combo. I thought 15 yards would be fine. It wasn’t. I ended up with a swap-out fee and a bruised ego.</p>
              <p>A final gotcha: level loads. Every box has a fill line, and if debris is heaped above the walls, drivers may refuse pickup or charge a fee. The gate/door swing is another detail folks miss. If you plan to wheelbarrow material in, leave enough door swing clearance and keep a smooth path. Little stuff like this is boring until it’s not—then it’s the only thing that matters. Measure your dumpster footprint, measure your driveway, and confirm clearance height for the truck (low branches, power lines, carport beams). That’s how you avoid the “we couldn’t deliver” call.</p>

              <h2>Match Common Projects to Recommended Dumpster Sizes</h2>
              <p>Let’s match real jobs to real boxes, using both cubic yards and weight realities. For bathroom remodels (vanity, toilet, tub, tile, drywall), I’ve had the best luck with a 10 yard if it’s a single, small bath. For a large bath or if you’re ripping out a heavy tiled shower, a 15 yard dumpster gives breathing room. Tile and mortar get shockingly heavy. Your back will tell you first.</p>
              <p>Kitchen remodels vary. A partial facelift (cabinets only, some drywall, small flooring) fits in a 15 yard; a full gut with bulky countertops and appliances is safer in a 20 yard dumpster. If you’re doing kitchen + bath at the same time, go 20 yard, minimum. I once tried to squeeze that combo into a 15 yard. Rookie move. We hit the tonnage cap and still ran out of space.</p>
              <p>Roofing tear-offs are mostly about weight and shingles per square. For a typical 20–30 square asphalt roof, a 20 yard is a smart baseline, but check the shingle weight per square (often 200–250+ lbs). Heavier architectural shingles? I’ve gone 30 yard when there’s a lot of underlayment and rotten decking. Still, watch the weight.</p>
              <p>Flooring removal depends on what’s coming up. Carpet and pad across a couple rooms can fit in a 10–15 yard. Tile or hardwood across the whole first floor? 20 yard minimum because of density and bulk. Add baseboards and trim; don’t forget all those contractor bags.</p>
              <p>Basement or garage cleanouts are deceptive. Light household junk? 15 yard dumpster often works. Lots of furniture, shelving, and random “keep or toss” piles? 20 yard saves you from a mid-project panic. I’ve seen 30 yard boxes make sense when folks get ruthless and finally ditch the treadmill from 2009.</p>
              <p>Landscaping and yard waste: Branches and yard debris are bulky but usually lighter. A 15 or 20 yard is fine for a weekend yard overhaul. If you’re removing dirt, sod, or concrete, smaller 10 yard “heavy debris” loads are smarter and sometimes required by haulers.</p>
              <p>New construction framing cleanup or multi-room renovation? 30 yard is the workhorse. Huge renos or commercial cleanouts with lots of packaging and drywall? 40 yard can be perfect—but again, only if material isn’t dense. Remember: when in doubt between two sizes, I go up. It’s usually cheaper than a swap-out service and less disruptive.</p>

              <h2>Weight Limits, Debris Types &amp; Tonnage Caps</h2>
              <p>Here’s where folks accidentally light money on fire: overage fees. Your rental includes a certain number of tons—say 1–4 tons depending on size and market. If your load weighs more than that tonnage cap, you pay per extra ton at the disposal site’s tipping fees. I’ve had bills jump $150–$300+ because I misread the included weight. Painful lesson learned.</p>
              <p>Heavy materials need special handling. Concrete, dirt, brick, asphalt, tile—these can hit the weight cap fast. Many haulers require a clean concrete or dirt-only dumpster to keep disposal costs down and avoid contamination. These “clean load” rules mean only that material goes in—no wood, no plastic, no rebar unless specified. The trade-off is lower dumping cost and often a smaller box. I’ve used a 10 yard for concrete with great success. It filled up quick, but we stayed under axle weight limits and avoided overweight tickets.</p>
              <p>Mixed debris is convenient but tricky. Throwing drywall, lumber, and a bit of tile all together is normal, but don’t slip in hazardous stuff. Prohibited items often include paint, solvents, oils, batteries, tires, refrigerators (freon), and certain electronics. If a prohibited item is found at the facility, you might see a contamination fee or a return trip. I once had to retrieve a paint can that hid under demo debris. Embarrassing and a time waster.</p>
              <p>Watch for “dense pockets” in your load. A dumpster half full of drywall is light; but if the back corner is stacked with ceramic tile and mortar bags, you might blow your weight estimate. Spread heavy debris evenly. Keep the center of mass low and balanced. It’s safer and it helps the driver tarp and haul without issues.</p>
              <p>Ask your hauler two things up front: 1) “What’s the included tonnage for this size?” and 2) “What’s the overage rate per ton?” Also confirm the disposal category: C&amp;D (construction &amp; demolition), municipal solid waste, clean loads for recycling (concrete, metal, cardboard), or yard waste. If you can split loads to qualify for cheaper categories, do it. One client saved hundreds by separating metal and cardboard into a second small box, because those materials had lower tipping fees at a recycling center.</p>
              <p>Bottom line: size your dumpster by both volume and weight. If your debris is heavy debris, do not chase a 30 or 40 yard just for space. Use smaller sizes, more pickups if needed, and keep an eye on the tonnage math. Your wallet will thank you.</p>

              <h2>How to Estimate Debris Volume (Fast, Accurate Methods)</h2>
              <p>I love a good shortcut, and volume calculator tricks are my favorite. The simplest method is the L × W × H room math. Measure the pile or the room sections you’re gutting in feet. Multiply length × width × height of debris you expect to stack, and then divide by 27 to convert cubic feet to cubic yards. Example: you estimate a 10 ft × 8 ft × 3 ft pile = 240 cubic feet. 240 ÷ 27 ≈ 8.9 yards, so a 10 yard dumpster might do—if materials aren’t too dense.</p>
              <p>No tape measure? Convert from pickup truck loads. A full-size pickup heaped is about 2–3 yards. Ten heaping loads? You’re at a 20–30 yard need. I’ve literally counted contractor bags when I had nothing else—ten 42-gallon contractor bags equal roughly 5.6 cubic feet. There are 27 cubic feet in a cubic yard, so around 48–50 full contractor bags equals a yard (depends on how full and fluffy). If you’ve got 200 heavy bags of demo? You’re aiming for a 20–30 yard box, keeping weight in mind.</p>
              <p>Roofing estimation is a classic. One “square” = 100 sq ft of roof. Asphalt shingle weight per square (with felt) often runs 200–250+ lbs for one layer. Multiply by the number of squares and layers. A 25-square single-layer tear-off might be ~6,000 lbs (3 tons) before you even add rotten decking. That’s squarely in 20 yard territory, and you’ll want to ask the hauler about included tons and overage.</p>
              <p>If you’re removing drywall, a quick rule I use is ~1 lb per square foot for 1/2" drywall (varies with moisture and texture). Pulling 1,000 sq ft of walls and ceilings? Expect around 1,000–1,500 lbs once screws, mud, and trim join the party. Flooring varies wildly: carpet and pad are light; ceramic tile and mortar are heavy. Lumber offcuts and cabinets fill space faster than they add weight; tile does the opposite.</p>
              <p>Online volume calculators are great, but I always round up one size if I’m within 15% of a box’s capacity. Why? Because real piles never stack perfectly, and the fill line doesn’t care about your spreadsheet. Also, get photos. I text haulers a shot of the space and debris type, and ask, “20 yard or 30?” They know their boxes, their dumpster dimensions, and local tipping fees. Their advice plus your math = fewer surprises.</p>
              <p>Last tip: stage debris in a square pile before the dumpster arrives. Measure the pile—don’t guess. I’ve had piles that looked like 10 yards but taped out to 16. Better to discover that before the truck backs in.</p>

              <h2>Site Constraints, Placement &amp; Access</h2>
              <p>A good dumpster placement plan saves hours. Start with access width: most roll-off trucks need ~9–12 ft of clear width, and a straight approach. Curvy, narrow drives or tight alley placement can cause a failed delivery. Those fees sting. I’ve done the orange-cone trick to hold space on delivery morning when street parking gets crowded. Not glamorous, but it works.</p>
              <p>Check clearance height: low branches, overhead lines, carports. The truck tilts the container to set it down, so it needs vertical space. If you’re not sure, send a quick phone video to the dispatcher. They’ll tell you yes or no. For driveways, lay plywood boards to protect the concrete or pavers and to spread the load. On slopes, I avoid placing the door downhill—opening and closing the gate gets awkward and sometimes unsafe.</p>
              <p>Think about door swing clearance. If you plan to walk debris in with a wheelbarrow, you’ll want the gate fully open and a straight path. That means setting the box a few feet back from a wall or fence. I’ve backed myself into corners (literally) by forgetting that the gate needed room to swing. Also, consider the dumpster footprint versus turning radius for other trades. Your electrician won’t love it if the box traps the service panel.</p>
              <p>Soft soil? Skip it. A roll-off dumpster can sink into grass or gravel when it’s loaded. If it has to go on dirt, use thicker cribbing (4×4s) under the rails, and set expectations with the hauler. Mud + weight = rut city. In urban jobs, street permit rules may push you curbside. In that case, ask about cones, reflective sawhorses, or nighttime safety signage. Some cities demand it.</p>
              <p>Finally, plan your loading strategy. Put flat, heavy items on the bottom. Break down cabinets. Stack lumber parallel to minimize air gaps. Keep bulky, light items for the top layer to even out the load. And never let debris rise above the fill line; a higher center of mass makes tarping harder and less safe. It’s tempting to “just add one more thing,” but that’s when tarps rip and drivers refuse the haul.</p>
              <p>A tiny detail that helps: painter’s tape arrows on the driveway showing the exact spot and angle you want. Drivers appreciate clarity, and you get the placement you need for smooth workflow. Clear communication beats guesswork every time.</p>

              <h2>Pricing, Rental Periods &amp; Hidden Fees</h2>
              <p>Let’s demystify the bill. Your dumpster pricing usually bundles three pieces: delivery, haul-away pickup, and disposal (tipping fees). Many haulers roll these into a flat rate with an included tonnage (say 1–4 tons) and an included rental period (often 7–14 days). Where budgets blow up is the fine print: overage fees per ton, extra day charges, failed delivery/haul fees, and contamination fees.</p>
              <p>Example: You book a 20 yard dumpster for $475, includes 2 tons, 10 days. If your load weighs 3.2 tons and the overage is $95/ton, you add $114 for the extra 1.2 tons. If you needed 5 extra days at $15/day, that’s another $75. Tossed a couple of paint cans? Some facilities charge a per-item hazardous surcharge or reject the load, triggering a return trip fee. Suddenly your $475 plan is $700+. Not fun.</p>
              <p>Ask these questions up front:</p>
              <ul>
                <li>What’s the included tonnage and the overage rate?</li>
                <li>How many days are included, and what’s the daily extension cost?</li>
                <li>Are there fuel surcharges or seasonal adjustments?</li>
                <li>What counts as prohibited items and what are the contamination fee scenarios?</li>
                <li>What triggers failed delivery or failed haul fees (blocked access, overfilled box, over height)?</li>
              </ul>
              <p>If your project is fast, consider a live load (driver waits while you load for 30–60 minutes). It can be cheaper than a multi-day rental if logistics are tight. If your job is phased, a smaller box with one swap-out service might beat a giant 40 yard that risks overweight. I once saved a homeowner $180 by splitting demo into two 15 yard boxes a week apart. Less stress, cleaner site, better budget control.</p>
              <p>Timing matters. Holiday schedules and weather delays can nudge pickup to the next business day, so keep a buffer. If your city requires a street permit, that’s another cost line—sometimes the hauler pulls it, sometimes you do. And if your site needs special placement (alley, tight gate), budget for extra driver time. It’s rare, but it’s real.</p>
              <p>Two pro tips:</p>
              <ul>
                <li><strong>Weigh your risk.</strong> If your volume calculator puts you within 10–15% of a box size, go up one size to avoid overage + swap-out.</li>
                <li><strong>Reduce tipping weight</strong> by separating metal recycling and cardboard recycling where possible. Some facilities credit or discount clean recyclable loads. Even one less ton of mixed C&amp;D can swing your invoice from “Ouch” to “Okay.”</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing the Right Size?
            </h2>
            <p className="text-blue-100 mb-8">
              Our experienced team can help you select the perfect dumpster size for your project. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8012099013" 
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Call (801) 209-9013
              </a>
              <a 
                href="/quote" 
                className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

