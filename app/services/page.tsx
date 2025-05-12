import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesProcess } from "@/components/services/services-process"
import { ServicesFaq } from "@/components/services/services-faq"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services | Alberow",
  description: "Explore our comprehensive range of web development, SEO, and digital marketing services.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesFaq />
      <CtaSection />
      <Footer />
    </main>
  )
}
