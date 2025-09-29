'use client'
import { PropsWithChildren, useRef } from 'react'

interface HorizontalScrollerProps {
  className?: string
}

export default function HorizontalScroller({ children, className }: PropsWithChildren<HorizontalScrollerProps>) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollByItem = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const firstChild = container.querySelector('[data-carousel-item]') as HTMLElement | null
    const itemWidth = firstChild ? firstChild.offsetWidth + 16 : Math.min(container.clientWidth, 360)
    const delta = direction === 'left' ? -itemWidth : itemWidth
    container.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className ?? ''}`}>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
        role="list"
        aria-label="Scrollable list"
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
        <button
          aria-label="Scroll left"
          onClick={() => scrollByItem('left')}
          className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scrollByItem('right')}
          className="pointer-events-auto h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}


