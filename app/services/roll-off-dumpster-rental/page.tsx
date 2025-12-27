import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rental | TNT Dumpsters',
  description: 'Roll-off dumpster rentals for remodels, construction, and cleanouts across Utah. Fast delivery, clear pricing, and easy pickup.',
  alternates: { canonical: 'https://tntdump.com/services/roll-off-dumpster-rental' },
,
    openGraph: {
      title: 'Roll-Off Dumpster Rental | TNT Dumpsters',
      description: 'Roll-off dumpster rentals for remodels, construction, and cleanouts across Utah. Fast delivery, clear pricing, and easy pickup.',
      url: 'https://tntdump.com/services/roll-off-dumpster-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function RollOffDumpsterRentalPage() {
  return (
    
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Roll-Off Dumpster Rental</h1><ServicePageTemplate
      title="Roll-Off Dumpster Rental"
      subtitle="Flexible roll-off containers delivered fast for residential and commercial projects across Utah."
      description="Roll-off dumpsters are the most versatile option for cleanouts, remodels, and construction debris."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Same-day delivery when routes allow',
        'Driveway-safe placement with boards',
        'Transparent pricing with weight billed by the ton',
        'Easy scheduling for pickup or swaps',
      ]}
      useCases={[
        'Home remodels and renovations',
        'Construction debris removal',
        'Retail and office cleanouts',
        'Large yard cleanup projects',
        'Demolition and teardown work',
        'Estate cleanouts and move-outs',
      ]}
      faqs={[
        { question: 'What sizes are available?', answer: 'We offer 15, 20, and 30 yard roll-off dumpsters for most jobs.' },
        { question: 'How long is the rental?', answer: 'Standard rentals include several days; extensions are available on request.' },
        { question: 'Do you place in driveways?', answer: 'Yes, and we use boards to help protect surfaces.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
