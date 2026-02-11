import Link from 'next/link'

import { Footer } from '@/components/footer'

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-green-pale/40">
      <section className="container mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Link href="/" className="text-sm text-green-medium hover:underline">
          Zur Startseite
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-8 text-foreground">
          <div>
            <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Verantwortlich für die Datenverarbeitung:
            </p>
            <address className="mt-2 not-italic leading-7 text-muted-foreground">
              Blerim Geci
              <br />
              Graf-Zeppelin Str. 11
              <br />
              24768 Rendsburg
              <br />
              Deutschland
              <br />
              Telefon: 01522 5972872
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Wir verarbeiten personenbezogene Daten ausschließlich im Einklang
              mit der Datenschutz-Grundverordnung (DSGVO) und dem TTDSG.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3. Hosting</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Unsere Website wird bei einem externen Dienstleister gehostet.
              Dabei werden automatisch folgende Daten verarbeitet:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3 leading-7 text-muted-foreground">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an sicherem Betrieb)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">4. Kontaktaufnahme</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Wenn Sie uns per Kontaktformular oder Telefon kontaktieren, werden
              folgende Daten verarbeitet:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Name</li>
              <li>Telefonnummer</li>
              <li>E-Mail-Adresse (falls angegeben)</li>
              <li>Nachricht</li>
            </ul>
            <p className="mt-3 leading-7 text-muted-foreground">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag /
              vorvertragliche Maßnahmen)
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
              verwendet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">5. Cookies</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Unsere Website verwendet Cookies.
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Es wird unterschieden zwischen:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Technisch notwendigen Cookies</li>
              <li>Statistik-/Analyse-Cookies (nur mit Einwilligung)</li>
              <li>Marketing-Cookies (nur mit Einwilligung)</li>
            </ul>
            <p className="mt-3 leading-7 text-muted-foreground">
              Rechtsgrundlage:
              <br />
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              <br />§ 25 TTDSG
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">6. Ihre Rechte</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Sie haben das Recht auf:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              7. Widerruf Ihrer Einwilligung
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Sie können eine erteilte Einwilligung jederzeit widerrufen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">8. Beschwerderecht</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren.
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Zuständig für Schleswig-Holstein:
              <br />
              Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein
              (ULD)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
