import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutProcess } from "@/components/about/about-process"
import { AboutTestimonials } from "@/components/about/about-testimonials"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | Alberow",
  description: "Learn about Alberow, our mission, our team, and our approach to web development and digital marketing.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutProcess />
      <AboutTestimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
