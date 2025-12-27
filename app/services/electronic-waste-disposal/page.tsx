import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Electronic Waste Disposal | TNT Dumpsters',
  description: 'Electronic waste disposal support for cleanouts and upgrades. Ask about approved e-waste handling before loading. Get fa',
  alternates: { canonical: 'https://tntdump.com/services/electronic-waste-disposal' },
    openGraph: {
      title: 'Electronic Waste Disposal | TNT Dumpsters',
      description: 'Electronic waste disposal support for cleanouts and upgrades. Ask about approved e-waste handling before loading.',
      url: 'https://tntdump.com/services/electronic-waste-disposal',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function ElectronicWasteDisposalPage() {
  return (
    <ServicePageTemplate
      title="Electronic Waste Disposal"
      subtitle="Plan e-waste disposal the right way with guidance from TNT Dumpsters."
      description="Electronics often require special handling. We help you plan e-waste disposal alongside your dumpster rental."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Clear guidance on restricted electronics',
        'Options for mixed cleanouts and sorted loads',
        'Ideal for office or tech cleanouts',
        'Fast delivery for project timelines',
      ]}
      useCases={[
        'Office technology upgrades',
        'Retail equipment replacement',
        'Warehouse cleanouts',
        'School or nonprofit electronics cleanups',
        'Residential electronics cleanouts',
        'Data center equipment refreshes',
      ]}
      faqs={[
        { question: 'Can I throw electronics in the dumpster?', answer: 'Some electronics require special handling. Call us for approved options before loading.' },
        { question: 'Do you coordinate recycling?', answer: 'We can advise on local recycling partners when needed.' },
        { question: 'Is there an extra fee?', answer: 'Certain items may carry disposal fees depending on facility requirements.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


