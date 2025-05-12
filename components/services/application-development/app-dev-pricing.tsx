"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ApplicationDevPricing() {
  const plans = [
    {
      title: "Basic App Package",
      price: "From $15,000",
      description: "Perfect for startups and small businesses looking to establish a mobile presence.",
      features: [
        "Single Platform (iOS or Android)",
        "Basic UI/UX Design",
        "Core Functionality",
        "User Authentication",
        "Basic API Integration",
        "App Store Submission",
        "30 Days Support",
      ],
      highlighted: false,
      color: "border-indigo-200 dark:border-indigo-800",
      buttonVariant: "outline",
    },
    {
      title: "Professional App Package",
      price: "From $30,000",
      description: "Ideal for businesses that need a comprehensive mobile application with advanced features.",
      features: [
        "Cross-Platform (iOS & Android)",
        "Advanced UI/UX Design",
        "Complex Functionality",
        "User Authentication & Profiles",
        "Multiple API Integrations",
        "Push Notifications",
        "Offline Mode",
        "Analytics Integration",
        "App Store Optimization",
        "90 Days Support",
      ],
      highlighted: true,
      color: "border-purple-500 dark:border-purple-500",
      buttonVariant: "default",
      badge: "Most Popular",
    },
    {
      title: "Enterprise App Package",
      price: "From $50,000",
      description: "For businesses that need a sophisticated mobile application with enterprise-grade features.",
      features: [
        "Cross-Platform (iOS & Android)",
        "Premium UI/UX Design",
        "Complex Custom Functionality",
        "Advanced User Management",
        "Multiple API & System Integrations",
        "Push Notifications",
        "Offline Mode",
        "Advanced Analytics",
        "In-App Purchases",
        "Admin Dashboard",
        "App Store Optimization",
        "6 Months Support & Maintenance",
      ],
      highlighted: false,
      color: "border-indigo-200 dark:border-indigo-800",
      buttonVariant: "outline",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent App Development Pricing</h2>
          <p className="text-foreground/70 text-lg">
            We offer flexible pricing options to meet your specific needs and budget. All packages can be customized
            based on your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-background rounded-xl p-6 shadow-sm border-2 ${plan.color} ${
                plan.highlighted ? "shadow-lg" : ""
              }`}
            >
              {plan.highlighted && plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium py-1 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-2xl font-bold mb-2">{plan.price}</div>
                <p className="text-foreground/70 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className={`flex-shrink-0 rounded-full p-1 ${
                        plan.highlighted
                          ? "text-purple-500 bg-purple-100 dark:bg-purple-900/30"
                          : "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="ml-3 text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                    : ""
                }`}
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-foreground/70">
            Need a custom solution? Contact us for a personalized quote tailored to your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
