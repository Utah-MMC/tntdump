import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Demolition Waste Disposal | TNT Dumpsters',
  description: 'Demolition waste disposal dumpsters for teardown and renovation debris. Reliable delivery, swaps, and clear pricing. Get',
  alternates: { canonical: 'https://tntdump.com/services/demolition-waste-disposal' },
    openGraph: {
      title: 'Demolition Waste Disposal | TNT Dumpsters',
      description: 'Demolition waste disposal dumpsters for teardown and renovation debris. Reliable delivery, swaps, and clear pricing.',
      url: 'https://tntdump.com/services/demolition-waste-disposal',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function DemolitionWasteDisposalPage() {
  return (
    <ServicePageTemplate
      title="Demolition Waste Disposal"
      subtitle="Handle teardown debris with dependable roll-off delivery and pickup."
      description="Demolition work moves fast. We coordinate dumpsters sized for heavy debris and keep swaps on schedule."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Support for heavy debris and demolition loads',
        'Flexible swaps for active job sites',
        'Clear guidance on weight limits',
        'On-time delivery for tight schedules',
      ]}
      useCases={[
        'Interior demo and strip-outs',
        'Roof tear-offs and rebuilds',
        'Concrete and masonry removal',
        'Commercial build-out demolition',
        'Large residential renovations',
        'Disaster recovery cleanup',
      ]}
      faqs={[
        { question: 'Do you handle heavy materials?', answer: 'Yes, we can advise on fill height and weight limits for heavy debris.' },
        { question: 'How quickly can you swap?', answer: 'Same-day or next-day swaps are available when routes allow.' },
        { question: 'Do I need a permit for street placement?', answer: 'Street placement may require permits depending on the city.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


