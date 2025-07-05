import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Heart,
  Bookmark,
  MessageCircle,
  Eye,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  Twitter,
  Linkedin,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import { BlogProgressIndicator } from "@/components/blog/blog-progress-indicator"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { SocialShare } from "@/components/blog/social-share"
import { NewsletterSignup } from "@/components/blog/newsletter-signup"
import { Navbar } from "@/components/navbar"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Mock comments data
const mockComments = [
  {
    id: "1",
    author: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "This is an excellent article! The SEO strategies mentioned here are really practical and I've already started implementing some of them on my website.",
    date: "2 days ago",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        content: "I agree! Which strategy did you find most effective?",
        date: "1 day ago",
        likes: 3,
      },
    ],
  },
  {
    id: "2",
    author: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Great insights on Core Web Vitals. I had no idea they were so important for SEO rankings. Thanks for sharing!",
    date: "3 days ago",
    likes: 8,
    replies: [],
  },
  {
    id: "3",
    author: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The section on entity-based SEO was particularly enlightening. Do you have any recommendations for tools to help with entity optimization?",
    date: "4 days ago",
    likes: 15,
    replies: [
      {
        id: "3-1",
        author: "Alex Thompson",
        avatar: "/placeholder.svg?height=32&width=32",
        content: "I'd recommend checking out Google's Natural Language API for entity analysis.",
        date: "3 days ago",
        likes: 5,
      },
      {
        id: "3-2",
        author: "Lisa Wang",
        avatar: "/placeholder.svg?height=32&width=32",
        content: "Also try SEMrush's Topic Research tool - it's great for understanding entity relationships.",
        date: "2 days ago",
        likes: 7,
      },
    ],
  },
]

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Alberow Blog",
    }
  }

  return {
    title: `${post.title} | Alberow Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  return (
    <>
    <Navbar/>
      <BlogProgressIndicator />

      <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 pt-16 pb-16">
            <Button asChild variant="ghost" className="mb-8 text-white/80 hover:text-white hover:bg-white/10">
              <Link href="/blog" className="md:flex hidden md:items-center">
                <ArrowLeft className= "mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">{post.category}</Badge>
                {post.featured && (
                  <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400/30">⭐ Featured</Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-white/30">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">{post.author}</div>
                    <div className="text-sm text-white/70">Author</div>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-8 bg-white/30" />
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1 md:mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1 md:mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 mr-1 md:mr-2" />
                  <span>2.4k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Featured Image */}
                  <div className="relative h-96 overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Article Actions */}
                  <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                      >
                        <Heart className="md:h-4 md:w-4 h-2 w-2 mr-1 md:mr-2" />
                        124 Likes
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="md:h-4 md:w-4 h-2 w-2 mr-1 md:mr-2" />
                        Save
                      </Button>
                      {/* <Button variant="ghost" size="sm" className="hidden">
                        <MessageCircle className=" md:h-4 md:w-4 h-2 w-2 mr-1 md:mr-2" />
                        {mockComments.length} Comments
                      </Button> */}
                    </div>
                    <SocialShare title={post.title} url={`/blog/${post.slug}`} />
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    <div
                      className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:text-purple-600 prose-code:bg-purple-50 dark:prose-code:bg-purple-950 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-blockquote:border-purple-200 dark:prose-blockquote:border-purple-800 prose-blockquote:bg-purple-50/50 dark:prose-blockquote:bg-purple-950/50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border/50">
                      <span className="text-sm font-medium text-muted-foreground mr-1 md:mr-2">Tags:</span>
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="flex items-center hover:bg-purple-100 dark:hover:bg-purple-900 cursor-pointer"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Author Bio */}
              <Card className="mt-8 shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-20 w-20 border-4 border-purple-200 dark:border-purple-800">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback className="text-xl">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{post.author}</h3>
                      <p className="text-muted-foreground mb-4">
                        Senior Digital Marketing Strategist with over 8 years of experience in SEO, content marketing,
                        and brand development. Passionate about helping businesses grow through data-driven marketing
                        strategies.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          <User className="md:h-4 md:w-4 h-2 w-2 mr-1 md:mr-2" />
                          View Profile
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="mt-8 shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-2xl font-bold flex items-center">
                    <MessageCircle className="h-6 w-6 mr-1 md:mr-2 text-purple-600" />
                    Comments ({mockComments.length})
                  </h3>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {/* Comment Form */}
                  <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <h4 className="font-semibold mb-4">Leave a Comment</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Your Name" />
                        <Input placeholder="Your Email" type="email" />
                      </div>
                      <Textarea placeholder="Write your comment here..." rows={4} />
                      <Button className="bg-purple-600 hover:bg-purple-700">Post Comment</Button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {mockComments.map((comment) => (
                      <div key={comment.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {comment.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">{comment.author}</span>
                              <span className="text-sm text-muted-foreground">{comment.date}</span>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 mb-3">{comment.content}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-purple-600">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-purple-600">
                                <Reply className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="ml-14 space-y-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex items-start gap-4">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                                  <AvatarFallback className="text-xs">
                                    {reply.author
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-sm">{reply.author}</span>
                                    <span className="text-xs text-muted-foreground">{reply.date}</span>
                                  </div>
                                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{reply.content}</p>
                                  <div className="flex items-center gap-3">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-xs text-muted-foreground hover:text-purple-600"
                                    >
                                      <ThumbsUp className="h-3 w-3 mr-1" />
                                      {reply.likes}
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-xs text-muted-foreground hover:text-purple-600"
                                    >
                                      <Reply className="h-3 w-3 mr-1" />
                                      Reply
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {comment !== mockComments[mockComments.length - 1] && <Separator className="my-6" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <TableOfContents />

                {/* Newsletter Signup */}
                <NewsletterSignup />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                    <CardHeader>
                      <h3 className="text-xl font-bold">Related Articles</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                          <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center text-xs text-muted-foreground mt-2">
                                <span>{relatedPost.readTime}</span>
                                <ChevronRight className="h-3 w-3 ml-auto group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Popular Tags */}
                <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                  <CardHeader>
                    <h3 className="text-xl font-bold">Popular Tags</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "SEO",
                        "Web Development",
                        "Digital Marketing",
                        "UI/UX",
                        "React",
                        "Next.js",
                        "Performance",
                        "Branding",
                      ].map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
