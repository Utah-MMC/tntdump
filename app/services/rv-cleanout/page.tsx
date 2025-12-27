import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'RV Cleanout Dumpster Rental | TNT Dumpsters',
  description: 'RV cleanout dumpsters for travel trailers, campers, and storage cleanups. Fast delivery and easy pickup. Get fast delive',
  alternates: { canonical: 'https://tntdump.com/services/rv-cleanout' },
    openGraph: {
      title: 'RV Cleanout Dumpster Rental | TNT Dumpsters',
      description: 'RV cleanout dumpsters for travel trailers, campers, and storage cleanups. Fast delivery and easy pickup.',
      url: 'https://tntdump.com/services/rv-cleanout',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function RvCleanoutPage() {
  return (
    <ServicePageTemplate
      title="RV Cleanout Dumpster Rental"
      subtitle="Clear out campers, RVs, and storage areas with a convenient roll-off dumpster."
      description="Whether you are renovating an RV or clearing storage, our dumpsters give you time to load at your own pace."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Easy placement for driveway or storage areas',
        'Flexible loading time for bigger cleanouts',
        'Clear disposal guidance for mixed materials',
        'Fast pickup when you are finished',
      ]}
      useCases={[
        'RV renovation debris',
        'Travel trailer cleanouts',
        'Storage unit cleanups',
        'Seasonal gear disposal',
        'Camper teardown projects',
        'Garage overflow cleanouts',
      ]}
      faqs={[
        { question: 'Will the dumpster fit near my RV?', answer: 'Most driveways and storage lots can accommodate a 15 or 20 yard roll-off.' },
        { question: 'Can I dispose of furniture and fixtures?', answer: 'Yes, typical RV fixtures and furniture are acceptable.' },
        { question: 'How long can I keep the dumpster?', answer: 'Standard rentals include several days; extensions are available.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


