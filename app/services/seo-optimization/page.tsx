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
    "Boost your website's visibility and rankings with Alberow's comprehensive SEO optimization services. Increase organic traffic, improve search engine rankings, and grow your business with proven SEO strategies.",
  keywords: [
    "SEO",
    "SEO Optimization",
    "Search Engine Optimization",
    "SEO Services",
    "SEO Company",
    "SEO Agency",
    "Increase Website Traffic",
    "Google Rankings",
    "On-page SEO",
    "Off-page SEO",
    "Technical SEO",
    "SEO Audit",
    "SEO Strategy",
    "Alberow"
  ],
  openGraph: {
    title: "SEO Optimization Services | Alberow",
    description:
      "Boost your website's visibility and rankings with Alberow's comprehensive SEO optimization services. Increase organic traffic, improve search engine rankings, and grow your business with proven SEO strategies.",
    url: "https://alberow.com/services/seo-optimization",
    siteName: "Alberow",
    images: [
      {
        url: "/assets/ai/Seo.webp",
        width: 1200,
        height: 630,
        alt: "SEO Optimization Services by Alberow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Optimization Services | Alberow",
    description:
      "Boost your website's visibility and rankings with Alberow's comprehensive SEO optimization services.",
    images: ["/assets/ai/Seo.webp"],
    creator: "@alberow",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
