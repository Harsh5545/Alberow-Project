"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"

export function PortfolioShowcase() {
  const portfolios = [
    {
      title: "Creative Designer Portfolio",
      category: "Design",
      description:
        "A stunning portfolio showcasing graphic design work with interactive galleries and smooth animations.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Interactive Gallery", "Smooth Animations", "Project Filtering", "Contact Integration"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Photography Portfolio",
      category: "Photography",
      description: "Professional photography portfolio with full-screen galleries and client testimonials.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Full-Screen Gallery", "Client Testimonials", "Booking System", "Print Shop"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Artist Showcase",
      category: "Art",
      description: "Contemporary art portfolio featuring digital galleries and exhibition information.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Digital Gallery", "Exhibition Info", "Art Sales", "Artist Bio"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Developer Portfolio",
      category: "Development",
      description: "Modern developer portfolio showcasing projects with live demos and code repositories.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Live Demos", "Code Repos", "Tech Stack", "Blog Integration"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="portfolio-showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio Examples</h2>
          <p className="text-foreground/70 text-lg">
            Explore some of our recent portfolio projects and see how we help creatives showcase their work effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={portfolio.image || "/placeholder.svg"}
                    alt={portfolio.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Portfolio
                    </Button>
                  </div>
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r ${portfolio.color}`}
                  >
                    {portfolio.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{portfolio.title}</h3>
                  <p className="text-foreground/70 mb-4">{portfolio.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
