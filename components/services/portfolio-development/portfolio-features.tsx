"use client"

import { motion } from "framer-motion"
import { ImageIcon, Layout, Zap, Filter, Palette, Globe, Smartphone, Eye, MessageSquare } from "lucide-react"

export function PortfolioFeatures() {
  const features = [
    {
      icon: <ImageIcon className="h-10 w-10 text-amber-500" />,
      title: "Visual Showcase",
      description: "Stunning galleries and project displays that highlight your work in the best possible light.",
    },
    {
      icon: <Layout className="h-10 w-10 text-orange-500" />,
      title: "Intuitive Navigation",
      description:
        "User-friendly navigation that makes it easy for visitors to explore your portfolio and find what they're looking for.",
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Fast Loading",
      description: "Optimized performance to ensure your portfolio loads quickly and keeps visitors engaged.",
    },
    {
      icon: <Filter className="h-10 w-10 text-orange-500" />,
      title: "Project Filtering",
      description: "Category and tag filtering to help visitors find specific types of work in your portfolio.",
    },
    {
      icon: <Palette className="h-10 w-10 text-amber-500" />,
      title: "Custom Design",
      description: "Unique design that reflects your personal brand and style, setting you apart from the competition.",
    },
    {
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      title: "SEO Optimized",
      description: "Search engine optimization to help potential clients find your portfolio online.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-amber-500" />,
      title: "Mobile Responsive",
      description: "Fully responsive design that looks great on all devices, from desktops to smartphones.",
    },
    {
      icon: <Eye className="h-10 w-10 text-orange-500" />,
      title: "Visual Storytelling",
      description: "Compelling visual narratives that showcase your creative process and the story behind your work.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-amber-500" />,
      title: "Contact Integration",
      description: "Easy contact options to help potential clients reach out and start a conversation.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio Website Features</h2>
          <p className="text-foreground/70 text-lg">
            Our portfolio websites are designed to showcase your work effectively and help you attract your ideal
            clients with these powerful features.
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
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
