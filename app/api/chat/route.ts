import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

function createTransporter() {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    throw new Error('EMAIL_USER and EMAIL_PASS must be set')
  }

  const host = process.env.EMAIL_HOST || 'mail.tntdump.com'
  const port = Number(process.env.EMAIL_PORT || 465)
  const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  })
}

function renderTranscriptHtml(transcript: ChatMessage[] = []) {
  const safe = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  const rows = transcript
    .slice(-100)
    .map(
      (m) => `
        <tr>
          <td style="padding:8px;font-family:Arial,sans-serif;font-size:13px;color:#111;font-weight:${m.role === 'assistant' ? 'bold' : 'normal'}">${m.role}</td>
          <td style="padding:8px;font-family:Arial,sans-serif;font-size:13px;color:#111;white-space:pre-wrap">${safe(m.content)}</td>
          <td style="padding:8px;font-family:Arial,sans-serif;font-size:12px;color:#666">${new Date(m.timestamp).toLocaleString()}</td>
        </tr>`
    )
    .join('')
  return `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse">
      <thead>
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:12px;color:#6b7280">Role</th>
          <th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:12px;color:#6b7280">Message</th>
          <th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:12px;color:#6b7280">Time</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`
}

async function sendEmail({
  subject,
  html,
  to,
  cc,
}: {
  subject: string
  html: string
  to: string | string[]
  cc?: string | string[]
}) {
  const transporter = createTransporter()
  await transporter.sendMail({
    from: 'sales@tntdump.com',
    to,
    cc,
    bcc: 'dcall@utahmmc.com',
    subject,
    html,
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const action = String(body?.action || '').toLowerCase()

    if (action === 'notify') {
      const pageUrl: string = body?.pageUrl || ''
      const when = new Date().toLocaleString()
      const ua = req.headers.get('user-agent') || ''
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto">
          <h2 style="color:#1e40af;border-bottom:2px solid #1e40af;padding-bottom:8px;margin:0 0 12px">New Chat Started</h2>
          <p style="margin:0 0 6px;color:#111">A visitor has started chatting on the site.</p>
          <p style="margin:0 0 6px;color:#111"><strong>Time:</strong> ${when}</p>
          ${pageUrl ? `<p style="margin:0 0 6px;color:#111"><strong>Page:</strong> <a href="${pageUrl}">${pageUrl}</a></p>` : ''}
          <p style="margin:12px 0 0;color:#6b7280;font-size:12px"><em>User-Agent:</em> ${ua}</p>
        </div>`
      await sendEmail({
        subject: 'New Chat Started - TNT Dumpsters',
        to: 'dcall@utahmmc.com',
        cc: ['jlafaver@utahmmc.com', 'sales@tntdump.com'],
        html,
      })
      return NextResponse.json({ ok: true })
    }

    if (action === 'transcript') {
      const transcript: ChatMessage[] = Array.isArray(body?.transcript) ? body.transcript : []
      const pageUrl: string = body?.pageUrl || ''
      const lead = body?.lead || {}
      const leadHtml = lead && (lead.firstName || lead.lastName || lead.phone || lead.email || lead.zip || lead.dumpsterSize)
        ? `
          <div style="background:#f8fafc;padding:12px;border-radius:8px;margin:12px 0">
            <h3 style="margin:0 0 8px;color:#111">Lead Details</h3>
            <div style="font-size:14px;color:#111">
              ${lead.firstName || lead.lastName ? `<div><strong>Name:</strong> ${[lead.firstName, lead.lastName].filter(Boolean).join(' ')}</div>` : ''}
              ${lead.phone ? `<div><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></div>` : ''}
              ${lead.email ? `<div><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></div>` : ''}
              ${lead.zip ? `<div><strong>Zip:</strong> ${lead.zip}</div>` : ''}
              ${lead.dumpsterSize ? `<div><strong>Size:</strong> ${lead.dumpsterSize} yd</div>` : ''}
            </div>
          </div>`
        : ''
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto">
          <h2 style="color:#1e40af;border-bottom:2px solid #1e40af;padding-bottom:8px;margin:0 0 12px">Chat Transcript</h2>
          ${pageUrl ? `<p style="margin:0 0 12px;color:#111"><strong>Page:</strong> <a href="${pageUrl}">${pageUrl}</a></p>` : ''}
          ${leadHtml}
          ${renderTranscriptHtml(transcript)}
        </div>`
      await sendEmail({
        subject: 'Chat Transcript - TNT Dumpsters',
        to: 'jlafaver@utahmmc.com',
        cc: ['dcall@utahmmc.com', 'sales@tntdump.com'],
        html,
      })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: 'Unsupported action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


