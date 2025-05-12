"use client"

import { BlogForm } from "@/components/admin/blog/blog-form"

export default function NewBlogPageClient() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
        <p className="text-muted-foreground">Create a new blog post for your website</p>
      </div>
      <BlogForm />
    </div>
  )
}
