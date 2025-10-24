export type ContactEventParams = {
  city: string
  state: string
  page_path: string
  cta_type: 'tel' | 'sms' | 'quote'
}

export function fireContactEvent(params: ContactEventParams) {
  try {
    // GA4 via gtag
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (typeof w.gtag === 'function') {
      const eventName =
        params.cta_type === 'tel' ? 'contact_call' : params.cta_type === 'sms' ? 'contact_sms' : 'contact_quote'
      w.gtag('event', eventName, params)
      return
    }
    // GTM-style dataLayer
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: 'contact', ...params })
    }
  } catch {
    // no-op
  }
}

