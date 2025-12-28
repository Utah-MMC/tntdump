import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental Service | TNT Dumpsters',
  description: 'Construction dumpster rentals for job sites, renovations, and demolition. Fast delivery, clear pricing, and reliable swaps.',
  alternates: { canonical: 'https://tntdump.com/services/construction-dumpster-rental' },
    openGraph: {
      title: 'Construction Dumpster Rental Service | TNT Dumpsters',
      description: 'Construction dumpster rentals for job sites, renovations, and demolition. Fast delivery, clear pricing, and reliable swaps.',
      url: 'https://tntdump.com/services/construction-dumpster-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ConstructionDumpsterRentalPage() {
  return (
    <ServicePageTemplate
      title="Construction Dumpster Rental"
      subtitle="Reliable roll-offs for contractors, builders, and job sites across Utah."
      description="Keep construction debris moving with scheduled deliveries, fast swaps, and dependable pickup windows."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Jobsite delivery coordination and swap scheduling',
        'Options for heavy debris and demo materials',
        'Consistent pickup windows for active sites',
        'Straightforward pricing and weight billing',
      ]}
      useCases={[
        'New construction debris',
        'Renovations and remodels',
        'Roofing tear-offs',
        'Concrete and masonry cleanup',
        'Interior demolition projects',
        'Commercial build-outs',
      ]}
      faqs={[
        { question: 'How fast can you swap containers?', answer: 'We often swap same day or next morning depending on route availability.' },
        { question: 'Do you handle heavy materials?', answer: 'Yes, we can provide guidance for heavy debris to stay within road limits.' },
        { question: 'Can you deliver to tight jobsites?', answer: 'We coordinate placement ahead of time; photos help us plan access.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


