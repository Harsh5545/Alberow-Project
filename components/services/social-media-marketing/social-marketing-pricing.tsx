"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    title: "Basic Social Package",
    price: "$1,500",
    period: "per month",
    description: "Perfect for small businesses looking to establish a social media presence.",
    features: [
      "2 Social Media Platforms",
      "8 Posts Per Month",
      "Basic Content Creation",
      "Community Management",
      "Monthly Performance Report",
      "3-Month Minimum Commitment",
    ],
    highlighted: false,
  },
  {
    title: "Professional Social Package",
    price: "$3,000",
    period: "per month",
    description: "Ideal for growing businesses that need a comprehensive social media strategy.",
    features: [
      "4 Social Media Platforms",
      "16 Posts Per Month",
      "Advanced Content Creation",
      "Community Management",
      "2 Paid Campaigns Per Month",
      "Influencer Outreach",
      "Bi-Weekly Performance Reports",
      "6-Month Minimum Commitment",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise Social Package",
    price: "$5,000+",
    period: "per month",
    description: "For large businesses with complex social media needs and multiple target audiences.",
    features: [
      "6+ Social Media Platforms",
      "30+ Posts Per Month",
      "Premium Content Creation",
      "24/7 Community Management",
      "4+ Paid Campaigns Per Month",
      "Influencer Partnership Management",
      "Crisis Management Planning",
      "Weekly Performance Reports",
      "Dedicated Social Media Manager",
      "12-Month Minimum Commitment",
    ],
    highlighted: false,
  },
]

export function SocialMarketingPricing() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Transparent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Pricing</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border ${
                plan.highlighted
                  ? "border-purple-500 dark:border-purple-400 shadow-lg"
                  : "border-gray-100 dark:border-gray-700"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400"> {plan.period}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.description}</p>
                <Button
                  className={`w-full mb-6 ${
                    plan.highlighted ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
