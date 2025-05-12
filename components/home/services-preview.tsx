"use client"

import { motion } from "framer-motion"
import { Globe, Search, Smartphone, Layout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

export function ServicesPreview() {
  return (
    <section className="py-20 bg-muted/30">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="h-full border border-border/50 bg-background hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/services">
              View All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="ml-2"
              >
                →
              </motion.span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
