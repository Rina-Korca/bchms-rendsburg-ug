import React from "react"
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Providers from './providers'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a472a',
}

export const metadata: Metadata = {
  title: 'BCHMS Rendsburg UG | Professioneller Garten- und Landschaftsbau',
  description: 'Verwandeln Sie Ihren Aussenbereich mit BCHMS Rendsburg UG. Experten fur Rasenpflege, Gartengestaltung, Baumschnitt und Landschaftsbau in Rendsburg und Umgebung.',
  keywords: 'Landschaftsbau Rendsburg, Gartenpflege, Rasenpflege, Baumschnitt, Gartengestaltung, Aussenpflege, professioneller Gartenbau, BCHMS',
  generator: 'v0.app',
  openGraph: {
    title: 'BCHMS Rendsburg UG | Professioneller Garten- und Landschaftsbau',
    description: 'Verwandeln Sie Ihren Aussenbereich mit fachkundiger Rasenpflege, Gartengestaltung und Landschaftsbau-Dienstleistungen in Rendsburg.',
    type: 'website',
  },
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
