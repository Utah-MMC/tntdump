import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Cleanout Dumpster Tips: Size, Safety, and Speed | TNT Dumpsters',
  description: 'Practical basement cleanout dumpster tips with size guidance, loading order, and ways to keep the job safe and efficient.',
  alternates: { canonical: 'https://tntdump.com/blog/basement-cleanout-dumpster-tips' },
  openGraph: {
    title: 'Basement Cleanout Dumpster Tips: Size, Safety, and Speed | TNT Dumpsters',
    description: 'Practical basement cleanout dumpster tips with size guidance, loading order, and ways to keep the job safe and efficient.',
    url: 'https://tntdump.com/blog/basement-cleanout-dumpster-tips',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/basement-cleanout-dumpster-tips"} title={"Basement Cleanout Dumpster Tips | TNT Dumpsters"} description={"Basement cleanout tips: moisture, heavy items, and choosing the right dumpster size so your cleanup stays safe and efficient."} url="https://tntdump.com/blog/basement-cleanout-dumpster-tips" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Basement Cleanout Dumpster Tips</h1>
          <p>
            Basements often contain heavy or damp items. Plan for weight and safe handling.
          </p>
          <h2>Plan for Moisture</h2>
          <p>
            Wet carpet and drywall weigh more. Ask about weight limits if water damage is involved.
          </p>
          <h2>Use the Right Size</h2>
          <p>
            Most basement cleanouts fit in a 15 or 20 yard dumpster depending on furniture and debris volume.
          </p>
          <h2>Protect Pathways</h2>
          <p>
            Clear stairs and hallways so items move safely to the dumpster.
          </p>
        </div>
      </section>
    </main>
  )
}
