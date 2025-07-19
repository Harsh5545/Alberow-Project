"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getEcommerceProjects } from "@/lib/projects-data"

export function EcommerceShowcase() {
  const ecommerceProjects = getEcommerceProjects()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">E-commerce Solutions</h2>
          <p className="text-foreground/70 text-lg">
            Explore our successful e-commerce projects that have helped businesses grow their online sales and reach
            more customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecommerceProjects.map((project, index) => (
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
                    <p className="text-xl font-semibold mb-2">{project.title}</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-1 rounded-full">
                        <ShoppingCart className="h-4 w-4" />
                      </div>
                      <span className="text-sm">
                        {project.type === "one-page" ? "One-Page Store" : "Multi-Page Store"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">KEY FEATURES:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.stats.map((stat, i) => {
                      const IconComponent =
                        stat.icon === "shopping-cart" ? ShoppingCart : stat.icon === "star" ? Star : TrendingUp
                      return (
                        <div key={i} className="text-center">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg mb-2 flex items-center justify-center">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="font-semibold text-sm">{stat.value}</div>
                          <div className="text-xs text-foreground/60">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">RESULTS:</h4>
                  <p className="text-sm text-foreground/80">{project.results}</p>
                </div>

                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    View Live Store <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
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
