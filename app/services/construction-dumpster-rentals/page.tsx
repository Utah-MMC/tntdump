import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rentals | TNT Dumpsters',
  description: 'Construction dumpster rentals for contractors and job sites. Fast delivery, clear pricing, and reliable swaps. Get fast ',
  alternates: { canonical: 'https://tntdump.com/services/construction-dumpster-rentals' },
,
    openGraph: {
      title: 'Construction Dumpster Rentals | TNT Dumpsters',
      description: 'Construction dumpster rentals for contractors and job sites. Fast delivery, clear pricing, and reliable swaps.',
      url: 'https://tntdump.com/services/construction-dumpster-rentals',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ConstructionDumpsterRentalsPage() {
  return (
    <ServicePageTemplate
      title="Construction Dumpster Rentals"
      subtitle="Jobsite-ready roll-offs delivered when you need them."
      description="Keep construction debris under control with dumpsters sized for remodels, new builds, and demolition."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Fast delivery to active job sites',
        'Swap scheduling for ongoing projects',
        'Guidance on weight limits',
        'Clear pricing for project budgets',
      ]}
      useCases={[
        'Residential construction debris',
        'Commercial build-outs',
        'Demolition cleanup',
        'Roofing and siding removal',
        'Concrete and masonry disposal',
        'Large renovation projects',
      ]}
      faqs={[
        { question: 'How quickly can you deliver?', answer: 'Same-day delivery is often available depending on routes.' },
        { question: 'Do you offer swaps?', answer: 'Yes, call when full and we will coordinate a swap.' },
        { question: 'What size should I choose?', answer: 'Most construction projects use 20, 30, or 40 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
