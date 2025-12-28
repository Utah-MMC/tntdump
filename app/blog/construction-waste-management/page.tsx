import type { Metadata } from 'next'
import BlogPostSchema from '@/components/BlogPostSchema'
export const metadata: Metadata = {
  title: 'Construction Waste Management: A Practical Dumpster Plan...',
  description: 'A clear construction waste management guide with dumpster sizing, sorting tips, and ways to keep job sites clean and compliant.',
  keywords: 'construction waste management, jobsite dumpsters, recycling construction debris, construction dumpster tips',
  alternates: { canonical: 'https://tntdump.com/blog/construction-waste-management' },
    openGraph: {
      title: 'Construction Waste Management: A Practical Dumpster Plan | TNT Dumpsters',
      description: 'A clear construction waste management guide with dumpster sizing, sorting tips, and ways to keep job sites clean and compliant.',
      url: 'https://tntdump.com/blog/construction-waste-management',
      siteName: 'TNT Dumpsters',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
    }
  }

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/construction-waste-management"} title={"Construction Waste Management: Best Practices | TNT..."} description={"Construction waste management tips: sort debris, recycle, prevent contamination, and cut disposal costs on residential and commercial jobs."} url="https://tntdump.com/blog/construction-waste-management" />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Construction Waste Management: Best Practices | TNT...</h1>
            <p className="mt-4 text-lg text-gray-600">Construction waste management tips: sort debris, recycle, prevent contamination, and cut disposal costs on residential and commercial jobs.</p>
        </div>
      </section>
    </main>
  )
}

