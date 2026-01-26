"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scissors, TreeDeciduous, Flower2, Droplets, Home, Shovel, Snowflake, CloudSnow, Wind, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Rasenpflege",
    description: "Regelmassiges Mahen, Kantenschneiden und Dungen, um Ihren Rasen das ganze Jahr uber uppig und gesund zu halten. Unser Expertenteam sorgt dafur, dass Ihr Gras grun und perfekt gepflegt bleibt.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (1).jpeg",
  },
  {
    icon: TreeDeciduous,
    title: "Baumschnitt",
    description: "Professionelle Schnitt- und Trimmarbeiten zur Erhaltung der Baumgesundheit und Verschonerung Ihres Grundstucks. Wir bearbeiten Baume jeder Grosse mit Prazision und Sorgfalt.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (2) (1).jpeg",
  },
  {
    icon: Flower2,
    title: "Gartengestaltung",
    description: "Individuelle Gartenplanung und -anlage mit wunderschonen Pflanzen, Blumen und Hardscape-Elementen. Verwandeln Sie Ihren Aussenbereich in ein botanisches Paradies.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (3).jpeg",
  },
  {
    icon: Droplets,
    title: "Bewasserungssysteme",
    description: "Intelligente Bewasserungslosungen, die Wasser sparen und gleichzeitig Ihre Landschaft perfekt bewassern. Automatisierte Systeme fur Effizienz und Nachhaltigkeit.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (4) (1).jpeg",
  },
  {
    icon: Home,
    title: "Landschaftsplanung",
    description: "Komplette Aussenraumgestaltung, die Ihr Grundstuck in einen atemberaubenden Lebensraum im Freien verwandelt. Von der Konzeption bis zur Fertigstellung erwecken wir Ihre Vision zum Leben.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.50.32 (5).jpeg",
  },
  {
    icon: Shovel,
    title: "Hardscaping",
    description: "Terrassen, Gehwege, Stutzmauern und Aussenstrukturen aus hochwertigen Materialien. Langlebige und schone Erganzungen, die den Wert Ihres Grundstucks steigern.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.45 (1).jpeg",
  },
  {
    icon: Snowflake,
    title: "Winterdienst & Schneeraeumung",
    description: "Schnelle Schneeraeumung, Streuen und Eisglatte-Pravention fur Einfahrten, Gehwege und Parkplatze. Wir halten Ihre Flaechen den ganzen Winter uber sicher und begehbar.",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.46 (1) 1.jpeg",
  },
]

export function ServicesStackedSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[currentIndex]

  return (
    <section id="services" className="py-16 lg:py-24 bg-green-pale/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Header */}
          <div>
            <span className="inline-block bg-green-medium/10 text-green-medium rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-dark mb-6 text-balance">
              Professionelle Garten- und Landschaftsbau-Dienstleistungen
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Von der routinemassigen Pflege bis hin zu kompletten Umgestaltungen bieten wir umfassende Losungen, die auf Ihre individuellen Aussenbedurfnisse zugeschnitten sind. Lassen Sie uns Ihnen helfen, den Garten Ihrer Traume zu schaffen.
            </p>

            <div className="bg-white/80 border border-green-light rounded-2xl shadow-md p-6 md:p-7 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-pale rounded-xl flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-green-medium" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-medium uppercase tracking-wide mb-1">
                    Winterdienst & Schneeraeumung
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir sind auch in der kalten Jahreszeit fur Sie da: schnelle Schneeraeumung, praezises Streuen und vorbeugende Eisbekaempfung halten Einfahrten, Gehwege und Parkplatze sicher begehbar.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Snowflake, title: "Schnelle Raeumung", copy: "Fruehzeitige Schneerunden, damit Ihre Flaechen frei bleiben, wenn Sie sie brauchen." },
                  { icon: CloudSnow, title: "Praezises Streuen", copy: "Salz- und Splittdienste mit Augenmerk auf Umwelt und Materialschonung." },
                  { icon: Wind, title: "Eisglatte-Pravention", copy: "Vorausschauende Kontrollen verhindern, dass Glatte Sie ausbremst." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 bg-green-pale rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-medium" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-dark">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="rounded-full border-green-medium text-green-medium hover:bg-green-medium hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-green-dark font-semibold">
                {currentIndex + 1} / {services.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="rounded-full border-green-medium text-green-medium hover:bg-green-medium hover:text-white bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="relative h-[450px] md:h-[500px]">
            {/* Background stacked cards */}
            <div className="absolute top-6 left-6 right-0 bottom-0 bg-green-dark/20 rounded-3xl" />
            <div className="absolute top-3 left-3 right-3 bottom-3 bg-green-dark/40 rounded-3xl" />
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
              <div className="relative h-[55%]">
                <Image
                  src={currentService.image || "/placeholder.svg"}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-pale rounded-xl flex items-center justify-center">
                    <currentService.icon className="w-6 h-6 text-green-medium" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-dark">{currentService.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {currentService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
