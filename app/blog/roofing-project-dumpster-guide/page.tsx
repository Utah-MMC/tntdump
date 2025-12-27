import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Roofing Project Dumpster Guide: Sizing for Shingle...',
  description: 'Roofing dumpster guide: size by roof squares and layers, shingle weight basics, cost expectations, and safety tips for clean tear-offs.',
  keywords: 'roofing dumpster, roof tear off dumpster size, shingle disposal, roofing project dumpster rental, roof replacement dumpster, asphalt shingle disposal',
,
  alternates: { canonical: 'https://tntdump.com/blog/roofing-project-dumpster-guide' },
    openGraph: {
      title: 'Roofing Project Dumpster Guide: Sizing for Shingle...',
      description: 'Roofing dumpster guide: size by roof squares and layers, shingle weight basics, cost expectations, and safety tips for clean tear-offs.',
      url: 'https://tntdump.com/blog/roofing-project-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/roofing-project-dumpster-guide"} title={"Roofing Project Dumpster Guide: Sizing for Shingle..."} description={"Roofing dumpster guide: size by roof squares and layers, shingle weight basics, cost expectations, and safety tips for clean tear-offs."} url="https://tntdump.com/blog/roofing-project-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Roofing Project Dumpster Guide: Sizing for Shingle...</h1>
            <p className="mt-4 text-lg text-gray-600">Roofing dumpster guide: size by roof squares and layers, shingle weight basics, cost expectations, and safety tips for clean tear-offs.</p>
        </div>
      </section>
    </main>
  )
}
