import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storm Cleanup Dumpster Guide | TNT Dumpsters',
  description: 'A quick guide to storm cleanup dumpsters: debris types, loading tips, and pickup timing so cleanup stays safe and efficient.',
  alternates: { canonical: 'https://tntdump.com/blog/storm-cleanup-dumpster-guide' },
  openGraph: {
    title: 'Storm Cleanup Dumpster Guide | TNT Dumpsters',
    description: 'A quick guide to storm cleanup dumpsters: debris types, loading tips, and pickup timing so cleanup stays safe and efficient.',
    url: 'https://tntdump.com/blog/storm-cleanup-dumpster-guide',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/storm-cleanup-dumpster-guide"} title={"Storm Cleanup Dumpster Guide | TNT Dumpsters"} description={"A quick guide to storm cleanup dumpsters: debris types, loading tips, and pickup timing so cleanup stays safe and efficient."} url="https://tntdump.com/blog/storm-cleanup-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Storm Cleanup Dumpster Guide</h1>
          <p>
            Storms create bulky debris fast. A roll-off dumpster keeps cleanup efficient and helps you stay safe.
          </p>
          <h2>Common Storm Debris</h2>
          <p>
            Branches, damaged fencing, roofing material, and wet household items are typical after storms.
          </p>
          <h2>Load Strategically</h2>
          <p>
            Place heavy debris at the bottom and keep loads level with the rim. Avoid overfilling.
          </p>
          <h2>Plan Pickup Timing</h2>
          <p>
            Call for pickup once the bulk of debris is loaded. We can schedule same-day or next-day pickups when routes allow.
          </p>
          <h2>Ask About Restricted Items</h2>
          <p>
            Hazardous materials and liquids require special handling. Call us if you are unsure.
          </p>
        </div>
      </section>
    </main>
  )
}
