import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Alberow",
  description: "Get in touch with the Alberow team. We'd love to hear about your project and how we can help.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <Footer />
    </main>
  )
}
