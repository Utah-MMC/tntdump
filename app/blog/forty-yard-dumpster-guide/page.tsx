import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '40 Yard Dumpster Guide | TNT Dumpsters',
  description: 'A quick guide to 40 yard dumpsters: capacity, best projects, and placement tips to avoid oversized loads and access issues.',
  alternates: { canonical: 'https://tntdump.com/blog/forty-yard-dumpster-guide' },
  openGraph: {
    title: '40 Yard Dumpster Guide | TNT Dumpsters',
    description: 'A quick guide to 40 yard dumpsters: capacity, best projects, and placement tips to avoid oversized loads and access issues.',
    url: 'https://tntdump.com/blog/forty-yard-dumpster-guide',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/forty-yard-dumpster-guide"} title={"40 Yard Dumpster Guide | TNT Dumpsters"} description={"A quick guide to 40 yard dumpsters: capacity, best projects, and placement tips to avoid oversized loads and access issues."} url="https://tntdump.com/blog/forty-yard-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>40 Yard Dumpster Guide</h1>
          <p>
            A 40 yard dumpster is the highest-capacity roll-off. It is best for major construction, demolition, and commercial cleanouts.
          </p>
          <h2>Typical Capacity</h2>
          <p>
            Forty yard dumpsters hold about 12-16 pickup truck loads of debris, depending on material type.
          </p>
          <h2>Best Project Types</h2>
          <p>
            Large remodels, commercial tear-outs, and bulk debris cleanup are ideal for 40 yard bins.
          </p>
          <h2>Placement Considerations</h2>
          <p>
            These dumpsters require more space and clearance. Send photos if access is tight.
          </p>
        </div>
      </section>
    </main>
  )
}
