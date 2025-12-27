import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fence Removal Dumpster Guide | TNT Dumpsters',
  description: 'Fence removal dumpster guide: sizing, loading tips, and cleanup steps for wood or metal fencing with fewer trips to the dump.',
  alternates: { canonical: 'https://tntdump.com/blog/fence-removal-dumpster-guide' },
  openGraph: {
    title: 'Fence Removal Dumpster Guide | TNT Dumpsters',
    description: 'Fence removal dumpster guide: sizing, loading tips, and cleanup steps for wood or metal fencing with fewer trips to the dump.',
    url: 'https://tntdump.com/blog/fence-removal-dumpster-guide',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/fence-removal-dumpster-guide"} title={"Fence Removal Dumpster Guide | TNT Dumpsters"} description={"Fence removal dumpster guide: sizing, loading tips, and cleanup steps for wood or metal fencing with fewer trips to the dump."} url="https://tntdump.com/blog/fence-removal-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Fence Removal Dumpster Guide</h1>
          <p>
            Fence removal creates bulky debris fast. A dumpster keeps cleanup organized and efficient.
          </p>
          <h2>Choose the Right Size</h2>
          <p>
            Most fence removal projects use 15 or 20 yard dumpsters depending on fence length and material.
          </p>
          <h2>Break Down Panels</h2>
          <p>
            Cut panels and posts into shorter lengths to maximize space.
          </p>
          <h2>Separate Metal When Possible</h2>
          <p>
            If you have a metal fence, consider separating it for recycling where available.
          </p>
        </div>
      </section>
    </main>
  )
}
