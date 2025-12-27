import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Bathroom Renovation Dumpster: Size & Cost Guide 2025 |...',
  description: 'Bathroom renovation dumpster guide: best sizes, tile and fixture weight tips, cost expectations, and a simple timeline for demo and cleanup.',
  keywords: 'bathroom renovation dumpster, bathroom remodel dumpster size, bathroom demo dumpster, bathroom renovation waste disposal, dumpster rental for bathroom remodel',
,
  alternates: { canonical: 'https://tntdump.com/blog/bathroom-renovation-dumpster-guide' },
    openGraph: {
      title: 'Bathroom Renovation Dumpster: Size & Cost Guide 2025 |...',
      description: 'Bathroom renovation dumpster guide: best sizes, tile and fixture weight tips, cost expectations, and a simple timeline for demo and cleanup.',
      url: 'https://tntdump.com/blog/bathroom-renovation-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/bathroom-renovation-dumpster-guide"} title={"Bathroom Renovation Dumpster: Size & Cost Guide 2025 |..."} description={"Bathroom renovation dumpster guide: best sizes, tile and fixture weight tips, cost expectations, and a simple timeline for demo and cleanup."} url="https://tntdump.com/blog/bathroom-renovation-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bathroom Renovation Dumpster: Size & Cost Guide 2025 |...</h1>
            <p className="mt-4 text-lg text-gray-600">Bathroom renovation dumpster guide: best sizes, tile and fixture weight tips, cost expectations, and a simple timeline for demo and cleanup.</p>
        </div>
      </section>
    </main>
  )
}
