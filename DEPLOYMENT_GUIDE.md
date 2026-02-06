# Deployment & Testing Guide

## 🚀 DEPLOYMENT STEPS

### Step 1: Deploy Amplify Backend

```bash
# Install dependencies (if not done)
pnpm install

# Deploy to Amplify sandbox (for local testing)
pnpm exec ampx sandbox

# OR deploy to production (via Amplify Hosting)
git add .
git commit -m "Add contact form with email notifications"
git push origin main
```

### Step 2: Configure Environment

After deployment, update the Lambda environment variable:

**Option A: Via AWS Console**
1. Go to Lambda → Functions → `send-contact-email-*`
2. Configuration → Environment variables
3. Edit `FROM_EMAIL` to your verified SES email
4. Save

**Option B: Update code before deployment**
Edit `amplify/backend.ts`:
```typescript
backend.sendContactEmail.addEnvironment("FROM_EMAIL", "noreply@yourdomain.com")
```
Then redeploy.

### Step 3: Verify Deployment

```bash
# Check if backend is deployed
pnpm exec ampx sandbox status

# View outputs
cat amplify_outputs.json
```

---

## 🧪 TESTING INSTRUCTIONS

### Local Testing (Sandbox)

1. **Start Amplify Sandbox:**
   ```bash
   pnpm exec ampx sandbox
   ```

2. **Start Next.js Dev Server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000/#contact
   ```

4. **Submit test form:**
   - Fill in all required fields
   - Use a real email address
   - Click "Anfrage senden"

5. **Verify:**
   - Form shows success message
   - Check DynamoDB table in AWS Console
   - Check admin email inbox (blerim-geci@hotmail.com)
   - Check user email inbox (the one you entered)
   - Check Lambda logs in CloudWatch

### Production Testing

1. **Deploy to Amplify Hosting:**
   ```bash
   git push origin main
   ```

2. **Wait for deployment** (5-10 minutes)

3. **Visit production URL:**
   ```
   https://your-app.amplifyapp.com/#contact
   ```

4. **Submit real contact form**

5. **Verify emails received**

---

## ✅ TESTING CHECKLIST

### Before Testing
- [ ] SES sender email verified
- [ ] SES admin email verified (sandbox mode)
- [ ] FROM_EMAIL environment variable set
- [ ] Amplify backend deployed
- [ ] amplify_outputs.json exists

### Functional Tests
- [ ] Form validation works (required fields)
- [ ] Email format validation works
- [ ] Honeypot spam protection works (fill hidden field)
- [ ] Minimum time protection works (submit < 3 seconds)
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Form resets after submission
- [ ] Loading state shows during submission
- [ ] Error handling works (disconnect internet, try submit)

### Backend Tests
- [ ] Record created in DynamoDB
- [ ] Record has correct data (name, email, subject, message)
- [ ] Record has status = "NEW"
- [ ] Record has userAgent
- [ ] Record has createdAt timestamp

### Email Tests
- [ ] Admin receives notification email
- [ ] Admin email has correct subject
- [ ] Admin email has user's name, email, message
- [ ] Admin email Reply-To is user's email
- [ ] User receives confirmation email
- [ ] User email has correct subject (German)
- [ ] User email has personalized content
- [ ] Both emails arrive within 1 minute

### Security Tests
- [ ] Public users cannot read messages (try GraphQL query)
- [ ] Public users cannot list messages
- [ ] Public users cannot update messages
- [ ] Public users cannot delete messages
- [ ] Only create operation works with API key

---

## 🔍 DEBUGGING

### Check Lambda Logs

```bash
# Via AWS Console
1. Go to CloudWatch → Log groups
2. Find: /aws/lambda/send-contact-email-*
3. View latest log stream
4. Look for errors or "Email sent" messages

# Via CLI
aws logs tail /aws/lambda/send-contact-email-<env> --follow
```

### Check DynamoDB Records

```bash
# Via AWS Console
1. Go to DynamoDB → Tables
2. Find: ContactMessage-*
3. Click "Explore table items"
4. View recent submissions

# Via CLI
aws dynamodb scan --table-name ContactMessage-<table-id>
```

### Check SES Sending Statistics

```bash
# Via AWS Console
1. Go to SES → Account dashboard
2. View sending statistics
3. Check for bounces/complaints

# Via CLI
aws ses get-send-statistics
```

### Common Issues

**Issue: Emails not sending**
- Check Lambda logs for SES errors
- Verify FROM_EMAIL is verified in SES
- Check SES sandbox restrictions
- Verify admin email if in sandbox

**Issue: Form submission fails**
- Check browser console for errors
- Verify amplify_outputs.json exists
- Check API key is valid
- Verify network connectivity

**Issue: Record not in DynamoDB**
- Check authorization rules
- Verify API key permissions
- Check GraphQL errors in browser console
- Verify Amplify is configured correctly

**Issue: Lambda not triggered**
- Check DynamoDB stream is enabled
- Verify Lambda has event source mapping
- Check Lambda execution role permissions
- View CloudWatch logs for invocation errors

---

## 📊 MONITORING

### Key Metrics to Watch

**Lambda:**
- Invocations
- Errors
- Duration
- Throttles

**SES:**
- Emails sent
- Bounce rate (keep < 5%)
- Complaint rate (keep < 0.1%)
- Reputation status

**DynamoDB:**
- Read/Write capacity
- Item count
- Storage size

### Set Up Alarms (Optional)

```bash
# CloudWatch alarm for Lambda errors
aws cloudwatch put-metric-alarm \
  --alarm-name contact-email-errors \
  --alarm-description "Alert on Lambda errors" \
  --metric-name Errors \
  --namespace AWS/Lambda \
  --statistic Sum \
  --period 300 \
  --threshold 1 \
  --comparison-operator GreaterThanThreshold

# SES bounce rate alarm
aws cloudwatch put-metric-alarm \
  --alarm-name ses-high-bounce-rate \
  --alarm-description "Alert on high bounce rate" \
  --metric-name Reputation.BounceRate \
  --namespace AWS/SES \
  --statistic Average \
  --period 3600 \
  --threshold 0.05 \
  --comparison-operator GreaterThanThreshold
```

---

## 🔄 UPDATING

### Update Email Templates

Edit `amplify/functions/send-contact-email/handler.ts`:
- Modify HTML/text email content
- Change subject lines
- Update sender name

Then redeploy:
```bash
pnpm exec ampx sandbox  # or git push for production
```

### Update Form Fields

Edit `amplify/data/resource.ts` to add/remove fields:
```typescript
ContactMessage: a.model({
  // Add new field
  phone: a.string(),
})
```

Update frontend form in `components/contact-form-section.tsx`

Redeploy backend and frontend.

### Update Authorization Rules

Edit `amplify/data/resource.ts`:
```typescript
.authorization((allow) => [
  allow.publicApiKey().to(["create"]),
  allow.owner().to(["read", "update", "delete"]), // Owner-based access
])
```

---

## 🆘 SUPPORT

**AWS Documentation:**
- [Amplify Gen 2 Docs](https://docs.amplify.aws/gen2/)
- [SES Developer Guide](https://docs.aws.amazon.com/ses/)
- [Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)

**Troubleshooting:**
- Check CloudWatch Logs first
- Verify all AWS setup steps completed
- Test in sandbox before production
- Monitor SES reputation metrics

**Common Commands:**
```bash
# View Amplify status
pnpm exec ampx sandbox status

# View logs
pnpm exec ampx sandbox logs

# Delete sandbox
pnpm exec ampx sandbox delete

# Deploy production
git push origin main
```
