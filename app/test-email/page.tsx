import type { Metadata } from 'next'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Test Email | TNT Dumpsters',
  description: 'Internal test route for email verification. Not intended for public search results.',
  robots: { index: false, follow: false },
}

export default function TestEmailPage() {
  return null
}
