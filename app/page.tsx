import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <CtaSection />
      <Footer />
    </main>
  )
}
