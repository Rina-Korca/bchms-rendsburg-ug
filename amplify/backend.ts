import { defineBackend } from "@aws-amplify/backend"
import { StartingPosition } from "aws-cdk-lib/aws-lambda"
import { data } from "./data/resource.js"
import { sendContactEmail } from "./functions/send-contact-email/resource.js"
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam"

const backend = defineBackend({
  data,
  sendContactEmail,
})

// Get the ContactMessage table
const contactMessageTable = backend.data.resources.tables["ContactMessage"]

// Add DynamoDB stream trigger to Lambda
if (contactMessageTable) {
  backend.sendContactEmail.resources.lambda.addEventSourceMapping(
    "ContactMessageStreamTrigger",
    {
      eventSourceArn: contactMessageTable.tableStreamArn,
      startingPosition: StartingPosition.LATEST,
      batchSize: 1,
    }
  )
}

// Grant SES permissions to Lambda
const sesPolicy = new Policy(backend.sendContactEmail.resources.lambda, "SESPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["ses:SendEmail", "ses:SendRawEmail"],
      resources: ["*"],
    }),
  ],
})
backend.sendContactEmail.resources.lambda.role?.attachInlinePolicy(sesPolicy)

// Add environment variable for FROM_EMAIL
backend.sendContactEmail.addEnvironment("FROM_EMAIL", "blerim-geci@hotmail.com")
