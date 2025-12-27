import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Cleanout Dumpster Rental | TNT Dumpsters',
  description: 'Restaurant cleanout dumpsters for renovations, closures, and equipment upgrades. Fast delivery and simple pickup. Get fa',
  alternates: { canonical: 'https://tntdump.com/services/restaurant-cleanout' },
    openGraph: {
      title: 'Restaurant Cleanout Dumpster Rental | TNT Dumpsters',
      description: 'Restaurant cleanout dumpsters for renovations, closures, and equipment upgrades. Fast delivery and simple pickup.',
      url: 'https://tntdump.com/services/restaurant-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function RestaurantCleanoutPage() {
  return (
    <ServicePageTemplate
      title="Restaurant Cleanout Dumpster Rental"
      subtitle="Handle restaurant renovations, closures, and equipment swaps with reliable dumpsters."
      description="Restaurant projects move quickly. We coordinate delivery windows and pickup to keep your kitchen and dining upgrades on schedule."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Flexible delivery around operating hours',
        'Fast pickup to keep sites clean and compliant',
        'Support for bulky equipment disposal',
        'Clear pricing for renovation budgets',
      ]}
      useCases={[
        'Kitchen remodels and upgrades',
        'Dining room renovations',
        'Equipment and fixture removal',
        'Restaurant closures',
        'Flooring and wall demolition',
        'Outdoor patio rebuilds',
      ]}
      faqs={[
        { question: 'Can you deliver after hours?', answer: 'We can coordinate delivery windows to reduce disruption.' },
        { question: 'Do you accept appliances?', answer: 'Yes, but certain appliances may have disposal fees.' },
        { question: 'What size is recommended?', answer: 'Most restaurant projects use 20 or 30 yard dumpsters.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

