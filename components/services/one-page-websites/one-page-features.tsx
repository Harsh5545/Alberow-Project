"use client"

import { motion } from "framer-motion"
import { Smartphone, MousePointer, Search, Zap, Mail, BarChart, Layout, ImageIcon, Layers } from "lucide-react"

export function OnePageFeatures() {
  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-teal-500" />,
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <MousePointer className="h-10 w-10 text-emerald-500" />,
      title: "Smooth Scrolling",
      description: "Seamless navigation between sections with smooth scrolling and interactive elements.",
    },
    {
      icon: <Search className="h-10 w-10 text-teal-500" />,
      title: "SEO Optimization",
      description: "Built with search engines in mind to help improve your visibility and attract more visitors.",
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: "Fast Loading",
      description: "Optimized for speed to ensure visitors stay engaged and reduce bounce rates.",
    },
    {
      icon: <Mail className="h-10 w-10 text-teal-500" />,
      title: "Contact Integration",
      description: "Built-in contact forms and call-to-action elements to convert visitors into leads.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      title: "Analytics Setup",
      description: "Integration with analytics tools to track visitor behavior and optimize performance.",
    },
    {
      icon: <Layout className="h-10 w-10 text-teal-500" />,
      title: "Modern Design",
      description: "Contemporary aesthetics that align with current web design trends and best practices.",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-emerald-500" />,
      title: "Visual Impact",
      description: "Eye-catching visuals and animations that create a memorable user experience.",
    },
    {
      icon: <Layers className="h-10 w-10 text-teal-500" />,
      title: "Content Organization",
      description: "Strategic content layout that guides visitors through your message and toward conversion.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Features of Our One-Page Websites</h2>
          <p className="text-foreground/70 text-lg">
            Our one-page websites are designed to make a strong impression and drive conversions with these powerful
            features.
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
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
