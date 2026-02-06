import { a, defineData, type ClientSchema } from "@aws-amplify/backend"

const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      phone: a.string(),
      service: a.string(),
      message: a.string().required(),
    })
    .authorization((allow) => [allow.publicApiKey().to(["create"])])
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
