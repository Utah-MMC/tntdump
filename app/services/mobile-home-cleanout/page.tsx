import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Mobile Home Cleanout Dumpster Rental | TNT Dumpsters',
  description: 'Mobile home cleanout dumpsters for renovations, removals, and property resets. Fast delivery and easy pickup. Get fast d',
  alternates: { canonical: 'https://tntdump.com/services/mobile-home-cleanout' },
    openGraph: {
      title: 'Mobile Home Cleanout Dumpster Rental | TNT Dumpsters',
      description: 'Mobile home cleanout dumpsters for renovations, removals, and property resets. Fast delivery and easy pickup.',
      url: 'https://tntdump.com/services/mobile-home-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function MobileHomeCleanoutPage() {
  return (
    <ServicePageTemplate
      title="Mobile Home Cleanout Dumpster Rental"
      subtitle="Clear out mobile homes and manufactured housing with dependable dumpster service."
      description="Mobile home cleanouts generate bulky debris quickly. We provide roll-off dumpsters sized for efficient loading."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Fast delivery for property turnover timelines',
        'Placement help for tighter lots and parks',
        'Clear disposal guidance for mixed debris',
        'Flexible pickup scheduling',
      ]}
      useCases={[
        'Manufactured home renovations',
        'Mobile home cleanouts',
        'Property turnovers',
        'Interior demolition projects',
        'Bulk furniture disposal',
        'Removal prep cleanups',
      ]}
      faqs={[
        { question: 'Can you deliver inside mobile home parks?', answer: 'Yes, we coordinate placement with property managers when needed.' },
        { question: 'What size should I choose?', answer: 'Most mobile home cleanouts use 20 or 30 yard dumpsters.' },
        { question: 'How quickly can you deliver?', answer: 'Same-day delivery is often available depending on routes.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

