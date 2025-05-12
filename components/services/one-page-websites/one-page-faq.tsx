"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function OnePageFaq() {
  const faqs = [
    {
      question: "Is a one-page website right for my business?",
      answer:
        "One-page websites are ideal for businesses with a focused offering or those looking to highlight a specific product, service, or event. They're perfect for startups, freelancers, restaurants, portfolios, product launches, and small businesses with straightforward services. If your content can be effectively organized into a single, scrollable page with distinct sections, a one-page website might be the perfect solution for you.",
    },
    {
      question: "How long does it take to build a one-page website?",
      answer:
        "The timeline for a one-page website typically ranges from 2-4 weeks, depending on the complexity of the design, the amount of content, and the level of customization required. Basic one-page websites can be completed in as little as 2 weeks, while more complex sites with custom animations and interactive elements may take 3-4 weeks. We'll provide a specific timeline during our initial consultation based on your requirements.",
    },
    {
      question: "Can I update the content myself after the website is launched?",
      answer:
        "Yes, we build all our one-page websites with user-friendly content management systems that allow you to easily update text, images, and other content without any technical knowledge. We also provide training to ensure you're comfortable managing your website. For more complex changes to the design or structure, our support team is always available to assist.",
    },
    {
      question: "How do you handle SEO for one-page websites?",
      answer:
        "We implement several SEO strategies specifically tailored for one-page websites, including optimized section headings, proper HTML5 semantic structure, schema markup, meta tags, image optimization, and mobile responsiveness. We also ensure fast loading times and implement proper anchor links for smooth navigation between sections. While one-page websites have some inherent SEO limitations compared to multi-page sites, our approach maximizes your visibility for your most important keywords.",
    },
    {
      question: "Do you provide hosting for one-page websites?",
      answer:
        "Yes, we offer website hosting services with high-performance servers, regular backups, and security monitoring. Our hosting packages are specifically optimized for speed and reliability, which is crucial for one-page websites where user experience depends on smooth scrolling and quick loading times. We can also work with your existing hosting provider if you prefer.",
    },
    {
      question: "Can a one-page website be expanded into a multi-page website later?",
      answer:
        "Yes, we design our one-page websites with scalability in mind. If your business grows and you need to expand to a multi-page website in the future, we can build upon your existing design and content to create a seamless transition. This approach allows you to start with a cost-effective one-page solution and expand as your needs evolve.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-foreground/70 text-lg">
            Have questions about our one-page website services? Find answers to commonly asked questions below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
