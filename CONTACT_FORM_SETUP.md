# Contact Form Setup Guide

The contact form is now fully functional! Here's how to set up email delivery:

## Current Status
✅ Form validation (client-side)
✅ API endpoint created (`/api/contact`)
✅ Loading, success, and error states
✅ Form reset after successful submission
✅ Controlled form inputs with state management

## Email Integration Options

### Option 1: SendGrid (Recommended)

1. **Install SendGrid:**
```bash
npm install @sendgrid/mail
```

2. **Get API Key:**
   - Sign up at [SendGrid](https://sendgrid.com/)
   - Create an API key in Settings > API Keys

3. **Add to `.env.local`:**
```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
SENDGRID_TO_EMAIL=orgalaser@gmail.com
```

4. **Update `app/api/contact/route.ts`:**
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: process.env.SENDGRID_TO_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
};

await sgMail.send(msg);
```

---

### Option 2: Resend

1. **Install Resend:**
```bash
npm install resend
```

2. **Get API Key:**
   - Sign up at [Resend](https://resend.com/)
   - Get your API key from the dashboard

3. **Add to `.env.local`:**
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. **Update `app/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Contact Form <noreply@yourdomain.com>',
  to: 'orgalaser@gmail.com',
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
```

---

### Option 3: Nodemailer (Gmail)

1. **Install Nodemailer:**
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. **Setup Gmail App Password:**
   - Go to Google Account > Security
   - Enable 2-Step Verification
   - Create App Password for "Mail"

3. **Add to `.env.local`:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. **Update `app/api/contact/route.ts`:**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'orgalaser@gmail.com',
  subject: `Contact Form: ${subject}`,
  replyTo: email,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
```

---

### Option 4: EmailJS (Client-Side)

1. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

2. **Setup:**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Get Service ID, Template ID, and Public Key

3. **Update the component to use EmailJS directly (no API route needed)**

---

## Form Validation

Current validations:
- **Name:** Minimum 2 characters
- **Email:** Valid email format
- **Subject:** Minimum 3 characters  
- **Message:** Minimum 10 characters

## Testing

To test the form without email service:
1. Submit the form
2. Check browser console for logged data
3. Verify success message appears

## Security Considerations

- ✅ Server-side validation
- ✅ Email format validation
- 🔲 Rate limiting (recommended to add)
- 🔲 CAPTCHA (recommended for production)
- 🔲 Honeypot field (spam protection)

## Next Steps

1. Choose an email service provider
2. Install required packages
3. Add environment variables
4. Update the API route
5. Test thoroughly
6. Consider adding CAPTCHA for spam protection

## Example with Rate Limiting

```bash
npm install @upstash/ratelimit @upstash/redis
```

Then add to your API route:
```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});

const identifier = request.headers.get("x-forwarded-for") ?? "anonymous";
const { success } = await ratelimit.limit(identifier);

if (!success) {
  return NextResponse.json(
    { error: "Too many requests" },
    { status: 429 }
  );
}
```

---

## Support

For questions or issues, check the console logs or browser network tab for debugging information.
