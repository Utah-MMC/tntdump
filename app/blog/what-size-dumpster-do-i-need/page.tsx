import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'What Size Dumpster Do I Need? Complete Selection Guide 2025',
  description: 'What size dumpster do I need? Compare 10–30 yard options by project type, capacity, and price. Includes a simple decision tree.',
  keywords: 'what size dumpster do i need, dumpster size guide, how to choose dumpster size, dumpster size calculator, right dumpster size, dumpster sizing guide',
,
  alternates: { canonical: 'https://tntdump.com/blog/what-size-dumpster-do-i-need' },
    openGraph: {
      title: 'What Size Dumpster Do I Need? Complete Selection Guide 2025',
      description: 'What size dumpster do I need? Compare 10–30 yard options by project type, capacity, and price. Includes a simple decision tree.',
      url: 'https://tntdump.com/blog/what-size-dumpster-do-i-need',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/what-size-dumpster-do-i-need"} title={"What Size Dumpster Do I Need? Complete Selection Guide 2025"} description={"What size dumpster do I need? Compare 10–30 yard options by project type, capacity, and price. Includes a simple decision tree."} url="https://tntdump.com/blog/what-size-dumpster-do-i-need" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Size Dumpster Do I Need? Complete Selection Guide 2025</h1>
            <p className="mt-4 text-lg text-gray-600">What size dumpster do I need? Compare 10–30 yard options by project type, capacity, and price. Includes a simple decision tree.</p>
        </div>
      </section>
    </main>
  )
}
