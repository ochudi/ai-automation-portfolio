import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ClientShell } from "@/components/ClientShell"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chukwudi Ofoma — AI Automation Engineer",
  description:
    "Chukwudi Ofoma designs and builds AI automation systems that replace repetitive operational work. Available for engineering and founder collaborations.",
  openGraph: {
    title: "Chukwudi Ofoma — AI Automation Engineer",
    description:
      "Designs and builds AI automation systems that replace repetitive operational work.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <ClientShell>{children}</ClientShell>
        <Analytics />
      </body>
    </html>
  )
}
