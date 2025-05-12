"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Zap } from "lucide-react"

export function TeamValues() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
      title: "Collaboration",
      description: "We work closely with our clients, ensuring their vision is at the center of everything we create.",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Excellence",
      description: "We are committed to excellence in every project, focusing on performance, usability, and design.",
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
      title: "Passion",
      description: "We're passionate about what we do and bring enthusiasm and dedication to every project.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            These core values guide our work and define our culture at Alberow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 text-center"
            >
              <motion.div
                className="mx-auto mb-4 w-16 h-16 rounded-full bg-muted flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
