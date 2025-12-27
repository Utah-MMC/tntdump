import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Kitchen Remodel Dumpster Guide: Size, Cost, and Tips | TNT Dumpsters',
  description: 'A kitchen remodel dumpster guide with size recommendations, loading tips, and ways to keep demo debris under control.',
  keywords: 'kitchen remodel dumpster, kitchen renovation dumpster size, kitchen demo dumpster, kitchen remodel waste, dumpster rental for kitchen remodel, kitchen renovation waste disposal',
,
  alternates: { canonical: 'https://tntdump.com/blog/kitchen-remodel-dumpster-guide' },
    openGraph: {
      title: 'Kitchen Remodel Dumpster Guide: Size, Cost, and Tips | TNT Dumpsters',
      description: 'A kitchen remodel dumpster guide with size recommendations, loading tips, and ways to keep demo debris under control.',
      url: 'https://tntdump.com/blog/kitchen-remodel-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/kitchen-remodel-dumpster-guide"} title={"Kitchen Remodel Dumpster: Size Guide, Costs & What Fits..."} description={"Kitchen remodel dumpster guide: recommended sizes, what fits, weight pitfalls, and tips to keep your renovation cleanup on budget."} url="https://tntdump.com/blog/kitchen-remodel-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kitchen Remodel Dumpster: Size Guide, Costs & What Fits...</h1>
            <p className="mt-4 text-lg text-gray-600">Kitchen remodel dumpster guide: recommended sizes, what fits, weight pitfalls, and tips to keep your renovation cleanup on budget.</p>
        </div>
      </section>
    </main>
  )
}
