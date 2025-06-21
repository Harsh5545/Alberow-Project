import type { Metadata } from "next"
import BlogClient from "./BlogClient"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Blog | Alberow - Digital Marketing Insights & Tips",
  description:
    "Read the latest insights, tips, and industry news from Alberow's digital marketing experts. Learn about SEO, web development, social media, and more.",
  openGraph: {
    title: "Blog | Alberow - Digital Marketing Insights & Tips",
    description: "Read the latest insights, tips, and industry news from Alberow's digital marketing experts.",
    type: "website",
  },
}

export default function Blog() {
  return <>
  <Navbar/>
  <BlogClient /></>
}
