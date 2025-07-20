import type { Metadata } from "next"
import BlogClient from "./BlogClient"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Blog | Alberow - Digital Marketing Insights & Tips",
  description: "Read the latest insights, tips, and industry news from Alberow's digital marketing experts. Learn about SEO, web development, social media, and more.",
  keywords: [
    "Alberow Blog",
    "Digital Marketing Tips",
    "SEO Insights",
    "Web Development Articles",
    "Social Media Marketing",
    "Industry News",
    "Content Strategy",
    "Website Design Tips",
    "Digital Solutions",
    "Kalyan",
    "India"
  ],
  authors: [
    { name: "Alberow", url: "https://alberow.com" }
  ],
  creator: "Alberow",
  publisher: "Alberow",
  openGraph: {
    title: "Blog | Alberow - Digital Marketing Insights & Tips",
    description: "Read the latest insights, tips, and industry news from Alberow's digital marketing experts.",
    url: "https://alberow.com/blog",
    siteName: "Alberow",
    images: [
      {
        url: "https://alberow.com/assets/ai/website-designer-concept-illustration_114360-4449.webp",
        width: 1200,
        height: 630,
        alt: "Alberow Blog - Digital Marketing & Web Development Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Alberow - Digital Marketing Insights & Tips",
    description: "Read expert articles on digital marketing, SEO, web development and more from Alberow.",
    site: "@alberow",
    creator: "@alberow",
    images: ["https://alberow.com/assets/ai/website-designer-concept-illustration_114360-4449.webp"],
  },
  alternates: {
    canonical: "https://alberow.com/blog",
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

export default function Blog() {
  return <>
  <Navbar/>
  <BlogClient /></>
}
