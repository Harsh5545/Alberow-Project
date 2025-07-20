"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowRight, Users, Star, TrendingUp, Calendar, ShoppingCart } from "lucide-react"
import { projects } from "@/lib/projects-data"

const iconMap = {
  users: Users,
  star: Star,
  "trending-up": TrendingUp,
  calendar: Calendar,
  "shopping-cart": ShoppingCart,
}

export function ProjectsPreview() {
  // Get first 3 projects for preview
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Discover our latest work showcasing innovative solutions across web development, design, and e-commerce
            platforms.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    title={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {Array.isArray(project.category) ? project.category[0] : project.category}
                    {Array.isArray(project.category) && project.category.length > 1 && (
                      <span className="ml-1 opacity-75">+{project.category.length - 1}</span>
                    )}
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {project.year}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <p className="text-xl font-semibold mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </p>
                    <p className="text-sm text-foreground/60">{project.client}</p>
                  </div>

                  <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>

                  {/* Stats if available */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.stats.slice(0, 3).map((stat, i) => {
                        const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                        return (
                          <div key={i} className="text-center">
                            <div className="flex items-center justify-center mb-1">
                              {IconComponent && <IconComponent className="h-3 w-3 text-purple-600" />}
                            </div>
                            <div className="font-semibold text-sm">{stat.value}</div>
                            <div className="text-xs text-foreground/60">{stat.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-muted px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 bg-transparent"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
