import type { Metadata } from "next"
import NewBlogPageClient from "./new-blog-page-client"

export const metadata: Metadata = {
  title: "Create New Blog Post",
  description: "Create a new blog post for your website",
}

export default function NewBlogPage() {
  return <NewBlogPageClient />
}
