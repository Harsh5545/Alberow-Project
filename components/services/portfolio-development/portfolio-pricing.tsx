"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export function PortfolioPricing() {
  const plans = [
    {
      name: "Essential Portfolio",
      price: "₹25,000",
      description: "Perfect for freelancers and emerging creatives",
      features: [
        "Up to 20 portfolio pieces",
        "5 pages (Home, Portfolio, About, Services, Contact)",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "1 month support",
      ],
      popular: false,
    },
    {
      name: "Professional Portfolio",
      price: "₹45,000",
      description: "Ideal for established professionals and agencies",
      features: [
        "Up to 50 portfolio pieces",
        "8 pages + blog",
        "Advanced filtering & search",
        "Custom animations",
        "Advanced SEO optimization",
        "Client testimonials section",
        "Google Analytics integration",
        "3 months support",
        "Content management system",
      ],
      popular: true,
    },
    {
      name: "Premium Portfolio",
      price: "₹75,000",
      description: "For established businesses and high-end creatives",
      features: [
        "Unlimited portfolio pieces",
        "Custom page layouts",
        "E-commerce integration",
        "Advanced booking system",
        "Multi-language support",
        "Custom integrations",
        "Performance optimization",
        "6 months support",
        "Priority support",
        "Monthly maintenance",
      ],
      popular: false,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio Development Pricing</h2>
          <p className="text-foreground/70 text-lg">
            Choose the perfect package for your portfolio needs. All plans include responsive design and professional
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              <Card className={`h-full ${plan.popular ? "border-amber-200 dark:border-amber-800 shadow-lg" : ""}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-amber-600 mb-2">{plan.price}</div>
                  <p className="text-foreground/70">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
