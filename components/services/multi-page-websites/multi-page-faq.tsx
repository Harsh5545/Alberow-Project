"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MultiPageFaq() {
  const faqs = [
    {
      question: "How many pages do I need for my website?",
      answer:
        "The number of pages your website needs depends on your business goals, content requirements, and the complexity of your offerings. Most business websites typically include Home, About, Services/Products, Contact, and possibly Blog pages as a minimum. E-commerce sites, educational institutions, and larger organizations often require dozens or even hundreds of pages. During our discovery process, we'll help you determine the optimal structure for your specific needs.",
    },
    {
      question: "How long does it take to build a multi-page website?",
      answer:
        "The timeline for a multi-page website typically ranges from 6-12 weeks, depending on the complexity, number of pages, and custom functionality required. A standard business website might take 6-8 weeks, while more complex sites with e-commerce or custom applications could take 10-16 weeks. We'll provide a specific timeline during our initial consultation based on your requirements.",
    },
    {
      question: "What content management system (CMS) do you use?",
      answer:
        "We primarily use WordPress, Drupal, and custom-built CMS solutions depending on your specific needs. WordPress is excellent for most business websites and blogs, Drupal works well for complex, content-heavy sites, and custom CMS solutions are ideal for unique requirements. We'll recommend the best option based on your content needs, technical requirements, and your team's familiarity with different systems.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes, all our multi-page websites include a user-friendly content management system that allows you to easily update text, images, add new pages, blog posts, and more without technical knowledge. We provide comprehensive training and documentation to ensure your team can confidently manage the website. For more complex changes or additions, our support team is always available to assist.",
    },
    {
      question: "Do you provide hosting and maintenance for multi-page websites?",
      answer:
        "Yes, we offer comprehensive hosting and maintenance packages specifically designed for multi-page websites. Our hosting includes high-performance servers, regular backups, security monitoring, and technical support. Our maintenance packages include regular updates, security patches, performance optimization, and technical support to ensure your website remains secure, up-to-date, and performing optimally.",
    },
    {
      question: "How do you handle SEO for multi-page websites?",
      answer:
        "We implement a comprehensive SEO strategy for multi-page websites, including page-specific keyword optimization, meta tags, structured data, XML sitemaps, and proper internal linking. We also ensure technical SEO best practices like fast loading speeds, mobile responsiveness, and secure connections. Multi-page websites offer excellent SEO advantages as each page can target specific keywords and topics, creating more opportunities for search visibility.",
    },
    {
      question: "Can you integrate e-commerce functionality into my multi-page website?",
      answer:
        "Yes, we can integrate full e-commerce functionality into your multi-page website, including product catalogs, shopping carts, secure payment processing, inventory management, and order tracking. We work with platforms like WooCommerce, Shopify, and Magento, or can build custom e-commerce solutions depending on your specific requirements. We'll recommend the best approach based on your product range, sales volume, and business processes.",
    },
    {
      question: "Do you offer multi-language support for websites?",
      answer:
        "Yes, we can build multi-language websites that allow you to reach global audiences. We implement proper language switching, content translation management, and SEO best practices for multi-language sites. Depending on your needs, we can use translation plugins, create separate language versions, or implement more sophisticated solutions for complex multi-language requirements.",
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
            Have questions about our multi-page website services? Find answers to commonly asked questions below.
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
