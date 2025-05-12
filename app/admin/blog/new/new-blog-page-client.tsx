"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogForm from "@/components/admin/blog/blog-form"
import BlogPreview from "@/components/admin/blog/blog-preview"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function NewBlogPageClient() {
  const [activeTab, setActiveTab] = useState("edit")
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    category: "",
    tags: [],
    publishDate: new Date().toISOString().split("T")[0],
    status: "draft",
  })

  const handleFormChange = (data: any) => {
    setFormData(data)
  }

  const handleSave = async () => {
    // This would connect to your API to save the blog post
    console.log("Saving blog post:", formData)
    // Redirect to blog list after saving
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
            <h1 className="text-3xl font-bold">Create New Blog Post</h1>
            <p className="text-muted-foreground mt-1">Create and preview your new blog post</p>
          </div>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Post
        </Button>
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
