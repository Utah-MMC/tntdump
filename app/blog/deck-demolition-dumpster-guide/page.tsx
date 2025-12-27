import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Deck Demolition Dumpster Guide: Size, Tips, and Safety | TNT Dumpsters',
  description: 'A deck demolition dumpster guide with size recommendations, loading tips, and safety advice for clean, efficient tear-outs.',
  keywords: 'deck demolition dumpster, deck removal dumpster, deck tear-down dumpster, wood disposal dumpster, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/blog/deck-demolition-dumpster-guide' },
    openGraph: {
      title: 'Deck Demolition Dumpster Guide: Size, Tips, and Safety | TNT Dumpsters',
      description: 'A deck demolition dumpster guide with size recommendations, loading tips, and safety advice for clean, efficient tear-outs.',
      url: 'https://tntdump.com/blog/deck-demolition-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/deck-demolition-dumpster-guide"} title={"Deck Demolition Dumpster Guide: Size, Cost & Disposal |..."} description={"Deck demolition dumpster guide: recommended sizes, what fits, weight tips for wood and composite, and ways to keep disposal costs down."} url="https://tntdump.com/blog/deck-demolition-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Deck Demolition Dumpster Guide: Size, Cost & Disposal |...</h1>
            <p className="mt-4 text-lg text-gray-600">Deck demolition dumpster guide: recommended sizes, what fits, weight tips for wood and composite, and ways to keep disposal costs down.</p>
        </div>
      </section>
    </main>
  )
}
