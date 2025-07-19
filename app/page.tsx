

import { Navbar } from "@/components/navbar"

import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
// import { HeroSection } from "@/components/home/hero-section"
// import { AlberowLoader } from "@/components/alberow-loader"
import { HeroNoLottie } from "@/components/home/hero-section"
// import { InstantLoader } from "@/components/instant-loader"


export default function Home() {

  return (
    <>  
    <main className="min-h-screen  ">
      <Navbar />
      {/* <HeroSection /> */}
      <HeroNoLottie/>
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <CtaSection />
      <Footer />
    </main></>
  )
}
