"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SocialManagementHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-300 mb-2">
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Social Media Management</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
            >
              Expert Management of Your Social Presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl"
            >
              Comprehensive management of your social media accounts to build brand awareness, engage your audience, and
              drive consistent growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1">
                  <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Consistent Posting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Community Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-cyan-100 dark:bg-cyan-900/30 p-1">
                  <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Performance Tracking</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Social Media Management"
                width={600}
                height={600}
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                    <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Response Rate</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">98%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-cyan-100 dark:bg-cyan-900/30 p-3">
                    <Calendar className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Posts Created</p>
                    <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">500+</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
