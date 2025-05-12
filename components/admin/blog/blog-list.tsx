"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react"
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

// Mock data for blog posts
const mockBlogPosts = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    slug: "getting-started-with-web-development",
    status: "published",
    category: "Web Development",
    publishDate: "2023-05-15",
    views: 1245,
  },
  {
    id: "2",
    title: "The Future of AI in Design",
    slug: "future-of-ai-in-design",
    status: "published",
    category: "Design",
    publishDate: "2023-04-22",
    views: 982,
  },
  {
    id: "3",
    title: "Optimizing Your Website for SEO",
    slug: "optimizing-website-for-seo",
    status: "draft",
    category: "SEO",
    publishDate: "",
    views: 0,
  },
  {
    id: "4",
    title: "Mobile-First Design Principles",
    slug: "mobile-first-design-principles",
    status: "published",
    category: "Design",
    publishDate: "2023-03-10",
    views: 756,
  },
  {
    id: "5",
    title: "Introduction to React Hooks",
    slug: "introduction-to-react-hooks",
    status: "draft",
    category: "Web Development",
    publishDate: "",
    views: 0,
  },
]

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts)

  const handleDelete = (id: string) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id))
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "—"
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <Badge variant={post.status === "published" ? "default" : "secondary"}>
                  {post.status === "published" ? "Published" : "Draft"}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(post.publishDate)}</TableCell>
              <TableCell className="text-right">{post.views.toLocaleString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <Link href={`/admin/blog/${post.id}`}>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/blog/${post.slug}`}>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </DropdownMenuItem>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the blog post and remove it from
                            our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(post.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
