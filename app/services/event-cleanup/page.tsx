import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Event Cleanup Dumpster Rental | TNT Dumpsters',
  description: 'Event cleanup dumpster rentals for festivals, community events, and large gatherings. Schedule delivery and pickup fast.',
  alternates: { canonical: 'https://tntdump.com/services/event-cleanup' },
    openGraph: {
      title: 'Event Cleanup Dumpster Rental | TNT Dumpsters',
      description: 'Event cleanup dumpster rentals for festivals, community events, and large gatherings. Schedule delivery and pickup fast.',
      url: 'https://tntdump.com/services/event-cleanup',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function EventCleanupPage() {
  return (
    <ServicePageTemplate
      title="Event Cleanup Dumpster Rental"
      subtitle="Keep venues clean with scheduled delivery and pickup before and after your event."
      description="We help event planners manage cleanup with reliable dumpsters sized to match attendance and waste volume."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Timed delivery around event schedules',
        'Flexible pickup options for multi-day events',
        'Clear disposal guidance for mixed waste',
        'Local team support for large venues',
      ]}
      useCases={[
        'Festivals and fairs',
        'Community events and parades',
        'Sports tournaments',
        'Corporate events and conferences',
        'Fundraisers and charity events',
        'Seasonal celebrations',
      ]}
      faqs={[
        { question: 'How far in advance should I book?', answer: 'Book early for large events to secure preferred delivery windows.' },
        { question: 'Can you swap dumpsters mid-event?', answer: 'Yes, swaps are available when schedules and routes allow.' },
        { question: 'What sizes work for events?', answer: 'We can recommend sizes based on attendance and waste volume.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}


