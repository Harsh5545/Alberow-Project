import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import DesignFeatures from "@/components/services/ui-ux-design/design-features"
import DesignProcess from "@/components/services/ui-ux-design/design-process"
import DesignShowcase from "@/components/services/ui-ux-design/design-showcase"
import DesignTools from "@/components/services/ui-ux-design/design-tools"
import DesignFAQ from "@/components/services/ui-ux-design/design-faq"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "UI/UX Design Services | Alberow",
  description:
    "Create intuitive, engaging user experiences with our professional UI/UX design services. We combine aesthetics with functionality to delight your users.",
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
