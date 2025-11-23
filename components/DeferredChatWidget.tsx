'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const ChatWidgetInner = dynamic(() => import('./ChatWidget'), {
  ssr: false,
  loading: () => null,
})

export default function DeferredChatWidget() {
  const [hasClicked, setHasClicked] = useState(false)

  // Lightweight launcher: only when the user clicks do we load the heavy chat widget bundle.
  if (!hasClicked) {
    return (
      <div className="fixed bottom-4 right-4 z-[60]">
        <button
          type="button"
          aria-label="Open chat"
          onClick={() => setHasClicked(true)}
          className="relative bg-primary-600 text-white rounded-full shadow-lg px-4 py-3 hover:bg-primary-700 transition-colors"
        >
          Chat with us
        </button>
      </div>
    )
  }

  return <ChatWidgetInner />
}



