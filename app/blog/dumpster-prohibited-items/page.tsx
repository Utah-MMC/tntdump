import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Dumpster Prohibited Items: What You Cannot Throw Away |...',
  description: 'A clear list of dumpster prohibited items with reasons, safe alternatives, and tips to avoid fees or rejected loads. Get',
  keywords: 'dumpster prohibited items, what cannot go in dumpster, hazardous waste disposal, dumpster rules',
  alternates: { canonical: 'https://tntdump.com/blog/dumpster-prohibited-items' },
    openGraph: {
      title: 'Dumpster Prohibited Items: What You Cannot Throw Away | TNT Dumpsters',
      description: 'A clear list of dumpster prohibited items with reasons, safe alternatives, and tips to avoid fees or rejected loads.',
      url: 'https://tntdump.com/blog/dumpster-prohibited-items',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/dumpster-prohibited-items"} title={"What Can and Cannot Go in a Dumpster | TNT Dumpsters"} description={"Understand prohibited items in dumpster rentals and the right way to dispose of household chemicals, electronics, tires, and other restricted materials."} url="https://tntdump.com/blog/dumpster-prohibited-items" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Can and Cannot Go in a Dumpster</h1>
            <p className="mt-4 text-lg text-gray-600">Understand prohibited items in dumpster rentals and the right way to dispose of household chemicals, electronics, tires, and other restricted materials.</p>
        </div>
      </section>
    </main>
  )
}

