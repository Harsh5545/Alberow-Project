"use client"

import { motion } from "framer-motion"
import { Layers, Search, Zap, Database, ShoppingCart, Globe, Lock, FileText, Settings } from "lucide-react"

export function MultiPageFeatures() {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-purple-500" />,
      title: "Comprehensive Structure",
      description: "Organized page hierarchy with intuitive navigation for complex content and offerings.",
    },
    {
      icon: <Search className="h-10 w-10 text-pink-500" />,
      title: "Advanced SEO",
      description: "Optimized for search engines with page-specific keywords, meta tags, and structured data.",
    },
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "Content Management System",
      description: "User-friendly CMS for easy content updates, blog management, and site administration.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-pink-500" />,
      title: "E-Commerce Ready",
      description: "Seamless integration with shopping carts, payment gateways, and inventory management.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Performance Optimized",
      description: "Fast loading speeds and optimized user experience across all pages and devices.",
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      title: "Multi-Language Support",
      description: "Support for multiple languages to reach global audiences and expand your market reach.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-500" />,
      title: "Secure Architecture",
      description: "Built with security best practices to protect your data and your users' information.",
    },
    {
      icon: <FileText className="h-10 w-10 text-pink-500" />,
      title: "Blog & News Section",
      description: "Integrated blog functionality to share updates, articles, and engage with your audience.",
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      title: "Custom Functionality",
      description: "Tailored features and integrations specific to your business needs and requirements.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Features of Our Multi-Page Websites</h2>
          <p className="text-foreground/70 text-lg">
            Our multi-page websites are designed to provide comprehensive information and functionality with these
            powerful features.
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
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
