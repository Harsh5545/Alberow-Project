import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Blog | Alberow",
  description: "Read the latest insights, tips, and industry news from Alberow to help grow your business.",
}

export default function Blog() {
  return <BlogClient />
}
