"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function OnePagePricing() {
  const plans = [
    {
      title: "Basic One-Page",
      price: "$1,200",
      description: "Perfect for individuals and small businesses looking to establish an online presence.",
      features: [
        "Responsive Design",
        "Up to 5 Sections",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "Google Analytics Setup",
        "3 Rounds of Revisions",
        "30 Days Support",
      ],
      highlighted: false,
      color: "border-teal-200 dark:border-teal-800",
      buttonVariant: "outline",
    },
    {
      title: "Professional One-Page",
      price: "$2,500",
      description: "Ideal for businesses that need a comprehensive one-page website with advanced features.",
      features: [
        "Responsive Design",
        "Up to 8 Sections",
        "Advanced SEO Setup",
        "Contact Form with Lead Capture",
        "Social Media Integration",
        "Google Analytics & Tag Manager",
        "Interactive Elements",
        "Custom Animations",
        "Content Creation Assistance",
        "5 Rounds of Revisions",
        "60 Days Support",
      ],
      highlighted: true,
      color: "border-emerald-500 dark:border-emerald-500",
      buttonVariant: "default",
      badge: "Most Popular",
    },
    {
      title: "Premium One-Page",
      price: "$4,000",
      description: "For businesses that need a sophisticated one-page website with premium features and functionality.",
      features: [
        "Responsive Design",
        "Unlimited Sections",
        "Comprehensive SEO Strategy",
        "Advanced Contact Form with CRM Integration",
        "Social Media Integration with Feed Display",
        "Complete Analytics Suite",
        "Custom Interactive Elements",
        "Premium Animations & Effects",
        "Professional Copywriting",
        "Professional Photography Consultation",
        "Unlimited Revisions",
        "90 Days Support",
        "Performance Optimization",
      ],
      highlighted: false,
      color: "border-teal-200 dark:border-teal-800",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One-Page Website Pricing</h2>
          <p className="text-foreground/70 text-lg">
            Choose the perfect package for your one-page website needs. All packages include responsive design and SEO
            optimization.
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-medium py-1 px-4 rounded-full">
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
                          ? "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30"
                          : "text-teal-500 bg-teal-100 dark:bg-teal-900/30"
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
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
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
