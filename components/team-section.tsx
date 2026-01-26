"use client"

import { useState } from "react"
import { Phone, Mail, Quote } from "lucide-react"

const team = [
  {
    name: "Naturpool am Stadtrand",
    role: "Private Residenz · Kiel",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.46 (2) 1 (1).jpeg",
    experience: "2024",
    specialty: "Naturpool, Hangbeet, Sichtschutz",
    quote: "Grune Oase trotz kompaktem Grundstuck.",
    phone: "Flaeche: 450 m²",
    email: "Status: Abgeschlossen",
  },
  {
    name: "Gewerbepark Gruenpflege",
    role: "Gewerbeareal · Rendsburg",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.46 (3) 1 (1).jpeg",
    experience: "2023",
    specialty: "Staudenfelder, Bewasserung, Winterdienst",
    quote: "Ganzjahrige Pflege mit smartem Wasser-Setup.",
    phone: "Flaeche: 2.800 m²",
    email: "Status: Laufend",
  },
  {
    name: "Steinwege & Staudenhof",
    role: "Einfamilienhaus · Eckernforde",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.46 (4) 1 (1).jpeg",
    experience: "2022",
    specialty: "Naturstein, Beleuchtung, Staudenkomposition",
    quote: "Klare Wege, weiche Pflanzbilder.",
    phone: "Flaeche: 600 m²",
    email: "Status: Abgeschlossen",
  },
  {
    name: "Winterdienst & Schneeraeumung",
    role: "Einfahrt & Gehwege · Rendsburg",
    image: "/images/WhatsApp Image 2026-01-21 at 12.51.46 (1) 1.jpeg",
    experience: "2024",
    specialty: "Schneeraeumung, Streuen, Eisbekaempfung",
    quote: "Sichere Wege und Zufahrten trotz Dauerfrost.",
    phone: "Flaeche: 1.000 m²",
    email: "Status: Laufend",
  },
]

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-pale/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-green-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-green-medium/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-medium/10 text-green-medium rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Projekt-Highlights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-dark mb-4 text-balance">
            Auswahl unserer Arbeiten
          </h2>
          <p className="text-muted-foreground text-lg">
            Ein Blick auf realisierte Projekte – von Naturpools uber Staudenhoefe bis hin zu gewerblichen Gruenanlagen.
          </p>
        </div>
        
        {/* Team Grid - Advanced Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Main Card */}
              <div 
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index 
                    ? "shadow-2xl shadow-green-dark/20 -translate-y-2" 
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Image Container with Curved Bottom */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-green-dark via-green-dark/50 to-transparent transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-90" : "opacity-0"
                  }`} />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-green-dark">
                    {member.experience}
                  </div>
                  
                  {/* Hover Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                    activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    {/* Quote */}
                    <div className="flex items-start gap-2 mb-4">
                      <Quote className="w-5 h-5 text-green-light flex-shrink-0 mt-1" />
                      <p className="text-white/90 text-sm italic leading-relaxed">{member.quote}</p>
                    </div>
                    
                    {/* Specialty Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-light/20 text-green-light text-xs font-medium px-3 py-1 rounded-full border border-green-light/30">
                        {member.specialty}
                      </span>
                    </div>
                    
                    {/* Contact Icons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href={`tel:${member.phone}`}
                        className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-light hover:text-white transition-all duration-300"
                        aria-label={`${member.name} anrufen`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-light hover:text-white transition-all duration-300"
                        aria-label={`${member.name} E-Mail senden`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 text-center relative">
                  {/* Decorative Line */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-green-medium rounded-full transition-all duration-500 ${
                    activeIndex === index ? "w-16" : "w-0"
                  }`} />
                  
                  <h3 className="text-lg font-bold text-green-dark mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
              
              {/* Decorative Shadow Card Behind */}
              <div 
                className={`absolute inset-0 bg-green-medium/20 rounded-3xl -z-10 transition-all duration-500 ${
                  activeIndex === index ? "translate-x-3 translate-y-3" : "translate-x-0 translate-y-0"
                }`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
