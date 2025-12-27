import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Downsizing Dumpster Rentals | TNT Dumpsters',
  description: 'Downsizing dumpster rentals for estate cleanouts, moves, and decluttering. Flexible loading time and quick pickup. Get f',
  alternates: { canonical: 'https://tntdump.com/services/downsizing-dumpster-rentals' },
,
    openGraph: {
      title: 'Downsizing Dumpster Rentals | TNT Dumpsters',
      description: 'Downsizing dumpster rentals for estate cleanouts, moves, and decluttering. Flexible loading time and quick pickup.',
      url: 'https://tntdump.com/services/downsizing-dumpster-rentals',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function DownsizingDumpsterRentalsPage() {
  return (
    <ServicePageTemplate
      title="Downsizing Dumpster Rentals"
      subtitle="Declutter and downsize with a roll-off dumpster delivered when you need it."
      description="When you are downsizing or clearing out a home, a dumpster gives you the time and space to sort and load without rush."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Flexible rental windows for sorting and packing',
        'Driveway-safe placement',
        'Clear guidance on accepted items',
        'Fast pickup when you are finished',
      ]}
      useCases={[
        'Downsizing before a move',
        'Estate cleanouts',
        'Storage room cleanups',
        'Garage or attic purge',
        'Furniture and household junk removal',
        'Donation and discard sorting projects',
      ]}
      faqs={[
        { question: 'How long can I keep the dumpster?', answer: 'Standard rentals include several days; extensions are available.' },
        { question: 'What size works best?', answer: 'Most downsizing projects use 15 or 20 yard dumpsters.' },
        { question: 'Do you accept furniture?', answer: 'Yes, most household furniture is accepted in mixed loads.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
