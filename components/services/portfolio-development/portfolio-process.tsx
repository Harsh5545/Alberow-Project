"use client"

import { motion } from "framer-motion"
import { MessageCircle, Palette, Code, Rocket } from "lucide-react"

export function PortfolioProcess() {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-amber-500" />,
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and the type of work you want to showcase.",
      details: ["Initial consultation", "Content audit", "Strategy development", "Timeline planning"],
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-500" />,
      title: "Design & Concept",
      description: "Creating a unique design that reflects your personal brand and showcases your work effectively.",
      details: ["Wireframe creation", "Visual design", "Brand integration", "User experience design"],
    },
    {
      icon: <Code className="h-8 w-8 text-amber-500" />,
      title: "Development & Build",
      description: "Building your portfolio with clean code, optimized performance, and responsive design.",
      details: ["Frontend development", "CMS integration", "Performance optimization", "Quality testing"],
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Launch & Support",
      description: "Launching your portfolio and providing ongoing support to ensure everything runs smoothly.",
      details: ["Domain setup", "SEO optimization", "Launch support", "Ongoing maintenance"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio Development Process</h2>
          <p className="text-foreground/70 text-lg">
            A streamlined process designed to create a portfolio that perfectly represents your work and attracts your
            ideal clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 hover:shadow-md h-full">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg inline-block mb-4">{step.icon}</div>
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-sm text-foreground/60 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
