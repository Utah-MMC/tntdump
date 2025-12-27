import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Junk Removal Dumpster Rental | TNT Dumpsters',
  description: 'Junk removal dumpster rentals for cleanouts and bulk disposal. Quick delivery, clear pricing, and simple pickup. Get fas',
  alternates: { canonical: 'https://tntdump.com/services/junk-removal' },
,
    openGraph: {
      title: 'Junk Removal Dumpster Rental | TNT Dumpsters',
      description: 'Junk removal dumpster rentals for cleanouts and bulk disposal. Quick delivery, clear pricing, and simple pickup.',
      url: 'https://tntdump.com/services/junk-removal',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function JunkRemovalPage() {
  return (
    
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Junk Removal Dumpster Rental</h1><ServicePageTemplate
      title="Junk Removal Dumpster Rental"
      subtitle="Simplify junk removal with a roll-off delivered when you need it."
      description="Perfect for garage cleanouts, downsizing, or bulk disposal projects where flexible loading time matters."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Flexible loading windows for cleanouts',
        'Easy delivery and pickup scheduling',
        'Great alternative to multiple dump trips',
        'Clear disposal guidance upfront',
      ]}
      useCases={[
        'Garage and attic cleanouts',
        'Furniture and appliance removal',
        'Estate and downsizing projects',
        'Storage unit cleanouts',
        'Move-out junk removal',
        'Neighborhood cleanup days',
      ]}
      faqs={[
        { question: 'Is this different from full-service junk hauling?', answer: 'Yes, a roll-off lets you load at your own pace.' },
        { question: 'Can I put furniture in the dumpster?', answer: 'Yes, most furniture is acceptable in mixed loads.' },
        { question: 'What items are not allowed?', answer: 'Hazardous waste, liquids, and tires are not allowed.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
