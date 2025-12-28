import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Office Cleanout Dumpster Guide: Plan, Sort, and Clear |...',
  description: 'An office cleanout dumpster guide with sorting tips, size recommendations, and ways to keep business disruption low. Get',
  keywords: 'office cleanout dumpster, office dumpster rental, commercial cleanout dumpster, office waste disposal, business dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/office-cleanout-dumpster-guide' },
    openGraph: {
      title: 'Office Cleanout Dumpster Guide: Plan, Sort, and Clear | TNT Dumpsters',
      description: 'An office cleanout dumpster guide with sorting tips, size recommendations, and ways to keep business disruption low.',
      url: 'https://tntdump.com/blog/office-cleanout-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/office-cleanout-dumpster-guide"} title={"Office Cleanout Dumpster Guide: Size, Cost & Planning |..."} description={"Office cleanout dumpster guide: pick the right size, what fits, cost expectations, and a simple plan for fast, disruption-free cleanup."} url="https://tntdump.com/blog/office-cleanout-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Office Cleanout Dumpster Guide: Size, Cost & Planning |...</h1>
            <p className="mt-4 text-lg text-gray-600">Office cleanout dumpster guide: pick the right size, what fits, cost expectations, and a simple plan for fast, disruption-free cleanup.</p>
        </div>
      </section>
    </main>
  )
}

