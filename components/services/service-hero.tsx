"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ServiceHeroProps {
  title: string
  description: string
  image?: string
  gradient?: string
  icon?: string
}

export function ServiceHero({
  title,
  description,
  image = "/placeholder.svg?height=600&width=1200",
  gradient = "from-purple-600 to-pink-600",
  icon,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 dark:opacity-10`} />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>{title}</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">{description}</p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#features"
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all",
                  `bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-800/20`,
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 rounded-lg font-medium border border-foreground/20 hover:bg-foreground/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 mix-blend-overlay`} />
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Decorative elements */}
            <motion.div
              className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${gradient} opacity-20 dark:opacity-30 blur-xl`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-20 dark:opacity-30 blur-xl`}
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Service stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "250+", label: "Projects Completed" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
            >
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero
