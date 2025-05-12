"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCtaProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  gradient?: string
}

export function ServiceCta({
  title = "Ready to get started?",
  description = "Contact us today to discuss your project and how we can help you achieve your goals.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  gradient = "from-purple-600 to-pink-600",
}: ServiceCtaProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`} />

          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href={buttonLink}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all group"
              >
                {buttonText}
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCta
