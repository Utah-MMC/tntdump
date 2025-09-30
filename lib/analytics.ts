type AnalyticsPayload = Record<string, unknown>

function pushToDataLayer(event: string, payload?: AnalyticsPayload) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> }
  if (!w.dataLayer) {
    w.dataLayer = []
  }
  w.dataLayer.push({ event, ...(payload || {}) })
}

export const analytics = {
  event(event: 'finder_submit' | 'recommendation_book_click' | 'phone_click' | 'zipsticky_price_click', payload?: AnalyticsPayload) {
    try {
      pushToDataLayer(event, payload)
    } catch (_) {
      // no-op
    }
  },
}



