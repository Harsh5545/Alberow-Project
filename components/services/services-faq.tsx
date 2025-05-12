"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses of all sizes across various industries, from startups to established enterprises. Our services are tailored to meet the specific needs and goals of each client, regardless of their size or sector.",
  },
  {
    question: "How long does it typically take to complete a website?",
    answer:
      "The timeline for website development varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex projects with custom functionality could take 8-12 weeks or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. Our support packages include regular updates, security monitoring, performance optimization, and technical support.",
  },
  {
    question: "How do you approach SEO in your web development process?",
    answer:
      "SEO is integrated into our development process from the beginning. We build websites with clean, semantic code, optimized page speed, mobile responsiveness, and proper meta tags. We also implement schema markup, XML sitemaps, and ensure the site architecture is search engine friendly. For more comprehensive SEO, we offer dedicated SEO services.",
  },
  {
    question: "Can you help with content creation for our website?",
    answer:
      "Yes, we offer content creation services including copywriting, image selection, and graphic design. Our content team works closely with you to ensure the content aligns with your brand voice and effectively communicates your message to your target audience.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, complexity, and specific requirements of your project. We provide detailed proposals with transparent pricing after our initial consultation where we discuss your needs and goals. We're committed to delivering value and working within your budget constraints.",
  },
]

export function ServicesFaq() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services and process.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-foreground/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
