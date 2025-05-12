"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
  },
  {
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete redesign of a corporate website with improved user experience and SEO optimization.",
  },
  {
    title: "Social Media Dashboard",
    category: "Application",
    image: "/placeholder.svg?height=400&width=600",
    description: "A comprehensive dashboard for managing and analyzing social media performance across platforms.",
  },
  {
    title: "Restaurant Booking System",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "An online booking system for restaurants with real-time availability and payment processing.",
  },
  {
    title: "Portfolio Website",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "A creative portfolio website for a photographer showcasing their work with a unique layout.",
  },
  {
    title: "Fitness Tracking App",
    category: "Application",
    image: "/placeholder.svg?height=400&width=600",
    description: "A mobile application for tracking fitness activities, nutrition, and progress over time.",
  },
]

const categories = ["All", "Web Development", "UI/UX Design", "Application"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
