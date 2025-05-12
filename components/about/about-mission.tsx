"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AboutMission() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "We are committed to excellence in every project, focusing on performance, usability, and design.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, ensuring their vision is at the center of everything we create.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty, building trust with our clients and partners.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Mission &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            Our mission is to empower businesses with cutting-edge web technologies and digital marketing strategies
            that drive growth, increase visibility, and enhance user engagement. We're committed to creating digital
            experiences that not only look great but also deliver measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
