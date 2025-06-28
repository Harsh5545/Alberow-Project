import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Alberow - Professional Web Development',
  description: 'alberow is a professional web development company specializing in custom websites, applications, and digital solutions for businesses of all sizes.',
  generator: 'alberow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body> <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider></body>
    </html>
  )
}
