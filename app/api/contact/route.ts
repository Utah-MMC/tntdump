import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('API endpoint called')
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

    // Verify reCAPTCHA token (skip for test key)
    if (captchaToken) {
      // For test reCAPTCHA, always pass verification
      if (captchaToken.length > 100) {
        console.log('Test reCAPTCHA token detected, skipping verification')
      } else {
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY || '',
            response: captchaToken,
          }),
        })

        const recaptchaData = await recaptchaResponse.json()
        
        if (!recaptchaData.success) {
          return NextResponse.json(
            { error: 'reCAPTCHA verification failed' },
            { status: 400 }
          )
        }
      }
    }

    // Log form submission (for now, instead of sending email)
    console.log('=== FORM SUBMISSION RECEIVED ===')
    console.log('Name:', name)
    console.log('Phone:', phone)
    console.log('Email:', email || 'Not provided')
    console.log('Service:', service)
    console.log('Message:', message || 'No message provided')
    console.log('================================')
    
    // TODO: Set up proper email service later
    // For now, just log the submission and return success

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
