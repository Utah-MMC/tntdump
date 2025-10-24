# Email Setup Guide for TNT Dumpsters

## Overview
Your website now has fully functional contact and quote forms that will send email notifications to `sales@tntdump.com`. Here's what has been implemented:

## âœ… What's Been Completed

### 1. API Endpoints Created
- **Contact Form API**: `/api/contact` - Handles contact form submissions
- **Quote Form API**: `/api/quote` - Handles quote request submissions

### 2. Forms Connected
- **Hero Component**: Already connected to `/api/contact`
- **Contact Page**: Now connected to `/api/contact`
- **Quote Page**: Now connected to `/api/quote`

### 3. Email Features
- Professional HTML email templates
- All form data included in emails
- Clickable phone numbers and email addresses
- Form type identification (Contact vs Quote)
- Error handling and validation

## ðŸ”§ Setup Required

### Step 1: Get Your HostGator Email Credentials
Since your email is hosted through HostGator, you'll need:

1. **Your full email address**: `sales@tntdump.com`
2. **Your email password**: The password you use to log into your HostGator email account
3. **SMTP Server**: `mail.tntdump.com` (already configured)

### Step 2: Create Environment Variables File
Create a file called `.env.local` in your project root with:

```env
# Email Configuration for HostGator
EMAIL_HOST=mail.tntdump.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=your_inbox@tntdump.com
EMAIL_PASS=your_password_here

# reCAPTCHA Configuration (optional - currently using test keys)
RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

**Note**: Use your regular HostGator email password (not an app password like Gmail requires).

### Step 3: Deploy to Vercel
1. Add the environment variables to your Vercel project:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings â†’ Environment Variables
   - Add `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, and `EMAIL_PASS`

2. Redeploy your site

## ðŸ“§ Email Templates

### Contact Form Email
- Subject: "New Contact Form Submission - [Name]"
- Includes: Name, Phone, Email, Service, Message
- Professional HTML formatting

### Quote Form Email
- Subject: "New Quote Request - [First Name] [Last Name]"
- Includes: Full name, Phone, Email, Service type, Dumpster size, Project description, Preferred date
- Professional HTML formatting

## ðŸ§ª Testing

### Test the Forms
1. Go to your website
2. Fill out the contact form on the homepage
3. Fill out the quote form at `/quote`
4. Fill out the contact form at `/contact`
5. Check `sales@tntdump.com` for emails

### Expected Behavior
- Forms should submit successfully
- You should receive emails within seconds
- Emails should be well-formatted with all form data
- Phone numbers should be clickable
- Email addresses should be clickable

## ðŸ”’ Security Features

- Form validation on both frontend and backend
- reCAPTCHA integration (currently using test keys)
- Input sanitization
- Error handling

## ðŸš¨ Troubleshooting

### If emails aren't being sent:
1. Check that environment variables are set correctly
2. Verify your HostGator email password is correct
3. Check Vercel function logs for errors
4. Ensure your HostGator email account is active and accessible
5. Try logging into your email through HostGator's webmail to verify credentials

### If forms aren't submitting:
1. Check browser console for JavaScript errors
2. Verify API endpoints are accessible
3. Check network tab for failed requests

## ðŸ“± Form Locations

1. **Homepage Hero Section**: Contact form with reCAPTCHA
2. **Contact Page**: Full contact form
3. **Quote Page**: Detailed quote request form

All forms now send emails to `sales@tntdump.com` with professional formatting and all the information you need to follow up with customers.

## ðŸŽ¯ Next Steps

1. Set up the environment variables
2. Test all forms
3. Consider getting real reCAPTCHA keys for production
4. Monitor email delivery and form submissions

Your website is now ready to capture and forward all customer inquiries directly to your business email!

