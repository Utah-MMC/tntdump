import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Yard Waste Dumpster Rental | TNT Dumpsters',
  description: 'Yard waste dumpster rentals for landscaping, tree trimming, and seasonal cleanups. Fast delivery and easy pickup. Get fa',
  alternates: { canonical: 'https://tntdump.com/services/yard-waste-removal' },
    openGraph: {
      title: 'Yard Waste Dumpster Rental | TNT Dumpsters',
      description: 'Yard waste dumpster rentals for landscaping, tree trimming, and seasonal cleanups. Fast delivery and easy pickup.',
      url: 'https://tntdump.com/services/yard-waste-removal',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function YardWasteRemovalPage() {
  return (
    <ServicePageTemplate
      title="Yard Waste Dumpster Rental"
      subtitle="Handle landscaping debris, brush, and seasonal yard cleanup with a roll-off dumpster."
      description="Yard waste builds up fast. We deliver dumpsters for branches, shrubs, and landscaping debris so your cleanup stays efficient."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Fast delivery for seasonal cleanup',
        'Easy loading for brush and yard debris',
        'Pickup when you are done—no multiple dump trips',
        'Clear guidance on allowed yard materials',
      ]}
      useCases={[
        'Tree trimming and branch removal',
        'Storm cleanup and yard debris',
        'Landscaping projects and regrades',
        'Fence and deck teardown waste',
        'Seasonal cleanups',
        'Brush and shrub removal',
      ]}
      faqs={[
        { question: 'Can I mix yard waste with construction debris?', answer: 'Mixed loads are allowed, but heavy debris like dirt or concrete needs a dedicated container.' },
        { question: 'Do you accept stumps?', answer: 'Yes, but large stumps may impact weight limits.' },
        { question: 'How long can I keep the dumpster?', answer: 'Standard rentals include several days; extensions are available.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


