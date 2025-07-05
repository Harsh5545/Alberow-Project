import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesProcess } from "@/components/services/services-process"
import { ServicesFaq } from "@/components/services/services-faq"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Professional Web Development, SEO & Digital Marketing Services | Alberow",
  description: "Unlock the full potential of your online presence with Alberow's expert web development, SEO optimization, branding, UI/UX design, and digital marketing services tailored for business growth.",
  keywords: [
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "Branding",
    "UI/UX Design",
    "Custom Websites",
    "Online Business Solutions",
    "Alberow",
    "Website Optimization",
    "Responsive Web Design",
    "Business Growth",
    "Social Media Marketing",
    "E-commerce Development",
    "Performance Optimization"
  ],
  openGraph: {
    title: "Web Development, SEO & Digital Marketing Services | Alberow",
    description: "Alberow offers custom digital solutions including responsive web design, SEO, branding, and marketing to elevate your business online.",
    url: "https://alberow.com/services", // update if different
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/og-image.jpg", // replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Alberow Web Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Web Development & Marketing Services | Alberow",
    description: "Get top-notch web development, SEO, and branding services at Alberow to grow your business online.",
    images: ["https://alberow.com/og-image.jpg"], // same image URL
  },
};


export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesFaq />
      <CtaSection />
      <Footer />
    </main>
  )
}
