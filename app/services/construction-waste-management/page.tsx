import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Construction Waste Management | TNT Dumpsters',
  description: 'Construction waste management with roll-off dumpsters, reliable swaps, and clear disposal guidance. Get fast delivery an',
  alternates: { canonical: 'https://tntdump.com/services/construction-waste-management' },
    openGraph: {
      title: 'Construction Waste Management | TNT Dumpsters',
      description: 'Construction waste management with roll-off dumpsters, reliable swaps, and clear disposal guidance.',
      url: 'https://tntdump.com/services/construction-waste-management',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ConstructionWasteManagementPage() {
  return (
    <ServicePageTemplate
      title="Construction Waste Management"
      subtitle="Keep job sites clean and compliant with scheduled dumpster delivery and pickup."
      description="We help contractors manage construction waste with on-time swaps, clear weight limits, and reliable pickup windows."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Scheduled swaps for ongoing projects',
        'Guidance on heavy materials and weight limits',
        'Clear pricing for predictable budgets',
        'Support for residential and commercial builds',
      ]}
      useCases={[
        'Residential remodel debris',
        'Commercial tenant improvements',
        'Roofing and siding tear-offs',
        'Concrete and masonry cleanup',
        'New construction sites',
        'Large demolition projects',
      ]}
      faqs={[
        { question: 'How do swaps work?', answer: 'Call when the dumpster is full and we will schedule a swap based on route availability.' },
        { question: 'Do you handle heavy debris?', answer: 'Yes, we provide guidance to stay within legal weight limits.' },
        { question: 'What sizes are available?', answer: 'We offer 15, 20, 30, and 40 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

