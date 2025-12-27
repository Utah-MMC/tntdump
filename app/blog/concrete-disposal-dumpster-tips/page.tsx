import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Concrete Disposal Dumpster Tips | TNT Dumpsters',
  description: 'Concrete disposal tips: weight limits, dedicated bins, and safe loading practices to avoid overages and delays on heavy debris jobs.',
  alternates: { canonical: 'https://tntdump.com/blog/concrete-disposal-dumpster-tips' },
  openGraph: {
    title: 'Concrete Disposal Dumpster Tips | TNT Dumpsters',
    description: 'Concrete disposal tips: weight limits, dedicated bins, and safe loading practices to avoid overages and delays on heavy debris jobs.',
    url: 'https://tntdump.com/blog/concrete-disposal-dumpster-tips',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/concrete-disposal-dumpster-tips"} title={"Concrete Disposal Dumpster Tips | TNT Dumpsters"} description={"Concrete disposal tips: weight limits, dedicated bins, and safe loading practices to avoid overages and delays on heavy debris jobs."} url="https://tntdump.com/blog/concrete-disposal-dumpster-tips" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Concrete Disposal Dumpster Tips</h1>
          <p>
            Concrete is heavy. Use these tips to stay within weight limits and avoid extra fees.
          </p>
          <h2>Use Dedicated Bins</h2>
          <p>
            Concrete and brick should go in dedicated dumpsters to stay within road weight limits.
          </p>
          <h2>Keep Loads Low</h2>
          <p>
            Heavy materials should be loaded below the rim to prevent overweight hauls.
          </p>
          <h2>Ask About Size</h2>
          <p>
            We will recommend the right size based on your demo scope and debris volume.
          </p>
        </div>
      </section>
    </main>
  )
}
