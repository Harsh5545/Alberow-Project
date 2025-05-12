"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface BlogFormProps {
  data: {
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    category: string
    tags: string[]
    publishDate: string
    status: string
  }
  onChange: (data: any) => void
}

export default function BlogForm({ data, onChange }: BlogFormProps) {
  const [newTag, setNewTag] = useState("")

  // Generate slug from title
  useEffect(() => {
    if (data.title && !data.slug) {
      const slug = data.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")
      onChange({ ...data, slug })
    }
  }, [data.title, onChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({ ...data, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    onChange({ ...data, [name]: value })
  }

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      e.preventDefault()
      if (!data.tags.includes(newTag.trim())) {
        onChange({ ...data, tags: [...data.tags, newTag.trim()] })
      }
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    onChange({
      ...data,
      tags: data.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter blog post title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" value={data.slug} onChange={handleChange} placeholder="enter-url-slug" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          value={data.excerpt}
          onChange={handleChange}
          placeholder="Brief summary of the blog post"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown supported)</Label>
        <Textarea
          id="content"
          name="content"
          value={data.content}
          onChange={handleChange}
          placeholder="Write your blog post content here..."
          rows={15}
          className="font-mono"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            name="coverImage"
            value={data.coverImage}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={data.category} onValueChange={(value) => handleSelectChange("category", value)}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="SEO">SEO</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="publishDate">Publish Date</Label>
          <Input id="publishDate" name="publishDate" type="date" value={data.publishDate} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={data.status} onValueChange={(value) => handleSelectChange("status", value)}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {data.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {tag}
              <Button variant="ghost" size="icon" className="h-4 w-4 rounded-full" onClick={() => handleRemoveTag(tag)}>
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
        <Input
          id="tags"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Add a tag and press Enter"
        />
      </div>
    </div>
  )
}
