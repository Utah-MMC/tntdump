import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Home Renovation Dumpster Guide: Plan, Size, and Save | TNT Dumpsters',
  description: 'A home renovation dumpster guide with size planning, loading tips, and cost control advice to keep your remodel on track.',
  keywords: 'home renovation dumpster, whole house renovation dumpster, renovation waste disposal, residential renovation dumpster, utah dumpster rental',
  alternates: { canonical: 'https://tntdump.com/blog/home-renovation-dumpster-guide' },
    openGraph: {
      title: 'Home Renovation Dumpster Guide: Plan, Size, and Save | TNT Dumpsters',
      description: 'A home renovation dumpster guide with size planning, loading tips, and cost control advice to keep your remodel on track.',
      url: 'https://tntdump.com/blog/home-renovation-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/home-renovation-dumpster-guide"} title={"Home Renovation Dumpster Guide: Complete Planning Guide..."} description={"Home renovation dumpster guide: pick the right size, plan placement, estimate volume, and avoid overage fees on whole-house projects."} url="https://tntdump.com/blog/home-renovation-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Home Renovation Dumpster Guide: Complete Planning Guide...</h1>
            <p className="mt-4 text-lg text-gray-600">Home renovation dumpster guide: pick the right size, plan placement, estimate volume, and avoid overage fees on whole-house projects.</p>
        </div>
      </section>
    </main>
  )
}

