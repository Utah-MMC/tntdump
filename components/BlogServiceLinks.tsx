import Link from 'next/link'

type BlogServiceLinksProps = {
  title?: string
  description?: string
  eyebrow?: string
}

const serviceLinks = [
  {
    href: '/services',
    title: 'All Services',
    description: 'View our full dumpster rental lineup',
  },
  {
    href: '/dumpsters/residential',
    title: 'Residential Dumpsters',
    description: 'Cleanouts, remodels, and moves',
  },
  {
    href: '/dumpsters/commercial',
    title: 'Commercial Dumpsters',
    description: 'Business and contractor solutions',
  },
  {
    href: '/dumpsters/concrete',
    title: 'Construction Dumpsters',
    description: 'Concrete, brick, and heavy debris',
  },
]

export default function BlogServiceLinks({
  title = 'Explore Our Dumpster Rental Services',
  description = 'Jump from this article into the services that fit your project.',
  eyebrow,
}: BlogServiceLinksProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">{eyebrow}</p> : null}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-bold text-blue-600 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
