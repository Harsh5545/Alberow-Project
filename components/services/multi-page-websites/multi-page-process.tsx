"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, FileText, Layout, Code, TestTube, Rocket, BarChart } from "lucide-react"

export function MultiPageProcess() {
  const process = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, and competition to develop a comprehensive website strategy.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Information Architecture",
      description: "We create a logical site structure with intuitive navigation to organize your content effectively.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Content Planning",
      description:
        "We help you plan and organize your content to effectively communicate your message across multiple pages.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Layout className="h-8 w-8 text-white" />,
      title: "UI/UX Design",
      description:
        "Our designers create wireframes and mockups for key pages with consistent branding and optimal user experience.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Development",
      description:
        "Our developers build your website with clean, efficient code and implement all required functionality.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <TestTube className="h-8 w-8 text-white" />,
      title: "Testing & QA",
      description:
        "We thoroughly test your website across devices, browsers, and user scenarios to ensure flawless performance.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Launch & Training",
      description: "We launch your website and provide training on the content management system for your team.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Ongoing Support",
      description:
        "We provide ongoing maintenance, updates, and support to ensure your website continues to perform optimally.",
      color: "from-pink-500 to-pink-600",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Multi-Page Website Process</h2>
          <p className="text-foreground/70 text-lg">
            We follow a comprehensive, structured process to create multi-page websites that achieve your business goals
            and provide an exceptional user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${step.color} p-3 rounded-lg inline-block mb-4`}>{step.icon}</div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-background rounded-full border border-border/50 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 flex-grow">{step.description}</p>
              </div>

              {/* Connector line for desktop */}
              {index < process.length - 1 && index % 4 !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
