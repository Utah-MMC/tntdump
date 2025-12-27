import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Disaster Cleanup Dumpster Rental | TNT Dumpsters',
  description: 'Disaster cleanup dumpsters for storm debris, flood damage, and emergency cleanouts. Fast delivery and flexible pickups. ',
  alternates: { canonical: 'https://tntdump.com/services/disaster-cleanup' },
    openGraph: {
      title: 'Disaster Cleanup Dumpster Rental | TNT Dumpsters',
      description: 'Disaster cleanup dumpsters for storm debris, flood damage, and emergency cleanouts. Fast delivery and flexible pickups.',
      url: 'https://tntdump.com/services/disaster-cleanup',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function DisasterCleanupPage() {
  return (
    <ServicePageTemplate
      title="Disaster Cleanup Dumpster Rental"
      subtitle="Fast dumpster delivery to help you recover after storms, floods, and emergencies."
      description="When cleanup needs are urgent, we prioritize delivery and flexible pickup so you can focus on recovery."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Priority scheduling for emergency cleanup',
        'Flexible pickup windows as work progresses',
        'Guidance on restricted materials',
        'Support for residential and commercial sites',
      ]}
      useCases={[
        'Storm debris cleanup',
        'Flooded property cleanouts',
        'Fire damage cleanup',
        'Tree and brush removal',
        'Insurance remediation projects',
        'Emergency property clear-outs',
      ]}
      faqs={[
        { question: 'Can you deliver same day?', answer: 'Same-day delivery is often available depending on route capacity.' },
        { question: 'What debris is restricted?', answer: 'Hazardous materials and liquids require special handling.' },
        { question: 'Can you handle large volumes?', answer: 'Yes, we can schedule multiple containers or swaps.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


