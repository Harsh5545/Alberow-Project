import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MarketingFAQ() {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline for results varies based on the channels and strategies employed. Some tactics like paid advertising can show immediate results, while SEO and content marketing typically take 3-6 months to demonstrate significant impact. We provide regular progress updates and focus on both short-term wins and long-term sustainable growth.",
    },
    {
      question: "How much should I budget for digital marketing?",
      answer:
        "Your ideal budget depends on your business goals, industry, competition, and growth targets. We work with clients across various budget ranges and focus on maximizing ROI regardless of spend level. During our initial consultation, we'll recommend an appropriate budget based on your specific objectives and competitive landscape.",
    },
    {
      question: "Which digital marketing channels will work best for my business?",
      answer:
        "The most effective channels depend on your industry, target audience, and business goals. We conduct thorough research to identify where your audience spends time online and which channels offer the best potential ROI. Our strategies typically incorporate multiple complementary channels for maximum impact.",
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "We establish clear KPIs aligned with your business objectives at the outset of our engagement. These might include metrics like conversion rate, cost per acquisition, return on ad spend, organic traffic growth, or lead quality. We provide comprehensive reporting dashboards and regular insights to track progress against these goals.",
    },
    {
      question: "Do you offer standalone services or only comprehensive packages?",
      answer:
        "We offer both comprehensive marketing packages and standalone services. While an integrated approach often yields the best results, we understand that some businesses have specific needs or in-house capabilities. We're flexible in our approach and can customize our services to complement your existing marketing efforts.",
    },
    {
      question: "How often will I receive reports and updates on my campaigns?",
      answer:
        "We provide monthly comprehensive performance reports with detailed analysis and recommendations. Additionally, you'll have access to real-time dashboards to monitor campaign performance at any time. Our team schedules regular strategy calls to discuss results, insights, and next steps for continuous improvement.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our digital marketing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
