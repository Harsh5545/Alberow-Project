"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MultiPagePricing() {
  const plans = [
    {
      title: "Standard Multi-Page",
      price: "$3,500",
      description: "Perfect for small to medium businesses looking to establish a professional online presence.",
      features: [
        "Up to 10 Custom Pages",
        "Responsive Design",
        "Basic SEO Setup",
        "Content Management System",
        "Contact Forms",
        "Social Media Integration",
        "Google Analytics Setup",
        "Basic Security Features",
        "3 Rounds of Revisions",
        "60 Days Support",
      ],
      highlighted: false,
      color: "border-purple-200 dark:border-purple-800",
      buttonVariant: "outline",
    },
    {
      title: "Business Multi-Page",
      price: "$6,000",
      description: "Ideal for growing businesses that need a comprehensive website with advanced features.",
      features: [
        "Up to 20 Custom Pages",
        "Responsive Design",
        "Advanced SEO Setup",
        "Content Management System",
        "Custom Forms & Lead Capture",
        "Social Media Integration",
        "Google Analytics & Tag Manager",
        "Blog/News Section",
        "Newsletter Integration",
        "Enhanced Security Features",
        "User Account Management",
        "5 Rounds of Revisions",
        "90 Days Support",
      ],
      highlighted: true,
      color: "border-pink-500 dark:border-pink-500",
      buttonVariant: "default",
      badge: "Most Popular",
    },
    {
      title: "Enterprise Multi-Page",
      price: "$12,000+",
      description: "For large organizations that need a sophisticated website with custom functionality.",
      features: [
        "Unlimited Custom Pages",
        "Responsive Design",
        "Comprehensive SEO Strategy",
        "Advanced Content Management",
        "Custom Functionality Development",
        "E-Commerce Integration (if needed)",
        "Multi-Language Support",
        "Advanced User Management",
        "Custom API Integrations",
        "Advanced Security Implementation",
        "Performance Optimization",
        "Unlimited Revisions",
        "12 Months Support & Maintenance",
      ],
      highlighted: false,
      color: "border-purple-200 dark:border-purple-800",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-Page Website Pricing</h2>
          <p className="text-foreground/70 text-lg">
            Choose the perfect package for your multi-page website needs. All packages include responsive design and
            content management systems.
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium py-1 px-4 rounded-full">
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
                          ? "text-pink-500 bg-pink-100 dark:bg-pink-900/30"
                          : "text-purple-500 bg-purple-100 dark:bg-purple-900/30"
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
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
