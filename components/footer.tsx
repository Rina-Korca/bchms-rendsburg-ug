'use client';

import React from "react"

import { useState } from "react"

import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Startseite", href: "#" },
  { name: "Uber uns", href: "#about" },
  { name: "Leistungen", href: "#services" },
  { name: "Unser Team", href: "#team" },
  { name: "Blog", href: "#blog" },
  { name: "Kontakt", href: "#contact" },
]

const services = [
  { name: "Rasenpflege", href: "#services" },
  { name: "Baumschnitt", href: "#services" },
  { name: "Gartengestaltung", href: "#services" },
  { name: "Bewasserungssysteme", href: "#services" },
  { name: "Landschaftsplanung", href: "#services" },
  { name: "Hardscaping", href: "#services" },
  { name: "Winterdienst & Schneeraeumung", href: "#services" },
]

const socialLinks = [
  { name: "Facebook", initial: "F" },
  { name: "Twitter", initial: "T" },
  { name: "Instagram", initial: "I" },
  { name: "LinkedIn", initial: "L" },
]

export function Footer() {
  return (
    <footer className="relative z-10">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C30 5 20 15 20 25C20 35 30 40 30 50' stroke='white' strokeWidth='1' fill='none'/%3E%3Cpath d='M40 10C40 10 35 20 35 28C35 36 40 45 40 55' stroke='white' strokeWidth='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div 
        className="bg-green-dark pt-24 md:pt-32 pb-8 relative"
        style={{ borderRadius: "1.5rem 1.5rem 0 0" }}
      >
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-light rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">BCHMS Rendsburg</span>
              </Link>
              <p className="text-white/70 mb-6 leading-relaxed">
                Wir schaffen wunderschone Aussenraume, die Ihren Lebensstil und den Wert Ihrer Immobilie steigern. 
                Professionelle Landschaftsbau-Dienstleistungen seit 2010.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-light transition-colors"
                    aria-label={social.name}
                  >
                    <span className="font-semibold text-sm">{social.initial}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Schnellzugriff</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Unsere Leistungen</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-light flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">123 Garden Lane, Greenville, GV 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-light flex-shrink-0" />
                  <a href="tel:015225972872" className="text-white/70 hover:text-white transition-colors">
                    01522 5972872
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-light flex-shrink-0" />
                  <span className="text-white/70">blerim-geci@hotmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>&copy; {new Date().getFullYear()} BCHMS Rendsburg UG. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Datenschutz</Link>
                <Link href="#" className="hover:text-white transition-colors">AGB</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
