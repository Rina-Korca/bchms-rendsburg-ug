import { defineBackend } from "@aws-amplify/backend"
import { PolicyStatement } from "aws-cdk-lib/aws-iam"
import { auth } from "./auth/resource.js"
import { data } from "./data/resource.js"
import { submitContact } from "./functions/submit-contact/resource.js"

const backend = defineBackend({
  auth,
  data,
  submitContact,
})

backend.submitContact.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ["ses:SendEmail"],
    resources: ["arn:aws:ses:eu-central-1:219895243098:identity/bchms-rendsburg-ug.de"],
  }),
)
