import BlogPostSchema from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Utah Dumpster Permit Checklist: Street Placement Made Easy | TNT Dumpsters',
  description: 'A clear Utah dumpster permit checklist with steps for street placement, city contacts, and tips to avoid fines or delays.',
  alternates: { canonical: 'https://tntdump.com/blog/utah-dumpster-permit-checklist' },
  openGraph: {
    title: 'Utah Dumpster Permit Checklist: Street Placement Made Easy | TNT Dumpsters',
    description: 'A clear Utah dumpster permit checklist with steps for street placement, city contacts, and tips to avoid fines or delays.',
    url: 'https://tntdump.com/blog/utah-dumpster-permit-checklist',
    siteName: 'TNT Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/images/t-and-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <BlogPostSchema slug={"blog/utah-dumpster-permit-checklist"} title={"Utah Dumpster Permit Checklist | TNT Dumpsters"} description={"A quick checklist for dumpster permits in Utah: when you need one, who to contact, and how to plan placement with less hassle."} url="https://tntdump.com/blog/utah-dumpster-permit-checklist" />

      <section className="py-16 bg-white">
        <div className="container-custom prose prose-lg max-w-none">
          <h1>Utah Dumpster Permit Checklist</h1>
          <p>
            Permits are usually required when a dumpster sits on public streets or sidewalks. Use this checklist to stay compliant.
          </p>
          <h2>1. Determine Placement</h2>
          <p>
            Driveway placement typically does not require a permit. Street placement often does.
          </p>
          <h2>2. Contact Your City</h2>
          <p>
            Each Utah city has its own right-of-way rules. Check with public works or permitting offices for requirements.
          </p>
          <h2>3. Plan for Safety</h2>
          <p>
            Leave clear access for traffic, sidewalks, and emergency routes. Use cones or reflective markings if required.
          </p>
          <h2>4. Schedule Delivery After Approval</h2>
          <p>
            Submit permit applications before delivery dates to avoid delays or fines.
          </p>
        </div>
      </section>
    </main>
  )
}
