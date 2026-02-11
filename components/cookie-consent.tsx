'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'

type ConsentAction = 'accept_all' | 'reject_all' | 'save_preferences'

type ConsentState = {
  necessary: true
  statistics: boolean
  marketing: boolean
}

type ConsentRecord = {
  version: number
  updatedAt: string
  action: ConsentAction
  consent: ConsentState
}

type ConsentPreferences = Pick<ConsentState, 'statistics' | 'marketing'>

type CookieConsentContextValue = {
  consent: ConsentState
  hasConsent: boolean
  isReady: boolean
  openPreferences: () => void
  closePreferences: () => void
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (next: ConsentPreferences) => void
}

const CONSENT_STORAGE_KEY = 'bchms_cookie_consent_v1'
const CONSENT_LOG_STORAGE_KEY = 'bchms_cookie_consent_log_v1'
const CONSENT_VERSION = 1
const MAX_LOG_ENTRIES = 50

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  statistics: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

function parseStoredConsent(raw: string | null): ConsentRecord | null {
  if (!raw) return null

  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null

    const parsedObject = parsed as Record<string, unknown>
    const consentCandidate = parsedObject.consent
    if (!consentCandidate || typeof consentCandidate !== 'object') return null

    const consentObject = consentCandidate as Record<string, unknown>
    const actionCandidate = parsedObject.action
    const action: ConsentAction =
      actionCandidate === 'accept_all' ||
      actionCandidate === 'reject_all' ||
      actionCandidate === 'save_preferences'
        ? actionCandidate
        : 'save_preferences'

    return {
      version:
        typeof parsedObject.version === 'number'
          ? parsedObject.version
          : CONSENT_VERSION,
      updatedAt:
        typeof parsedObject.updatedAt === 'string'
          ? parsedObject.updatedAt
          : new Date().toISOString(),
      action,
      consent: {
        necessary: true,
        statistics: consentObject.statistics === true,
        marketing: consentObject.marketing === true,
      },
    }
  } catch {
    return null
  }
}

function appendConsentLog(entry: ConsentRecord) {
  try {
    const raw = localStorage.getItem(CONSENT_LOG_STORAGE_KEY)
    const parsed: unknown = raw ? JSON.parse(raw) : []
    const log = Array.isArray(parsed)
      ? parsed.filter((item) => item && typeof item === 'object')
      : []

    const nextLog = [...log, entry].slice(-MAX_LOG_ENTRIES)
    localStorage.setItem(CONSENT_LOG_STORAGE_KEY, JSON.stringify(nextLog))
  } catch {
    // noop: consent capture should not break rendering
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT)
  const [hasConsent, setHasConsent] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const [draftPreferences, setDraftPreferences] = useState<ConsentPreferences>({
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = parseStoredConsent(localStorage.getItem(CONSENT_STORAGE_KEY))
    if (stored) {
      setConsent(stored.consent)
      setDraftPreferences({
        statistics: stored.consent.statistics,
        marketing: stored.consent.marketing,
      })
      setHasConsent(true)
    }

    setIsReady(true)
  }, [])

  const setAndPersistConsent = useCallback(
    (nextPreferences: ConsentPreferences, action: ConsentAction) => {
      const nextConsent: ConsentState = {
        necessary: true,
        statistics: nextPreferences.statistics,
        marketing: nextPreferences.marketing,
      }

      const entry: ConsentRecord = {
        version: CONSENT_VERSION,
        updatedAt: new Date().toISOString(),
        action,
        consent: nextConsent,
      }

      setConsent(nextConsent)
      setDraftPreferences(nextPreferences)
      setHasConsent(true)
      setIsPreferencesOpen(false)

      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(entry))
      appendConsentLog(entry)
    },
    [],
  )

  const openPreferences = useCallback(() => {
    setDraftPreferences({
      statistics: consent.statistics,
      marketing: consent.marketing,
    })
    setIsPreferencesOpen(true)
  }, [consent.marketing, consent.statistics])

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false)
  }, [])

  const acceptAll = useCallback(() => {
    setAndPersistConsent({ statistics: true, marketing: true }, 'accept_all')
  }, [setAndPersistConsent])

  const rejectAll = useCallback(() => {
    setAndPersistConsent({ statistics: false, marketing: false }, 'reject_all')
  }, [setAndPersistConsent])

  const savePreferences = useCallback(
    (next: ConsentPreferences) => {
      setAndPersistConsent(next, 'save_preferences')
    },
    [setAndPersistConsent],
  )

  const contextValue = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasConsent,
      isReady,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectAll,
      savePreferences,
    }),
    [
      acceptAll,
      closePreferences,
      consent,
      hasConsent,
      isReady,
      openPreferences,
      rejectAll,
      savePreferences,
    ],
  )

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {isReady && !hasConsent ? (
        <div className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6">
          <div className="mx-auto max-w-5xl rounded-2xl border border-green-medium/25 bg-white p-5 shadow-2xl sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">Cookie-Hinweis</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Wir verwenden notwendige Cookies sowie optional Statistik- und
              Marketing-Cookies. Nicht notwendige Cookies werden erst nach
              Ihrer Einwilligung gesetzt.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button onClick={acceptAll}>Alle akzeptieren</Button>
              <Button variant="outline" onClick={rejectAll}>
                Alle ablehnen
              </Button>
              <Button variant="ghost" onClick={openPreferences}>
                Einstellungen verwalten
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <Dialog open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
        <DialogContent showCloseButton>
          <DialogHeader>
            <DialogTitle>Cookie-Einstellungen</DialogTitle>
            <DialogDescription>
              Legen Sie fest, welche optionalen Cookies aktiv sein sollen.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-foreground">
                  Notwendig (nicht deaktivierbar)
                </p>
                <p className="text-sm text-muted-foreground">
                  Erforderlich für den technischen Betrieb der Website.
                </p>
              </div>
              <Switch checked disabled aria-label="Notwendige Cookies" />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-foreground">Statistik</p>
                <p className="text-sm text-muted-foreground">
                  Hilft uns, die Nutzung der Website zu analysieren.
                </p>
              </div>
              <Switch
                checked={draftPreferences.statistics}
                onCheckedChange={(checked) =>
                  setDraftPreferences((current) => ({
                    ...current,
                    statistics: checked,
                  }))
                }
                aria-label="Statistik-Cookies"
              />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-foreground">Marketing</p>
                <p className="text-sm text-muted-foreground">
                  Ermöglicht relevante Werbe- und Kampagnenauswertung.
                </p>
              </div>
              <Switch
                checked={draftPreferences.marketing}
                onCheckedChange={(checked) =>
                  setDraftPreferences((current) => ({
                    ...current,
                    marketing: checked,
                  }))
                }
                aria-label="Marketing-Cookies"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={() => {
                savePreferences(draftPreferences)
              }}
            >
              Speichern
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error(
      'useCookieConsent muss innerhalb von CookieConsentProvider verwendet werden.',
    )
  }

  return context
}
