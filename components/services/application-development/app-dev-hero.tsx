"use client"

import { motion } from "framer-motion"
import { Smartphone, Tablet, Laptop, Server, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ApplicationDevHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5">
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
              className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 text-sm mb-6"
            >
              Mobile & Web Applications
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transform Your Ideas Into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Powerful Applications
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We build custom mobile and web applications that deliver exceptional user experiences and drive business
              growth. From native iOS and Android apps to cross-platform solutions, our expert team brings your vision
              to life.
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
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#app-dev-process">Our Development Process</Link>
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400/20 dark:bg-indigo-700/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400/20 dark:bg-purple-700/20 rounded-full filter blur-3xl"></div>

              {/* Main device mockup */}
              <div className="relative z-10 bg-gradient-to-br from-background via-background/90 to-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="bg-background rounded-xl border border-border/50 p-4 shadow-md">
                      <Smartphone className="h-8 w-8 text-indigo-500 mb-2" />
                      <h3 className="font-medium">iOS Apps</h3>
                      <p className="text-xs text-muted-foreground">Native Swift development</p>
                    </div>
                    <div className="bg-background rounded-xl border border-border/50 p-4 shadow-md">
                      <Laptop className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium">Web Apps</h3>
                      <p className="text-xs text-muted-foreground">React, Vue, Angular</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="bg-background rounded-xl border border-border/50 p-4 shadow-md">
                      <Tablet className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium">Android Apps</h3>
                      <p className="text-xs text-muted-foreground">Native Kotlin development</p>
                    </div>
                    <div className="bg-background rounded-xl border border-border/50 p-4 shadow-md">
                      <Server className="h-8 w-8 text-indigo-500 mb-2" />
                      <h3 className="font-medium">Backend APIs</h3>
                      <p className="text-xs text-muted-foreground">Node.js, Python, Java</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-4 text-center"
                >
                  <h3 className="font-medium">Cross-Platform Solutions</h3>
                  <p className="text-xs text-white/80">React Native, Flutter, Xamarin</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
