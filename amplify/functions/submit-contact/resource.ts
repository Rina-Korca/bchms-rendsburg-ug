import { defineFunction } from "@aws-amplify/backend"

export const submitContact = defineFunction({
  name: "submit-contact",
  entry: "./handler.ts",
  runtime: 20,
  timeoutSeconds: 15,
  environment: {
    SES_FROM: "no-reply@bchms-rendsburg-ug.de",
    SES_TO: "bchms.rendsburg@gmail.com",
    MIN_SUBMIT_AGE_MS: "3000",
  },
})
