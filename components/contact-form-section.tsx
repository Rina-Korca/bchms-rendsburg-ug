"use client"

import { useState } from "react"
import { generateClient } from "aws-amplify/data"
import type { Schema } from "@/amplify/data/resource"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

const client = generateClient<Schema>()

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formLoadTimeMs] = useState(Date.now())
  const [formStartedAtEpochSeconds] = useState(() => Math.floor(Date.now() / 1000))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    // Spam protection: honeypot field
    if (formData.honeypot) {
      console.log("Spam detected (honeypot)")
      return
    }

    // Spam protection: minimum time check (3 seconds)
    const timeSinceLoad = Date.now() - formLoadTimeMs
    if (timeSinceLoad < 3000) {
      setStatus("error")
      setErrorMessage("Bitte warten Sie einen Moment, bevor Sie das Formular absenden.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error")
      setErrorMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.")
      return
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error")
      setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus.")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage(null)

    try {
      const combinedMessage = `Betreff: ${formData.subject.trim()}\n\n${formData.message.trim()}`
      const { data, errors } = await client.mutations.submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: combinedMessage,
        honeypot: formData.honeypot,
        formStartedAt: formStartedAtEpochSeconds,
      })

      if (errors?.length) {
        const reasons = errors.map((error) => error.message).join("; ")
        throw new Error(reasons || "API request failed")
      }

      if (!data?.success) {
        throw new Error(data?.message ?? "Form submission failed")
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      })
      setStatus("success")
    } catch (error) {
      console.error("Contact form submission failed", error)
      setStatus("error")
      setErrorMessage("Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
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
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ position: "absolute", left: "-9999px" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <Input
                  placeholder="Ihr Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="rounded-xl border-border bg-green-pale/30 h-12"
                />
                <Input
                  type="email"
                  placeholder="E-Mail-Adresse *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="rounded-xl border-border bg-green-pale/30 h-12"
                />
                <Input
                  placeholder="Betreff *"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="rounded-xl border-border bg-green-pale/30 h-12"
                />
                <Textarea
                  placeholder="Ihre Nachricht *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="rounded-xl border-border bg-green-pale/30 min-h-[120px]"
                />
                {status === "success" ? (
                  <p className="text-sm text-green-dark font-medium" role="status">
                    Vielen Dank! Ihre Anfrage wurde gesendet.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-600 font-medium" role="status">
                    {errorMessage}
                  </p>
                ) : null}
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-green-medium hover:bg-green-dark text-white rounded-full font-semibold"
                >
                  {isSubmitting ? "Senden..." : "Anfrage senden"}
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
