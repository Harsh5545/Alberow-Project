"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results from social media marketing?",
    answer:
      "Social media marketing results vary based on factors like your industry, target audience, and campaign objectives. Generally, you can expect to see improvements in engagement and awareness within the first 1-2 months, while lead generation and sales results typically take 3-6 months to materialize. We set clear expectations and KPIs at the beginning of our engagement to track progress.",
  },
  {
    question: "Which social media platforms should my business be on?",
    answer:
      "The right platforms for your business depend on your target audience, industry, and marketing goals. Not every business needs to be on every platform. During our initial consultation, we'll analyze where your audience is most active and which platforms align best with your business objectives. We focus on quality over quantity to maximize your ROI.",
  },
  {
    question: "Do you create the content or do we need to provide it?",
    answer:
      "We create all the content for your social media channels, including graphics, captions, and hashtags. Our team includes content creators, graphic designers, and copywriters who specialize in creating engaging, platform-specific content. We'll work with you to understand your brand voice and preferences, and you'll have the opportunity to review and approve all content before it's published.",
  },
  {
    question: "How do you measure social media success?",
    answer:
      "We measure social media success through various metrics aligned with your business goals. These may include engagement rates, follower growth, website traffic, lead generation, conversion rates, and ROI. We provide regular reports with insights and recommendations, and we continuously optimize our strategies based on performance data.",
  },
  {
    question: "Do you handle paid social media advertising?",
    answer:
      "Yes, we manage paid social media advertising campaigns across all major platforms. Our approach includes audience targeting, ad creative development, A/B testing, budget management, and performance optimization. We provide transparent reporting on ad performance and ROI, and we continuously refine our targeting and creative strategies to improve results.",
  },
  {
    question: "Can you help with social media crisis management?",
    answer:
      "Yes, we offer social media crisis management as part of our services. This includes developing crisis response plans, monitoring for potential issues, and providing real-time support during crisis situations. Our team has experience handling various types of social media crises and can help protect your brand reputation online.",
  },
]

export function SocialMarketingFaq() {
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
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our social media marketing services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500 dark:text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
