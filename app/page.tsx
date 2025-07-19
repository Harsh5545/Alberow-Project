

import { Navbar } from "@/components/navbar"

import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AlberowLoader } from "@/components/alberow-loader"


export default function Home() {

  return (
    <> <AlberowLoader  />
    <main className="min-h-screen  ">
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <CtaSection />
      <Footer />
    </main></>
  )
}
