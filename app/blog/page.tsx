import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, Search, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Alberow",
  description: "Read the latest insights, tips, and industry news from Alberow to help grow your business.",
}

// This would typically come from a database or CMS
const blogPosts = [
  {
    title: "10 SEO Strategies to Boost Your Website Ranking",
    excerpt:
      "Learn the most effective SEO strategies that will help improve your website's visibility and ranking on search engines.",
    date: "May 15, 2023",
    author: "Alex Johnson",
    image: "/placeholder.svg?height=400&width=800",
    slug: "seo-strategies-boost-ranking",
    category: "SEO",
  },
  {
    title: "The Future of Web Development in 2023",
    excerpt: "Discover the emerging trends and technologies that are shaping the future of web development this year.",
    date: "April 28, 2023",
    author: "Sarah Williams",
    image: "/placeholder.svg?height=400&width=800",
    slug: "future-web-development-2023",
    category: "Web Development",
  },
  {
    title: "How to Create an Effective Social Media Strategy",
    excerpt:
      "A comprehensive guide to developing and implementing a social media strategy that drives engagement and conversions.",
    date: "April 10, 2023",
    author: "Michael Brown",
    image: "/placeholder.svg?height=400&width=800",
    slug: "effective-social-media-strategy",
    category: "Social Media",
  },
  {
    title: "Responsive Design Best Practices for 2023",
    excerpt:
      "Learn the latest best practices for creating responsive websites that provide an optimal viewing experience across all devices.",
    date: "March 22, 2023",
    author: "Emily Johnson",
    image: "/placeholder.svg?height=400&width=800",
    slug: "responsive-design-best-practices-2023",
    category: "Web Design",
  },
  {
    title: "The Importance of Website Speed for SEO",
    excerpt:
      "Understand why website speed is crucial for SEO and learn practical tips to improve your website's loading time.",
    date: "March 15, 2023",
    author: "David Wilson",
    image: "/placeholder.svg?height=400&width=800",
    slug: "importance-website-speed-seo",
    category: "SEO",
  },
  {
    title: "How to Build a Strong Brand Identity Online",
    excerpt:
      "Discover the key elements of building a strong brand identity online and how it can help your business stand out from the competition.",
    date: "February 28, 2023",
    author: "Jessica Martinez",
    image: "/placeholder.svg?height=400&width=800",
    slug: "build-strong-brand-identity-online",
    category: "Branding",
  },
]

const categories = ["All", "SEO", "Web Development", "Social Media", "Web Design", "Branding"]

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Blog</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Stay updated with our latest insights, tips, and industry news to help grow your business.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
              <Input type="search" placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg overflow-hidden hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
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
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  </Link>

                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center text-sm font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
