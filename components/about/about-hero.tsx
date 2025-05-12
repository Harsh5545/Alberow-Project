"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-bl from-purple-500/5 via-background to-pink-500/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
            >
              About Alberow
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We're a team of{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ["0% center", "100% center"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                passionate developers
              </motion.span>{" "}
              and marketers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg mb-6"
            >
              Founded with a vision to transform how businesses establish their digital presence, Alberow combines
              technical expertise with creative design to deliver exceptional digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-foreground/70 text-lg"
            >
              Our team of skilled developers, designers, and marketers work together to create solutions that not only
              look great but also drive results for our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 dark:bg-pink-900/30 rounded-lg -z-10"
              animate={{
                rotate: [0, -10, 0, 10, 0],
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Alberow Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Animated dots */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-white/50"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
