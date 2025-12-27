import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Yard Waste Debris Bin Rental | TNT Dumpsters',
  description: 'Yard waste debris bin rentals for landscaping projects, brush removal, and seasonal cleanups. Get fast delivery and clea',
  alternates: { canonical: 'https://tntdump.com/services/yard-waste-debris-bin-rental' },
    openGraph: {
      title: 'Yard Waste Debris Bin Rental | TNT Dumpsters',
      description: 'Yard waste debris bin rentals for landscaping projects, brush removal, and seasonal cleanups.',
      url: 'https://tntdump.com/services/yard-waste-debris-bin-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function YardWasteDebrisBinRentalPage() {
  return (
    <ServicePageTemplate
      title="Yard Waste Debris Bin Rental"
      subtitle="Dedicated bins for brush, branches, and landscaping debris."
      description="A debris bin keeps yard waste contained and easy to haul. We deliver fast and pick up when you are ready."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Quick delivery for landscaping projects',
        'Simple pickup scheduling',
        'Guidance on acceptable yard waste',
        'Flexible rental windows',
      ]}
      useCases={[
        'Brush and branch removal',
        'Seasonal yard cleanups',
        'Landscape redesigns',
        'Tree trimming debris',
        'Fence and deck tear-outs',
        'Storm cleanup projects',
      ]}
      faqs={[
        { question: 'Can I put dirt in the bin?', answer: 'Dirt and rock require dedicated containers. Call us for options.' },
        { question: 'Do you accept stumps?', answer: 'Yes, but large stumps may affect weight limits.' },
        { question: 'How long can I keep the bin?', answer: 'Standard rentals include several days; extensions are available.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

