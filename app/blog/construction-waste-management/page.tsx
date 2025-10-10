import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Waste Management: Best Practices | TNT Dumpsters',
  description: 'Learn practical construction waste management strategies including segregation, recycling, safe disposal, and cost control for residential and commercial projects.',
  keywords: 'construction waste management, jobsite dumpsters, recycling construction debris, construction dumpster tips',
}

export default function ConstructionWasteManagementPage() {
  const bestPractices = [
    'Create a simple waste plan before work begins',
    'Stage materials to minimize off-cuts and waste',
    'Use separate containers for clean wood, metal, and concrete',
    'Keep tarps on dumpsters to prevent rainwater weight',
    'Schedule pickups around project milestones',
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Construction</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Construction Waste Management: Best Practices</h1>
            <p className="text-xl text-gray-600 mb-8">Reduce costs, keep the site safe, and improve sustainability by planning how materials are handled, recycled, and disposed of from day one.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>December 15, 2024</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>8 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/dumpster2-500x500-2.jpeg" alt="Construction site with dumpster for debris management" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Waste Streams</h2>
              <p className="text-lg text-gray-700 mb-6">Start with a simple plan that identifies the main material streams on your job: clean wood, drywall, metal, concrete, and mixed debris. Label areas on-site and communicate the plan during the kickoff.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jobsite Best Practices</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ul className="space-y-2">
                  {bestPractices.map((tip, i) => (
                    <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{tip}</span></li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recycling Opportunities</h3>
              <p className="text-lg text-gray-700 mb-6">Concrete, metal, and clean cardboard are commonly recyclable. Keeping these materials separate reduces disposal fees and supports sustainability goals.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Right-Size Your Dumpster</h3>
              <p className="text-lg text-gray-700">Choose a container size that matches your production schedule. For phased work, multiple smaller swaps often cost less than overflowing a single large bin.</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understand C&D Waste Streams and Sources</h2>
              <p className="text-lg text-gray-700 mb-6">The first time I walked a site with a “waste audit” clipboard, I felt ridiculous. Then we weighed one roll-off and realized half the load was clean wood that could’ve been reused or chipped for mulch. That was the day “what gets measured gets managed” stopped being a slogan and became my north star for construction waste management.</p>
              <p className="text-lg text-gray-700 mb-6">I start by naming the usual suspects out loud. Concrete and asphalt are the heavy hitters, metals are the quick wins, and wood plus drywall (gypsum) are the sneaky volume hogs. Cardboard, plastic film, glass, and soils round out the common C&D waste streams.</p>
              <p className="text-lg text-gray-700 mb-6">Mapping waste to project phases keeps me honest. Site prep and demolition generate concrete and soils, framing explodes with wood offcuts, MEP rough-in sprinkles metal, wire spools, and packaging, and finishes create cardboard mountains and plastic wrap. Punch list weirdly creates contaminated mixed loads—everyone’s tired, shortcuts happen.</p>
              <p className="text-lg text-gray-700 mb-6">I like to build a “waste stream map” by trade during precon. Drywallers own gypsum scrap, electricians handle wire reels and conduit drops, carpenters claim wood cutoffs, and the GC corrals cardboard, plastic, and the mixed safety net. Responsibilities go on a single laminated page near the jobsite plan—pictures, not paragraphs.</p>
              <p className="text-lg text-gray-700 mb-6">Baseline audits sound fancy, but they’re simple. I’ll weigh or estimate a week of production, look at diversion potential, and set a SMART target like “75% diversion by weight after month one.” When in doubt, I prioritize the high-volume, high-value materials first: concrete to crushing, metals to scrap, cardboard kept dry for mill-grade recovery. Quick wins build momentum.</p>
              <p className="text-lg text-gray-700 mb-6">Contamination is the quiet killer, so I obsess over sources. A single coffee cup tossed in a gypsum bin can tip a recycler to “reject.” Rain ruins cardboard, mud ruins everything, and broken glass mixed with plastic film turns the bin into trash. I’ve learned to cover bins, post “what goes where” boards, and designate a “last-look” zone to capture salvage before anything lands in a dumpster.</p>
              <p className="text-lg text-gray-700 mb-6">If you’re new, start small. Pick two streams—metals and cardboard—and get them right. Track diversion rate, cost per ton, and haul frequency. The minute a foreman sees a scrap check from metal or a reduced tipping fee, the culture shifts, and you can layer in wood, gypsum, and concrete without pushback.</p>
              <p className="text-lg text-gray-700 mb-6">The payoff is real. Cleaner sites, lower disposal costs, happier inspectors, and actual data for LEED or local ordinance compliance. Once crews see that source separation shortens hauls and avoids contamination fees, they’ll defend the bins like they bought them. That’s when you know the waste plan is working.</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Requirements, Codes, and Specifications</h2>
              <p className="text-lg text-gray-700 mb-6">Regulations used to feel like a maze to me. Then I realized every jurisdiction basically asks three things: divert what you can, prove it with documentation, and don’t fudge the numbers. From there, construction waste management stops being guesswork and starts being a compliance checklist.</p>
              <p className="text-lg text-gray-700 mb-6">First, know your local rules. Some cities require 65–75% diversion for C&D waste, others mandate specific materials like concrete or metal to be recycled, and a few have landfill bans on cardboard or gypsum. Extended Producer Responsibility (EPR) might sneak in for certain products, so I always scan permit notes for hidden traps.</p>
              <p className="text-lg text-gray-700 mb-6">Permits and manifests matter. I prequalify haulers who can issue scale tickets with material type, net weight, date, and destination. If a recycler won’t provide receipts or a recycling certificate, I treat that as a red flag. No documentation, no diversion credit—simple.</p>
              <p className="text-lg text-gray-700 mb-6">Specs save future fights. I push owners and architects to include a Section 01 “Construction Waste Management” spec that calls out diversion targets, accepted outlets, reporting cadence, and contamination thresholds. Bid language should say subs follow the WMP, use designated containers, and attend toolbox talks. If it’s in the contract, it’s in the culture.</p>
              <p className="text-lg text-gray-700 mb-6">Tipping fees change behavior. When landfill costs spike, I use that math to sell source separation. “Here’s the cost per ton if we contaminate, here’s the savings if we keep metal clean.” It’s not theory—crews respond to dollars and minutes, not essays about sustainability. I’ll literally post cost-per-ton charts near the board.</p>
              <p className="text-lg text-gray-700 mb-6">Green building credits are nice leverage. LEED’s Construction and Demolition Waste Management credit rewards planning, diversion, and documentation. Envision and BREEAM have similar vibes. I don’t chase points for their own sake, but when a project wants certification, the WMP becomes a performance engine rather than paperwork.</p>
              <p className="text-lg text-gray-700 mb-6">I keep a compliance calendar. Weekly: reconcile scale tickets and photos. Monthly: send diversion summaries to the owner with trends, contamination notes, and corrective actions. Milestones: ensure closeout includes final diversion rate, CO₂e avoided, and downstream destinations. That last bit kills greenwashing—auditors love it.</p>
              <p className="text-lg text-gray-700 mb-6">Common failure modes? Comingled bins assumed recyclable when the MRF actually landfilled a fraction, or gypsum soaked by rain and rejected. I’ve been burned by both. Now I cover bins, check recycler acceptance lists, and take photos of loads before pickups. If a dispute pops up, that photo trail pays for itself.</p>
              <p className="text-lg text-gray-700 mb-6">Bottom line: understand the local ordinance, bake requirements into specs, and treat documentation like payroll. Do that, and inspections get boring in the best way.</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Build a Project Waste Management Plan (WMP)</h2>
              <p className="text-lg text-gray-700 mb-6">My first WMP was twelve pages of fluff. Looked impressive, did nothing. The best plans I use now fit on three pages plus appendices: goals, roles, site layout, sorting method, containers, signage, and reporting. Everything else is gravy.</p>
              <p className="text-lg text-gray-700 mb-6">I start with SMART goals linked to schedule and budget. “Divert 75% by weight by month two,” and “keep contamination below 5% on cardboard and metal.” I assign a GC waste lead, a sustainability coordinator, and trade champions who own specific streams. If everyone owns everything, nobody owns anything.</p>
              <p className="text-lg text-gray-700 mb-6">Source-separated or comingled? I pick based on market and space. If my MRF is excellent and the site is tight, I’ll use comingled with strict signage and a clean cardboard carve-out. If I have room and good outlets, I’ll run separate bins for metal, wood, gypsum, cardboard, concrete, and a small mixed bin for problem children. Hybrids are common.</p>
              <p className="text-lg text-gray-700 mb-6">Container details matter more than philosophy. Sizes, colors, lids, and labels are spelled out with photos. We print multilingual signs with pictures of “yes/no” materials—no tiny text walls. I place containers as close to the point of generation as safety allows. If someone walks 200 feet to toss scrap, that scrap becomes trash.</p>
              <p className="text-lg text-gray-700 mb-6">Data capture is the heartbeat. I standardize file names for scale tickets: “2025-03-10_AreaB_Wood_2.14T_RecycleCo.pdf.” Photos of each pickup, QR-coded container IDs, and a simple log spreadsheet or app keeps it tight. I reconcile weekly, not at closeout, because late surprises cost real money.</p>
              <p className="text-lg text-gray-700 mb-6">Training is part of the plan. Kickoff toolbox talk sets expectations and explains why waste audit data helps crews, not just the planet. I schedule micro-trainings by trade during their heaviest waste weeks: drywallers get a five-minute gypsum refresher, finish carpenters review a salvage “last-look” protocol. It’s short, specific, and repeated.</p>
              <p className="text-lg text-gray-700 mb-6">I include a site map in the WMP. It shows container locations, access routes for roll-offs, staging for salvage, and a dry zone for cardboard. I mark a “no dumping” radius around entrances—trash accumulates where it’s easiest. Weekly I walk the map with the area foreman, tweak placements, and note container fullness.</p>
              <p className="text-lg text-gray-700 mb-6">Finally, I add an escalation ladder. First offense: coach and correct. Second: document and retrain. Third: back-charge for contamination per the spec. I rarely get to step three, because steps one and two fix it. When a plan has roles, visuals, and real consequences, diversion numbers climb without drama.</p>
              <p className="text-lg text-gray-700 mb-6">The WMP isn’t a binder. It’s a living playbook. Keep it short, visible, and updated, and people will actually use it.</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">On-Site Sorting, Segregation, and Container Layout</h2>
              <p className="text-lg text-gray-700 mb-6">I used to jam all the bins by the gate because it looked organized. It also guaranteed cross-contamination and grumpy crews. Now I cluster containers near the point of generation and make it stupid-easy to do the right thing.</p>
              <p className="text-lg text-gray-700 mb-6">I design container layout like a workflow. Framing zones get wood and metal nearby, drywall areas get gypsum bins with lids, and finish zones get cardboard and plastic film stations under cover. The mixed bin lives far enough away to not be the default, but close enough for odd materials.</p>
              <p className="text-lg text-gray-700 mb-6">Signage is my secret weapon. Big icons, huge “YES/NO” lists, and multilingual labels beat speeches. I use color coding sitewide—blue for cardboard, yellow for metals, green for wood, gray for concrete, purple for gypsum—and I match the colors on the “What goes where” board. It sounds childish, but it works.</p>
              <p className="text-lg text-gray-700 mb-6">Weather-proofing is non-negotiable. Cardboard bins get lids or a canopy because wet corrugate becomes trash. Gypsum must stay dry to meet recycler specs, so I place it on pallets under cover. I learned the hard way after a week of rain turned two pristine bins into contaminated soup and a fat landfill invoice.</p>
              <p className="text-lg text-gray-700 mb-6">The “last-look” salvage area sits between work zones and roll-offs. Before anyone trashes a door, fixture, brick, or hardwood, it passes through that zone for a quick decision: reuse on-site, donate, or sell. I once salvaged a stack of solid-core doors that funded our end-of-project crew lunch. Not glamorous, totally motivating.</p>
              <p className="text-lg text-gray-700 mb-6">Haul scheduling is tactical. I check production calendars and call swaps before bins overflow. Nothing invites illegal dumping like a mountain of debris next to a full container. I’ll also tighten service-level agreements so emergency swaps don’t stall a critical path. Time is money—and so is space.</p>
              <p className="text-lg text-gray-700 mb-6">For tracking, I stick QR codes on bins and scan pickups. That links loads to areas and trades, so if contamination keeps showing up in Area C, I know where to coach. A simple dashboard shows diversion rate, cost per ton, and haul frequency by zone. It’s not fancy, but it’s enough to steer.</p>
              <p className="text-lg text-gray-700 mb-6">Audits are short and sharp. Daily walk: lids closed, labels visible, contamination spot-checks, photographs saved. Weekly huddle: top two wins, top one issue, and one specific fix. I’ve found that celebrating a good bin photo in the huddle builds pride. People love being seen doing it right.</p>
              <p className="text-lg text-gray-700 mb-6">When layout serves the workflow, sorting becomes muscle memory. You’ll feel it in cleaner paths, fewer trips, and quieter radios. That’s when a site starts to hum.</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Deconstruction vs. Demolition</h2>
              <p className="text-lg text-gray-700 mb-6">The first time I pitched deconstruction, the superintendent gave me the “we don’t have time” look. Fair. Then I showed the math: salvage value, donation receipts, reduced tipping fees, and a schedule that carved out selective deconstruction only where it paid off. We found a middle path and it worked.</p>
              <p className="text-lg text-gray-700 mb-6">I treat deconstruction as a scalpel, not a sledgehammer. I walk the structure with a salvage lens: solid-core doors, cabinetry, lighting, architectural brick, hardwood flooring, and vintage fixtures. If the building has character, there’s value. If it’s all glue-lam and water damage, I don’t force it.</p>
              <p className="text-lg text-gray-700 mb-6">Safety and hazmat come first. Lead paint, asbestos, and suspect adhesives push me to certified abatement before any reuse talk. I coordinate with licensed vendors and keep abatement documentation tight because one misstep can void both safety and donation options. No antique door is worth a safety violation.</p>
              <p className="text-lg text-gray-700 mb-6">The economics are real but specific. I list salvageable items, estimate labor to remove, assess resale/donation value, and compare against straight demo plus landfill. Doors and fixtures often pencil out; sheet goods rarely do. I involve a reuse partner early—Habitat ReStores or local salvage yards—to confirm demand and pickup windows.</p>
              <p className="text-lg text-gray-700 mb-6">Schedule is the make-or-break. I slice deconstruction into a bounded window with clear milestones. Crews know exactly what’s getting pulled and where it’s staged. I’ve learned to mark salvage items with color tags and number them on an inventory sheet that becomes part of owner credits.</p>
              <p className="text-lg text-gray-700 mb-6">Documentation closes the loop. Photos of removed items, inventory lists, donation receipts, and a simple chain-of-custody note prevents “where did that go?” drama. Owners appreciate the transparency, and auditors do too when LEED or local diversion rules are in play.</p>
              <p className="text-lg text-gray-700 mb-6">Not every project wants the vibe of deconstruction, and that’s okay. But even on fast-track demo, I use a “last-look” sweep to capture low-lift wins: metals, fixtures, and clean dimensional lumber. Two hours of selective effort can save thousands and bump your diversion rate noticeably.</p>
              <p className="text-lg text-gray-700 mb-6">The human part matters. Salvage days feel different—there’s pride in preserving something with history. When crews see a staircase get a second life in a community space, the job feels bigger than tonnage numbers. That’s the story that helps sell deconstruction on the next project without me saying a word.</p>
              <p className="text-lg text-gray-700 mb-6">If you’re on the fence, pilot a single zone. Track costs, time, and revenue or receipts. You’ll know quickly whether deconstruction is your new standard or a tool you pull out when conditions are right.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Construction Dumpster?</h2>
            <p className="text-blue-100 mb-8">We offer flexible swaps and clear recycling options for contractors and homeowners.</p>
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



