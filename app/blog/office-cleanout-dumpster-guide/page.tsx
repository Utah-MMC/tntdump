import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import ServingCityEnhancer from '@/components/ServingCityEnhancer'
import BlogServiceLinks from '@/components/BlogServiceLinks'

export const metadata: Metadata = {
  title: 'Office Cleanout Dumpster Guide: Size, Cost & Planning | TNT Dumpsters',
  description: 'Office cleanout dumpster guide: pick the right size, what fits, cost expectations, and a simple plan for fast, disruption-free cleanup.',
  keywords: 'office cleanout dumpster, office dumpster rental, commercial cleanout dumpster, office waste disposal, business dumpster rental, utah dumpster rental',
}

export default function OfficeCleanoutDumpsterGuidePage() {
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Project Guide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Office Cleanout Dumpster Guide: Size, Cost & Planning</h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete guide to choosing the right dumpster for office cleanouts. Learn which size fits your office size, what materials you can dispose of, cost estimates, timeline planning, and tips for efficient office cleanout.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>TNT Dumpsters Team</span></div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>January 29, 2025</span></div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/pexels-olly-3771111.jpg" alt="Office cleanout dumpster rental guide" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "BlogPosting",
                "headline": "Office Cleanout Dumpster Guide: Size, Cost & Planning",
                "description": metadata.description,
                "datePublished": "2025-01-29", "dateModified": "2025-01-29",
                "author": { "@type": "Organization", "name": "TNT Dumpsters" },
                "publisher": { "@type": "Organization", "name": "TNT Dumpsters",
                  "logo": { "@type": "ImageObject", "url": "https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp", "width": 176, "height": 176 }
                },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tntdump.com/blog/office-cleanout-dumpster-guide" },
                "image": ["https://tntdump.com/images/dumpster2-500x500-2.jpeg"]
              }) }} />

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Answer</h3>
                <p className="text-gray-700 mb-0">
                  Most office cleanouts need a <strong>20-yard or 30-yard dumpster</strong> ($400-$650). Small offices use 20-yard containers. Large offices or complete cleanouts need 30-yard dumpsters. Plan for after-hours or weekend delivery to minimize business disruption.
                </p>
              </div>

              <h2>Choosing the Right Dumpster Size for Office Cleanouts</h2>
              <p>Office cleanouts generate moderate to large amounts of debris from furniture, equipment, and office materials. The size you need depends on your office size, cleanout scope, and whether you're doing a complete office relocation or selective removal.</p>

              <h3>20-Yard Dumpster for Small to Medium Offices</h3>
              <p>A 20-yard dumpster fits small to medium office cleanouts. This size works for:</p>
              <ul>
                <li>Small office spaces (under 2,000 square feet)</li>
                <li>Selective furniture and equipment removal</li>
                <li>Office reorganization projects</li>
                <li>Partial office cleanouts</li>
              </ul>

              <h3>30-Yard Dumpster for Large Offices</h3>
              <p>A 30-yard dumpster is ideal for large offices or complete cleanouts. This size fits:</p>
              <ul>
                <li>Large office spaces (2,000+ square feet)</li>
                <li>Complete office relocations</li>
                <li>Major office renovations</li>
                <li>Full office cleanout projects</li>
              </ul>

              <h2>What Goes in Your Office Cleanout Dumpster</h2>
              <p>Most office materials can go in your dumpster:</p>
              <ul>
                <li><strong>Office furniture:</strong> Desks, chairs, filing cabinets, tables</li>
                <li><strong>Office equipment:</strong> Old computers, printers, copiers (if allowed)</li>
                <li><strong>Office supplies:</strong> Boxes, files, paper, storage items</li>
                <li><strong>Construction debris:</strong> If doing office renovations</li>
                <li><strong>General office waste:</strong> Items being removed from the office</li>
              </ul>

              <h2>What Cannot Go in Your Office Dumpster</h2>
              <p>Some office materials require special disposal:</p>
              <ul>
                <li><strong>Electronics:</strong> Computers, monitors, printers (may require e-waste disposal)</li>
                <li><strong>Hazardous materials:</strong> Chemicals, batteries, fluorescent bulbs</li>
                <li><strong>Confidential documents:</strong> May require secure shredding</li>
                <li><strong>Large appliances:</strong> Refrigerators, large copiers (check restrictions)</li>
              </ul>

              <h2>Timeline Planning for Office Cleanouts</h2>
              <p>Office cleanouts require careful planning to minimize business disruption:</p>
              <ul>
                <li><strong>After-hours delivery:</strong> Schedule dumpster delivery after business hours</li>
                <li><strong>Weekend projects:</strong> Plan cleanouts for weekends to avoid disruption</li>
                <li><strong>Phased approach:</strong> Coordinate cleanout with office relocation timeline</li>
                <li><strong>Quick turnaround:</strong> Schedule pickup promptly to clear space</li>
              </ul>

              <h2>Cost Estimates for Office Cleanout Dumpsters</h2>
              <p>Office cleanout dumpster costs vary by size:</p>
              <ul>
                <li><strong>20-yard dumpster:</strong> $400-$500 (small to medium offices)</li>
                <li><strong>30-yard dumpster:</strong> $500-$650 (large offices or complete cleanouts)</li>
              </ul>
              <p>Costs include delivery, pickup, and disposal. Additional charges may apply for after-hours delivery or extended rental periods.</p>

              <h2>Office Cleanout Tips</h2>
              <ul>
                <li><strong>Plan ahead:</strong> Schedule dumpster delivery well in advance</li>
                <li><strong>Coordinate with building:</strong> Check building requirements and access</li>
                <li><strong>Separate materials:</strong> Recycle electronics and metals when possible</li>
                <li><strong>Secure documents:</strong> Handle confidential documents separately</li>
                <li><strong>Minimize disruption:</strong> Plan for after-hours or weekend work</li>
              </ul>

              <h2>Getting Started</h2>
              <p>Ready to start your office cleanout? Get the right dumpster size for your project. Use our <a href="/calculator" className="text-blue-600 hover:underline font-semibold">dumpster size calculator</a> or call TNT Dumpsters at <a href="tel:8012099013" className="text-blue-600 hover:underline font-semibold">(801) 209-9013</a>.</p>
              <p>Explore our <a href="/dumpsters/commercial" className="text-blue-600 hover:underline font-semibold">commercial dumpster rentals</a>, <a href="/services/commercial" className="text-blue-600 hover:underline font-semibold">commercial services</a>, or learn more about <a href="/blog/commercial-dumpster-rental-guide" className="text-blue-600 hover:underline font-semibold">commercial dumpster rental</a>.</p>

              <ServingCityEnhancer />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li><Link href="/blog/commercial-dumpster-rental-guide" className="text-blue-600 hover:text-blue-700">Commercial Dumpster Rental: Business Guide</Link></li>
              <li><Link href="/blog/20-vs-30-yard-dumpster-comparison" className="text-blue-600 hover:text-blue-700">20 vs 30 Yard Dumpster: Which Size for Your Project?</Link></li>
              <li><Link href="/blog/construction-dumpster-size-guide" className="text-blue-600 hover:text-blue-700">Construction Dumpster Size Guide: Choosing the Right Size</Link></li>
              <li><Link href="/blog/choose-right-dumpster-size" className="text-blue-600 hover:text-blue-700">Dumpster Sizes: Yards, Dimensions, Capacity</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <BlogServiceLinks eyebrow="Services" />

      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Office Cleanout?</h2>
            <p className="text-blue-100 mb-8">Get the right dumpster size for your office cleanout. After-hours delivery available to minimize business disruption.</p>
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

