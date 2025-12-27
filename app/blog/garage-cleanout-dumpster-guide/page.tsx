import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Garage Cleanout Dumpster Size Guide: What You Need to...',
  description: 'Garage cleanout dumpster guide: size by garage type, what fits, hazmat warnings, cost expectations, and tips to finish faster.',
  keywords: 'garage cleanout dumpster, garage cleanout dumpster size, garage junk removal, garage renovation dumpster, garage debris disposal',
  alternates: { canonical: 'https://tntdump.com/blog/garage-cleanout-dumpster-guide' },
    openGraph: {
      title: 'Garage Cleanout Dumpster Size Guide: What You Need to...',
      description: 'Garage cleanout dumpster guide: size by garage type, what fits, hazmat warnings, cost expectations, and tips to finish faster.',
      url: 'https://tntdump.com/blog/garage-cleanout-dumpster-guide',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/garage-cleanout-dumpster-guide"} title={"Garage Cleanout Dumpster Size Guide: What You Need to..."} description={"Garage cleanout dumpster guide: size by garage type, what fits, hazmat warnings, cost expectations, and tips to finish faster."} url="https://tntdump.com/blog/garage-cleanout-dumpster-guide" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Garage Cleanout Dumpster Size Guide: What You Need to...</h1>
            <p className="mt-4 text-lg text-gray-600">Garage cleanout dumpster guide: size by garage type, what fits, hazmat warnings, cost expectations, and tips to finish faster.</p>
        </div>
      </section>
    </main>
  )
}

