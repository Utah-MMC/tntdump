import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test | TNT Dumpsters',
  description: 'Internal test page for deployment verification. Not intended for public search results.',
  alternates: { canonical: 'https://tntdump.com/test' },
  robots: { index: false, follow: false },
}

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test Page Working!
        </h1>
        <p className="text-lg text-gray-600">
          If you can see this, the deployment is working correctly.
        </p>
      </div>
    </div>
  )
}
