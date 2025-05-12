"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, Calendar, FileText, Users, LineChart } from "lucide-react"

const process = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Account Audit",
    description: "We analyze your current social media accounts to identify opportunities for improvement.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Strategy Development",
    description: "We create a tailored social media management strategy aligned with your business goals.",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Content Planning",
    description: "We develop a content calendar with engaging, platform-specific content.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Content Creation",
    description: "We create high-quality content for your social media channels.",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Community Management",
    description: "We engage with your audience and respond to comments, messages, and mentions.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <LineChart className="h-8 w-8 text-white" />,
    title: "Analysis & Optimization",
    description: "We continuously analyze performance and optimize strategies for better results.",
    color: "from-cyan-600 to-cyan-400",
  },
]

export function SocialManagementProcess() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Process</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your social media presence is consistently managed and optimized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg z-10"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                className={`bg-gradient-to-r ${step.color}`}
              >
                {step.icon}
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 pl-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 -z-10"></div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
