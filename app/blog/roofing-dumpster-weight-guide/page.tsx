import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Weight Guide: Avoid Heavy Load Fees | TNT Dumpsters',
  description: 'A roofing dumpster weight guide with shingle weight tips, size planning, and ways to avoid overage fees on tear offs.',
  alternates: { canonical: 'https://tntdump.com/blog/roofing-dumpster-weight-guide' },
  openGraph: {
    title: 'Roofing Dumpster Weight Guide: Avoid Heavy Load Fees | TNT Dumpsters',
    description: 'A roofing dumpster weight guide with shingle weight tips, size planning, and ways to avoid overage fees on tear offs.',
    url: 'https://tntdump.com/blog/roofing-dumpster-weight-guide',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/roofing-dumpster-weight-guide"} title={"Roofing Dumpster Weight Guide | TNT Dumpsters"} description={"Estimate roofing debris weight and choose the right dumpster size for shingles and tear-offs with less risk of overages."} url="https://tntdump.com/blog/roofing-dumpster-weight-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Roofing Dumpster Weight Guide</h1>
          <p>
            Roofing debris adds weight fast. Use this guide to pick the right dumpster size and avoid overweight fees.
          </p>
          <h2>Estimate Shingle Weight</h2>
          <p>
            A single square (100 sq ft) of asphalt shingles weighs roughly 200-300 lbs depending on layers and material.
          </p>
          <h2>Match Size to Squares</h2>
          <p>
            A 15 yard dumpster fits about 15-20 squares of single-layer shingles. For heavier loads, ask about dedicated bins.
          </p>
          <h2>Plan for Layers</h2>
          <p>
            Double-layer roofs weigh much more. Let us know if you have multiple layers so we can recommend the right size.
          </p>
        </div>
      </section>
    </main>
  )
}
