"use client"

import { motion } from "framer-motion"
import { Search, Code, Layout, CheckCircle, Zap, BarChart } from "lucide-react"

export function ServicesProcess() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Design",
      description: "Our designers create wireframes and mockups that align with your brand and user experience goals.",
      color: "from-pink-600 to-pink-800",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Development",
      description: "Our developers build your solution using the latest technologies and best practices.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Testing",
      description: "We rigorously test all aspects of your project to ensure quality, performance, and usability.",
      color: "from-pink-600 to-pink-800",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Launch",
      description: "We deploy your project and ensure a smooth transition to the live environment.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Support & Growth",
      description: "We provide ongoing support and optimization to help your digital presence grow and evolve.",
      color: "from-pink-600 to-pink-800",
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
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${step.color} p-6 flex justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">{step.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
