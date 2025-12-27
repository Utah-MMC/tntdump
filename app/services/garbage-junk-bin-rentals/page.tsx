import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Garbage Junk Bin Rentals | TNT Dumpsters',
  description: 'Garbage and junk bin rentals for cleanouts, renovations, and job sites. Fast delivery and simple pickup. Get fast delive',
  alternates: { canonical: 'https://tntdump.com/services/garbage-junk-bin-rentals' },
,
    openGraph: {
      title: 'Garbage Junk Bin Rentals | TNT Dumpsters',
      description: 'Garbage and junk bin rentals for cleanouts, renovations, and job sites. Fast delivery and simple pickup.',
      url: 'https://tntdump.com/services/garbage-junk-bin-rentals',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function GarbageJunkBinRentalsPage() {
  return (
    <ServicePageTemplate
      title="Garbage Junk Bin Rentals"
      subtitle="Easy dumpster rentals for junk, debris, and general waste."
      description="When you need a straightforward bin for junk or garbage, TNT Dumpsters delivers quickly with clear pricing."
      heroImage="/images/dumpster1-500x500-1.jpeg"
      benefits={[
        'Simple booking and scheduling',
        'Flexible loading windows',
        'Driveway-safe placement',
        'Fast pickup when you are finished',
      ]}
      useCases={[
        'Household junk cleanouts',
        'Garage and shed cleanups',
        'Small renovation debris',
        'Move-out cleanup',
        'Warehouse clutter removal',
        'Neighborhood cleanup events',
      ]}
      faqs={[
        { question: 'What sizes are available?', answer: 'We offer 15, 20, and 30 yard bins for most jobs.' },
        { question: 'Do you allow mixed debris?', answer: 'Yes, most cleanout debris is acceptable in mixed loads.' },
        { question: 'How long is the rental?', answer: 'Standard rentals include several days; extensions are available.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
