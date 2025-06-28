"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function PortfolioShowcase() {
  // Filter projects that are portfolio category
  const portfolioProjects = projects.filter((project) =>
    Array.isArray(project.category) ? project.category.includes("Portfolio") : project.category === "Portfolio",
  )

  const getColor = (index: number) => {
    const colors = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
    ]
    return colors[index % colors.length]
  }

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
            Explore our recent portfolio projects and see how we help professionals showcase their work effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" onClick={() => window.open(project.liveUrl, "_blank")}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Portfolio
                    </Button>
                  </div>
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r ${getColor(index)}`}
                  >
                    {Array.isArray(project.category) ? project.category[0] : project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-foreground/60">{project.client}</p>
                  </div>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground/60 mb-2">KEY FEATURES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-foreground/80">
                      <strong>Results:</strong> {project.results}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
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
