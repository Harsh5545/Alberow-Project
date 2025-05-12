import type { Metadata } from "next"
import EditBlogPageClient from "./edit-blog-page-client"

export const metadata: Metadata = {
  title: "Edit Blog Post",
  description: "Edit an existing blog post",
}

export default function EditBlogPage({ params }: { params: { id: string } }) {
  return <EditBlogPageClient id={params.id} />
}
