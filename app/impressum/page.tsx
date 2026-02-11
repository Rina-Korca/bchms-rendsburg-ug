import Link from 'next/link'

import { Footer } from '@/components/footer'

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-green-pale/40">
      <section className="container mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Link href="/" className="text-sm text-green-medium hover:underline">
          Zur Startseite
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-foreground">
          <div>
            <h2 className="text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
            <address className="mt-3 not-italic leading-7 text-muted-foreground">
              Blerim Geci
              <br />
              Graf-Zeppelin Str. 11
              <br />
              24768 Rendsburg
              <br />
              Deutschland
              <br />
              <br />
              Telefon: 01522 5972872
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <address className="mt-3 not-italic leading-7 text-muted-foreground">
              Blerim Geci
              <br />
              Graf-Zeppelin Str. 11
              <br />
              24768 Rendsburg
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Haftung für Inhalte</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Haftung für Links</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Unsere Website enthält ggf. Links zu externen Websites Dritter,
              auf deren Inhalte wir keinen Einfluss haben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Urheberrecht</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
