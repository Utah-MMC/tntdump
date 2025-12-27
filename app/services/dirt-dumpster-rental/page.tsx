import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Dirt Dumpster Rental | TNT Dumpsters',
  description: 'Dirt dumpster rentals for soil, rock, and heavy debris. Dedicated containers with clear weight guidance. Get fast delive',
  alternates: { canonical: 'https://tntdump.com/services/dirt-dumpster-rental' },
,
    openGraph: {
      title: 'Dirt Dumpster Rental | TNT Dumpsters',
      description: 'Dirt dumpster rentals for soil, rock, and heavy debris. Dedicated containers with clear weight guidance.',
      url: 'https://tntdump.com/services/dirt-dumpster-rental',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function DirtDumpsterRentalPage() {
  return (
    <ServicePageTemplate
      title="Dirt Dumpster Rental"
      subtitle="Dedicated dumpsters for dirt, soil, and heavy debris."
      description="Heavy materials require special handling. We provide dedicated bins and guidance to stay within road limits."
      heroImage="/images/dumpster2-500x500-1.jpeg"
      benefits={[
        'Dedicated containers for soil and rock',
        'Clear guidance on fill height and weight limits',
        'Fast delivery for landscaping projects',
        'Reliable pickup scheduling',
      ]}
      useCases={[
        'Landscaping and grading',
        'Excavation debris',
        'Pool and patio demolition',
        'Foundation prep cleanup',
        'Rock and soil removal',
        'Yard regrade projects',
      ]}
      faqs={[
        { question: 'Can I mix dirt with other debris?', answer: 'Dirt loads should stay separate to avoid overweight fees.' },
        { question: 'What size is best for dirt?', answer: 'We will recommend the right size based on your project scope.' },
        { question: 'Do you charge by weight?', answer: 'Yes, heavy material loads are billed by ton.' },
      ]}
      primaryCta={{ label: 'Call (801) 209-9013', href: 'tel:8012099013' }}
      secondaryCta={{ label: 'Get a Quote', href: '/quote' }}
    />
  )
}
