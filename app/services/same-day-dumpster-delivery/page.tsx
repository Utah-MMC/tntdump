import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Same Day Dumpster Delivery | TNT Dumpsters',
  description: 'Same-day dumpster delivery for urgent cleanouts and job sites across Utah. Call early for availability. Get fast deliver',
  alternates: { canonical: 'https://tntdump.com/services/same-day-dumpster-delivery' },
    openGraph: {
      title: 'Same Day Dumpster Delivery | TNT Dumpsters',
      description: 'Same-day dumpster delivery for urgent cleanouts and job sites across Utah. Call early for availability.',
      url: 'https://tntdump.com/services/same-day-dumpster-delivery',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function SameDayDumpsterDeliveryPage() {
  return (
    <ServicePageTemplate
      title="Same Day Dumpster Delivery"
      subtitle="Fast delivery when your project cannot wait."
      description="When you need a dumpster quickly, we prioritize same-day delivery based on route availability."
      heroImage="/images/dumpster3-500x500-1.jpeg"
      benefits={[
        'Priority scheduling for urgent needs',
        'Clear cutoff times for same-day delivery',
        'Fast placement and pickup coordination',
        'Support for residential and commercial projects',
      ]}
      useCases={[
        'Last-minute cleanouts',
        'Urgent renovation debris removal',
        'Construction schedule changes',
        'Storm cleanup response',
        'Project deadline support',
        'Event or festival cleanups',
      ]}
      faqs={[
        { question: 'What time should I call?', answer: 'Call early in the day for best same-day availability.' },
        { question: 'Which sizes are available same day?', answer: 'Availability varies, but we prioritize 15, 20, and 30 yard dumpsters.' },
        { question: 'Is there an extra fee?', answer: 'Same-day delivery may include a small rush fee depending on routing.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}

