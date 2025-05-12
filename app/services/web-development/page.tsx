import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { WebDevFeatures } from "@/components/services/web-development/web-dev-features"
import { WebDevProcess } from "@/components/services/web-development/web-dev-process"
import { WebDevShowcase } from "@/components/services/web-development/web-dev-showcase"
import { WebDevTechnologies } from "@/components/services/web-development/web-dev-technologies"
import { WebDevFaq } from "@/components/services/web-development/web-dev-faq"
import { ServiceCta } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Web Development Services | Alberow",
  description:
    "Professional web development services tailored to your business needs. Create responsive, fast, and user-friendly websites with Alberow.",
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceHero
        title="Web Development"
        description="Create stunning, responsive websites that drive results"
        image="/placeholder.svg?height=600&width=800"
      />
      <WebDevFeatures />
      <WebDevTechnologies />
      <WebDevProcess />
      <WebDevShowcase />
      <ServiceCta
        title="Ready to build your dream website?"
        description="Let's create a website that perfectly represents your brand and helps you achieve your business goals."
        buttonText="Start Your Project"
      />
      <WebDevFaq />
      <Footer />
    </main>
  )
}
