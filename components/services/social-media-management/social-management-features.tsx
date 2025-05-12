"use client"

import { motion } from "framer-motion"
import { FileText, MessageSquare, UserCheck, Calendar, TrendingUp, BarChart3 } from "lucide-react"

const features = [
  {
    icon: <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Content Creation & Curation",
    description: "Regular, engaging content tailored to each platform and your target audience.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Community Engagement",
    description: "Active engagement with your audience to build relationships and foster loyalty.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Profile Optimization",
    description: "Optimized profiles across all platforms to maximize visibility and brand consistency.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Content Calendar",
    description: "Strategic planning of content to ensure consistent posting and campaign alignment.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Trend Monitoring",
    description: "Staying on top of industry and platform trends to keep your content relevant and timely.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Performance Reporting",
    description: "Regular reports on your social media performance with insights and recommendations.",
  },
]

export function SocialManagementFeatures() {
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
            Comprehensive Social Media{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Management Services
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            We handle every aspect of your social media presence so you can focus on running your business.
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
              className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
