"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag, Folder } from "lucide-react"

interface BlogPreviewProps {
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
}

export default function BlogPreview({ data }: BlogPreviewProps) {
  // Function to render markdown content (simplified version)
  const renderMarkdown = (content: string) => {
    // This is a very basic markdown renderer
    // In a real app, you'd use a library like react-markdown
    const htmlContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gm, "<em>$1</em>")
      .replace(/!\[(.*?)\]$$(.*?)$$/gm, '<img alt="$1" src="$2" class="my-4 rounded-lg max-w-full h-auto" />')
      .replace(/\[(.*?)\]$$(.*?)$$/gm, '<a href="$2" class="text-primary hover:underline">$1</a>')
      .replace(
        /^> (.*$)/gm,
        '<blockquote class="pl-4 border-l-4 border-muted-foreground/30 italic my-4 text-muted-foreground">$1</blockquote>',
      )
      .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/<\/li>\n<li/g, "</li><li")
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal">$2</li>')
      .replace(/<\/li>\n<li/g, "</li><li")
      .replace(/^\n\n/gm, '</p><p class="my-4">')
      .replace(/\n\n/gm, '</p><p class="my-4">')
      .replace(/\n/gm, "<br />")

    return `<p class="my-4">${htmlContent}</p>`
      .replace(/<p class="my-4"><\/p>/g, "")
      .replace(/<p class="my-4"><h/g, "<h")
      .replace(/<\/h([1-6])><\/p>/g, "</h$1>")
      .replace(/<p class="my-4"><li/g, "<ul><li")
      .replace(/<\/li><\/p>/g, "</li></ul>")
      .replace(/<\/ul><ul>/g, "")
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="blog-preview">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <div className="flex flex-wrap gap-3 mb-6">
          {data.category && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Folder className="h-4 w-4 mr-1" />
              <span>{data.category}</span>
            </div>
          )}
          {data.publishDate && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(data.publishDate)}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {data.coverImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={data.coverImage || "/placeholder.svg"} alt={data.title} fill className="object-cover" />
        </div>
      )}

      {data.excerpt && (
        <Card className="mb-8 bg-muted/50">
          <CardContent className="p-4 italic text-lg">{data.excerpt}</CardContent>
        </Card>
      )}

      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(data.content) }}
      />

      {data.tags && data.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {data.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
