import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApplicationDevHero } from "@/components/services/application-development/app-dev-hero"
import { ApplicationDevFeatures } from "@/components/services/application-development/app-dev-features"
import { ApplicationDevProcess } from "@/components/services/application-development/app-dev-process"
import { ApplicationDevShowcase } from "@/components/services/application-development/app-dev-showcase"
import { ApplicationDevPricing } from "@/components/services/application-development/app-dev-pricing"
import { ApplicationDevTestimonials } from "@/components/services/application-development/app-dev-testimonials"
import { ApplicationDevFaq } from "@/components/services/application-development/app-dev-faq"
import { ApplicationDevCta } from "@/components/services/application-development/app-dev-cta"

export const metadata: Metadata = {
  title: "Mobile & Web Application Development Services | Alberow",
  description:
    "Custom mobile and web applications that deliver exceptional user experiences and drive business growth. Our expert team builds native iOS, Android, and cross-platform solutions.",
  openGraph: {
    title: "Mobile & Web Application Development Services | Alberow",
    description:
      "Custom mobile and web applications that deliver exceptional user experiences and drive business growth. Our expert team builds native iOS, Android, and cross-platform solutions.",
    images: [
      {
        url: "/images/services/application-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Alberow Application Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web Application Development Services | Alberow",
    description:
      "Custom mobile and web applications that deliver exceptional user experiences and drive business growth. Our expert team builds native iOS, Android, and cross-platform solutions.",
    images: ["/images/services/application-development-og.jpg"],
  },
  keywords:
    "mobile app development, iOS development, Android development, cross-platform apps, React Native, Flutter, web applications, custom app development, app design, mobile UX/UI",
}

export default function ApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ApplicationDevHero />
      <ApplicationDevFeatures />
      <ApplicationDevProcess />
      <ApplicationDevShowcase />
      <ApplicationDevPricing />
      <ApplicationDevTestimonials />
      <ApplicationDevFaq />
      <ApplicationDevCta />
      <Footer />
    </main>
  )
}
