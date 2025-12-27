import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Mold Remediation Dumpster Rental | TNT Dumpsters',
  description: 'Mold remediation dumpster rentals for safe disposal of damaged materials. Fast delivery and flexible pickup. Get fast de',
  alternates: { canonical: 'https://tntdump.com/services/mold-remediation' },
    openGraph: {
      title: 'Mold Remediation Dumpster Rental | TNT Dumpsters',
      description: 'Mold remediation dumpster rentals for safe disposal of damaged materials. Fast delivery and flexible pickup.',
      url: 'https://tntdump.com/services/mold-remediation',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function MoldRemediationPage() {
  return (
    <ServicePageTemplate
      title="Mold Remediation Dumpster Rental"
      subtitle="Dispose of damaged drywall, flooring, and fixtures with a dedicated roll-off dumpster."
      description="Mold remediation projects create debris that needs quick removal. We deliver dumpsters to keep your remediation plan moving."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Fast delivery for time-sensitive remediation',
        'Flexible pickup once remediation is complete',
        'Guidance on restricted materials',
        'Clear pricing for contractors and homeowners',
      ]}
      useCases={[
        'Drywall and insulation removal',
        'Bathroom and kitchen remediation',
        'Basement water damage cleanouts',
        'Flooring removal projects',
        'Property restoration cleanups',
        'Insurance remediation jobs',
      ]}
      faqs={[
        { question: 'Can I dispose of moldy materials?', answer: 'Yes, typical mold-damaged debris is acceptable in mixed loads.' },
        { question: 'Do you offer same-day delivery?', answer: 'Same-day delivery is often available when routes allow.' },
        { question: 'What size dumpster is best?', answer: 'Most remediation projects use 15 or 20 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

