"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy, and results typically take time to materialize. You may start seeing initial improvements within 3-6 months, but significant results often take 6-12 months. The timeline depends on various factors, including your website's current state, competition in your industry, and the aggressiveness of your SEO strategy.",
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO involves optimizing elements on your website that you have direct control over, such as content, meta tags, headings, URL structure, and internal linking. Off-page SEO focuses on external factors that affect your website's authority and reputation, primarily through backlinks from other websites, social signals, and online mentions.",
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer:
      "We measure SEO success through various metrics, including organic traffic growth, keyword rankings, conversion rates, bounce rates, time on site, and return on investment (ROI). We provide regular reports that track these metrics and demonstrate the impact of our SEO efforts on your business goals.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "We don't guarantee specific rankings as search engine algorithms are complex and constantly evolving. However, we do guarantee that we'll follow SEO best practices and implement strategies that have proven successful for our clients. Our track record shows consistent improvements in rankings and organic traffic for the websites we optimize.",
  },
  {
    question: "What makes your SEO services different from other agencies?",
    answer:
      "Our approach to SEO is comprehensive, transparent, and tailored to your specific business goals. We combine technical expertise with creative content strategies to deliver sustainable results. We also provide detailed reporting and insights, so you always know exactly what we're doing and the impact it's having on your website's performance.",
  },
  {
    question: "Will I need to make changes to my website?",
    answer:
      "Most likely, yes. Effective SEO often requires changes to your website's structure, content, and technical elements. However, we work closely with you to implement these changes in a way that aligns with your brand and business objectives. We can either guide your team on making these changes or implement them directly, depending on your preference.",
  },
]

export function SeoFaq() {
  return (
    <section className="py-20 bg-muted/30">
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our SEO optimization services.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
