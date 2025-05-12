"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Search, Smartphone, Layout, Layers, Users, BarChart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Responsive design for all devices",
      "SEO-friendly architecture",
      "Fast loading speeds",
      "Custom CMS integration",
      "E-commerce functionality",
      "Secure payment gateways",
    ],
    href: "/services/web-development",
  },
  {
    icon: <Search className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "SEO Optimization",
    description: "Boost your online visibility with our comprehensive SEO strategies tailored to your business needs.",
    features: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "Content strategy development",
      "Link building campaigns",
      "Regular performance reporting",
    ],
    href: "/services/seo-optimization",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Application Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "API integration",
      "Performance optimization",
      "Ongoing maintenance and support",
    ],
    href: "/services/application-development",
  },
  {
    icon: <Layout className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "One-Page Websites",
    description: "Stunning single-page websites perfect for showcasing your brand or product with impact.",
    features: [
      "Modern, clean design",
      "Smooth scrolling navigation",
      "Optimized for conversions",
      "Fast loading performance",
      "Mobile-first approach",
      "Easy content updates",
    ],
    href: "/services/one-page-websites",
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Multi-Page Websites",
    description: "Comprehensive multi-page websites with intuitive navigation and content organization.",
    features: [
      "Structured information architecture",
      "Advanced navigation systems",
      "Blog and news sections",
      "Custom page templates",
      "Integrated search functionality",
      "Multi-language support",
    ],
    href: "/services/multi-page-websites",
  },
  {
    icon: <Users className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "Portfolio Development",
    description: "Showcase your work with a professionally designed portfolio that highlights your achievements.",
    features: [
      "Customized project showcases",
      "Filterable galleries",
      "Case study templates",
      "Client testimonial sections",
      "Contact and inquiry forms",
      "Social media integration",
    ],
    href: "/services/portfolio-development",
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that increase engagement and drive conversions.",
    features: [
      "Platform-specific strategies",
      "Content calendar development",
      "Audience targeting",
      "Paid advertising campaigns",
      "Performance analytics",
      "Community management",
    ],
    href: "/services/social-media-marketing",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-pink-600 dark:text-pink-400" />,
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence to build and engage your audience.",
    features: [
      "Regular content posting",
      "Audience engagement",
      "Trend monitoring",
      "Competitor analysis",
      "Crisis management",
      "Growth strategy implementation",
    ],
    href: "/services/social-media-management",
  },
]

export function ServicesList() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant={activeService === index ? "default" : "outline"}
                  className={`w-full justify-start text-left h-auto py-3 px-4 ${
                    activeService === index ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">{service.icon}</div>
                    <div>
                      <h3 className="font-medium">{service.title}</h3>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 rounded-lg border border-border/50"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">{services[activeService].icon}</div>
                <h2 className="text-2xl font-bold">{services[activeService].title}</h2>
              </div>

              <p className="text-foreground/70 text-lg mb-8">{services[activeService].description}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="h-2 w-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Link href={services[activeService].href}>Learn More About {services[activeService].title}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
