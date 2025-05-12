"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Layout, Code, TestTube, Rocket, BarChart, Repeat } from "lucide-react"

export function ApplicationDevProcess() {
  const process = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discovery & Research",
      description:
        "We start by understanding your business, goals, and requirements to create a tailored project plan.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Strategy & Planning",
      description:
        "We develop a comprehensive strategy for your application, including features, architecture, and timeline.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "UI/UX Design",
      description: "Our designers create wireframes and mockups that align with your brand and user experience goals.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Development",
      description: "Our developers build your application using the latest technologies and best practices.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <TestTube className="h-8 w-8 text-white" />,
      title: "Testing & QA",
      description: "We rigorously test all aspects of your application to ensure quality, performance, and usability.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Deployment",
      description: "We help you launch your application on the App Store, Google Play, or other platforms.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Analytics & Monitoring",
      description: "We implement analytics to track user behavior and application performance.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Repeat className="h-8 w-8 text-white" />,
      title: "Support & Iteration",
      description: "We provide ongoing support and continuous improvement to keep your application competitive.",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="app-dev-process" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our App Development Process</h2>
          <p className="text-foreground/70 text-lg">
            We follow a structured, transparent process to ensure your application is delivered on time, within budget,
            and exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${step.color} p-3 rounded-lg inline-block mb-4`}>{step.icon}</div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background rounded-full border border-border/50 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 flex-grow">{step.description}</p>
              </div>

              {/* Connector line for desktop */}
              {index < process.length - 1 && index % 4 !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
