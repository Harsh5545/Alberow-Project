"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Sparkles, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent dark:from-purple-900/20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-10 w-72 h-72 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
          >
            <Sparkles size={16} className="mr-2" />
            Transforming Digital Presence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Elevate Your Business with Cutting-Edge Web Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl"
          >
            Alberow is a full-stack development agency specializing in creating powerful digital experiences that drive
            growth and engagement for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Link href="/#contact">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                <Code className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-medium">Web Development</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-3">
                <Globe className="text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-medium">SEO Optimization</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                <Sparkles className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-medium">Digital Marketing</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
