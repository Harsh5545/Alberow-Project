"use client"

import { motion } from "framer-motion"

export function TeamHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
          >
            Our Team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Meet the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Talented People
            </span>{" "}
            Behind Alberow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-foreground/70 text-lg"
          >
            Our diverse team of developers, designers, and marketers work together to create exceptional digital
            experiences. We're passionate about technology, creativity, and helping businesses succeed in the digital
            landscape.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
