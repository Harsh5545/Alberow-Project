import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OnePageHero } from "@/components/services/one-page-websites/one-page-hero"
import { OnePageFeatures } from "@/components/services/one-page-websites/one-page-features"
import { OnePageProcess } from "@/components/services/one-page-websites/one-page-process"
import { OnePageShowcase } from "@/components/services/one-page-websites/one-page-showcase"
import { OnePagePricing } from "@/components/services/one-page-websites/one-page-pricing"
import { OnePageTestimonials } from "@/components/services/one-page-websites/one-page-testimonials"
import { OnePageFaq } from "@/components/services/one-page-websites/one-page-faq"
import { OnePageCta } from "@/components/services/one-page-websites/one-page-cta"

export const metadata: Metadata = {
  title: "One-Page Website Design & Development Services | Alberow",
  description:
    "Impactful single-page websites that effectively showcase your brand and convert visitors. Perfect for startups, portfolios, and focused business offerings.",
  openGraph: {
    title: "One-Page Website Design & Development Services | Alberow",
    description:
      "Impactful single-page websites that effectively showcase your brand and convert visitors. Perfect for startups, portfolios, and focused business offerings.",
    images: [
      {
        url: "/images/services/one-page-websites-og.jpg",
        width: 1200,
        height: 630,
        alt: "Alberow One-Page Website Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Page Website Design & Development Services | Alberow",
    description:
      "Impactful single-page websites that effectively showcase your brand and convert visitors. Perfect for startups, portfolios, and focused business offerings.",
    images: ["/images/services/one-page-websites-og.jpg"],
  },
  keywords:
    "one-page website, single page website, landing page design, responsive website, website development, smooth scrolling, SEO optimized website, fast loading website, portfolio website, startup website",
}

export default function OnePageWebsitesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OnePageHero />
      <OnePageFeatures />
      <OnePageProcess />
      <OnePageShowcase />
      <OnePagePricing />
      <OnePageTestimonials />
      <OnePageFaq />
      <OnePageCta />
      <Footer />
    </main>
  )
}
