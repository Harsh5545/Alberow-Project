"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProjectsProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Project{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Development Process
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/70 mb-6"
            >
              We follow a structured and collaborative approach to ensure every project is delivered with excellence and
              meets your business objectives. Our process is designed to be transparent, efficient, and focused on
              achieving your goals.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Discovery & Planning",
                  description:
                    "We start by understanding your business, goals, and requirements to create a tailored project plan.",
                },
                {
                  number: "02",
                  title: "Design & Prototyping",
                  description:
                    "Our designers create wireframes and mockups that align with your brand and user experience goals.",
                },
                {
                  number: "03",
                  title: "Development & Testing",
                  description:
                    "Our developers build your solution using the latest technologies and rigorously test all aspects.",
                },
                {
                  number: "04",
                  title: "Launch & Support",
                  description: "We deploy your project and provide ongoing support to ensure its success and growth.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex"
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                alt="Project Development Process"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
