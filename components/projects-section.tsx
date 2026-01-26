import { Carousel } from "@/components/ui/carousel";

const projectSlides = [
  {
    title: "Naturpool im Hinterhof",
    button: "Projekt ansehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (1).jpeg",
  },
  {
    title: "Steinwege & Stauden",
    button: "Details zeigen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (2) (1).jpeg",
  },
  {
    title: "Gewerbepark Gruenpflege",
    button: "Mehr erfahren",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.31 (3).jpeg",
  },
  {
    title: "Winterdienst Auffahrt",
    button: "Winterdienst ansehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (5).jpeg",
  },
  {
    title: "Gartendesign mit Beleuchtung",
    button: "Projekt ansehen",
    src: "/images/WhatsApp Image 2026-01-21 at 12.51.45 (1).jpeg",
  },
  {
    title: "Dachterrasse Begruenung",
    button: "Mehr Details",
    src: "/images/WhatsApp Image 2026-01-21 at 12.53.20 (4).jpeg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-green-medium/10 px-4 py-2 text-sm font-semibold text-green-medium">
            Unsere Projekte
          </span>
          <h2 className="text-balance text-3xl font-bold text-green-dark md:text-4xl lg:text-5xl">
            Gartenbau, Landschaft & Winterdienst im Fokus
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Eine Auswahl unserer liebsten Projekte: nachhaltige Pflanzkonzepte,
            praezise Stein- und Holzarbeiten und sicher geräumte Wege im Winter.
          </p>
        </div>

        <div className="relative flex justify-start -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-pale/40 via-transparent to-green-pale/40 blur-3xl" />
          <Carousel
            slides={projectSlides}
            className="z-10 h-[70vmin] max-h-[640px] w-screen max-w-none md:h-[55vmin]"
          />
        </div>
      </div>
    </section>
  );
}
