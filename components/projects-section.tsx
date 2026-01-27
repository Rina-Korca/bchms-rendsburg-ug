import { Carousel } from "@/components/ui/carousel";

const projectSlides = [
  {
    title: "Winterdienst Einfahrt & Gehweg",
    button: "Raeumung ansehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (1).jpeg",
  },
  {
    title: "Streuen & Raeumen im Wohngebiet",
    button: "Mehr Winterdienst",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (2) (1).jpeg",
  },
  {
    title: "Winterdienst im Gewerbepark",
    button: "Service entdecken",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (3).jpeg",
  },
  {
    title: "Auffahrt schnee- und eisfrei",
    button: "Details zum Winterdienst",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (5).jpeg",
  },
  {
    title: "Parkplaetze sicher geraeumt",
    button: "Winterservice sehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.51.45 (1).jpeg",
  },
  {
    title: "Fusswege und Treppen gestreut",
    button: "Einsatz ansehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.53.20 (4).jpeg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-green-medium/10 px-4 py-2 text-sm font-semibold text-green-medium">
            Winterdienst
          </span>
          <h2 className="text-balance text-3xl font-bold text-green-dark md:text-4xl lg:text-5xl">
            Winterdienst im Fokus
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Eine Auswahl unserer Winterdienst-Einsaetze: schnell geraeumte
            Einfahrten, gestreute Wege und sichere Parkflaechen bei Schnee und
            Eis.
          </p>
        </div>

        <div className="relative flex justify-start overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-pale/30 via-transparent to-green-pale/30 blur-3xl" />
          <Carousel
            slides={projectSlides}
            className="z-10 h-[70vmin] max-h-[640px] w-full max-w-full md:h-[55vmin]"
          />
        </div>
      </div>
    </section>
  );
}
