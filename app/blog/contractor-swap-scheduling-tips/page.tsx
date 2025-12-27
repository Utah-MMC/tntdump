import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contractor Swap Scheduling Tips for Roll Off Dumpsters | TNT Dumpsters',
  description: 'Smart contractor swap scheduling tips to reduce downtime, keep job sites clean, and avoid delays during big projects.',
  alternates: { canonical: 'https://tntdump.com/blog/contractor-swap-scheduling-tips' },
  openGraph: {
    title: 'Contractor Swap Scheduling Tips for Roll Off Dumpsters | TNT Dumpsters',
    description: 'Smart contractor swap scheduling tips to reduce downtime, keep job sites clean, and avoid delays during big projects.',
    url: 'https://tntdump.com/blog/contractor-swap-scheduling-tips',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/contractor-swap-scheduling-tips"} title={"Contractor Dumpster Swap Scheduling Tips | TNT Dumpsters"} description={"Tips for scheduling dumpster swaps on job sites: timing, access, and keeping projects on track without downtime or blocked staging."} url="https://tntdump.com/blog/contractor-swap-scheduling-tips" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Contractor Dumpster Swap Scheduling Tips</h1>
          <p>
            Swaps keep job sites moving. Use these tips to make swap requests smooth and avoid downtime.
          </p>
          <h2>Call Before the Dumpster Is Full</h2>
          <p>
            Request swaps when the container is about 70-80% full to avoid delays and overflow.
          </p>
          <h2>Confirm Access and Clearance</h2>
          <p>
            Ensure the dumpster area is clear of equipment and vehicles so the truck can swap safely.
          </p>
          <h2>Plan Around Crew Schedules</h2>
          <p>
            Align swaps with onsite work shifts to reduce disruption and keep staging areas organized.
          </p>
          <h2>Keep Contact Info Updated</h2>
          <p>
            Provide a main point of contact so our driver can coordinate arrival and access.
          </p>
        </div>
      </section>
    </main>
  )
}
