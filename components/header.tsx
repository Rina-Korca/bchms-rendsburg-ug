"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Startseite", href: "#" },
  { name: "Uber uns", href: "#about" },
  { name: "Leistungen", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Blog", href: "#blog" },
  { name: "Kontakt", href: "#contact" },
]

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Utility Bar */}
      <div className="bg-green-dark text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Garden Lane, Greenville, GV 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>blerim-geci@hotmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <span className="text-xs font-medium">{social.name[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-medium rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-dark">BCHMS Rendsburg Ug </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-green-medium transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-green-medium rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Jetzt anrufen</p>
                <p className="font-semibold text-green-dark">01522 5972872</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-green-medium transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-green-medium rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Jetzt anrufen</p>
                    <p className="font-semibold text-green-dark">01522 5972872</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
