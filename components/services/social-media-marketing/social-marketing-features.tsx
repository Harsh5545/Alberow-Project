"use client"

import { motion } from "framer-motion"
import { Target, FileText, DollarSign, Users, BarChart3, Activity } from "lucide-react"

const features = [
  {
    icon: <Target className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Platform Strategy",
    description: "Tailored strategies for each social media platform to maximize engagement and results.",
  },
  {
    icon: <FileText className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Content Creation",
    description: "Engaging, platform-specific content that resonates with your target audience.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Paid Advertising",
    description: "Strategic paid campaigns that target your ideal customers and drive conversions.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Audience Growth",
    description: "Proven tactics to grow your follower base with engaged, relevant audiences.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Performance Analytics",
    description: "Comprehensive reporting and insights to measure and optimize your social media performance.",
  },
  {
    icon: <Activity className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Competitor Analysis",
    description: "In-depth analysis of competitor strategies to identify opportunities and threats.",
  },
]

export function SocialMarketingFeatures() {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Marketing Services
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Our social media marketing services are designed to help your business thrive in the digital landscape.
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
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
