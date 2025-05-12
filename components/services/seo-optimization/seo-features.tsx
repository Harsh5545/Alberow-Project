"use client"

import { motion } from "framer-motion"
import { Search, FileText, Code, File, Link, BarChart, Globe, Target } from "lucide-react"

export function SeoFeatures() {
  const features = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Keyword Research & Analysis",
      description: "Identify the most valuable keywords for your business to target in your SEO strategy.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "On-Page SEO Optimization",
      description: "Optimize your website's content, meta tags, and structure to improve search engine rankings.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Technical SEO",
      description: "Improve your website's technical aspects to enhance crawling and indexing by search engines.",
    },
    {
      icon: <File className="h-10 w-10" />,
      title: "Content Strategy",
      description: "Develop a content strategy that attracts and engages your target audience while improving SEO.",
    },
    {
      icon: <Link className="h-10 w-10" />,
      title: "Link Building",
      description: "Build high-quality backlinks to increase your website's authority and improve rankings.",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Performance Reporting",
      description: "Regular reports on your SEO performance with insights and recommendations for improvement.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Local SEO",
      description: "Optimize your online presence to attract more customers from local searches.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Competitor Analysis",
      description: "Analyze your competitors' SEO strategies to identify opportunities and stay ahead.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive SEO Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We offer a full range of SEO services designed to improve your search engine rankings and drive more
            qualified traffic to your website.
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
              <div className="mb-4 text-blue-600 dark:text-blue-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
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
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-teal-500 dark:hover:text-teal-400 font-medium"
          >
            Get a free SEO audit
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
