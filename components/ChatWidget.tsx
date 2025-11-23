'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false })

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

type ConversationStage = 'greeting' | 'zip' | 'size' | 'cta'

type Lead = {
  firstName: string
  lastName: string
  phone: string
  email?: string
  zip?: string
  dumpsterSize?: '10' | '15' | '20' | '30' | ''
}

const DISPLAY_PHONE = '(801) 209-9013'
const CALL_TEL = 'tel:+18012099013'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [stage, setStage] = useState<ConversationStage>('greeting')
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [lead, setLead] = useState<Lead>({ firstName: '', lastName: '', phone: '', email: '', zip: '', dumpsterSize: '' })
  const [unreadCount, setUnreadCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const firstUserMessageSentRef = useRef(false)
  const [isLiveHours, setIsLiveHours] = useState<boolean>(true)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  const scrollRef = useRef<HTMLDivElement>(null)
  const lastMsgRef = useRef<HTMLDivElement | null>(null)
  const openBtnRef = useRef<HTMLButtonElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const pageUrl = useMemo(() => (typeof window !== 'undefined' ? window.location.href : ''), [])

  useEffect(() => {
    // Determine live chat availability based on Mountain Time (America/Denver), 8am-5pm
    const computeLive = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Denver', hour: 'numeric', hour12: false }).formatToParts(new Date())
        const hour = Number(parts.find(p => p.type === 'hour')?.value || '0')
        return hour >= 8 && hour < 17
      } catch {
        // Fallback to local time if Intl/timezone fails
        const h = new Date().getHours()
        return h >= 8 && h < 17
      }
    }
    setIsLiveHours(computeLive())
    const id = window.setInterval(() => setIsLiveHours(computeLive()), 60000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const stored = localStorage.getItem('tnt_chat_state_v1')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed.messages)) setMessages(parsed.messages)
        if (typeof parsed.isOpen === 'boolean') setIsOpen(parsed.isOpen)
        if (parsed.stage) setStage(parsed.stage)
        if (parsed.lead) setLead(parsed.lead)
        if (typeof parsed.unreadCount === 'number') setUnreadCount(parsed.unreadCount)
        return
      }
    } catch {}
    // Initial greeting (lazy)
    setMessages([
      {
        role: 'assistant',
        content: isLiveHours
          ? "Hey there! I'm here to help with dumpster rentals. Tell me your zip so I can confirm availability and share pricing. You can also type 'quote' to leave your info for a quick callback."
          : "You're reaching us outside our live chat hours (8am–5pm MT). I can still help! Share your zip and preferred size (15/20/30), or tap 'quote' to leave your info and we’ll call you back first thing.",
        timestamp: new Date().toISOString(),
      },
    ])
    setStage(isLiveHours ? 'zip' : 'cta')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(
        'tnt_chat_state_v1',
        JSON.stringify({ messages, isOpen, stage, lead, unreadCount })
      )
    } catch {}
  }, [messages, isOpen, stage, lead, unreadCount])

  useEffect(() => {
    if (scrollRef.current && lastMsgRef.current) {
      const top = lastMsgRef.current.offsetTop
      scrollRef.current.scrollTo({ top, behavior: 'smooth' })
    }
  }, [messages, isOpen])

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
      setTimeout(() => {
        try { inputRef.current?.focus() } catch {}
      }, 50)
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
          setTimeout(() => {
            try { openBtnRef.current?.focus() } catch {}
          }, 50)
        }
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  useEffect(() => {
    if (!messages.length) return
    const last = messages[messages.length - 1]
    if (!isOpen && last.role === 'assistant') setUnreadCount((c) => c + 1)
  }, [messages, isOpen])

  function assistant(text: string) {
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: text, timestamp: new Date().toISOString() },
    ])
  }

  function handleQuick(q: string) {
    setInput(q)
    setTimeout(() => send(), 0)
  }

  async function send() {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text, timestamp: new Date().toISOString() },
    ])

    // Fire a one-time notify for first user message
    if (!firstUserMessageSentRef.current) {
      firstUserMessageSentRef.current = true
      try {
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'notify', pageUrl }),
        })
      } catch {}
    }

    // If outside live hours, steer to leave contact details and avoid real-time flow hints
    if (!isLiveHours) {
      if (/\b(quote|book|schedule|estimate)\b/i.test(text)) {
        setShowLeadForm(true)
        assistant("Great — add your name and phone, and we'll call you during business hours (8am–5pm MT). If it's urgent, call (801) 209-9013.")
        setStage('cta')
        return
      }
      assistant("We're currently offline (8am–5pm MT). Type 'quote' and leave your info for a callback, or share your zip and preferred size (15/20/30) and I'll package it with your message.")
      setStage('cta')
      return
    }

    const lower = text.toLowerCase()
    const zipMatch = text.match(/\b(\d{5})(?:-\d{4})?\b/)

    // Global intents
    if (/\b(quote|book|schedule|estimate)\b/.test(lower)) {
      setShowLeadForm(true)
      assistant(
        `Great — add your name and phone, and we'll call you within 30 minutes. Prefer immediate help? Call ${DISPLAY_PHONE}.`
      )
      setStage('cta')
      return
    }

    // ZIP captured
    if (zipMatch) {
      const five = zipMatch[1]
      setLead((prev) => ({ ...prev, zip: five }))
      assistant(
        `Perfect — we serve your area. What size do you prefer: 15, 20, or 30 yard?`
      )
      setStage('size')
      return
    }

    if (stage === 'zip') {
      assistant(
        `Could you share your 5‑digit zip code? That way I can confirm availability and share pricing.`
      )
      return
    }

    if (stage === 'size') {
      const m = /(10|15|20|30)(?:\s*-?\s*(yd|yard)s?)?/i.exec(lower)
      if (m) {
        const size = m[1] as Lead['dumpsterSize']
        setLead((prev) => ({ ...prev, dumpsterSize: size }))
        assistant(
          `Nice — ${size} yard works great. Want me to lock in a quote? You can type "quote" or leave your details below.`
        )
        setShowLeadForm(true)
        setStage('cta')
        return
      }
      assistant('Which size do you prefer — 15, 20, or 30 yard?')
      return
    }

    // Generic fallback
    assistant(
      `Got it! I can get you pricing quickly. Tell me your zip and preferred size (15/20/30), or type "quote" and I’ll have our team call you back.`
    )
  }

  async function submitLead() {
    if (!lead.firstName || !lead.lastName || !lead.phone) return
    // If a site key is configured, require token
    if (recaptchaSiteKey && !captchaToken) {
      assistant('Please complete the reCAPTCHA to submit.')
      return
    }
    setIsSubmitting(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: lead.firstName,
          lastName: lead.lastName,
          phone: lead.phone,
          email: lead.email || undefined,
          serviceType: 'Dumpster Rental',
          dumpsterSize: lead.dumpsterSize || undefined,
          zip: lead.zip || undefined,
          projectDescription: `Chat lead from ${pageUrl}`,
          captchaToken: captchaToken || undefined,
        }),
      })
      // Send transcript email to TNT recipients
      try {
        const transcript = messages.slice(-50)
        await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'transcript', transcript, pageUrl, lead }),
        })
      } catch {}
      assistant(
        `Perfect! We got your info and we'll be in touch shortly. For urgent help call ${DISPLAY_PHONE}.`
      )
      setShowLeadForm(false)
      setCaptchaToken(null)
    } catch {
      assistant(`Hmm, something went wrong. You can also call us at ${DISPLAY_PHONE}.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {!isOpen && (
        <button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          ref={openBtnRef}
          className="relative bg-primary-600 text-white rounded-full shadow-lg px-4 py-3 hover:bg-primary-700 transition-colors"
        >
          Chat with us
          {unreadCount > 0 && (
            <span aria-hidden className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-semibold shadow">{unreadCount > 9 ? '9+' : unreadCount}</span>
          )}
        </button>
      )}

      {isOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="tnt-chat-title" className="w-80 sm:w-96 rounded-xl shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm ring-1 ring-primary-100">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 flex items-center justify-between">
            <div id="tnt-chat-title" className="font-semibold">TNT Dumpsters Chat</div>
            <div className="flex items-center gap-2">
              <a href={CALL_TEL} className="bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs px-2 py-1 rounded-full">Call {DISPLAY_PHONE}</a>
              <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-white">✕</button>
            </div>
          </div>

          <div ref={scrollRef} className="h-72 overflow-y-auto p-3 space-y-4 bg-gradient-to-b from-primary-50 via-white to-primary-50" aria-live="polite">
            {messages.map((m, i) => (
              m.role === 'assistant' ? (
                <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className="text-sm text-gray-800 flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <img src="/images/t-and-t-dumpsters-logo-176w.webp" alt="TNT Dumpsters" className="h-8 w-auto" />
                  </div>
                  <div className="inline-block bg-white/95 backdrop-blur-sm border border-transparent rounded-xl px-4 py-3 max-w-[85%] text-left leading-6 shadow-lg ring-1 ring-primary-200">
                    <div className="border-l-4 border-primary-600 pl-3 whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              ) : (
                <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className="text-sm text-gray-900 text-right">
                  <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl px-4 py-3 max-w-[85%] text-left whitespace-pre-wrap leading-6 shadow">
                    {m.content}
                  </div>
                </div>
              )
            ))}
          </div>

          {showLeadForm && (
            <div className="p-3 border-t border-gray-200 space-y-2 relative">
              <button aria-label="Close quick quote" onClick={() => setShowLeadForm(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">✕</button>
              <div className="font-medium text-gray-800 mb-1 pr-6">Quick Quote</div>
              <div className="grid grid-cols-2 gap-2">
                <input value={lead.firstName} onChange={(e) => setLead({ ...lead, firstName: e.target.value })} placeholder="First name" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <input value={lead.lastName} onChange={(e) => setLead({ ...lead, lastName: e.target.value })} placeholder="Last name" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email (optional)" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={lead.zip} onChange={(e) => setLead({ ...lead, zip: e.target.value })} placeholder="Zip code" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <select value={lead.dumpsterSize} onChange={(e) => setLead({ ...lead, dumpsterSize: e.target.value as Lead['dumpsterSize'] })} className="border border-gray-300 rounded-lg px-2 py-2 text-sm">
                  <option value="">Size</option>
                  <option value="15">15 Yard</option>
                  <option value="20">20 Yard</option>
                  <option value="30">30 Yard</option>
                </select>
              </div>
              {recaptchaSiteKey && (
                <div className="pt-1">
                  {/* @ts-expect-error async dynamic import type */}
                  <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={(token: string | null) => setCaptchaToken(token)} />
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={submitLead} disabled={isSubmitting} className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 disabled:opacity-60">Submit</button>
                <button onClick={() => setShowLeadForm(false)} className="border border-gray-300 px-4 py-2 rounded-lg text-sm">Back</button>
              </div>
            </div>
          )}

          <div className="px-3 pb-2 border-t border-gray-100 flex flex-wrap gap-2 bg-white/90">
            {['quote', 'prices', 'sizes', 'talk to agent'].map((qr, idx) => (
              <button
                key={`${qr}-${idx}`}
                onClick={() => handleQuick(qr)}
                className="text-xs bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 hover:from-primary-200 hover:to-primary-300 px-3 py-1 rounded-full border border-primary-200"
              >
                {qr}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(); if (e.key === 'Escape') setIsOpen(false) }}
                ref={inputRef}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder={
                  stage === 'zip'
                    ? 'Enter your 5‑digit zip code'
                    : stage === 'size'
                    ? 'Choose a size: 15, 20, or 30'
                    : 'Ask about pricing or say quote'
                }
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700"
              >
                Send
              </button>
            </div>
            <div className="text-xs text-gray-600 mt-2">By chatting, you agree to our terms. For urgent help call {DISPLAY_PHONE}.</div>
          </div>
        </div>
      )}
    </div>
  )
}


