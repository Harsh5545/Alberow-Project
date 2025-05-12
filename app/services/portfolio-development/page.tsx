import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/services/portfolio-development/portfolio-hero"
import { PortfolioFeatures } from "@/components/services/portfolio-development/portfolio-features"
import { PortfolioProcess } from "@/components/services/portfolio-development/portfolio-process"
import { PortfolioShowcase } from "@/components/services/portfolio-development/portfolio-showcase"
import { PortfolioPricing } from "@/components/services/portfolio-development/portfolio-pricing"
import { PortfolioTestimonials } from "@/components/services/portfolio-development/portfolio-testimonials"
import { PortfolioFaq } from "@/components/services/portfolio-development/portfolio-faq"
import { PortfolioCta } from "@/components/services/portfolio-development/portfolio-cta"

export const metadata: Metadata = {
  title: "Portfolio Website Design & Development Services | Alberow",
  description:
    "Stunning portfolio websites that showcase your work and attract clients. Perfect for creatives, photographers, designers, artists, and professionals.",
  openGraph: {
    title: "Portfolio Website Design & Development Services | Alberow",
    description:
      "Stunning portfolio websites that showcase your work and attract clients. Perfect for creatives, photographers, designers, artists, and professionals.",
    images: [
      {
        url: "/images/services/portfolio-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Alberow Portfolio Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Website Design & Development Services | Alberow",
    description:
      "Stunning portfolio websites that showcase your work and attract clients. Perfect for creatives, photographers, designers, artists, and professionals.",
    images: ["/images/services/portfolio-development-og.jpg"],
  },
  keywords:
    "portfolio website, creative portfolio, photographer portfolio, designer portfolio, artist portfolio, professional portfolio, portfolio design, portfolio development, responsive portfolio, interactive portfolio",
}

export default function PortfolioDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PortfolioHero />
      <PortfolioFeatures />
      <PortfolioProcess />
      <PortfolioShowcase />
      <PortfolioPricing />
      <PortfolioTestimonials />
      <PortfolioFaq />
      <PortfolioCta />
      <Footer />
    </main>
  )
}
