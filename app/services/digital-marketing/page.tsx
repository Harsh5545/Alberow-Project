import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import MarketingFeatures from "@/components/services/digital-marketing/marketing-features"
import MarketingChannels from "@/components/services/digital-marketing/marketing-channels"
import MarketingProcess from "@/components/services/digital-marketing/marketing-process"
import MarketingCaseStudies from "@/components/services/digital-marketing/marketing-case-studies"
import MarketingFAQ from "@/components/services/digital-marketing/marketing-faq"
// import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Alberow",
  description:
    "Boost your online presence with our comprehensive digital marketing services. From SEO to social media, we help you reach your target audience effectively.",
  keywords: [
    "Digital Marketing",
    "Online Marketing",
    "SEO",
    "Social Media Marketing",
    "Content Marketing",
    "PPC",
    "Email Marketing",
    "Brand Awareness",
    "Lead Generation",
    "Marketing Agency",
    "Alberow"
  ],
  openGraph: {
    title: "Digital Marketing Services | Alberow",
    description:
      "Boost your online presence with our comprehensive digital marketing services. From SEO to social media, we help you reach your target audience effectively.",
    url: "https://alberow.com/services/digital-marketing",
    siteName: "Alberow",
    images: [
      {
        url: "/assets/ai/socialmedia.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services by Alberow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Alberow",
    description:
      "Boost your online presence with our comprehensive digital marketing services.",
    images: ["/assets/ai/socialmedia.webp"],
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

export default function DigitalMarketingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceHero
        title="Digital Marketing Services"
        description="Elevate your brand's online presence with our data-driven digital marketing strategies that deliver measurable results."
        image="/placeholder.svg?height=600&width=800"
        gradient="from-purple-600 to-blue-600"
      />
      <MarketingFeatures />
      <MarketingChannels />
      <MarketingProcess />
      <MarketingCaseStudies />
      <MarketingFAQ />
      {/* <ContactSection /> */}
    </main>
  )
}
