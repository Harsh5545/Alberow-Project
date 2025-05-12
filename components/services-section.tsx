"use client"

import { motion } from "framer-motion"
import { Globe, Search, Smartphone, Layout, Layers, Users, BarChart, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: <Search className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "SEO Optimization",
    description: "Boost your online visibility with our comprehensive SEO strategies tailored to your business needs.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Application Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: <Layout className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "One-Page Websites",
    description: "Stunning single-page websites perfect for showcasing your brand or product with impact.",
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Multi-Page Websites",
    description: "Comprehensive multi-page websites with intuitive navigation and content organization.",
  },
  {
    icon: <Users className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "Portfolio Development",
    description: "Showcase your work with a professionally designed portfolio that highlights your achievements.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that increase engagement and drive conversions.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence to build and engage your audience.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of digital services to help your business establish a powerful online
            presence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-border/50 bg-background hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
