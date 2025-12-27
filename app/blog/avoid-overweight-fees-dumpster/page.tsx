import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avoid Overweight Fees on Dumpster Rentals | TNT Dumpsters',
  description: 'Learn how to avoid overweight fees with smart loading, weight planning, and common heavy debris tips for dumpster rentals.',
  alternates: { canonical: 'https://tntdump.com/blog/avoid-overweight-fees-dumpster' },
  openGraph: {
    title: 'Avoid Overweight Fees on Dumpster Rentals | TNT Dumpsters',
    description: 'Learn how to avoid overweight fees with smart loading, weight planning, and common heavy debris tips for dumpster rentals.',
    url: 'https://tntdump.com/blog/avoid-overweight-fees-dumpster',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/avoid-overweight-fees-dumpster"} title={"How to Avoid Overweight Dumpster Fees | TNT Dumpsters"} description={"Avoid overweight fees with smart loading, right-size selection, and heavy material guidance so you keep disposal costs predictable."} url="https://tntdump.com/blog/avoid-overweight-fees-dumpster" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>How to Avoid Overweight Dumpster Fees</h1>
          <p>
            Overweight fees can surprise any project. The tips below help you stay within weight limits while keeping cleanup efficient.
          </p>
          <h2>Choose the Right Size</h2>
          <p>
            Bigger dumpsters can hold more volume, but heavy materials like dirt, concrete, or shingles add weight fast.
            Ask us to match size and material for your project.
          </p>
          <h2>Load Heavy Items First</h2>
          <p>
            Place heavy debris at the bottom to distribute weight evenly. Avoid piling heavy material in one corner.
          </p>
          <h2>Keep Loads Level with the Rim</h2>
          <p>
            Overfilled dumpsters are unsafe and may require material removal before pickup.
          </p>
          <h2>Separate Heavy Materials</h2>
          <p>
            Dirt, rock, and concrete should go in dedicated bins to stay within road weight limits.
          </p>
        </div>
      </section>
    </main>
  )
}
