"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "10 SEO Strategies to Boost Your Website Ranking",
    excerpt:
      "Learn the most effective SEO strategies that will help improve your website's visibility and ranking on search engines.",
    date: "May 15, 2023",
    author: "Alex Johnson",
    image: "/placeholder.svg?height=300&width=500",
    slug: "seo-strategies-boost-ranking",
  },
  {
    title: "The Future of Web Development in 2023",
    excerpt: "Discover the emerging trends and technologies that are shaping the future of web development this year.",
    date: "April 28, 2023",
    author: "Sarah Williams",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-web-development-2023",
  },
  {
    title: "How to Create an Effective Social Media Strategy",
    excerpt:
      "A comprehensive guide to developing and implementing a social media strategy that drives engagement and conversions.",
    date: "April 10, 2023",
    author: "Michael Brown",
    image: "/placeholder.svg?height=300&width=500",
    slug: "effective-social-media-strategy",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest from our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Blog</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Stay updated with our latest insights, tips, and industry news to help grow your business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-foreground/60 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  </Link>
                  <p className="text-foreground/70">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center text-sm font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blog" className="inline-flex items-center">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
