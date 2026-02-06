import { a, defineData, type ClientSchema } from "@aws-amplify/backend"

const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      subject: a.string().required(),
      message: a.string().required(),
      status: a.string().default("NEW"),
      userAgent: a.string(),
      ipAddress: a.string(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["create"]),
      allow.authenticated().to(["read", "list", "update", "delete"])
    ])
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
})
