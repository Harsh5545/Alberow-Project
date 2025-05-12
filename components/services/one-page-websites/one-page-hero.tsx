"use client"

import { motion } from "framer-motion"
import { MousePointer, ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OnePageHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-teal-500/5 via-background to-emerald-500/5">
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
              className="inline-flex items-center px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-100/50 dark:bg-teal-900/20 text-teal-800 dark:text-teal-300 text-sm mb-6"
            >
              One-Page Websites
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Everything You Need on{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                One Stunning Page
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Impactful single-page websites that effectively showcase your brand and convert visitors. Perfect for
              startups, portfolios, and focused business offerings.
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
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#one-page-showcase">View Examples</Link>
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400/20 dark:bg-teal-700/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 dark:bg-emerald-700/20 rounded-full filter blur-3xl"></div>

              {/* One-page website mockup */}
              <div className="relative z-10 bg-background border border-border/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-6 w-64 bg-muted rounded-md"></div>
                </div>

                <div className="space-y-4">
                  {/* Navigation */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex justify-between items-center p-3 border-b border-border/50"
                  >
                    <div className="w-24 h-6 bg-teal-200 dark:bg-teal-800 rounded-md"></div>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-16 h-4 bg-muted rounded-md"></div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hero section */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="h-40 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center p-4"
                  >
                    <div className="text-center">
                      <div className="w-48 h-6 bg-background rounded-md mx-auto mb-2"></div>
                      <div className="w-64 h-4 bg-background/70 rounded-md mx-auto mb-4"></div>
                      <div className="w-32 h-8 bg-teal-500 rounded-md mx-auto"></div>
                    </div>
                  </motion.div>

                  {/* Features section */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="grid grid-cols-3 gap-3"
                  >
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-3 bg-muted rounded-lg flex flex-col items-center">
                        <div className="w-8 h-8 bg-teal-200 dark:bg-teal-800 rounded-full mb-2"></div>
                        <div className="w-16 h-3 bg-foreground/30 rounded-md"></div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Content section */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-1/2 h-32 bg-muted rounded-lg"></div>
                    <div className="w-1/2 space-y-2">
                      <div className="w-3/4 h-4 bg-foreground/20 rounded-md"></div>
                      <div className="w-full h-4 bg-foreground/20 rounded-md"></div>
                      <div className="w-5/6 h-4 bg-foreground/20 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-foreground/20 rounded-md"></div>
                    </div>
                  </motion.div>

                  {/* Scroll indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="flex justify-center mt-4"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      className="flex flex-col items-center"
                    >
                      <MousePointer className="h-4 w-4 text-teal-500 mb-1" />
                      <ArrowDown className="h-4 w-4 text-teal-500" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
