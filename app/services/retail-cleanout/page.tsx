import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Retail Cleanout Dumpster Rental | TNT Dumpsters',
  description: 'Retail cleanout dumpsters for store remodels, closures, and fixture updates. Fast delivery and easy pickup. Get fast del',
  alternates: { canonical: 'https://tntdump.com/services/retail-cleanout' },
    openGraph: {
      title: 'Retail Cleanout Dumpster Rental | TNT Dumpsters',
      description: 'Retail cleanout dumpsters for store remodels, closures, and fixture updates. Fast delivery and easy pickup.',
      url: 'https://tntdump.com/services/retail-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function RetailCleanoutPage() {
  return (
    <ServicePageTemplate
      title="Retail Cleanout Dumpster Rental"
      subtitle="Keep retail remodels and store resets on schedule with reliable dumpster service."
      description="Retail cleanouts can move fast. We provide dumpsters sized for fixtures, shelving, and renovation debris."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Delivery timed around store hours',
        'Clear pricing for renovation budgets',
        'Fast pickup to keep storefronts clean',
        'Support for bulky fixtures and displays',
      ]}
      useCases={[
        'Store remodels and refreshes',
        'Fixture and shelving disposal',
        'Retail closures',
        'Inventory cleanouts',
        'Flooring replacements',
        'Seasonal store resets',
      ]}
      faqs={[
        { question: 'Can you deliver after hours?', answer: 'Yes, we can coordinate delivery to reduce disruption.' },
        { question: 'Do you accept shelving and fixtures?', answer: 'Yes, most fixtures and shelving are acceptable.' },
        { question: 'What size dumpster do retail cleanouts use?', answer: 'Most retail projects use 20 or 30 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

