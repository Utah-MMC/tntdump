import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Garage Cleanout Checklist: Dumpster Plan and Tips | TNT Dumpsters',
  description: 'A practical garage cleanout checklist with sorting steps, dumpster sizing advice, and tips to keep the job moving.',
  alternates: { canonical: 'https://tntdump.com/blog/garage-cleanout-checklist' },
  openGraph: {
    title: 'Garage Cleanout Checklist: Dumpster Plan and Tips | TNT Dumpsters',
    description: 'A practical garage cleanout checklist with sorting steps, dumpster sizing advice, and tips to keep the job moving.',
    url: 'https://tntdump.com/blog/garage-cleanout-checklist',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/garage-cleanout-checklist"} title={"Garage Cleanout Checklist | TNT Dumpsters"} description={"A step-by-step checklist for garage cleanouts, including sorting, loading, and dumpster sizing tips to stay on schedule."} url="https://tntdump.com/blog/garage-cleanout-checklist" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Garage Cleanout Checklist</h1>
          <p>
            A simple checklist keeps garage cleanouts fast and organized.
          </p>
          <h2>1. Sort Items</h2>
          <p>
            Separate items into keep, donate, recycle, and trash piles.
          </p>
          <h2>2. Pick a Dumpster Size</h2>
          <p>
            Most garage cleanouts fit in a 10 or 15 yard dumpster. Large garages may need 20 yards.
          </p>
          <h2>3. Load Smart</h2>
          <p>
            Break down bulky items and load heavy debris first to keep weight balanced.
          </p>
          <h2>4. Schedule Pickup</h2>
          <p>
            Call when you are finished so we can remove the dumpster quickly.
          </p>
        </div>
      </section>
    </main>
  )
}
