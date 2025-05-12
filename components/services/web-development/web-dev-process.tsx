"use client"

import { motion } from "framer-motion"
import { FileSearch, Code, Laptop, BarChart, Settings, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: <FileSearch className="h-8 w-8 text-purple-600" />,
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements to create a comprehensive plan.",
  },
  {
    icon: <Laptop className="h-8 w-8 text-purple-600" />,
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes to visualize the user interface and experience.",
  },
  {
    icon: <Code className="h-8 w-8 text-purple-600" />,
    title: "Development",
    description: "Our developers bring the designs to life using the latest technologies and best coding practices.",
  },
  {
    icon: <Settings className="h-8 w-8 text-purple-600" />,
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers to ensure functionality, performance, and security.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: "Deployment",
    description: "We handle the deployment process to ensure a smooth launch of your website or application.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-600" />,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and optimization to keep your website performing at its best.",
  },
]

export function WebDevProcess() {
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
            Our Development{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We follow a structured and transparent development process to ensure the successful delivery of your
            project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 mr-4">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-purple-600/20">0{index + 1}</span>
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
