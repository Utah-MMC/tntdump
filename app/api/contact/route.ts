import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration for T&T Dumpsters (HostGator)
const createHostGatorTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'vixen.websitewelcome.com',
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'admin@tntdump.com',
      pass: process.env.EMAIL_PASS || 'Uwg2025!'
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Email configuration for Gmail (for external delivery)
const createGmailTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'icondumpsters@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || ''
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
    const hostGatorTransporter = createHostGatorTransporter()
    const gmailTransporter = createGmailTransporter()
    
    // Debug logging
    console.log('=== EMAIL DEBUG INFO ===')
    console.log('Host:', process.env.EMAIL_HOST || 'vixen.websitewelcome.com')
    console.log('Port:', process.env.EMAIL_PORT || '465')
    console.log('User:', process.env.EMAIL_USER || 'admin@tntdump.com')
    console.log('Password set:', !!process.env.EMAIL_PASS)
    console.log('========================')
    
    const emailContent = `
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
            📞 Call back: <a href="tel:${formData.phone}">${formData.phone}</a>
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 12px; text-align: center;">
          This email was sent from the T&T Dumpsters website contact form.<br>
          Sent to: admin@tntdump.com and icondumpsters@gmail.com
        </p>
      </div>
    `

    // Send to admin@tntdump.com
    const adminMailOptions = {
      from: 'admin@tntdump.com',
      to: 'admin@tntdump.com',
      subject: `New ${formData.formType} Submission - ${formData.name}`,
      html: emailContent
    }

    // Send to icondumpsters@gmail.com with different headers
    const iconMailOptions = {
      from: '"T&T Dumpsters" <admin@tntdump.com>',
      to: 'icondumpsters@gmail.com',
      subject: `New ${formData.formType} Submission - ${formData.name}`,
      html: emailContent,
      headers: {
        'Reply-To': 'admin@tntdump.com'
      }
    }

    // Send to admin@tntdump.com using HostGator SMTP
    try {
      await hostGatorTransporter.sendMail(adminMailOptions)
      console.log('✅ Contact email sent successfully to admin@tntdump.com via HostGator')
    } catch (adminError) {
      console.error('❌ Error sending email to admin@tntdump.com:', adminError)
      throw adminError
    }
    
    // Send to icondumpsters@gmail.com using Gmail SMTP
    try {
      await gmailTransporter.sendMail(iconMailOptions)
      console.log('✅ Contact email sent successfully to icondumpsters@gmail.com via Gmail SMTP')
    } catch (iconError) {
      console.error('❌ Error sending email to icondumpsters@gmail.com:', iconError)
      // Don't throw here - we want the admin email to still work even if Gmail fails
      console.log('⚠️ Continuing despite Gmail delivery failure')
    }
    
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

    // Skip reCAPTCHA validation for development/testing
    console.log('Skipping reCAPTCHA validation for development')

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
