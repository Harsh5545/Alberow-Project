import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { SeoFeatures } from "@/components/services/seo-optimization/seo-features"
import { SeoProcess } from "@/components/services/seo-optimization/seo-process"
import { SeoAnalytics } from "@/components/services/seo-optimization/seo-analytics"
import { SeoTestimonials } from "@/components/services/seo-optimization/seo-testimonials"
import { SeoFaq } from "@/components/services/seo-optimization/seo-faq"
import { ServiceCta } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "SEO Optimization Services | Alberow",
  description:
    "Boost your website's visibility and rankings with our comprehensive SEO optimization services. Drive more organic traffic and increase conversions.",
}

export default function SeoOptimizationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceHero
        title="SEO Optimization"
        description="Boost your visibility and drive organic traffic to your website"
        image="/placeholder.svg?height=600&width=800"
        gradient="from-blue-600 to-teal-500"
      />
      <SeoFeatures />
      <SeoProcess />
      <SeoAnalytics />
      <ServiceCta
        title="Ready to improve your search rankings?"
        description="Let's develop an SEO strategy that helps your business get found online and drive more qualified traffic."
        buttonText="Get SEO Analysis"
        gradient="from-blue-600 to-teal-500"
      />
      <SeoTestimonials />
      <SeoFaq />
      <Footer />
    </main>
  )
}
