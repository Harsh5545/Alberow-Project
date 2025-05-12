import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsProcess } from "@/components/projects/projects-process"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Projects | Alberow",
  description: "Explore our portfolio of successful web development and digital marketing projects.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsProcess />
      <CtaSection />
      <Footer />
    </main>
  )
}
