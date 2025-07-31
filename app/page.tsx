

import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/footer"
// import { HeroSection } from "@/components/home/hero-section"
// import { AlberowLoader } from "@/components/alberow-loader"
import { HeroNoLottie } from "@/components/home/hero-section"
// import { InstantLoader } from "@/components/instant-loader"
export const metadata: Metadata = {
  title: "About | Alberow - Web Development & Digital Solutions",
  description: "Discover Alberow's mission, experienced team, and our client-focused approach to custom web development, digital marketing, SEO, UI/UX design, and e-commerce solutions.",
  keywords: [
   'Web Development',
    'Custom Websites',
    'Application Development',
    'Digital Solutions',
    'SEO',
    'UI/UX Design',
    'E-commerce',
    'Portfolio Websites',
    'Social Media Marketing',
    'Alberow',
    'Kalyan',
    'India',
    'Next.js',
    'React',
    'Tailwind CSS',
    'website development best agencies in kalyan',
    'website development best agencies in india',
    'website development best agencies in mumbai',
  
  ],
  authors: [
    { name: "Alberow", url: "https://alberow.com" }
  ],
  creator: "Alberow",
  publisher: "Alberow",
  openGraph: {
    title: "About Us | Alberow - Web Development & Digital Solutions",
    description: "Learn more about Alberow’s mission, expert team, and our approach to delivering custom web development, digital marketing, SEO, and design solutions for businesses of all sizes.",
    url: "https://alberow.com",
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/assets/alberow.webp",
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
    images: ["https://alberow.com/assets/alberow.webp"],
  },
  alternates: {
    canonical: "https://alberow.com",
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

export default function Home() {

  return (
    <>  
    <main className="min-h-screen  ">
      <Navbar />
      {/* <HeroSection /> */}
      <HeroNoLottie/>
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <CtaSection />
      <Footer />
    </main></>
  )
}
