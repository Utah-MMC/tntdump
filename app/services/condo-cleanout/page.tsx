import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Condo Cleanout Dumpster Rental | TNT Dumpsters',
  description: 'Condo cleanout dumpsters for upgrades, move-outs, and renovations. Fast delivery, careful placement, and clear pricing. ',
  alternates: { canonical: 'https://tntdump.com/services/condo-cleanout' },
    openGraph: {
      title: 'Condo Cleanout Dumpster Rental | TNT Dumpsters',
      description: 'Condo cleanout dumpsters for upgrades, move-outs, and renovations. Fast delivery, careful placement, and clear pricing.',
      url: 'https://tntdump.com/services/condo-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function CondoCleanoutPage() {
  return (
    <ServicePageTemplate
      title="Condo Cleanout Dumpster Rental"
      subtitle="Right-sized roll-offs for condo cleanouts, remodels, and move-out projects."
      description="We coordinate deliveries for tight parking lots and HOA schedules so your condo cleanout stays on track."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Compact placement for shared driveways and parking areas',
        'Scheduling aligned with HOA or property rules',
        'Clear pricing and simple pickup',
        'Fast delivery across Salt Lake and Utah County',
      ]}
      useCases={[
        'Move-out cleanouts',
        'Kitchen and bathroom remodels',
        'Tenant turnovers',
        'Balcony and storage cleanups',
        'Furniture disposal',
        'Flooring replacement projects',
      ]}
      faqs={[
        { question: 'Can you deliver to shared parking lots?', answer: 'Yes, we work with property managers to coordinate placement.' },
        { question: 'Do I need HOA approval?', answer: 'Many HOAs require notice; we can help you plan delivery windows.' },
        { question: 'Which size is best?', answer: 'Most condo cleanouts use 10-20 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

