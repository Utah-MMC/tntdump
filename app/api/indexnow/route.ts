import { NextRequest, NextResponse } from 'next/server';

// IndexNow constants
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const INDEXNOW_KEY = '2aaa5122b98a4ce09d1e45535e18b50b';
const INDEXNOW_KEY_LOCATION = `https://tntdump.com/${INDEXNOW_KEY}.txt`;

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

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get('url');
  const urlsParam = req.nextUrl.searchParams.get('urls');
  const urls = urlsParam
    ? urlsParam.split(',').map((u) => u.trim()).filter(Boolean)
    : urlParam
      ? [urlParam]
      : [];

  if (!urls.length) {
    return NextResponse.json(
      { submitted: 0, ok: false, error: 'Provide url or urls query params to submit.' },
      { status: 400 }
    );
  }

  const resp = await submitToIndexNow(urls.slice(0, 50));
  const ok = resp.ok;
  const text = await resp.text();
  return NextResponse.json({ submitted: urls.length, ok, indexnow: text });
}

export const dynamic = 'force-dynamic';

