"use client"

import { motion } from "framer-motion"
import { Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MultiPageHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
            >
              Multi-Page Websites
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Comprehensive{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Multi-Page Websites
              </span>{" "}
              for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Scalable, content-rich websites with intuitive navigation and powerful functionality. Perfect for
              businesses with diverse offerings, e-commerce, and content-heavy requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#multi-page-showcase">View Examples</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 dark:bg-purple-700/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400/20 dark:bg-pink-700/20 rounded-full filter blur-3xl"></div>

              {/* Multi-page website mockup */}
              <div className="relative z-10 bg-background border border-border/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-6 w-64 bg-muted rounded-md"></div>
                </div>

                {/* Website structure visualization */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="relative"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-3 mb-4 flex justify-between items-center">
                    <div className="w-24 h-6 bg-background rounded-md"></div>
                    <div className="flex space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-16 h-4 bg-background/70 rounded-md"></div>
                      ))}
                    </div>
                  </div>

                  {/* Main content area with sidebar */}
                  <div className="flex gap-4 mb-4">
                    {/* Sidebar */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                      className="w-1/4 space-y-3"
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 bg-muted rounded-md"></div>
                      ))}
                    </motion.div>

                    {/* Main content */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="w-3/4 space-y-4"
                    >
                      <div className="h-12 bg-purple-200 dark:bg-purple-800/30 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="w-3/4 h-4 bg-muted rounded-md"></div>
                        <div className="w-full h-4 bg-muted rounded-md"></div>
                        <div className="w-5/6 h-4 bg-muted rounded-md"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-muted rounded-lg"></div>
                        <div className="h-24 bg-muted rounded-lg"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-4 bg-muted rounded-md"></div>
                        <div className="w-5/6 h-4 bg-muted rounded-md"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="bg-muted rounded-lg p-3 flex justify-between"
                  >
                    <div className="w-1/3 space-y-2">
                      <div className="w-20 h-4 bg-background/50 rounded-md"></div>
                      <div className="w-24 h-3 bg-background/30 rounded-md"></div>
                      <div className="w-16 h-3 bg-background/30 rounded-md"></div>
                    </div>
                    <div className="w-1/3 space-y-2">
                      <div className="w-20 h-4 bg-background/50 rounded-md"></div>
                      <div className="w-24 h-3 bg-background/30 rounded-md"></div>
                      <div className="w-16 h-3 bg-background/30 rounded-md"></div>
                    </div>
                    <div className="w-1/3 space-y-2">
                      <div className="w-20 h-4 bg-background/50 rounded-md"></div>
                      <div className="w-24 h-3 bg-background/30 rounded-md"></div>
                      <div className="w-16 h-3 bg-background/30 rounded-md"></div>
                    </div>
                  </motion.div>

                  {/* Site map visualization */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="absolute -right-16 -bottom-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-3 shadow-lg"
                  >
                    <Layers className="h-6 w-6 mb-2" />
                    <div className="text-xs font-medium">Multiple Pages</div>
                    <div className="mt-2 space-y-1">
                      <div className="h-1 w-12 bg-white/50 rounded-full"></div>
                      <div className="h-1 w-8 bg-white/50 rounded-full"></div>
                      <div className="h-1 w-10 bg-white/50 rounded-full"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
