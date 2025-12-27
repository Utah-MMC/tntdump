import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping Debris Dumpster Guide | TNT Dumpsters',
  description: 'Landscaping debris dumpster tips for brush, soil, and yard waste cleanup to keep heavy material loads under control and within limits.',
  alternates: { canonical: 'https://tntdump.com/blog/landscaping-debris-dumpster' },
  openGraph: {
    title: 'Landscaping Debris Dumpster Guide | TNT Dumpsters',
    description: 'Landscaping debris dumpster tips for brush, soil, and yard waste cleanup to keep heavy material loads under control and within limits.',
    url: 'https://tntdump.com/blog/landscaping-debris-dumpster',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/landscaping-debris-dumpster"} title={"Landscaping Debris Dumpster Guide | TNT Dumpsters"} description={"Landscaping debris dumpster tips for brush, soil, and yard waste cleanup to keep heavy material loads under control and within limits."} url="https://tntdump.com/blog/landscaping-debris-dumpster" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Landscaping Debris Dumpster Guide</h1>
          <p>
            Landscaping projects generate brush, soil, and debris. A dumpster keeps cleanup efficient and organized.
          </p>
          <h2>Separate Heavy Materials</h2>
          <p>
            Dirt and rock should go in dedicated dumpsters to avoid overweight fees.
          </p>
          <h2>Bundle Brush and Branches</h2>
          <p>
            Cut and bundle branches to save space and load safely.
          </p>
          <h2>Plan for Pickup</h2>
          <p>
            Call for pickup when the project is complete to keep your property clear.
          </p>
        </div>
      </section>
    </main>
  )
}
