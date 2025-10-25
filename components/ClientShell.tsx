"use client"

import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { AnimatePresence, motion } from "framer-motion"

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AnimatePresence mode="wait">
        <motion.div
          key="app"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
