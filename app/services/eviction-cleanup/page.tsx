import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Eviction Cleanup Dumpster Rental | TNT Dumpsters',
  description: 'Eviction cleanup dumpsters for property managers and landlords. Fast delivery, clear pricing, and quick pickup. Get fast',
  alternates: { canonical: 'https://tntdump.com/services/eviction-cleanup' },
    openGraph: {
      title: 'Eviction Cleanup Dumpster Rental | TNT Dumpsters',
      description: 'Eviction cleanup dumpsters for property managers and landlords. Fast delivery, clear pricing, and quick pickup.',
      url: 'https://tntdump.com/services/eviction-cleanup',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function EvictionCleanupPage() {
  return (
    <ServicePageTemplate
      title="Eviction Cleanup Dumpster Rental"
      subtitle="Turn units faster with reliable dumpster delivery and pickup."
      description="Eviction cleanups require speed and clarity. We coordinate delivery windows and fast pickups so units return to market quickly."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Fast delivery for turnover deadlines',
        'Flexible pickup for multi-unit projects',
        'Clear disposal guidance for bulky items',
        'Support for property managers and landlords',
      ]}
      useCases={[
        'Apartment and rental turnovers',
        'Bulk trash removal',
        'Furniture and appliance disposal',
        'Carpet and flooring removal',
        'Storage cleanouts',
        'Multi-unit cleanup projects',
      ]}
      faqs={[
        { question: 'Can you handle multiple units?', answer: 'Yes, we can schedule multiple dumpsters or swaps.' },
        { question: 'How quickly can you deliver?', answer: 'Same-day delivery is often available when routes allow.' },
        { question: 'What size should I choose?', answer: 'Most turnovers use 15 or 20 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

