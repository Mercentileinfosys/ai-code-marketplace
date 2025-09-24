# EmailJS Template Setup Guide

## The Error
You're getting "The recipients address is empty" because your EmailJS template needs to be configured with the correct variables.

## How to Fix It

### Step 1: Log into EmailJS
Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/) and sign in.

### Step 2: Navigate to Email Templates
Click on "Email Templates" in the sidebar.

### Step 3: Edit Your Template (template_u8vvm2o)
Find your template with ID `template_u8vvm2o` and click to edit it.

### Step 4: Configure the Template Settings

#### In the "To email" field (IMPORTANT - This is what's missing!):
```
{{to_email}}
```
Or if you want it to always go to your email:
```
ugameropbolte@gmail.com
```

#### In the "From name" field:
```
{{from_name}}
```

#### In the "From email" field:
```
{{from_email}}
```

#### In the "Reply To" field:
```
{{from_email}}
```

#### In the "Subject" field:
```
New Contact Form Submission - Ticket #{{ticket_id}}
```

### Step 5: Configure the Email Content

In the email body/content section, use this template:

```html
<h2>New Contact Form Submission</h2>

<p><strong>Ticket ID:</strong> {{ticket_id}}</p>
<p><strong>Date:</strong> {{date}}</p>

<hr>

<h3>Contact Information:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company}}</p>

<hr>

<h3>Project Details:</h3>
<p><strong>Service Requested:</strong> {{service}}</p>
<p><strong>Budget:</strong> {{budget}}</p>

<hr>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>

<p style="color: #666; font-size: 12px;">
  This email was sent from the AI-Code-Marketplace contact form.
</p>
```

### Step 6: Save the Template
Click "Save" to update your template.

## Variables Being Sent from Our Code

Our contact form sends these variables:
- `to_email` - The recipient email (ugameropbolte@gmail.com)
- `from_name` - Sender's name
- `from_email` - Sender's email
- `company` - Company name
- `service` - Selected service
- `budget` - Budget range
- `message` - The message content
- `ticket_id` - Unique ticket ID
- `date` - Submission date/time

## Creating a User Confirmation Template (Optional)

If you want to send confirmation emails to users, create a new template:

### Step 1: Create New Template
Click "Create New Template" in EmailJS dashboard.

### Step 2: Configure User Template

#### To email:
```
{{to_email}}
```

#### From name:
```
AI-Code-Marketplace
```

#### Subject:
```
Thank you for contacting us - Ticket #{{ticket_id}}
```

#### Content:
```html
<h2>Thank you for reaching out, {{to_name}}!</h2>

<p>We've received your inquiry and will get back to you within 24 hours.</p>

<p><strong>Your Ticket ID:</strong> {{ticket_id}}</p>

<h3>Your Request Summary:</h3>
<p><strong>Service:</strong> {{service}}</p>
<p><strong>Message:</strong><br>{{message}}</p>

<hr>

<p>If you have any urgent questions, feel free to reply to this email.</p>

<p>Best regards,<br>
AI-Code-Marketplace Team</p>
```

### Step 3: Update .env File
After creating the user template, update your `.env` file with the new template ID:
```
VITE_EMAILJS_USER_TEMPLATE_ID=your_new_template_id_here
```

## Quick Fix for Immediate Testing

If you just want to test quickly, the minimum you need is:

1. Go to your template in EmailJS
2. In the "To email" field, put: `ugameropbolte@gmail.com`
3. Save the template
4. Try the contact form again

## Testing Your Setup

After making these changes:
1. Go to http://localhost:5174/test-email
2. Click "Run EmailJS Test"
3. You should see a success message
4. Check your email inbox for the test email

## Troubleshooting

- **Still getting "recipients address is empty"**: Make sure you saved the template after adding the "To email" field
- **Not receiving emails**: Check your spam folder
- **401 Unauthorized**: Your public key is wrong - check EmailJS Account > API Keys
- **404 Not Found**: Your template ID or service ID is wrong
