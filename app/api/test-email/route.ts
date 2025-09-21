import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
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

export async function POST(request: NextRequest) {
  try {
    console.log('=== TEST EMAIL API CALLED ===')
    
    const transporter = createTransporter()
    
    const mailOptions = {
      from: 'admin@tntdump.com',
      to: 'admin@tntdump.com',
      cc: 'admin@tntdump.com, icondumpsters@gmail.com',
      subject: 'Test Email from T&T Dumpsters Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            🧪 Test Email - T&T Dumpsters
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Email Configuration Test</h3>
            <p><strong>From:</strong> admin@tntdump.com</p>
            <p><strong>To:</strong> admin@tntdump.com</p>
            <p><strong>CC:</strong> admin@tntdump.com, icondumpsters@gmail.com</p>
            <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">
              ✅ Email configuration is working correctly!
            </p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Test Details</h3>
            <p>This is a test email to verify that:</p>
            <ul>
              <li>✅ Email authentication is working</li>
              <li>✅ Primary recipient (admin@tntdump.com) receives emails</li>
              <li>✅ CC recipients receive copies</li>
              <li>✅ Email formatting is correct</li>
              <li>✅ SMTP configuration is valid</li>
            </ul>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            This test email was sent from the T&T Dumpsters website email system.<br>
            If you received this email, your email configuration is working perfectly!
          </p>
        </div>
      `
    }

    console.log('Attempting to send test email...')
    await transporter.sendMail(mailOptions)
    console.log('✅ Test email sent successfully!')

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully to admin@tntdump.com',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Error sending test email:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
