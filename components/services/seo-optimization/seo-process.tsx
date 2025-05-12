"use client"

import { motion } from "framer-motion"
import { Search, FileSearch, BarChart, Settings, LineChart, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: <Search className="h-8 w-8 text-purple-600" />,
    title: "SEO Audit",
    description:
      "We conduct a comprehensive analysis of your website to identify strengths, weaknesses, and opportunities for improvement.",
  },
  {
    icon: <FileSearch className="h-8 w-8 text-purple-600" />,
    title: "Keyword Research",
    description:
      "We identify high-value keywords that your target audience is searching for to drive relevant traffic to your website.",
  },
  {
    icon: <Settings className="h-8 w-8 text-purple-600" />,
    title: "On-Page Optimization",
    description:
      "We optimize your website's content, meta tags, and structure to improve search engine visibility and rankings.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-purple-600" />,
    title: "Off-Page SEO",
    description: "We build high-quality backlinks and improve your website's authority and reputation across the web.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-600" />,
    title: "Performance Tracking",
    description: "We monitor your website's performance and rankings to ensure continuous improvement and growth.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: "Reporting & Analysis",
    description: "We provide detailed reports and insights to help you understand your SEO performance and ROI.",
  },
]

export function SeoProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our SEO{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We follow a structured and data-driven approach to improve your website's search engine rankings and
            visibility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 mr-4">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-purple-600/20">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
