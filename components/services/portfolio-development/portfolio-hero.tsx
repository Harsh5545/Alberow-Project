"use client"

import { motion } from "framer-motion"
import { ImageIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PortfolioHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
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
              className="inline-flex items-center px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-100/50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 text-sm mb-6"
            >
              Portfolio Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Showcase Your Work with a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
                Stunning Portfolio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Captivating portfolio websites that highlight your skills, showcase your projects, and help you attract
              your ideal clients. Perfect for creatives, photographers, designers, artists, and professionals.
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
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
              >
                <Link href="/contact">
                  Start Your Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio-showcase">View Examples</Link>
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400/20 dark:bg-amber-700/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/20 dark:bg-orange-700/20 rounded-full filter blur-3xl"></div>

              {/* Portfolio mockup */}
              <div className="relative z-10 bg-background border border-border/50 rounded-2xl p-6 shadow-xl">
                {/* Portfolio grid mockup */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex justify-between items-center"
                  >
                    <div className="w-32 h-8 bg-amber-200 dark:bg-amber-800 rounded-md"></div>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-16 h-4 bg-muted rounded-md"></div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-center mb-6"
                  >
                    <div className="w-64 h-8 bg-foreground/10 rounded-md mx-auto mb-2"></div>
                    <div className="w-80 h-4 bg-foreground/10 rounded-md mx-auto"></div>
                  </motion.div>

                  {/* Portfolio grid */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="grid grid-cols-3 gap-4"
                  >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`relative group overflow-hidden rounded-lg ${
                          i === 1 ? "col-span-2 row-span-2" : ""
                        }`}
                      >
                        <div
                          className={`bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800 ${
                            i === 1 ? "h-64" : "h-32"
                          } flex items-center justify-center`}
                        >
                          <ImageIcon className="h-8 w-8 text-white/50" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-20 h-8 bg-white rounded-md"></div>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Filter buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex justify-center gap-2"
                  >
                    {["All", "Design", "Photography", "Art", "Web"].map((filter, i) => (
                      <div
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs ${
                          i === 0
                            ? "bg-amber-500 text-white"
                            : "bg-muted text-foreground/70 hover:bg-muted/80 cursor-pointer"
                        }`}
                      >
                        {filter}
                      </div>
                    ))}
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
