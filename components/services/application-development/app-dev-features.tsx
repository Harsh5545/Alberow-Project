"use client"

import { motion } from "framer-motion"
import { Smartphone, Tablet, Layers, Layout, LinkIcon, Search, Shield, Zap, Code } from "lucide-react"

export function ApplicationDevFeatures() {
  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-indigo-500" />,
      title: "Native iOS Development",
      description: "Custom iOS applications built with Swift for optimal performance and user experience.",
    },
    {
      icon: <Tablet className="h-10 w-10 text-purple-500" />,
      title: "Native Android Development",
      description: "Custom Android applications built with Kotlin for optimal performance and user experience.",
    },
    {
      icon: <Layers className="h-10 w-10 text-indigo-500" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native or Flutter for cost-effective development.",
    },
    {
      icon: <Layout className="h-10 w-10 text-purple-500" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience and engagement.",
    },
    {
      icon: <LinkIcon className="h-10 w-10 text-indigo-500" />,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs for enhanced functionality.",
    },
    {
      icon: <Search className="h-10 w-10 text-purple-500" />,
      title: "App Store Optimization",
      description: "Maximize visibility and downloads with strategic app store optimization.",
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-500" />,
      title: "Secure Development",
      description: "Industry-standard security practices to protect user data and application integrity.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Performance Optimization",
      description: "Optimized code and architecture for fast, responsive application performance.",
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      title: "Custom Backend Development",
      description: "Scalable server-side solutions tailored to your application's specific needs.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive App Development Services</h2>
          <p className="text-foreground/70 text-lg">
            We offer end-to-end application development services to bring your vision to life with cutting-edge
            technology and exceptional design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
