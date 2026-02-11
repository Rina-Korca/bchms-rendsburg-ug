import { a, defineData, type ClientSchema } from "@aws-amplify/backend"
import { submitContact } from "../functions/submit-contact/resource.js"

const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      message: a.string().required(),
    })
    .authorization((allow) => [allow.group("admin").to(["read"])]),
  SubmitContactResult: a.customType({
    success: a.boolean().required(),
    requestId: a.string().required(),
    message: a.string(),
  }),
  submitContact: a
    .mutation()
    .arguments({
      name: a.string().required(),
      email: a.string().required(),
      message: a.string().required(),
      honeypot: a.string(),
      formStartedAt: a.integer().required(),
    })
    .returns(a.ref("SubmitContactResult"))
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(submitContact)),
}).authorization((allow) => [allow.resource(submitContact).to(["mutate"])])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
})
