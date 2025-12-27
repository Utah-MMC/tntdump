import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Industrial Dumpster Rental | TNT Dumpsters',
  description: 'Industrial dumpster rentals for manufacturing, warehouses, and large-scale cleanup projects. Reliable delivery and swaps.',
  alternates: { canonical: 'https://tntdump.com/services/industrial-dumpster-rental' },
    openGraph: {
      title: 'Industrial Dumpster Rental | TNT Dumpsters',
      description: 'Industrial dumpster rentals for manufacturing, warehouses, and large-scale cleanup projects. Reliable delivery and swaps.',
      url: 'https://tntdump.com/services/industrial-dumpster-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function IndustrialDumpsterRentalPage() {
  return (
    <ServicePageTemplate
      title="Industrial Dumpster Rental"
      subtitle="Heavy-duty roll-offs for industrial sites, plants, and large-scale cleanup projects."
      description="Industrial work needs dependable hauling. We coordinate delivery and swaps to keep production sites clear."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Reliable swaps for ongoing production',
        'Support for heavy debris and bulk waste',
        'Clear weight limits and disposal guidance',
        'Flexible scheduling for shift operations',
      ]}
      useCases={[
        'Manufacturing cleanouts',
        'Plant upgrades and retrofits',
        'Warehouse reorganizations',
        'Industrial demolition projects',
        'Bulk packaging disposal',
        'Large equipment replacement',
      ]}
      faqs={[
        { question: 'Can you handle heavy materials?', answer: 'Yes, we coordinate with you to stay within road weight limits.' },
        { question: 'Do you offer recurring pickups?', answer: 'Yes, we can schedule recurring swaps for ongoing sites.' },
        { question: 'What sizes are best for industrial sites?', answer: 'Most industrial projects use 30 or 40 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

