import { getAmplifyDataClientConfig, type DataClientEnv } from "@aws-amplify/backend-function/runtime"
import { SESClient, SendEmailCommand, type SendEmailCommandInput } from "@aws-sdk/client-ses"
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/data"
import type { Schema } from "../../data/resource"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 24
type RuntimeEnv = DataClientEnv & {
  SES_FROM: string
  SES_TO: string
  SES_ENABLE_REPLY_TO?: string
  MIN_SUBMIT_AGE_MS?: string
}

const runtimeEnv = process.env as unknown as RuntimeEnv
const MIN_SUBMIT_AGE_MS = Number.parseInt(runtimeEnv.MIN_SUBMIT_AGE_MS ?? "3000", 10)

const sesClient = new SESClient({ region: "eu-central-1" })
const WEBSITE_URL = "https://bchms-rendsburg-ug.de"

const BRAND = {
  dark: "#204734",
  medium: "#2f7a52",
  light: "#67b77f",
  pale: "#eef7f0",
  text: "#193326",
  muted: "#4f6d5c",
}

const buildDataClient = () => generateClient<Schema>()
type DataClient = ReturnType<typeof buildDataClient>

let dataClient: DataClient | null = null

const getDataClient = async (): Promise<DataClient> => {
  if (dataClient) {
    return dataClient
  }

  const { resourceConfig, libraryOptions } = await getAmplifyDataClientConfig(runtimeEnv)
  Amplify.configure(resourceConfig, libraryOptions)
  dataClient = buildDataClient()
  return dataClient
}

const failResponse = (requestId: string, message: string) => ({
  success: false,
  requestId,
  message,
})

const normalizeSingleLine = (value: string) => value.trim().replace(/\s+/g, " ")
const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

const nl2br = (value: string) => escapeHtml(value).replaceAll("\n", "<br />")
const parseRecipientList = (value: string) =>
  [...new Set(value.split(/[,\s;]+/).map((entry) => entry.trim()).filter((entry) => entry.length > 0))]

