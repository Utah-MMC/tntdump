// Server component: renders a canonical link element as a fallback
export default function CanonicalFallback({ path }: { path: string }) {
  return <link rel="canonical" href={path} />
}

