import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import NewsletterPopupImproved from "@/components/newsletter-popup-improved"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alberow - Web Development & Digital Marketing Agency",
  description:
    "Professional web development, SEO, digital marketing, and UI/UX design services to help your business grow online.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
         
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <NewsletterPopupImproved />
        </ThemeProvider>
      </body>
    </html>
  )
}
