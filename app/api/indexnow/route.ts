import { NextRequest, NextResponse } from 'next/server';

// IndexNow constants
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const INDEXNOW_KEY = '2aaa5122b98a4ce09d1e45535e18b50b';
const INDEXNOW_KEY_LOCATION = `https://tntdump.com/${INDEXNOW_KEY}.txt`;
const SITE_ORIGIN = 'https://tntdump.com';

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  try {
    const res = await fetch(sitemapUrl, { next: { revalidate: 0 } });
    if (!res.ok) return [];
    const xml = await res.text();

    // Very small XML extraction to avoid adding deps. Good enough for simple sitemaps.
    const urls: string[] = [];

    // If sitemap index, extract <loc> children and fetch each
    if (xml.includes('<sitemapindex')) {
      const locMatches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g));
      for (const m of locMatches) {
        const child = m[1];
        urls.push(...(await fetchSitemapUrls(child)));
      }
      return urls;
    }

    // urlset: collect <loc>
    if (xml.includes('<urlset')) {
      const locMatches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g));
      for (const m of locMatches) {
        urls.push(m[1]);
      }
      return urls;
    }

    return [];
  } catch {
    return [];
  }
}

async function submitToIndexNow(urls: string[]): Promise<Response> {
  const body = {
    host: 'tntdump.com',
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  return fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function GET(_req: NextRequest) {
  // Collect from the sitemap index so this stays up to date
  const sitemapIndex = `${SITE_ORIGIN}/sitemap.xml`;
  const urls = await fetchSitemapUrls(sitemapIndex);

  if (!urls.length) {
    return NextResponse.json({ submitted: 0, ok: false }, { status: 500 });
  }

  const resp = await submitToIndexNow(urls.slice(0, 10000));
  const ok = resp.ok;
  const text = await resp.text();
  return NextResponse.json({ submitted: urls.length, ok, indexnow: text });
}

export const dynamic = 'force-dynamic';

