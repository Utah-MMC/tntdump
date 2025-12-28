import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Construction Dumpster Size Guide: Plan the Right Fit |...',
  description: 'A construction dumpster size guide with project examples, debris planning, and tips to avoid overage fees on job sites. ',
  keywords: 'construction dumpster size, construction waste dumpster, contractor dumpster rental, construction debris disposal, commercial dumpster rental, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/construction-dumpster-size-guide' },
    openGraph: {
      title: 'Construction Dumpster Size Guide: Plan the Right Fit | TNT Dumpsters',
      description: 'A construction dumpster size guide with project examples, debris planning, and tips to avoid overage fees on job sites.',
      url: 'https://tntdump.com/blog/construction-dumpster-size-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/construction-dumpster-size-guide"} title={"Construction Dumpster Size Guide: Choosing the Right..."} description={"Construction dumpster size guide: pick the right container, understand weight limits, estimate costs, and keep job sites running smoothly."} url="https://tntdump.com/blog/construction-dumpster-size-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Construction Dumpster Size Guide: Choosing the Right...</h1>
            <p className="mt-4 text-lg text-gray-600">Construction dumpster size guide: pick the right container, understand weight limits, estimate costs, and keep job sites running smoothly.</p>
        </div>
      </section>
    </main>
  )
}

