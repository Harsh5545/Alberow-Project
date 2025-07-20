import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsProcess } from "@/components/projects/projects-process"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Projects | Professional Web Development Portfolio",
  description: "Explore our portfolio of successful web development, design, and digital solutions. See how we've helped businesses grow with modern websites and applications.",
  keywords: [
    "Web Development Portfolio",
    "Website Design Projects",
    "Business Applications",
    "Digital Solutions",
    "Alberow Projects",
    "Professional Portfolio",
    "Custom Websites",
    "Kalyan",
    "India"
  ],
  authors: [
    { name: "Alberow", url: "https://alberow.com" }
  ],
  creator: "Alberow",
  publisher: "Alberow",
  openGraph: {
    title: "Our Projects | Professional Web Development Portfolio",
    description: "See how Alberow has helped businesses grow with modern websites, design, and digital solutions.",
    url: "https://alberow.com/projects",
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/assets/ai/webdevlopment.webp",
        width: 1200,
        height: 630,
        alt: "Alberow Projects - Web Development Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Professional Web Development Portfolio",
    description: "Explore Alberow's portfolio of websites, apps, and digital solutions for businesses.",
    site: "@alberow",
    creator: "@alberow",
    images: ["https://alberow.com/assets/ai/webdevlopment.webp"],
  },
  alternates: {
    canonical: "https://alberow.com/projects",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsProcess />
      <CtaSection />
      <Footer />
    </main>
  )
}
