# AWS Setup Guide for Contact Form Email Notifications

## 📋 MANUAL AWS SETUP REQUIRED

### 1. Amazon SES (Simple Email Service) Setup

#### Step 1.1: Verify Sender Email/Domain

**Option A: Verify Single Email (Quick Start)**
1. Go to AWS Console → Amazon SES → Verified identities
2. Click "Create identity"
3. Select "Email address"
4. Enter: `noreply@yourdomain.com` (or your preferred sender email)
5. Click "Create identity"
6. Check your email inbox and click the verification link
7. Wait for status to show "Verified"

**Option B: Verify Domain (Recommended for Production)**
1. Go to AWS Console → Amazon SES → Verified identities
2. Click "Create identity"
3. Select "Domain"
4. Enter your domain: `yourdomain.com`
5. Enable DKIM signing (recommended)
6. Copy the DNS records provided
7. Add these records to your domain's DNS settings:
   - DKIM CNAME records (3 records)
   - MX record (if receiving emails)
   - SPF TXT record: `v=spf1 include:amazonses.com ~all`
   - DMARC TXT record: `v=DMARC1; p=none; rua=mailto:admin@yourdomain.com`
8. Wait for verification (can take up to 72 hours, usually < 1 hour)

#### Step 1.2: Request Production Access (Move Out of Sandbox)

**SES Sandbox Limitations:**
- Can only send TO verified email addresses
- Limited to 200 emails/day
- 1 email/second sending rate

**To Request Production Access:**
1. Go to AWS Console → Amazon SES → Account dashboard
2. Click "Request production access"
3. Fill out the form:
   - **Mail type**: Transactional
   - **Website URL**: Your website URL
   - **Use case description**: 
     ```
     We operate a landscaping business website (BCHMS Rendsburg UG) and need to send:
     1. Contact form notifications to our admin email
     2. Confirmation emails to customers who submit contact forms
     
     Expected volume: ~50-100 emails/day
     We have proper opt-in mechanisms and will only send transactional emails.
     ```
   - **Compliance**: Confirm you comply with AWS policies
4. Submit request
5. AWS typically responds within 24 hours

**IMPORTANT**: Until production access is approved, you can only send emails to:
- Verified email addresses
- The admin email: blerim-geci@hotmail.com (must verify this too)

#### Step 1.3: Verify Admin Email (Required for Sandbox Testing)

1. Go to AWS Console → Amazon SES → Verified identities
2. Click "Create identity"
3. Select "Email address"
4. Enter: `blerim-geci@hotmail.com`
5. Check the inbox and verify
6. Now you can test the contact form even in sandbox mode

#### Step 1.4: Update Lambda Environment Variable

After verifying your sender email/domain:

1. Go to AWS Console → Lambda → Functions
2. Find function: `send-contact-email-<env>`
3. Go to Configuration → Environment variables
4. Edit `FROM_EMAIL` to your verified email:
   - If using domain: `noreply@yourdomain.com`
   - If using single email: `your-verified-email@domain.com`
5. Save

**OR** update in `amplify/backend.ts` before deployment:
```typescript
backend.sendContactEmail.addEnvironment("FROM_EMAIL", "noreply@yourdomain.com")
```

---

### 2. IAM Permissions (Already Configured in Code)

The Lambda function automatically gets these permissions via `amplify/backend.ts`:

```typescript
{
  "Effect": "Allow",
  "Action": [
    "ses:SendEmail",
    "ses:SendRawEmail"
  ],
  "Resources": ["*"]
}
```

**No manual IAM setup needed** - Amplify handles this automatically.

---

### 3. DynamoDB Streams (Already Configured)

The Lambda is automatically triggered by DynamoDB streams when a new ContactMessage is created.

**No manual setup needed** - configured in `amplify/backend.ts`.

---

## 🔒 Security Configuration Explained

### Authorization Rules (amplify/data/resource.ts)

```typescript
.authorization((allow) => [
  allow.publicApiKey().to(["create"]),
  allow.authenticated().to(["read", "list", "update", "delete"])
])
```

**What this means:**
- ✅ **Public users** (visitors): Can CREATE contact messages only
- ❌ **Public users**: CANNOT read, list, update, or delete messages
- ✅ **Authenticated users**: Can read, list, update, delete (for admin dashboard)

**Why it's secure:**
1. Visitors can submit forms but cannot see other submissions
2. No data leakage - public API key only allows creation
3. Admin access requires authentication (Cognito user)
4. Emails are sent server-side via Lambda (no secrets in browser)

### Email Security

**FROM Address:**
- Uses verified SES identity (not user's email)
- Prevents email spoofing
- Complies with DMARC/SPF policies

**Reply-To:**
- Admin notification sets Reply-To to user's email
- Admin can reply directly to customer
- No spoofing risk

---

## 📧 Email Flow

1. User submits contact form → Creates record in DynamoDB
2. DynamoDB Stream triggers Lambda function
3. Lambda sends 2 emails via SES:
   - **Email 1**: Admin notification to `blerim-geci@hotmail.com`
   - **Email 2**: Confirmation to user's email
4. Both emails sent from verified `FROM_EMAIL` address

---

## ✅ Pre-Deployment Checklist

- [ ] Verify sender email in SES (or domain)
- [ ] Verify admin email: blerim-geci@hotmail.com (for sandbox testing)
- [ ] Update FROM_EMAIL in amplify/backend.ts
- [ ] Request SES production access (if sending to unverified emails)
- [ ] Configure DNS records (if using domain verification)
- [ ] Test in sandbox mode first

---

## 🧪 Testing in Sandbox Mode

Before production access:

1. Verify both emails in SES:
   - Sender: `noreply@yourdomain.com`
   - Admin: `blerim-geci@hotmail.com`
2. Submit test contact form
3. Check both inboxes for emails
4. Verify DynamoDB has the record
5. Check Lambda logs in CloudWatch

---

## 🚀 Moving to Production

After SES production access approved:

1. No code changes needed
2. Can now send to ANY email address
3. Higher sending limits (50,000 emails/day default)
4. Monitor bounce/complaint rates in SES dashboard
5. Set up SNS notifications for bounces (optional)

---

## 📊 Monitoring

**CloudWatch Logs:**
- Lambda function: `/aws/lambda/send-contact-email-<env>`
- Check for SES errors, email delivery status

**SES Dashboard:**
- Sending statistics
- Bounce/complaint rates
- Reputation metrics

**DynamoDB:**
- View all contact messages
- Check `status` field (NEW/READ)
- Query by date using `createdAt`

---

## 🆘 Troubleshooting

**Emails not sending:**
1. Check Lambda CloudWatch logs for errors
2. Verify FROM_EMAIL is verified in SES
3. Check SES sending limits (sandbox vs production)
4. Verify admin email if in sandbox mode

**User not receiving confirmation:**
1. Check spam folder
2. Verify email address is valid
3. Check SES bounce notifications
4. Ensure production access if not verified

**Admin not receiving notification:**
1. Verify blerim-geci@hotmail.com in SES (sandbox mode)
2. Check spam folder
3. Verify Lambda has SES permissions
4. Check CloudWatch logs

---

## 💰 Cost Estimate

**SES Pricing (EU-Central-1):**
- First 62,000 emails/month: FREE (if sent from EC2/Lambda)
- After that: $0.10 per 1,000 emails

**Lambda:**
- First 1M requests/month: FREE
- After that: $0.20 per 1M requests

**DynamoDB:**
- First 25 GB storage: FREE
- First 25 WCU/RCU: FREE

**Expected monthly cost for ~1,000 contact forms: $0.00** (within free tier)
