"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WebDevTechnologies() {
  const technologies = [
    { name: "React", image: "/placeholder.svg?height=80&width=80", category: "Frontend" },
    { name: "Next.js", image: "/placeholder.svg?height=80&width=80", category: "Frontend" },
    { name: "Vue.js", image: "/placeholder.svg?height=80&width=80", category: "Frontend" },
    { name: "Angular", image: "/placeholder.svg?height=80&width=80", category: "Frontend" },
    { name: "Node.js", image: "/placeholder.svg?height=80&width=80", category: "Backend" },
    { name: "Express", image: "/placeholder.svg?height=80&width=80", category: "Backend" },
    { name: "Django", image: "/placeholder.svg?height=80&width=80", category: "Backend" },
    { name: "Laravel", image: "/placeholder.svg?height=80&width=80", category: "Backend" },
    { name: "MongoDB", image: "/placeholder.svg?height=80&width=80", category: "Database" },
    { name: "PostgreSQL", image: "/placeholder.svg?height=80&width=80", category: "Database" },
    { name: "MySQL", image: "/placeholder.svg?height=80&width=80", category: "Database" },
    { name: "Firebase", image: "/placeholder.svg?height=80&width=80", category: "Database" },
  ]

  return (
    <section className="py-16 md:py-24 bg-foreground/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build modern, scalable, and high-performance web
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-background rounded-xl p-4 flex flex-col items-center justify-center border border-foreground/10 hover:border-foreground/20 hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-3 relative">
                <Image src={tech.image || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
              </div>
              <h3 className="text-sm font-medium">{tech.name}</h3>
              <span className="text-xs text-foreground/60 mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our technology stack is constantly evolving to incorporate the best tools and frameworks for your specific
            project needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
