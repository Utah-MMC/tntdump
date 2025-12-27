import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Form | TNT Dumpsters',
  description: 'Internal test form for verifying contact submissions. Not intended for public search results.',
  alternates: { canonical: 'https://tntdump.com/test-form' },
  robots: { index: false, follow: false },
}

export default function TestFormLayout({ children }: { children: React.ReactNode }) {
  return children
}


