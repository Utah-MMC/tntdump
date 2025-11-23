'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const ChatWidgetInner = dynamic(() => import('./ChatWidget'), {
  ssr: false,
  loading: () => null,
})

export default function DeferredChatWidget() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Defer chat widget until after main content is interactive
    const onIdle = () => setShouldRender(true)

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      ;(window as typeof window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback?.(
        onIdle
      )
    } else if (typeof window !== 'undefined') {
      const timeoutId = window.setTimeout(onIdle, 5000)
      return () => window.clearTimeout(timeoutId)
    } else {
      // Fallback for non-browser (shouldn't normally hit)
      setShouldRender(true)
    }
  }, [])

  if (!shouldRender) return null
  return <ChatWidgetInner />
}


