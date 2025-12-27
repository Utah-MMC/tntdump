import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estate Cleanout Steps | TNT Dumpsters',
  description: 'A step-by-step estate cleanout plan with dumpster sizing, sorting, and pickup tips to keep the process organized and calm.',
  alternates: { canonical: 'https://tntdump.com/blog/estate-cleanout-steps' },
  openGraph: {
    title: 'Estate Cleanout Steps | TNT Dumpsters',
    description: 'A step-by-step estate cleanout plan with dumpster sizing, sorting, and pickup tips to keep the process organized and calm.',
    url: 'https://tntdump.com/blog/estate-cleanout-steps',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/estate-cleanout-steps"} title={"Estate Cleanout Steps | TNT Dumpsters"} description={"A step-by-step estate cleanout plan with dumpster sizing, sorting, and pickup tips to keep the process organized and calm."} url="https://tntdump.com/blog/estate-cleanout-steps" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Estate Cleanout Steps</h1>
          <p>
            Estate cleanouts can be overwhelming. These steps keep the process organized and efficient.
          </p>
          <h2>1. Sort by Category</h2>
          <p>
            Separate items to keep, donate, recycle, and dispose. This reduces dumpster waste and costs.
          </p>
          <h2>2. Choose the Right Size</h2>
          <p>
            Estates often require 20 or 30 yard dumpsters depending on furniture and debris volume.
          </p>
          <h2>3. Load Safely</h2>
          <p>
            Load heavy items first and keep debris level with the rim.
          </p>
          <h2>4. Schedule Pickup</h2>
          <p>
            Call for pickup when finished so the property is ready for next steps.
          </p>
        </div>
      </section>
    </main>
  )
}
