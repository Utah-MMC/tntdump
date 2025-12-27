import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Residential Dumpster Rental | TNT Dumpsters',
  description: 'Residential dumpster rentals for cleanouts, remodels, and yard projects. Reliable service, fast delivery, and clear pricing.',
  alternates: { canonical: 'https://tntdump.com/services/residential-dumpster-rental' },
,
    openGraph: {
      title: 'Residential Dumpster Rental | TNT Dumpsters',
      description: 'Residential dumpster rentals for cleanouts, remodels, and yard projects. Reliable service, fast delivery, and clear pricing.',
      url: 'https://tntdump.com/services/residential-dumpster-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ResidentialDumpsterRentalPage() {
  return (
    
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Residential Dumpster Rental</h1><ServicePageTemplate
      title="Residential Dumpster Rental"
      subtitle="Keep home projects on schedule with dependable dumpster delivery and pickup."
      description="From garage cleanouts to kitchen remodels, TNT Dumpsters delivers the right-size roll-off for your home project."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Driveway-safe placement and careful pickup',
        'Clear pricing and flexible rental windows',
        'Fast delivery across Salt Lake and Utah County',
        'Helpful size recommendations for homeowners',
      ]}
      useCases={[
        'Kitchen and bathroom remodels',
        'Garage and basement cleanouts',
        'Roofing projects',
        'Yard waste and landscaping debris',
        'Move-in or move-out cleanouts',
        'Furniture and junk removal',
      ]}
      faqs={[
        { question: 'Do I need a permit for my driveway?', answer: 'Driveway placements typically do not require a permit. Street placement may.' },
        { question: 'How long can I keep the dumpster?', answer: 'Standard rentals include several days; extensions are available.' },
        { question: 'What items are not allowed?', answer: 'Hazardous waste, liquids, and tires are not allowed in mixed loads.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
