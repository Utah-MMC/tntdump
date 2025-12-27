import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '10 Yard Dumpster Uses | TNT Dumpsters',
  description: 'Common uses for 10 yard dumpsters: small cleanouts, light demo, and tight driveways where space and weight matter most every time.',
  alternates: { canonical: 'https://tntdump.com/blog/ten-yard-dumpster-uses' },
  openGraph: {
    title: '10 Yard Dumpster Uses | TNT Dumpsters',
    description: 'Common uses for 10 yard dumpsters: small cleanouts, light demo, and tight driveways where space and weight matter most every time.',
    url: 'https://tntdump.com/blog/ten-yard-dumpster-uses',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/ten-yard-dumpster-uses"} title={"10 Yard Dumpster Uses | TNT Dumpsters"} description={"Common uses for 10 yard dumpsters: small cleanouts, light demo, and tight driveways where space and weight matter most every time."} url="https://tntdump.com/blog/ten-yard-dumpster-uses" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>10 Yard Dumpster Uses</h1>
          <p>
            Ten yard dumpsters are compact and easy to place. Here are common projects where they work best.
          </p>
          <h2>Small Cleanouts</h2>
          <p>
            Garage, attic, and small storage cleanouts fit well in a 10 yard dumpster.
          </p>
          <h2>Light Demolition</h2>
          <p>
            Small deck tear-outs and minor remodels are good candidates for 10 yard bins.
          </p>
          <h2>Tight Driveways</h2>
          <p>
            The compact footprint makes a 10 yard dumpster ideal for narrow driveways or smaller lots.
          </p>
        </div>
      </section>
    </main>
  )
}
