"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "SEO-optimized development approach",
    "Responsive and mobile-first design",
    "Continuous support and maintenance",
    "Agile development methodology",
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 dark:bg-pink-900/30 rounded-lg -z-10"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Alberow Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Alberow
              </span>
            </h2>
            <p className="text-foreground/70 mb-6">
              Alberow is a team of passionate web developers and digital marketers dedicated to creating exceptional
              digital experiences. We combine technical expertise with creative design to deliver solutions that help
              businesses thrive in the digital landscape.
            </p>
            <p className="text-foreground/70 mb-8">
              Our mission is to empower businesses with cutting-edge web technologies and digital marketing strategies
              that drive growth, increase visibility, and enhance user engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
