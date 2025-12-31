'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

/**
 * WebVitals component - tracks Core Web Vitals and sends to analytics
 * Sends metrics to both Google Analytics and Microsoft Clarity
 */
export default function WebVitals() {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') return

    // Function to send metrics to analytics
    const sendToAnalytics = (metric: any) => {
      const { name, value, id, rating } = metric

      // Round the value for cleaner reporting
      const roundedValue = Math.round(name === 'CLS' ? value * 1000 : value)

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: roundedValue,
          metric_rating: rating,
          non_interaction: true,
        })
      }

      // Send to Microsoft Clarity if available
      if (typeof window !== 'undefined' && (window as any).clarity) {
        (window as any).clarity('set', name, roundedValue.toString())
      }

      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${name}:`, {
          value: roundedValue,
          rating,
          id,
        })
      }
    }

    // Track all Core Web Vitals
    onCLS(sendToAnalytics)  // Cumulative Layout Shift
    onFCP(sendToAnalytics)  // First Contentful Paint
    onLCP(sendToAnalytics)  // Largest Contentful Paint
    onTTFB(sendToAnalytics) // Time to First Byte
    onINP(sendToAnalytics)  // Interaction to Next Paint (replaces deprecated FID)
  }, [])

  return null
}
