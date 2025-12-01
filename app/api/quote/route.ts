import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration for TNT Dumpsters (uses environment variables)
const createTransporter = () => {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    throw new Error('EMAIL_USER and EMAIL_PASS must be set')
  }

  const host = process.env.EMAIL_HOST || 'smtp.gmail.com'
  const port = Number(process.env.EMAIL_PORT || 587)
  const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : false

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Email notification function for quotes
async function sendQuoteEmail(formData: {
  firstName: string
  lastName: string
  phone: string
  email?: string
  serviceType: string
  dumpsterSize?: string
  zip?: string
  projectDescription?: string
  preferredDate?: string
}) {
  try {
    const transporter = createTransporter()
    
    const mailOptions = {
      from: 'admin@tntdump.com',
      to: 'admin@tntdump.com',
      cc: 'info@icondumpsters.com',
      bcc: 'dcall@utahmmc.com',
      subject: `New Quote Request - ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            ${formData.email ? `<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Service Details</h3>
            <p><strong>Service Type:</strong> ${formData.serviceType}</p>
            ${formData.dumpsterSize ? `<p><strong>Dumpster Size:</strong> ${formData.dumpsterSize}</p>` : ''}
            ${formData.zip ? `<p><strong>ZIP Code:</strong> ${formData.zip}</p>` : ''}
            ${formData.preferredDate ? `<p><strong>Preferred Delivery Date:</strong> ${formData.preferredDate}</p>` : ''}
          </div>
          
          ${formData.projectDescription ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${formData.projectDescription}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">
              ðŸ“ž Call back: <a href="tel:${formData.phone}">${formData.phone}</a>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            This quote request was sent from the TNT Dumpsters website quote form.<br>
            Sent to: admin@tntdump.com | CC: info@icondumpsters.com | BCC: dcall@utahmmc.com
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    console.log('Quote email sent successfully to admin@tntdump.com')
  } catch (error) {
    console.error('Error sending quote email:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Quote API endpoint called')
    const body = await request.json()
    console.log('Quote request body:', body)
    
    const { 
      firstName, 
      lastName, 
      phone, 
      email, 
      serviceType, 
      dumpsterSize, 
      zip,
      projectDescription, 
      preferredDate 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !phone || !serviceType) {
      console.log('Missing required fields:', { firstName, lastName, phone, serviceType })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Optional reCAPTCHA verification if secret is configured
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecret) {
      try {
        const token = (body as any).captchaToken
        if (!token) {
          return NextResponse.json({ error: 'reCAPTCHA validation failed' }, { status: 400 })
        }
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret: recaptchaSecret, response: token })
        })
        const verifyJson = await verifyRes.json()
        if (!verifyJson.success) {
          console.log('reCAPTCHA verification failed:', verifyJson)
          return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
        }
      } catch (e) {
        console.error('reCAPTCHA verification error:', e)
        return NextResponse.json({ error: 'reCAPTCHA verification error' }, { status: 400 })
      }
    } else {
      console.log('reCAPTCHA secret not set; skipping verification')
    }

    // Log form data first
    console.log('=== QUOTE REQUEST RECEIVED ===')
    console.log('Name:', `${firstName} ${lastName}`)
    console.log('Phone:', phone)
    console.log('Email:', email || 'Not provided')
    console.log('Service:', serviceType)
    console.log('Size:', dumpsterSize || 'Not specified')
    console.log('Date:', preferredDate || 'Not specified')
    console.log('Description:', projectDescription || 'No description provided')
    console.log('================================')

    // Try to send email
    try {
      await sendQuoteEmail({
        firstName,
        lastName,
        phone,
        email,
        serviceType,
        dumpsterSize,
        zip,
        projectDescription,
        preferredDate
      })
      console.log('Quote email sent successfully!')
    } catch (emailError) {
      console.error('Quote email sending failed:', emailError)
      // Continue anyway - don't fail the form submission
    }

    return NextResponse.json(
      { message: 'Quote request submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

