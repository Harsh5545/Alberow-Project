"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LineChart, BarChart, PieChart } from "lucide-react"

export function SeoAnalytics() {
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
            Data-Driven{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We use advanced analytics and reporting tools to track your SEO performance and demonstrate ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Comprehensive Analytics</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <LineChart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Ranking Tracking</h4>
                  <p className="text-foreground/70">
                    Monitor your website's position in search results for targeted keywords and track improvements over
                    time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Traffic Analysis</h4>
                  <p className="text-foreground/70">
                    Analyze organic traffic patterns, user behavior, and conversion rates to optimize your SEO strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Competitor Analysis</h4>
                  <p className="text-foreground/70">
                    Compare your website's performance against competitors and identify opportunities for improvement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-border/50"
          >
            <Image
              src="/placeholder.svg?height=800&width=1000"
              alt="SEO Analytics Dashboard"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Clients See Real Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-purple-600 mb-2">+75%</div>
              <p className="text-foreground/70">Average increase in organic traffic</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-purple-600 mb-2">+45%</div>
              <p className="text-foreground/70">Average improvement in keyword rankings</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border/50">
              <div className="text-4xl font-bold text-purple-600 mb-2">+60%</div>
              <p className="text-foreground/70">Average increase in conversion rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
