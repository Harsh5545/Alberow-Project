import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
// import { ContactMap } from "@/components/contact/contact-map"


export const metadata: Metadata = {
  title: "Contact Us | Alberow",
  description: "Get in touch with the Alberow team. We'd love to hear about your project and how we can help.",
  keywords: [
    "Contact Alberow",
    "Get in Touch",
    "Web Development Inquiry",
    "Business Consultation",
    "Digital Solutions Contact",
    "Kalyan",
    "India"
  ],
  authors: [
    { name: "Alberow", url: "https://alberow.com" }
  ],
  creator: "Alberow",
  publisher: "Alberow",
  openGraph: {
    title: "Contact Us | Alberow",
    description: "Get in touch with Alberow's expert team for web development, SEO, digital marketing, and more.",
    url: "https://alberow.com/contact",
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/assets/ai/socialmedia.webp",
        width: 1200,
        height: 630,
        alt: "Contact Alberow - Web Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Alberow",
    description: "Reach out to Alberow's team for professional web development and digital solutions.",
    site: "@alberow",
    creator: "@alberow",
    images: ["https://alberow.com/assets/ai/socialmedia.webp"],
  },
  alternates: {
    canonical: "https://alberow.com/contact",
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


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <Footer />
    </main>
  )
}
