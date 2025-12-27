import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Concrete Disposal: Dumpster Guide & Weight Limits 2025 |...',
  description: 'Concrete disposal guide: weight limits, size recommendations, clean-load rules, rebar tips, and how to reduce concrete dumpster costs.',
  keywords: 'concrete disposal dumpster, concrete dumpster rental, concrete weight limits, concrete dumpster cost, clean concrete disposal, concrete debris removal',
,
  alternates: { canonical: 'https://tntdump.com/blog/concrete-disposal-dumpster-guide' },
    openGraph: {
      title: 'Concrete Disposal: Dumpster Guide & Weight Limits 2025 |...',
      description: 'Concrete disposal guide: weight limits, size recommendations, clean-load rules, rebar tips, and how to reduce concrete dumpster costs.',
      url: 'https://tntdump.com/blog/concrete-disposal-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/concrete-disposal-dumpster-guide"} title={"Concrete Disposal: Dumpster Guide & Weight Limits 2025 |..."} description={"Concrete disposal guide: weight limits, size recommendations, clean-load rules, rebar tips, and how to reduce concrete dumpster costs."} url="https://tntdump.com/blog/concrete-disposal-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Concrete Disposal: Dumpster Guide & Weight Limits 2025 |...</h1>
            <p className="mt-4 text-lg text-gray-600">Concrete disposal guide: weight limits, size recommendations, clean-load rules, rebar tips, and how to reduce concrete dumpster costs.</p>
        </div>
      </section>
    </main>
  )
}
