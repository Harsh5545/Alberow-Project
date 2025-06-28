"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects-data"

export function OnePageShowcase() {
  // Filter projects that are one-page type
  const onePageProjects = projects.filter((project) => project.type === "one-page")

  return (
    <section id="one-page-showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One-Page Website Examples</h2>
          <p className="text-foreground/70 text-lg">
            Explore our successful one-page website projects that have delivered exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onePageProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 bg-muted">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.client}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">FEATURES:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">RESULTS:</h4>
                  <p className="text-sm text-foreground/80">{project.results}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
