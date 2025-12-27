import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spring Cleanout Dumpster Plan: A Fresh Start Guide | TNT Dumpsters',
  description: 'A spring cleanout dumpster plan with room by room steps, size guidance, and tips to keep the cleanup fast and organized.',
  alternates: { canonical: 'https://tntdump.com/blog/spring-cleanout-dumpster-plan' },
  openGraph: {
    title: 'Spring Cleanout Dumpster Plan: A Fresh Start Guide | TNT Dumpsters',
    description: 'A spring cleanout dumpster plan with room by room steps, size guidance, and tips to keep the cleanup fast and organized.',
    url: 'https://tntdump.com/blog/spring-cleanout-dumpster-plan',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/spring-cleanout-dumpster-plan"} title={"Spring Cleanout Dumpster Plan | TNT Dumpsters"} description={"A simple spring cleanout plan with dumpster sizing, loading tips, and pickup scheduling to keep your project moving without delays."} url="https://tntdump.com/blog/spring-cleanout-dumpster-plan" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Spring Cleanout Dumpster Plan</h1>
          <p>
            Spring is the busiest cleanout season. A quick plan helps you stay on schedule.
          </p>
          <h2>Pick a Size</h2>
          <p>
            Most spring cleanouts use 15 or 20 yard dumpsters. Large projects may need 30 yards.
          </p>
          <h2>Load in Zones</h2>
          <p>
            Work room by room to keep materials sorted and avoid overfilling early.
          </p>
          <h2>Schedule Pickup</h2>
          <p>
            Call when you are finished so the dumpster is removed quickly and your driveway stays clear.
          </p>
        </div>
      </section>
    </main>
  )
}
