"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's the difference between social media marketing and management?",
    answer:
      "Social media marketing focuses primarily on creating and executing campaigns to achieve specific marketing objectives, such as lead generation or sales. Social media management is more comprehensive, covering the day-to-day operation of your social media accounts, including content creation, community engagement, and profile optimization. While marketing is campaign-driven, management is ongoing and focuses on building and maintaining your social media presence.",
  },
  {
    question: "How often will you post on my social media accounts?",
    answer:
      "The posting frequency depends on your package and the platforms we're managing. Generally, we recommend posting 3-5 times per week on platforms like Facebook and Instagram, and more frequently on platforms like Twitter. We'll develop a custom posting schedule based on your audience's behavior and platform best practices to maximize engagement.",
  },
  {
    question: "Do I need to approve content before it's posted?",
    answer:
      "Yes, we implement an approval process for all content. We'll create a content calendar in advance and share it with you for review and approval. You'll have the opportunity to request changes or provide feedback before anything is published. We can adjust the approval process to fit your preferences and availability.",
  },
  {
    question: "How do you handle comments and messages on our social media accounts?",
    answer:
      "We provide community management as part of our social media management services. This includes monitoring and responding to comments, messages, and mentions during the hours specified in your package. We'll develop response guidelines with you to ensure all interactions align with your brand voice and policies. For complex inquiries or issues, we'll escalate to your team as needed.",
  },
  {
    question: "Can you manage social media accounts for regulated industries?",
    answer:
      "Yes, we have experience managing social media for regulated industries such as healthcare, finance, and legal services. We understand the compliance requirements and can work within your industry's guidelines. We'll collaborate with your compliance team to ensure all content meets regulatory standards before publishing.",
  },
  {
    question: "What happens if there's a social media crisis?",
    answer:
      "We include crisis management planning in our social media management services. This includes developing response protocols for various scenarios and providing real-time support during crisis situations. If a crisis occurs, we'll work closely with your team to implement the appropriate response strategy and minimize any potential damage to your brand reputation.",
  },
]

export function SocialManagementFaq() {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Questions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our social media management services.
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
