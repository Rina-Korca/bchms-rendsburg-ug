import Link from 'next/link'

import { Footer } from '@/components/footer'

export default function CookieRichtliniePage() {
  return (
    <main className="min-h-screen bg-green-pale/40">
      <section className="container mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Link href="/" className="text-sm text-green-medium hover:underline">
          Zur Startseite
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Cookie-Richtlinie
        </h1>

        <div className="mt-10 space-y-8 text-foreground">
          <div>
            <h2 className="text-2xl font-semibold">Was sind Cookies?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Welche Arten von Cookies verwenden wir?
            </h2>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-semibold">1. Notwendige Cookies</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  Diese Cookies sind für den Betrieb der Website erforderlich.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">2. Statistik-Cookies</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  Diese Cookies helfen uns, das Nutzerverhalten zu analysieren.
                </p>
                <p className="mt-1 leading-7 text-muted-foreground">
                  Nur nach Einwilligung aktiv.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">3. Marketing-Cookies</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  Diese Cookies werden verwendet, um Werbung relevanter zu
                  gestalten.
                </p>
                <p className="mt-1 leading-7 text-muted-foreground">
                  Nur nach Einwilligung aktiv.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Speicherdauer</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Cookies bleiben entweder:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>temporär (Session)</li>
              <li>oder bis zur manuellen Löschung gespeichert</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Cookie-Einstellungen ändern
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Sie können Ihre Cookie-Einstellungen jederzeit über den Button
              „Cookie-Einstellungen“ im Footer ändern.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
