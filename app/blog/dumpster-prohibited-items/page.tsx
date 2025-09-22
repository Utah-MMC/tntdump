import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dumpster Prohibited Items - What You Can\'t Throw Away | T&T Dumpsters',
  description: 'Learn what items are prohibited in dumpster rentals. T&T Dumpsters guide to safe disposal and what materials are not allowed in roll-off dumpsters.',
  keywords: 'dumpster prohibited items, what not to put in dumpster, hazardous waste disposal, dumpster rental restrictions, utah dumpster rules',
  alternates: {
    canonical: 'https://tntdump.com/blog/dumpster-prohibited-items',
  },
  openGraph: {
    title: 'Dumpster Prohibited Items - What You Can\'t Throw Away',
    description: 'Learn what items are prohibited in dumpster rentals. T&T Dumpsters guide to safe disposal and what materials are not allowed in roll-off dumpsters.',
    url: 'https://tntdump.com/blog/dumpster-prohibited-items',
    siteName: 'T&T Dumpsters',
    images: [
      {
        url: 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp',
        width: 1200,
        height: 630,
        alt: 'T&T Dumpsters - Dumpster Prohibited Items Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Prohibited Items - What You Can\'t Throw Away',
    description: 'Learn what items are prohibited in dumpster rentals. T&T Dumpsters guide to safe disposal and what materials are not allowed in roll-off dumpsters.',
    images: ['https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function DumpsterProhibitedItemsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dumpster Prohibited Items: What You Can't Throw Away
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="text-sm">Published: January 27, 2025</span>
              <span className="mx-2">•</span>
              <span className="text-sm">T&T Dumpsters</span>
            </div>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Understanding what items are prohibited in dumpster rentals is crucial for safe disposal and compliance with local regulations. This guide covers all the materials you cannot throw away in a roll-off dumpster.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🚫 Hazardous Materials</h2>
            <p className="text-gray-700 mb-4">
              Hazardous materials are strictly prohibited in dumpster rentals due to safety and environmental concerns:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Chemicals and Solvents:</strong> Paint, paint thinner, pesticides, herbicides</li>
              <li><strong>Automotive Fluids:</strong> Oil, antifreeze, brake fluid, transmission fluid</li>
              <li><strong>Batteries:</strong> Car batteries, household batteries, industrial batteries</li>
              <li><strong>Asbestos:</strong> Any materials containing asbestos fibers</li>
              <li><strong>Medical Waste:</strong> Syringes, medications, medical equipment</li>
              <li><strong>Flammable Materials:</strong> Gasoline, propane tanks, lighter fluid</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🏠 Appliances and Electronics</h2>
            <p className="text-gray-700 mb-4">
              Large appliances and electronics require special disposal methods:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Refrigerators and Freezers:</strong> Must have Freon removed first</li>
              <li><strong>Air Conditioning Units:</strong> Require professional Freon removal</li>
              <li><strong>Televisions and Monitors:</strong> Contain hazardous materials</li>
              <li><strong>Computers and Electronics:</strong> Often contain valuable recyclable materials</li>
              <li><strong>Microwaves:</strong> May contain capacitors with hazardous materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🛏️ Large Items</h2>
            <p className="text-gray-700 mb-4">
              Certain large items require special handling and disposal:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Mattresses and Box Springs:</strong> Often require separate disposal fees</li>
              <li><strong>Tires:</strong> Cannot be disposed of in regular dumpsters</li>
              <li><strong>Hot Water Heaters:</strong> May contain hazardous materials</li>
              <li><strong>Pool Chemicals:</strong> Highly hazardous and require special disposal</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">🌱 Organic and Food Waste</h2>
            <p className="text-gray-700 mb-4">
              While some organic waste is acceptable, certain types are prohibited:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Large Quantities of Food:</strong> Can attract pests and create odors</li>
              <li><strong>Animal Waste:</strong> Pet waste, livestock waste</li>
              <li><strong>Yard Waste:</strong> Grass clippings, leaves, branches (in large quantities)</li>
              <li><strong>Compostable Materials:</strong> Better suited for composting programs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">💰 Additional Fees</h2>
            <p className="text-gray-700 mb-4">
              Some items may be accepted but require additional fees:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                <strong>T&T Dumpsters Policy:</strong> We charge $25 per item for refrigerators, freezers, air conditioning units (must drain Freon), mattresses/box springs, or tires.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">✅ Safe Disposal Alternatives</h2>
            <p className="text-gray-700 mb-4">
              Here are proper disposal methods for prohibited items:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Hazardous Materials:</strong> Take to local hazardous waste collection centers</li>
              <li><strong>Electronics:</strong> Use e-waste recycling programs</li>
              <li><strong>Appliances:</strong> Contact local appliance recycling services</li>
              <li><strong>Yard Waste:</strong> Use municipal yard waste programs</li>
              <li><strong>Medical Waste:</strong> Contact medical waste disposal services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">📞 Need Help?</h2>
            <p className="text-gray-700 mb-6">
              If you're unsure about whether an item is allowed in your dumpster rental, contact T&T Dumpsters. We're here to help you dispose of your waste safely and legally.
            </p>

            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Rent a Dumpster?</h3>
              <p className="mb-4">Get a free quote for your dumpster rental needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:801-209-9013"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (801) 209-9013
                </a>
                <Link
                  href="/quote"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
