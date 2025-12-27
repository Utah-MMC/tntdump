import blogMeta from '@/data/blog-posts-meta.json'

type BlogPostSchemaProps = {
  slug: string
  title: string
  description: string
  url: string
}

export default function BlogPostSchema({
  slug,
  title,
  description,
  url,
}: BlogPostSchemaProps) {
  const meta = (blogMeta as Record<string, { datePublished?: string; dateModified?: string; imageUrl?: string }>)[slug] || {};
  const imageUrl = meta.imageUrl || 'https://tntdump.com/images/t-and-t-dumpsters-logo-176w.webp';

  const blogPostLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', '@id': 'https://tntdump.com/#organization' },
    publisher: { '@type': 'Organization', '@id': 'https://tntdump.com/#organization' },
    image: [imageUrl],
    datePublished: meta.datePublished,
    dateModified: meta.dateModified || meta.datePublished,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tntdump.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tntdump.com/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  )
}
