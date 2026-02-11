"use client"

import type { ReactNode } from "react"
import outputs from "@/amplify_outputs.json"
import { Amplify } from "aws-amplify"
import { ConsentAnalytics } from "@/components/consent-analytics"
import { CookieConsentProvider } from "@/components/cookie-consent"

let isAmplifyConfigured = false

if (!isAmplifyConfigured) {
  Amplify.configure(outputs, { ssr: true })
  isAmplifyConfigured = true
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      {children}
      <ConsentAnalytics />
    </CookieConsentProvider>
  )
}
