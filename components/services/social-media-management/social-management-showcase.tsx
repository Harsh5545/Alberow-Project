"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const caseStudies = [
  {
    title: "Retail Brand Management",
    description: "Comprehensive social media management for a retail brand with multiple product lines.",
    image: "/placeholder.svg?height=400&width=600",
    results: "250% increase in engagement, 120% growth in followers, 45% increase in website traffic",
  },
  {
    title: "Service Provider Management",
    description: "Social media management for a professional service provider looking to establish thought leadership.",
    image: "/placeholder.svg?height=400&width=600",
    results: "180% increase in engagement, 35% increase in lead generation from social channels",
  },
  {
    title: "Non-Profit Organization",
    description:
      "Social media management for a non-profit organization focused on community engagement and fundraising.",
    image: "/placeholder.svg?height=400&width=600",
    results: "300% increase in community engagement, 75% increase in donation referrals from social media",
  },
]

export function SocialManagementShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Success{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Stories</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            See how our social media management services have helped businesses build and engage their audiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{study.description}</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Results:</p>
                  <p className="text-gray-700 dark:text-gray-300">{study.results}</p>
                </div>
                <Button variant="ghost" className="group">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
