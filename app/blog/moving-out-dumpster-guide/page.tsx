import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Moving Out? Complete Dumpster Rental Guide for...',
  description: 'Moving out dumpster guide: pick a size for apartments vs houses, what to toss, timeline tips, and HOA-friendly placement guidance.',
  keywords: 'moving out dumpster, moving dumpster rental, relocation dumpster, moving junk removal, apartment moving dumpster, house moving cleanout',
  alternates: { canonical: 'https://tntdump.com/blog/moving-out-dumpster-guide' },
    openGraph: {
      title: 'Moving Out? Complete Dumpster Rental Guide for...',
      description: 'Moving out dumpster guide: pick a size for apartments vs houses, what to toss, timeline tips, and HOA-friendly placement guidance.',
      url: 'https://tntdump.com/blog/moving-out-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/moving-out-dumpster-guide"} title={"Moving Out? Complete Dumpster Rental Guide for..."} description={"Moving out dumpster guide: pick a size for apartments vs houses, what to toss, timeline tips, and HOA-friendly placement guidance."} url="https://tntdump.com/blog/moving-out-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Moving Out? Complete Dumpster Rental Guide for...</h1>
            <p className="mt-4 text-lg text-gray-600">Moving out dumpster guide: pick a size for apartments vs houses, what to toss, timeline tips, and HOA-friendly placement guidance.</p>
        </div>
      </section>
    </main>
  )
}

