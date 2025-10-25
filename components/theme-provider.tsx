'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Use the `class` attribute strategy so our CSS `.dark` rules apply.
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true} {...props}>
      {children}
    </NextThemesProvider>
  )
}
