import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Moving Cleanout Dumpster Guide: Pack, Purge, and Save | TNT Dumpsters',
  description: 'A moving cleanout dumpster guide with sorting tips, size planning, and ways to reduce clutter before moving day.',
  keywords: 'moving cleanout dumpster, moving dumpster rental, relocation dumpster, moving waste disposal, moving cleanup dumpster, utah dumpster rental',
,
  alternates: { canonical: 'https://tntdump.com/blog/moving-cleanout-dumpster-guide' },
    openGraph: {
      title: 'Moving Cleanout Dumpster Guide: Pack, Purge, and Save | TNT Dumpsters',
      description: 'A moving cleanout dumpster guide with sorting tips, size planning, and ways to reduce clutter before moving day.',
      url: 'https://tntdump.com/blog/moving-cleanout-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/moving-cleanout-dumpster-guide"} title={"Moving Cleanout Dumpster Guide: Size, Cost & Tips | TNT..."} description={"Moving cleanout dumpster guide: choose a size, what fits, cost expectations, and tips to declutter fast before moving day."} url="https://tntdump.com/blog/moving-cleanout-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Moving Cleanout Dumpster Guide: Size, Cost & Tips | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Moving cleanout dumpster guide: choose a size, what fits, cost expectations, and tips to declutter fast before moving day.</p>
        </div>
      </section>
    </main>
  )
}
