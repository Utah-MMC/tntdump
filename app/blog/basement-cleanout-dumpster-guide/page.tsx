import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Basement Cleanout: How to Choose the Right Dumpster Size...',
  description: 'Basement cleanout dumpster guide: best sizes, what fits, access tips, sorting plan, and cost expectations for fast, stress-free cleanup.',
  keywords: 'basement cleanout dumpster, basement junk removal dumpster, basement renovation dumpster, basement debris disposal, dumpster rental for basement cleanout',
,
  alternates: { canonical: 'https://tntdump.com/blog/basement-cleanout-dumpster-guide' },
    openGraph: {
      title: 'Basement Cleanout: How to Choose the Right Dumpster Size...',
      description: 'Basement cleanout dumpster guide: best sizes, what fits, access tips, sorting plan, and cost expectations for fast, stress-free cleanup.',
      url: 'https://tntdump.com/blog/basement-cleanout-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/basement-cleanout-dumpster-guide"} title={"Basement Cleanout: How to Choose the Right Dumpster Size..."} description={"Basement cleanout dumpster guide: best sizes, what fits, access tips, sorting plan, and cost expectations for fast, stress-free cleanup."} url="https://tntdump.com/blog/basement-cleanout-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Basement Cleanout: How to Choose the Right Dumpster Size...</h1>
            <p className="mt-4 text-lg text-gray-600">Basement cleanout dumpster guide: best sizes, what fits, access tips, sorting plan, and cost expectations for fast, stress-free cleanup.</p>
        </div>
      </section>
    </main>
  )
}
