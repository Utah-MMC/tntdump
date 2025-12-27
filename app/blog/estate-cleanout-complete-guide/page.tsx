import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Estate Cleanout Complete Guide: A Calm, Step by Step Plan | TNT Dumpsters',
  description: 'A complete estate cleanout guide with planning steps, sorting tips, and dumpster advice to keep the process manageable.',
  keywords: 'estate cleanout guide, estate dumpster, home cleanout tips, bereavement cleanout help',
,
  alternates: { canonical: 'https://tntdump.com/blog/estate-cleanout-complete-guide' },
    openGraph: {
      title: 'Estate Cleanout Complete Guide: A Calm, Step by Step Plan | TNT Dumpsters',
      description: 'A complete estate cleanout guide with planning steps, sorting tips, and dumpster advice to keep the process manageable.',
      url: 'https://tntdump.com/blog/estate-cleanout-complete-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/estate-cleanout-complete-guide"} title={"Estate Cleanout: Complete Family Guide (2025) | TNT..."} description={"Estate cleanout step-by-step: plan, sort, donate, sell, and dispose with less stress. Includes a checklist and timeline for families."} url="https://tntdump.com/blog/estate-cleanout-complete-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Estate Cleanout: Complete Family Guide (2025) | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Estate cleanout step-by-step: plan, sort, donate, sell, and dispose with less stress. Includes a checklist and timeline for families.</p>
        </div>
      </section>
    </main>
  )
}
