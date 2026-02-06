import { defineFunction } from "@aws-amplify/backend"

export const sendContactEmail = defineFunction({
  name: "send-contact-email",
  entry: "./handler.ts",
})
