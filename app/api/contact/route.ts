import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration for TNT Dumpsters
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'vixen.websitewelcome.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'admin@tntdump.com',
      pass: 'Uwg2025!'
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Email notification function
async function sendEmailNotification(formData: {
  name: string
  phone: string
  email?: string
  service: string
  message?: string
  formType: string
}) {
  try {
    const transporter = createTransporter()
    
    const mailOptions = {
      from: 'admin@tntdump.com',
      to: 'admin@tntdump.com',
      cc: 'admin@tntdump.com, icondumpsters@gmail.com',
      subject: `New ${formData.formType} Submission - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New ${formData.formType} Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            ${formData.email ? `<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
            <p><strong>Service:</strong> ${formData.service}</p>
          </div>
          
          ${formData.message ? `
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">
              ðŸ“ž Call back: <a href="tel:${formData.phone}">${formData.phone}</a>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            This email was sent from the TNT Dumpsters website contact form.<br>
            Sent to: admin@tntdump.com | CC: admin@tntdump.com, icondumpsters@gmail.com
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully to admin@tntdump.com')
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== CONTACT API ENDPOINT CALLED ===')
    console.log('Request URL:', request.url)
    console.log('Request method:', request.method)
    const body = await request.json()
    console.log('Request body:', body)
    const { name, phone, email, service, message, captchaToken } = body

    // Validate required fields
    if (!name || !phone || !service) {
      console.log('Missing required fields:', { name, phone, service })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Optional reCAPTCHA verification if secret is configured
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecret) {
      try {
        if (!captchaToken) {
          return NextResponse.json({ error: 'reCAPTCHA validation failed' }, { status: 400 })
        }
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret: recaptchaSecret, response: captchaToken })
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
    console.log('=== FORM SUBMISSION RECEIVED ===')
    console.log('Name:', name)
    console.log('Phone:', phone)
    console.log('Email:', email || 'Not provided')
    console.log('Service:', service)
    console.log('Message:', message || 'No message provided')
    console.log('================================')

    // Try to send email
    try {
      await sendEmailNotification({
        name,
        phone,
        email,
        service,
        message,
        formType: 'Contact Form'
      })
      console.log('Email sent successfully!')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue anyway - don't fail the form submission
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

