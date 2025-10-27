export const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tntdump.com")

const NO_TRAIL_SLASH = new Set([
  '/robots.txt',
  '/sitemap.xml',
])

function ensureTrailingSlash(p: string): string {
  if (p === '/') return '/'
  if (NO_TRAIL_SLASH.has(p)) return p
  // asset heuristics: if path has a file extension, do not add slash
  if (/\.[a-z0-9]{2,8}$/i.test(p)) return p
  return p.endsWith('/') ? p : p + '/'
}

export function canonicalizePath(input: string): string {
  try {
    const url = new URL(input, SITE_URL)
    // lowercase path segments (safe for our routes)
    let pathname = url.pathname
      .split('/')
      .map((seg) => seg)
      .join('/')
      .toLowerCase()

    // pagination: if page>1 in query, consider /page/<n> pattern
    const pageParam = url.searchParams.get('page')
    const pageNum = pageParam ? parseInt(pageParam, 10) : NaN
    if (!isNaN(pageNum) && pageNum > 1) {
      // If the route already includes /page/<n>, keep it, else append
      if (!/\/page\/[0-9]+\/?$/.test(pathname)) {
        pathname = ensureTrailingSlash(pathname) + `page/${pageNum}/`
      }
    }

    // strip tracking/duplicate query params entirely
    const STRIP_KEYS = [
      'utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id',
      'gclid','fbclid','msclkid','ref','source','campaign','cid','sid','page'
    ]
    for (const k of STRIP_KEYS) url.searchParams.delete(k)

    // Return normalized pathname only (no origin)
    pathname = ensureTrailingSlash(pathname)
    return pathname
  } catch {
    // Fallback: best-effort sanitize
    let p = (input || '/').split('?')[0].toLowerCase()
    p = ensureTrailingSlash(p)
    return p
  }
}

export function canonicalUrl(path: string): URL {
  return new URL(canonicalizePath(path), SITE_URL)
}