const renderEmailShell = ({
  preheader,
  title,
  subtitle,
  contentHtml,
}: {
  preheader: string
  title: string
  subtitle: string
  contentHtml: string
}) => `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.pale};font-family:'Plus Jakarta Sans',Arial,sans-serif;color:${BRAND.text};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.pale};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #d7e8dd;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg, ${BRAND.dark}, ${BRAND.medium});padding:24px 28px;">
                <p style="margin:0 0 6px 0;color:#d9f1e1;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">BCHMS Rendsburg UG</p>
                <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;font-weight:800;">${escapeHtml(title)}</h1>
                <p style="margin:10px 0 0 0;color:#e9f8ed;font-size:15px;line-height:1.6;">${escapeHtml(subtitle)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px 14px 28px;">
                ${contentHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 24px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.pale};border:1px solid #d7e8dd;border-radius:12px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <p style="margin:0;font-size:13px;line-height:1.6;color:${BRAND.muted};">
                        BCHMS Rendsburg UG<br />
                        <a href="${WEBSITE_URL}" style="color:${BRAND.medium};text-decoration:none;">${WEBSITE_URL}</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

const buildInternalEmailText = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) =>
  [
    "Neue Kontaktanfrage über bchms-rendsburg-ug.de",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    "",
    "Nachricht:",
    message,
  ].join("\n")

const buildInternalEmailHtml = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) =>
  renderEmailShell({
    preheader: "Neue Kontaktanfrage eingegangen",
    title: "Neue Kontaktanfrage",
    subtitle: "Es ist eine neue Anfrage über das Kontaktformular eingegangen.",
    contentHtml: `
      <p style="margin:0 0 18px 0;font-size:15px;line-height:1.7;color:${BRAND.text};">
        Bitte zeitnah prüfen und beantworten.
      </p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #d7e8dd;border-radius:12px;background:#fff;">
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #e7efe9;">
            <p style="margin:0;font-size:12px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">Name</p>
            <p style="margin:4px 0 0 0;font-size:16px;color:${BRAND.text};font-weight:700;">${escapeHtml(name)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #e7efe9;">
            <p style="margin:0;font-size:12px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">E-Mail</p>
            <p style="margin:4px 0 0 0;font-size:16px;"><a href="mailto:${escapeHtml(email)}" style="color:${BRAND.medium};text-decoration:none;font-weight:700;">${escapeHtml(email)}</a></p>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;">
            <p style="margin:0 0 8px 0;font-size:12px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">Nachricht</p>
            <p style="margin:0;font-size:15px;line-height:1.7;color:${BRAND.text};">${nl2br(message)}</p>
          </td>
        </tr>
      </table>
    `,
  })

const buildConfirmationEmailText = ({
  name,
  message,
}: {
  name: string
  message: string
}) =>
  [
    `Hallo ${name},`,
    "",
    "vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.",
    "",
    "Ihre Nachricht:",
    message,
    "",
    `Website: ${WEBSITE_URL}`,
  ].join("\n")

const buildConfirmationEmailHtml = ({
  name,
  message,
}: {
  name: string
  message: string
}) =>
  renderEmailShell({
    preheader: "Wir haben Ihre Anfrage erhalten",
    title: "Vielen Dank für Ihre Anfrage",
    subtitle: "Unser Team meldet sich schnellstmöglich bei Ihnen.",
    contentHtml: `
      <p style="margin:0 0 16px 0;font-size:16px;line-height:1.7;color:${BRAND.text};">
        Hallo <strong>${escapeHtml(name)}</strong>,<br />
        wir haben Ihre Nachricht erfolgreich erhalten.
      </p>
      <p style="margin:0 0 18px 0;font-size:15px;line-height:1.7;color:${BRAND.text};">
        Wir prüfen Ihr Anliegen und melden uns schnellstmöglich bei Ihnen zurück.
      </p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #d7e8dd;border-radius:12px;background:${BRAND.pale};">
        <tr>
          <td style="padding:14px 16px;">
            <p style="margin:0 0 8px 0;font-size:12px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">Ihre Nachricht</p>
            <p style="margin:0;font-size:15px;line-height:1.7;color:${BRAND.text};">${nl2br(message)}</p>
          </td>
        </tr>
      </table>
    `,
  })

export const handler: Schema["submitContact"]["functionHandler"] = async (event, context) => {
  const requestId = context.awsRequestId ?? "unknown-request-id"

  const name = normalizeSingleLine(event.arguments.name ?? "")
  const email = normalizeSingleLine(event.arguments.email ?? "").toLowerCase()
  const message = event.arguments.message?.trim() ?? ""
  const honeypot = event.arguments.honeypot?.trim() ?? ""
  const formStartedAt = event.arguments.formStartedAt
  const now = Date.now()

  if (honeypot.length > 0) {
    console.info(JSON.stringify({ requestId, outcome: "blocked_honeypot" }))
    return failResponse(requestId, "Die Anfrage konnte nicht verarbeitet werden.")
  }

  if (!Number.isFinite(formStartedAt)) {
    return failResponse(requestId, "Ungültige Anfragedaten.")
  }

  // GraphQL Int is 32-bit, so frontend sends epoch seconds. Normalize to milliseconds.
  const formStartedAtMs = formStartedAt * 1000
  const submitAgeMs = now - formStartedAtMs
  if (submitAgeMs < MIN_SUBMIT_AGE_MS) {
    return failResponse(requestId, "Bitte warten Sie einen Moment, bevor Sie das Formular absenden.")
  }

  if (submitAgeMs > MAX_FORM_AGE_MS) {
    return failResponse(requestId, "Das Formular ist abgelaufen. Bitte laden Sie die Seite neu.")
  }

  if (name.length < 2 || name.length > 120) {
    return failResponse(requestId, "Bitte geben Sie einen gültigen Namen ein.")
  }

  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return failResponse(requestId, "Bitte geben Sie eine gültige E-Mail-Adresse ein.")
  }

  if (message.length < 10 || message.length > 5000) {
    return failResponse(requestId, "Bitte geben Sie eine Nachricht zwischen 10 und 5000 Zeichen ein.")
  }

  try {
    const client = await getDataClient()
    const createResult = await client.models.ContactMessage.create({
      name,
      email,
      message,
    })

    if (createResult.errors?.length) {
      console.error(JSON.stringify({ requestId, stage: "store_message", errorCount: createResult.errors.length }))
      return failResponse(requestId, "Es gab ein Problem beim Speichern Ihrer Anfrage.")
    }

    const internalRecipients = parseRecipientList(runtimeEnv.SES_TO ?? "")
    if (internalRecipients.length === 0) {
      console.error(JSON.stringify({ requestId, stage: "config", error: "Missing SES_TO recipients" }))
      return failResponse(requestId, "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.")
    }

    const invalidInternalRecipients = internalRecipients.filter(
      (recipient) => !EMAIL_REGEX.test(recipient) || recipient.length > 254,
    )
    if (invalidInternalRecipients.length > 0) {
      console.error(
        JSON.stringify({
          requestId,
          stage: "config",
          error: "Invalid SES_TO recipients",
          invalidInternalRecipients,
        }),
      )
      return failResponse(requestId, "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.")
    }

    const internalEmailText = buildInternalEmailText({ name, email, message })
    const internalEmailHtml = buildInternalEmailHtml({ name, email, message })
    const enableReplyTo = runtimeEnv.SES_ENABLE_REPLY_TO === "true"
    const internalEmailInput: SendEmailCommandInput = {
      Source: runtimeEnv.SES_FROM,
      Destination: {
        ToAddresses: internalRecipients,
      },
      Message: {
        Subject: {
          Data: "Neue Kontaktanfrage — BCHMS Rendsburg UG",
        },
        Body: {
          Text: {
            Data: internalEmailText,
          },
          Html: {
            Data: internalEmailHtml,
          },
        },
      },
      ...(enableReplyTo ? { ReplyToAddresses: [email] } : {}),
    }
    const internalSesResult = await sesClient.send(new SendEmailCommand(internalEmailInput))

    const confirmationEmailText = buildConfirmationEmailText({ name, message })
    const confirmationEmailHtml = buildConfirmationEmailHtml({ name, message })
    const confirmationSesResult = await sesClient.send(
      new SendEmailCommand({
        Source: runtimeEnv.SES_FROM,
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Subject: {
            Data: "Vielen Dank für Ihre Anfrage — BCHMS Rendsburg UG",
          },
          Body: {
            Text: {
              Data: confirmationEmailText,
            },
            Html: {
              Data: confirmationEmailHtml,
            },
          },
        },
      }),
    )

    console.info(
      JSON.stringify({
        requestId,
        stage: "send_email",
        internalRecipients,
        replyToEnabled: enableReplyTo,
        internalMessageId: internalSesResult.MessageId ?? null,
        confirmationMessageId: confirmationSesResult.MessageId ?? null,
      }),
    )

    return {
      success: true,
      requestId,
      message: "Vielen Dank! Ihre Anfrage wurde gesendet.",
    }
  } catch (error) {
    const normalizedError = error as { name?: string; message?: string; $metadata?: { httpStatusCode?: number } }
    console.error(
      JSON.stringify({
        requestId,
        stage: "submit_contact",
        errorName: normalizedError.name ?? "UnknownError",
        errorCode: normalizedError.$metadata?.httpStatusCode ?? null,
        errorMessage: normalizedError.message ?? "Unknown error",
      }),
    )

    return failResponse(requestId, "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.")
  }
}
