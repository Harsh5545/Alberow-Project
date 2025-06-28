"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function WebDevShowcase() {
  const [activeTab, setActiveTab] = useState("Web Development")

  // Organize projects by categories
  const showcaseProjects = [
    {
      category: "Web Development",
      projects: projects.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes("Web Development")
          : project.category === "Web Development",
      ),
    },
    {
      category: "E-commerce",
      projects: projects.filter((project) =>
        Array.isArray(project.category) ? project.category.includes("E-commerce") : project.category === "E-commerce",
      ),
    },
    {
      category: "Portfolio",
      projects: projects.filter((project) =>
        Array.isArray(project.category) ? project.category.includes("Portfolio") : project.category === "Portfolio",
      ),
    },
  ].filter((category) => category.projects.length > 0) // Only show categories with projects

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
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Portfolio
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Explore our web development projects across various industries and see how we've helped businesses achieve
            their goals.
          </motion.p>
        </div>

        <Tabs defaultValue="Web Development" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {showcaseProjects.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {showcaseProjects.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg overflow-hidden border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-foreground/60">{project.client}</p>
                      </div>
                      <p className="text-foreground/70 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {project.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-foreground/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Project
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
