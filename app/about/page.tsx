import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutProcess } from "@/components/about/about-process"
import { AboutTestimonials } from "@/components/about/about-testimonials"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | Alberow - Web Development & Digital Solutions",
  description: "Discover Alberow's mission, experienced team, and our client-focused approach to custom web development, digital marketing, SEO, UI/UX design, and e-commerce solutions.",
  keywords: [
    "About Alberow",
    "Web Development Company",
    "Digital Marketing Agency",
    "SEO Services",
    "UI/UX Design",
    "Custom Websites",
    "E-commerce Solutions",
    "Team Alberow",
    "Our Mission",
    "Professional Web Development",
    "India",
    "Kalyan"
  ],
  authors: [
    { name: "Alberow", url: "https://alberow.com" }
  ],
  creator: "Alberow",
  publisher: "Alberow",
  openGraph: {
    title: "About Us | Alberow - Web Development & Digital Solutions",
    description: "Learn more about Alberow’s mission, expert team, and our approach to delivering custom web development, digital marketing, SEO, and design solutions for businesses of all sizes.",
    url: "https://alberow.com/about",
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/AboutAlberow.webp",
        width: 1200,
        height: 630,
        alt: "About Alberow - Web Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Alberow - Web Development & Digital Solutions",
    description: "Explore Alberow's story, mission, and the expert team delivering custom websites, digital marketing, and SEO services.",
    site: "@alberow",
    creator: "@alberow",
    images: ["https://alberow.com/AboutAlberow.webp"],
  },
  alternates: {
    canonical: "https://alberow.com/about",
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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutProcess />
      <AboutTestimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
