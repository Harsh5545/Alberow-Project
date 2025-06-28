"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"

export default function DesignShowcase() {
  // Filter projects that include UI/UX Design
  const designProjects = projects.filter((project) =>
    Array.isArray(project.category) ? project.category.includes("UI/UX Design") : project.category === "UI/UX Design",
  )

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Design Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our recent UI/UX design projects and the results they've achieved for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  {/* Results highlight */}
                  <div className="mb-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <p className="text-sm text-pink-800 dark:text-pink-300 font-medium">Results: {project.results}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 4).map((feature, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-pink-100 text-pink-800 dark:bg-pink-600 dark:text-pink-100"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20 bg-transparent"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Project
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
