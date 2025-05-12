"use client"

import { motion } from "framer-motion"
import { Search, Code, Layout, CheckCircle, Zap, BarChart } from "lucide-react"

export function AboutProcess() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
    },
    {
      icon: <Layout className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Design",
      description: "Our designers create wireframes and mockups that align with your brand and user experience goals.",
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Development",
      description: "Our developers build your solution using the latest technologies and best practices.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Testing",
      description: "We rigorously test all aspects of your project to ensure quality, performance, and usability.",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Launch",
      description: "We deploy your project and ensure a smooth transition to the live environment.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Support & Growth",
      description: "We provide ongoing support and optimization to help your digital presence grow and evolve.",
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We follow a structured approach to ensure every project is delivered with excellence and meets your business
            objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full -z-10" />
                <div className="relative z-10">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
