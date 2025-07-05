import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import DesignFeatures from "@/components/services/ui-ux-design/design-features"
import DesignProcess from "@/components/services/ui-ux-design/design-process"
import DesignShowcase from "@/components/services/ui-ux-design/design-showcase"
import DesignTools from "@/components/services/ui-ux-design/design-tools"
import DesignFAQ from "@/components/services/ui-ux-design/design-faq"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "UI/UX Design Services | Alberow",
  description:
    "Create intuitive, engaging user experiences with our professional UI/UX design services. We combine aesthetics with functionality to delight your users and boost conversions.",
  keywords: [
    "UI Design",
    "UX Design",
    "UI/UX Services",
    "User Experience Design",
    "User Interface Design",
    "Web Design",
    "App Design",
    "Product Design",
    "Interaction Design",
    "Wireframes",
    "Prototyping",
    "Usability Testing",
    "Alberow"
  ],
  openGraph: {
    title: "UI/UX Design Services | Alberow",
    description:
      "Create intuitive, engaging user experiences with our professional UI/UX design services. We combine aesthetics with functionality to delight your users and boost conversions.",
    url: "https://alberow.com/services/ui-ux-design",
    siteName: "Alberow",
    images: [
      {
        url: "/assets/ai/ui/ux.webp",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services by Alberow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Alberow",
    description:
      "Create intuitive, engaging user experiences with our professional UI/UX design services.",
    images: ["/assets/ai/ui/ux.webp"],
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

export default function UIUXDesignPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ServiceHero
        title="UI/UX Design Services"
        description="Create intuitive, engaging digital experiences that delight users and drive conversions."
        image="/placeholder.svg?height=600&width=800"
        gradient="from-pink-500 to-orange-500"
      />
      <DesignFeatures />
      <DesignProcess />
      <DesignShowcase />
      <DesignTools />
      <DesignFAQ />
      <ContactSection />
    </main>
  )
}
