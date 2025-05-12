import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MultiPageHero } from "@/components/services/multi-page-websites/multi-page-hero"
import { MultiPageFeatures } from "@/components/services/multi-page-websites/multi-page-features"
import { MultiPageProcess } from "@/components/services/multi-page-websites/multi-page-process"
import { MultiPageShowcase } from "@/components/services/multi-page-websites/multi-page-showcase"
import { MultiPagePricing } from "@/components/services/multi-page-websites/multi-page-pricing"
import { MultiPageTestimonials } from "@/components/services/multi-page-websites/multi-page-testimonials"
import { MultiPageFaq } from "@/components/services/multi-page-websites/multi-page-faq"
import { MultiPageCta } from "@/components/services/multi-page-websites/multi-page-cta"

export const metadata: Metadata = {
  title: "Multi-Page Website Design & Development Services | Alberow",
  description:
    "Comprehensive multi-page websites that provide in-depth information and functionality for businesses of all sizes. Perfect for complex offerings and content-rich sites.",
  openGraph: {
    title: "Multi-Page Website Design & Development Services | Alberow",
    description:
      "Comprehensive multi-page websites that provide in-depth information and functionality for businesses of all sizes. Perfect for complex offerings and content-rich sites.",
    images: [
      {
        url: "/images/services/multi-page-websites-og.jpg",
        width: 1200,
        height: 630,
        alt: "Alberow Multi-Page Website Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Page Website Design & Development Services | Alberow",
    description:
      "Comprehensive multi-page websites that provide in-depth information and functionality for businesses of all sizes. Perfect for complex offerings and content-rich sites.",
    images: ["/images/services/multi-page-websites-og.jpg"],
  },
  keywords:
    "multi-page website, business website, corporate website, e-commerce website, content management system, CMS, responsive website, website development, SEO optimized website, fast loading website",
}

export default function MultiPageWebsitesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MultiPageHero />
      <MultiPageFeatures />
      <MultiPageProcess />
      <MultiPageShowcase />
      <MultiPagePricing />
      <MultiPageTestimonials />
      <MultiPageFaq />
      <MultiPageCta />
      <Footer />
    </main>
  )
}
