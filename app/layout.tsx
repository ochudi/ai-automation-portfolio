import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// @ts-ignore - CSS module types are not declared in this project
import "./globals.css"
import { ClientShell } from "@/components/ClientShell"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Automation Engineer | Chukwudi's Portfolio",
  description: "Professional portfolio showcasing AI automation projects and expertise of Chukwudi Ofoma",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ClientShell>{children}</ClientShell>
        <Analytics />
      </body>
    </html>
  )
}
