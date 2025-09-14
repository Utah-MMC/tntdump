'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Performance observer for navigation timing
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'page_load_time', {
                event_category: 'Performance',
                event_label: 'Navigation',
                value: Math.round(navEntry.loadEventEnd - navEntry.fetchStart),
                non_interaction: true,
              })
            }
          }
        }
      })

      observer.observe({ entryTypes: ['navigation'] })
    }

    // Basic performance tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            window.gtag('event', 'page_performance', {
              event_category: 'Performance',
              event_label: 'Load Time',
              value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
              non_interaction: true,
            })
          }
        }, 0)
      })
    }
  }, [])

  return null
}

export default PerformanceMonitor
