import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Cleanout Timeline: Dumpster Rental Plan | TNT',
  description: 'A simple timeline for home cleanouts: prep, delivery, loading, and pickup steps to stay on schedule with fewer surprises.',
  alternates: { canonical: 'https://tntdump.com/blog/home-cleanout-timeline' },
  openGraph: {
    title: 'Home Cleanout Timeline: Dumpster Rental Plan | TNT',
    description: 'A simple timeline for home cleanouts: prep, delivery, loading, and pickup steps to stay on schedule with fewer surprises.',
    url: 'https://tntdump.com/blog/home-cleanout-timeline',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/home-cleanout-timeline"} title={"Home Cleanout Timeline: Dumpster Rental Plan | TNT"} description={"A simple timeline for home cleanouts: prep, delivery, loading, and pickup steps to stay on schedule with fewer surprises."} url="https://tntdump.com/blog/home-cleanout-timeline" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Home Cleanout Timeline</h1>
          <p>
            A cleanout goes faster with a plan. Use this simple timeline to keep your dumpster rental on track.
          </p>
          <h2>2-3 Days Before Delivery</h2>
          <p>
            Sort items into keep, donate, and discard piles. Measure driveway space and check for overhead clearance.
          </p>
          <h2>Delivery Day</h2>
          <p>
            Clear vehicles and mark the placement area. We will place boards to protect your driveway.
          </p>
          <h2>Loading Days</h2>
          <p>
            Load heavy items first and break down bulky items. Keep debris level with the rim.
          </p>
          <h2>Pickup Day</h2>
          <p>
            Make sure the dumpster is accessible and call for pickup when you are done.
          </p>
        </div>
      </section>
    </main>
  )
}
