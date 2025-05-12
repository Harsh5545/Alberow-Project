import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialMarketingHero } from "@/components/services/social-media-marketing/social-marketing-hero"
import { SocialMarketingFeatures } from "@/components/services/social-media-marketing/social-marketing-features"
import { SocialMarketingProcess } from "@/components/services/social-media-marketing/social-marketing-process"
import { SocialMarketingShowcase } from "@/components/services/social-media-marketing/social-marketing-showcase"
import { SocialMarketingPricing } from "@/components/services/social-media-marketing/social-marketing-pricing"
import { SocialMarketingTestimonials } from "@/components/services/social-media-marketing/social-marketing-testimonials"
import { SocialMarketingFaq } from "@/components/services/social-media-marketing/social-marketing-faq"
import { SocialMarketingCta } from "@/components/services/social-media-marketing/social-marketing-cta"

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Alberow",
  description: "Strategic social media campaigns that increase engagement and drive conversions for your business.",
  keywords:
    "social media marketing, social campaigns, social media strategy, social media advertising, social media management",
  openGraph: {
    title: "Social Media Marketing Services | Alberow",
    description: "Strategic social media campaigns that increase engagement and drive conversions for your business.",
    images: [
      { url: "/images/services/social-media-marketing.jpg", width: 1200, height: 630, alt: "Social Media Marketing" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services | Alberow",
    description: "Strategic social media campaigns that increase engagement and drive conversions for your business.",
    images: ["/images/services/social-media-marketing.jpg"],
  },
}

export default function SocialMediaMarketingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SocialMarketingHero />
      <SocialMarketingFeatures />
      <SocialMarketingProcess />
      <SocialMarketingShowcase />
      <SocialMarketingPricing />
      <SocialMarketingTestimonials />
      <SocialMarketingFaq />
      <SocialMarketingCta />
      <Footer />
    </main>
  )
}
