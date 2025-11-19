import type { Metadata } from 'next'

export const dynamic = 'error'
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function TestEmailPage() {
  return null
}
