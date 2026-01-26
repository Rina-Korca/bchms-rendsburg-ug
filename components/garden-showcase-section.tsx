"use client"

import { HeroScrollVideo } from "@/components/ui/scroll-animated-video"
import { Leaf } from "lucide-react"

export function GardenShowcaseSection() {
  return (
    <section id="showcase" className="relative hidden sm:block -mt-8 md:-mt-12">
      <HeroScrollVideo
        title="Grün trifft Gestaltung"
        subtitle="Ihr Garten, unsere Leidenschaft"
        meta="Seit 2010"
        credits={
          <div className="flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4 text-green-medium" />
            <span>BCHMS Rendsburg</span>
          </div>
        }
        media="https://videos.pexels.com/video-files/2491284/2491284-uhd_2560_1440_24fps.mp4"
        poster="/images/WhatsApp Image 2026-01-21 at 12.51.46 (6) 1.jpeg"
        overlay={{
          caption: "ENTDECKEN • ERLEBEN",
          heading: "Wir verwandeln Aussenraume in Lebensraume",
          paragraphs: [
            "Von der ersten Idee bis zur fertigen Gartenanlage begleiten wir Sie mit Expertise, Kreativitat und Leidenschaft.",
            "Erleben Sie, wie wir mit nachhaltigen Materialien und einheimischen Pflanzen einzigartige Gartenlandschaften schaffen.",
          ],
        }}
        initialBoxSize={380}
        scrollHeightVh={250}
        overlayBlur={12}
        smoothScroll={false}
      />
    </section>
  )
}
