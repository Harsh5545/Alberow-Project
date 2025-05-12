import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "10 SEO Strategies to Boost Your Website Ranking",
    date: "May 15, 2023",
    author: "Alex Johnson",
    content: `
      <p>Search Engine Optimization (SEO) is crucial for improving your website's visibility in search engine results. Here are 10 effective strategies to boost your website ranking:</p>
      
      <h2>1. Conduct Thorough Keyword Research</h2>
      <p>Identify relevant keywords that your target audience is searching for. Use tools like Google Keyword Planner, SEMrush, or Ahrefs to find high-volume, low-competition keywords.</p>
      
      <h2>2. Optimize On-Page Elements</h2>
      <p>Ensure your title tags, meta descriptions, headers, and content are optimized with your target keywords. Make sure each page has a unique title and meta description.</p>
      
      <h2>3. Create High-Quality Content</h2>
      <p>Develop comprehensive, valuable content that addresses your audience's needs and questions. Longer, in-depth content tends to rank better in search results.</p>
      
      <h2>4. Improve Website Speed</h2>
      <p>Optimize your website's loading speed by compressing images, minifying CSS and JavaScript, and leveraging browser caching. Use Google PageSpeed Insights to identify areas for improvement.</p>
      
      <h2>5. Ensure Mobile Responsiveness</h2>
      <p>With mobile-first indexing, having a mobile-friendly website is essential. Ensure your website is responsive and provides a good user experience on all devices.</p>
      
      <h2>6. Build Quality Backlinks</h2>
      <p>Earn backlinks from reputable, relevant websites to increase your domain authority. Focus on creating link-worthy content and building relationships with industry influencers.</p>
      
      <h2>7. Optimize for Local SEO</h2>
      <p>If you have a local business, claim and optimize your Google My Business listing, ensure consistent NAP (Name, Address, Phone) information across the web, and gather positive reviews.</p>
      
      <h2>8. Improve User Experience</h2>
      <p>Enhance your website's navigation, readability, and overall user experience. Reduce bounce rates by making it easy for visitors to find what they're looking for.</p>
      
      <h2>9. Utilize Schema Markup</h2>
      <p>Implement schema markup to help search engines understand your content better and potentially display rich snippets in search results.</p>
      
      <h2>10. Monitor and Analyze Performance</h2>
      <p>Regularly track your website's performance using tools like Google Analytics and Google Search Console. Identify areas for improvement and adjust your strategy accordingly.</p>
      
      <p>Implementing these SEO strategies consistently will help improve your website's visibility and ranking in search engine results over time. Remember that SEO is a long-term process, and results may take several months to become apparent.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["SEO", "Digital Marketing", "Web Development"],
    relatedPosts: [
      {
        title: "The Future of Web Development in 2023",
        slug: "future-web-development-2023",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "How to Create an Effective Social Media Strategy",
        slug: "effective-social-media-strategy",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  return {
    title: `${post.title} | Alberow Blog`,
    description: `Read our blog post about ${post.title}. Learn the latest insights and tips from Alberow.`,
    openGraph: {
      title: post.title,
      description: `Read our blog post about ${post.title}. Learn the latest insights and tips from Alberow.`,
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
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center text-sm text-foreground/60 mb-8 space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, index) => (
                <div key={index} className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
