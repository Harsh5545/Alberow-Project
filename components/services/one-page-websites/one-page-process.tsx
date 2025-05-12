"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, FileText, Layout, Code, TestTube, Rocket } from "lucide-react"

export function OnePageProcess() {
  const process = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discovery & Planning",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Design Concepts",
      description: "Our designers create mockups that align with your brand and effectively communicate your message.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Content Organization",
      description: "We help you organize your content in a logical flow that guides visitors toward conversion.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "Visual Design",
      description: "We create a visually appealing design that reflects your brand and engages your audience.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Development",
      description: "Our developers build your website using the latest technologies and best practices.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <TestTube className="h-8 w-8 text-white" />,
      title: "Testing & Refinement",
      description: "We test all aspects of your website to ensure quality, performance, and usability.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Launch & Support",
      description: "We launch your website and provide ongoing support to ensure it continues to perform optimally.",
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our One-Page Website Process</h2>
          <p className="text-foreground/70 text-lg">
            We follow a structured, collaborative process to create one-page websites that achieve your business goals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-emerald-500 hidden md:block"></div>

          <div className="space-y-12">
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
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 z-10 hidden md:block"></div>

                  {/* Content */}
                  <div className="md:w-1/2"></div>
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 md:w-1/2 relative">
                    <div className={`bg-gradient-to-r ${step.color} p-3 rounded-lg inline-block mb-4`}>{step.icon}</div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-background rounded-full border border-border/50 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
