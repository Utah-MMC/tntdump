declare module 'react-google-recaptcha' {
  import { Component } from 'react'

  interface ReCAPTCHAProps {
    sitekey: string
    onChange?: (token: string | null) => void
    onExpired?: () => void
    onError?: () => void
    theme?: 'light' | 'dark'
    type?: 'image' | 'audio'
    tabindex?: number
    hl?: string
    size?: 'compact' | 'normal' | 'invisible'
    badge?: 'bottomright' | 'bottomleft' | 'inline'
    className?: string
    style?: React.CSSProperties
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void
    execute(): void
    getValue(): string | null
  }
}
