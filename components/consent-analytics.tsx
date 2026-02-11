'use client'

import dynamic from 'next/dynamic'

import { useCookieConsent } from '@/components/cookie-consent'

const VercelAnalytics = dynamic(
  () => import('@vercel/analytics/next').then((module) => module.Analytics),
  { ssr: false },
)

export function ConsentAnalytics() {
  const { consent, isReady } = useCookieConsent()

  if (!isReady || !consent.statistics) {
    return null
  }

  return <VercelAnalytics />
}
