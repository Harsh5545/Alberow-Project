import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsProcess } from "@/components/projects/projects-process"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Projects | Professional Web Development Portfolio",
  description:
    "Explore our portfolio of successful web development, design, and digital solutions. See how we've helped businesses grow with modern websites and applications.",
  keywords: "web development portfolio, website design, business applications, digital solutions",
  openGraph: {
    title: "Our Projects | Professional Web Development Portfolio",
    description: "Explore our portfolio of successful web development, design, and digital solutions.",
    type: "website",
  },
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
