import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import type { DynamoDBStreamEvent } from "aws-lambda"

const ses = new SESClient({ region: process.env.AWS_REGION || "eu-central-1" })

const ADMIN_EMAIL = "blerim-geci@hotmail.com"
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@yourdomain.com" // MUST be verified in SES

export const handler = async (event: DynamoDBStreamEvent) => {
  console.log("Received event:", JSON.stringify(event, null, 2))

  for (const record of event.Records) {
    if (record.eventName === "INSERT" && record.dynamodb?.NewImage) {
      const newImage = record.dynamodb.NewImage

      // Extract data from DynamoDB stream
      const name = newImage.name?.S || "Unknown"
      const email = newImage.email?.S || ""
      const subject = newImage.subject?.S || "No Subject"
      const message = newImage.message?.S || ""
      const createdAt = newImage.createdAt?.S || new Date().toISOString()

      if (!email) {
        console.error("No email found in record")
        continue
      }

      try {
        // Email 1: Admin Notification
        await ses.send(
          new SendEmailCommand({
            Source: FROM_EMAIL,
            Destination: { ToAddresses: [ADMIN_EMAIL] },
            ReplyToAddresses: [email], // User can reply directly
            Message: {
              Subject: { Data: `New Contact Form Message: ${subject}` },
              Body: {
                Html: {
                  Data: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>From:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br>")}</p>
                    <hr>
                    <p><small>Received: ${new Date(createdAt).toLocaleString("de-DE")}</small></p>
                  `,
                },
                Text: {
                  Data: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Received: ${new Date(createdAt).toLocaleString("de-DE")}
                  `,
                },
              },
            },
          })
        )
        console.log(`Admin notification sent for ${email}`)

        // Email 2: User Confirmation
        await ses.send(
          new SendEmailCommand({
            Source: FROM_EMAIL,
            Destination: { ToAddresses: [email] },
            Message: {
              Subject: { Data: "Wir haben Ihre Nachricht erhalten" },
              Body: {
                Html: {
                  Data: `
                    <h2>Vielen Dank für Ihre Anfrage!</h2>
                    <p>Hallo ${name},</p>
                    <p>Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.</p>
                    <p><strong>Ihre Anfrage:</strong></p>
                    <p><strong>Betreff:</strong> ${subject}</p>
                    <p><strong>Nachricht:</strong> ${message.substring(0, 200)}${message.length > 200 ? "..." : ""}</p>
                    <hr>
                    <p>Wir melden uns in der Regel innerhalb von 24-48 Stunden.</p>
                    <p>Mit freundlichen Grüßen,<br>BCHMS Rendsburg UG Team</p>
                  `,
                },
                Text: {
                  Data: `
Vielen Dank für Ihre Anfrage!

Hallo ${name},

Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.

Ihre Anfrage:
Betreff: ${subject}
Nachricht: ${message.substring(0, 200)}${message.length > 200 ? "..." : ""}

---
Wir melden uns in der Regel innerhalb von 24-48 Stunden.

Mit freundlichen Grüßen,
BCHMS Rendsburg UG Team
                  `,
                },
              },
            },
          })
        )
        console.log(`Confirmation email sent to ${email}`)
      } catch (error) {
        console.error("Error sending emails:", error)
        // Don't throw - we don't want to retry failed emails indefinitely
      }
    }
  }

  return { statusCode: 200, body: "Processed" }
}
