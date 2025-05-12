"use client"

import { motion } from "framer-motion"
import { Code, Search, Smartphone, Layout, Layers, Users, BarChart, MessageSquare } from "lucide-react"
import { useRef } from "react"

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const serviceIcons = [
    <Code key="code" className="h-6 w-6" />,
    <Search key="search" className="h-6 w-6" />,
    <Smartphone key="smartphone" className="h-6 w-6" />,
    <Layout key="layout" className="h-6 w-6" />,
    <Layers key="layers" className="h-6 w-6" />,
    <Users key="users" className="h-6 w-6" />,
    <BarChart key="barChart" className="h-6 w-6" />,
    <MessageSquare key="messageSquare" className="h-6 w-6" />,
  ]

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
          >
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Comprehensive{" "}
            </motion.span>
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Digital Solutions
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              for Your Business
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-foreground/70 text-lg mb-12"
          >
            We offer a wide range of services to help your business establish a powerful online presence, from web
            development and SEO to digital marketing and application development.
          </motion.p>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-3xl -z-10" />
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-8 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50">
            {serviceIcons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center justify-center p-4 bg-muted rounded-lg text-purple-600 dark:text-purple-400"
              >
                {icon}
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 rounded-full"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-pink-500/10 dark:bg-pink-500/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
