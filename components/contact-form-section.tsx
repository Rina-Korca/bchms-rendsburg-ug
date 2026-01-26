"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-green-dark"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2026-01-21 at 12.50.31 (3).jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-green-dark/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white">
            <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Kontaktieren Sie uns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Bereit, Ihren Aussenbereich zu verwandeln?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              Holen Sie sich noch heute Ihre kostenlose Beratung. Unsere Experten besuchen Ihr 
              Grundstuck, verstehen Ihre Vision und erstellen ein detailliertes Angebot, das auf Ihre Bedurfnisse zugeschnitten ist.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold">Kostenlose Beratung</p>
                  <p className="text-white/70 text-sm">Wir besuchen Ihr Grundstuck und besprechen Ihre Ziele</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold">Individuelles Design</p>
                  <p className="text-white/70 text-sm">Wir erstellen einen Plan, der auf Ihre Vision zugeschnitten ist</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold">Professionelle Umsetzung</p>
                  <p className="text-white/70 text-sm">Unser Team erweckt Ihren Traum zum Leben</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Form Card */}
          <Card className="rounded-3xl shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-dark mb-6">Kostenloses Angebot anfordern</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border bg-green-pale/30 h-12"
                  />
                  <Input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border bg-green-pale/30 h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Telefonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl border-border bg-green-pale/30 h-12"
                  />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="rounded-xl border border-border bg-green-pale/30 h-12 px-4 text-foreground w-full"
                  >
                    <option value="">Leistung auswahlen</option>
                    <option value="lawn">Rasenpflege</option>
                    <option value="tree">Baumschnitt</option>
                    <option value="garden">Gartengestaltung</option>
                    <option value="irrigation">Bewasserung</option>
                    <option value="landscape">Landschaftsplanung</option>
                    <option value="hardscape">Hardscaping</option>
                  </select>
                </div>
                <Textarea
                  placeholder="Erzahlen Sie uns von Ihrem Projekt..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border bg-green-pale/30 min-h-[120px]"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-medium hover:bg-green-dark text-white rounded-full font-semibold"
                >
                  Anfrage senden
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
