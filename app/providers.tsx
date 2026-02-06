"use client"

import type { ReactNode } from "react"
import { Amplify } from "aws-amplify"
import outputs from "@/amplify_outputs.json"

Amplify.configure(outputs)

export default function Providers({ children }: { children: ReactNode }) {
  return children
}
