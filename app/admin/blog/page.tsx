import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import BlogList from "@/components/admin/blog/blog-list"

export const metadata: Metadata = {
  title: "Blog Management",
  description: "Manage your blog posts",
}

export default function BlogManagementPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground mt-1">Create, edit, and manage your blog posts</p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="bg-card rounded-lg shadow-sm border p-6">
        <BlogList />
      </div>
    </div>
  )
}
