"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Zap, Search, ShoppingCart, Link, Shield, BarChart } from "lucide-react"

export function WebDevFeatures() {
  const features = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed and performance to improve user experience and SEO.",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO-Friendly Architecture",
      description: "Built with search engines in mind to help improve your visibility and ranking.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Development",
      description: "Tailored solutions built with the latest technologies to meet your specific business needs.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "E-commerce Solutions",
      description: "Sell products or services online with secure payment processing and inventory management.",
    },
    {
      icon: <Link className="h-10 w-10" />,
      title: "API Integration",
      description: "Connect your website with third-party services and applications for enhanced functionality.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your website secure and up-to-date.",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Analytics & Reporting",
      description: "Track website performance and user behavior to make data-driven decisions.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Web Development Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We offer end-to-end web development solutions tailored to your business needs, from design to deployment and
            beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-foreground/10 rounded-xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
          >
            Discuss your project with us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
