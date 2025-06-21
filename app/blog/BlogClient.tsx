"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Search, ArrowRight, Clock, Star } from "lucide-react"
import { blogPosts, categories } from "@/lib/blog-data"

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, proven strategies, and the latest trends in digital
              marketing, web development, and design.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-500" />
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700">
                          {post.category}
                        </Badge>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles, authors, or topics..."
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={
                    category === selectedCategory
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      : "hover:bg-muted"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      >
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 leading-tight">{post.title}</h2>
                      </Link>

                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center text-sm font-medium group/link"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center">
                <Button variant="outline" size="lg" className="hover:bg-muted">
                  Load More Articles
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-muted-foreground mb-8">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search
                  terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchQuery("")
                  }}
                  className="hover:bg-muted"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
