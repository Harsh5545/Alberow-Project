"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogForm from "@/components/admin/blog/blog-form"
import BlogPreview from "@/components/admin/blog/blog-preview"
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EditBlogPageClient({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("edit")
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    category: "",
    tags: [],
    publishDate: new Date().toISOString().split("T")[0],
    status: "published",
  })

  useEffect(() => {
    // Simulate fetching blog post data
    setTimeout(() => {
      setFormData({
        title: "Example Blog Post",
        slug: "example-blog-post",
        excerpt: "This is an example blog post that demonstrates the editing functionality.",
        content:
          "# Example Blog Post\n\nThis is a sample blog post content with Markdown support.\n\n## Features\n\n- Rich text editing\n- Image uploads\n- Categories and tags\n- Publishing options\n\n> This is a blockquote example.",
        coverImage: "/placeholder.svg?height=600&width=1200",
        category: "Technology",
        tags: ["web development", "design", "tutorial"],
        publishDate: "2023-05-15",
        status: "published",
      })
      setIsLoading(false)
    }, 1000)
  }, [id])

  const handleFormChange = (data: any) => {
    setFormData(data)
  }

  const handleSave = async () => {
    // This would connect to your API to update the blog post
    console.log("Updating blog post:", formData)
    // Redirect to blog list after saving
  }

  const handleDelete = async () => {
    // This would connect to your API to delete the blog post
    console.log("Deleting blog post:", id)
    // Redirect to blog list after deleting
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Edit Blog Post</h1>
            <p className="text-muted-foreground mt-1">Edit and preview your blog post</p>
          </div>
        </div>
        <div className="flex gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the blog post and remove it from our
                  servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="mt-0">
            <BlogForm data={formData} onChange={handleFormChange} />
          </TabsContent>
          <TabsContent value="preview" className="mt-0">
            <BlogPreview data={formData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
