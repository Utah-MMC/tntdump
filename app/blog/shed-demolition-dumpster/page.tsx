import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shed Demolition Dumpster Guide | TNT Dumpsters',
  description: 'Shed demolition dumpster tips: sizing, loading, and disposal steps for backyard sheds to keep cleanup quick and safe from start to finish.',
  alternates: { canonical: 'https://tntdump.com/blog/shed-demolition-dumpster' },
  openGraph: {
    title: 'Shed Demolition Dumpster Guide | TNT Dumpsters',
    description: 'Shed demolition dumpster tips: sizing, loading, and disposal steps for backyard sheds to keep cleanup quick and safe from start to finish.',
    url: 'https://tntdump.com/blog/shed-demolition-dumpster',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/shed-demolition-dumpster"} title={"Shed Demolition Dumpster Guide | TNT Dumpsters"} description={"Shed demolition dumpster tips: sizing, loading, and disposal steps for backyard sheds to keep cleanup quick and safe from start to finish."} url="https://tntdump.com/blog/shed-demolition-dumpster" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Shed Demolition Dumpster Guide</h1>
          <p>
            Demolishing a shed creates wood, roofing, and hardware debris. A dumpster keeps the site clean and safe.
          </p>
          <h2>Estimate Debris Volume</h2>
          <p>
            Small sheds often fit in a 10 or 15 yard dumpster. Larger sheds may need 20 yards.
          </p>
          <h2>Remove Hazardous Items</h2>
          <p>
            Separate chemicals, paint, and fuel containers before loading debris.
          </p>
          <h2>Load Safely</h2>
          <p>
            Break down panels and stack flat to maximize space.
          </p>
        </div>
      </section>
    </main>
  )
}
