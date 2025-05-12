import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialManagementHero } from "@/components/services/social-media-management/social-management-hero"
import { SocialManagementFeatures } from "@/components/services/social-media-management/social-management-features"
import { SocialManagementProcess } from "@/components/services/social-media-management/social-management-process"
import { SocialManagementShowcase } from "@/components/services/social-media-management/social-management-showcase"
import { SocialManagementPricing } from "@/components/services/social-media-management/social-management-pricing"
import { SocialManagementTestimonials } from "@/components/services/social-media-management/social-management-testimonials"
import { SocialManagementFaq } from "@/components/services/social-media-management/social-management-faq"
import { SocialManagementCta } from "@/components/services/social-media-management/social-management-cta"

export const metadata: Metadata = {
  title: "Social Media Management Services | Alberow",
  description: "Comprehensive management of your social media presence to build and engage your audience effectively.",
  keywords:
    "social media management, community management, content creation, social media strategy, audience engagement",
  openGraph: {
    title: "Social Media Management Services | Alberow",
    description:
      "Comprehensive management of your social media presence to build and engage your audience effectively.",
    images: [
      { url: "/images/services/social-media-management.jpg", width: 1200, height: 630, alt: "Social Media Management" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Services | Alberow",
    description:
      "Comprehensive management of your social media presence to build and engage your audience effectively.",
    images: ["/images/services/social-media-management.jpg"],
  },
}

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SocialManagementHero />
      <SocialManagementFeatures />
      <SocialManagementProcess />
      <SocialManagementShowcase />
      <SocialManagementPricing />
      <SocialManagementTestimonials />
      <SocialManagementFaq />
      <SocialManagementCta />
      <Footer />
    </main>
  )
}
