"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Particle animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-left max-w-2xl mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
            >
              Our Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ["0% center", "100% center"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                Featured Projects
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg"
            >
              Explore our portfolio of successful projects that showcase our expertise in web development, design, and
              digital marketing. Each project represents our commitment to excellence and innovation.
            </motion.p>
          </motion.div>

          <motion.div
            ref={containerRef}
            className="relative w-full md:w-96 h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 50 - 25, 0],
                    y: [0, Math.random() * 50 - 25, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: particle.delay,
                  }}
                />
              ))}
            </div>

            {/* Decorative shapes */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-purple-500/20 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-pink-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
