'use client'

import Link from 'next/link'
import { Leaf, Mail, MapPin, Phone } from 'lucide-react'

import { useCookieConsent } from '@/components/cookie-consent'

const quickLinks = [
  { name: 'Startseite', href: '/' },
  { name: 'Über uns', href: '/#about' },
  { name: 'Leistungen', href: '/#services' },
  { name: 'Unser Team', href: '/#team' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Kontakt', href: '/#contact' },
]

const legalLinks = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
  { name: 'Cookie-Richtlinie', href: '/cookie-richtlinie' },
]

export function Footer() {
  const { openPreferences } = useCookieConsent()

  return (
    <footer className="relative z-10 bg-green-dark pt-20 pb-8 text-white md:pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-light">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BCHMS Rendsburg</span>
            </Link>
            <p className="max-w-lg text-sm leading-relaxed text-white/75">
              Professioneller Garten- und Landschaftsbau in Rendsburg und
              Umgebung.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Schnellzugriff</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-light" />
                <span className="text-white/75">
                  Graf-Zeppelin Str. 11, 24768 Rendsburg, Deutschland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-green-light" />
                <a
                  href="tel:015225972872"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  01522 5972872
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-green-light" />
                <span className="text-white/75">blerim-geci@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/70">© 2026 Blerim Geci</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/80">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={openPreferences}
              className="cursor-pointer bg-transparent p-0 text-left transition-colors hover:text-white"
            >
              Cookie-Einstellungen
            </button>
          </div>

          <p className="mt-4 text-sm text-white/75">Powered by Clearline Tech</p>
        </div>
      </div>
    </footer>
  )
}
