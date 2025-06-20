"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, FileText, Users, AlertTriangle, Scale, Globe, Lock, Phone } from "lucide-react"

export function TermsContent() {
  const sections = [
    {
      id: "agreement",
      icon: <FileText className="h-5 w-5" />,
      title: "1. Agreement to Terms",
      content: [
        'These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Alberow ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").',
        "You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.",
        "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service from time to time.",
      ],
    },
    {
      id: "services",
      icon: <Globe className="h-5 w-5" />,
      title: "2. Our Services",
      content: [
        "Alberow provides comprehensive digital services including:",
        "• Web Development: Custom websites, e-commerce platforms, and web applications",
        "• SEO Optimization: Search engine optimization and digital marketing strategies",
        "• Application Development: Mobile and desktop application development",
        "• Portfolio Development: Professional portfolio websites for creatives and businesses",
        "• Social Media Marketing: Strategic social media campaigns and management",
        "• Digital Consulting: Technology consulting and digital transformation services",
        "The specific services to be provided will be detailed in a separate agreement or statement of work between Alberow and the client.",
      ],
    },
    {
      id: "intellectual-property",
      icon: <Shield className="h-5 w-5" />,
      title: "3. Intellectual Property Rights",
      content: [
        'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.',
        "All Content and Marks are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India and international copyright laws.",
        'The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',
      ],
    },
    {
      id: "user-representations",
      icon: <Users className="h-5 w-5" />,
      title: "4. User Representations",
      content: [
        "By using the Site, you represent and warrant that:",
        "• All registration information you submit will be true, accurate, current, and complete",
        "• You will maintain the accuracy of such information and promptly update such registration information as necessary",
        "• You have the legal capacity and you agree to comply with these Terms of Service",
        "• You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site",
        "• You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise",
        "• You will not use the Site for any illegal or unauthorized purpose",
        "• Your use of the Site will not violate any applicable law or regulation",
      ],
    },
    {
      id: "prohibited-activities",
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "5. Prohibited Activities",
      content: [
        "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
        "As a user of the Site, you agree not to:",
        "• Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us",
        "• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords",
        "• Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein",
        "• Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site",
        "• Use any information obtained from the Site in order to harass, abuse, or harm another person",
        "• Make improper use of our support services or submit false reports of abuse or misconduct",
        "• Use the Site in a manner inconsistent with any applicable laws or regulations",
        "• Engage in unauthorized framing of or linking to the Site",
        "• Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism",
      ],
    },
    {
      id: "payment-terms",
      icon: <Scale className="h-5 w-5" />,
      title: "6. Payment Terms",
      content: [
        "All fees are quoted in Indian Rupees (INR) unless otherwise specified. Payment terms will be specified in individual service agreements.",
        "We accept payments through various methods including bank transfers, UPI, credit cards, and other digital payment platforms.",
        "For ongoing services, payments are typically due monthly or as specified in the service agreement.",
        "Late payment may result in suspension of services. A late fee may be applied to overdue accounts.",
        "All prices are subject to applicable taxes as per Indian tax laws.",
        "Refunds, if applicable, will be processed according to our refund policy as specified in individual service agreements.",
      ],
    },
    {
      id: "privacy-data",
      icon: <Lock className="h-5 w-5" />,
      title: "7. Privacy and Data Protection",
      content: [
        "We are committed to protecting your privacy and personal data in accordance with applicable Indian data protection laws.",
        "Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your information.",
        "By using our services, you consent to the collection and use of your information as described in our Privacy Policy.",
        "We implement appropriate technical and organizational measures to ensure the security of your personal data.",
        "You have the right to access, correct, or delete your personal information as per applicable laws.",
      ],
    },
    {
      id: "limitation-liability",
      icon: <Shield className="h-5 w-5" />,
      title: "8. Limitation of Liability",
      content: [
        "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES.",
        "NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.",
        "CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU.",
      ],
    },
    {
      id: "governing-law",
      icon: <Scale className="h-5 w-5" />,
      title: "9. Governing Law",
      content: [
        "These Terms shall be interpreted and enforced in accordance with the laws of India, without regard to conflict of law principles.",
        "Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.",
        "If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      ],
    },
    {
      id: "contact",
      icon: <Phone className="h-5 w-5" />,
      title: "10. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us:",
        "• Email: legal@alberow.com",
        "• Phone: +91 98765 43210",
        "• Address: Mumbai, Maharashtra, India",
        "• Website: www.alberow.com",
        "We will respond to your inquiries within 48 hours during business days.",
      ],
    },
  ]

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Quick Navigation - Mobile Only */}
      <div className="lg:hidden">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Terms Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">{section.title}</h2>
                  <Badge variant="outline" className="text-xs">
                    Section {index + 1}
                  </Badge>
                </div>
              </div>

              <Separator className="mb-4 sm:mb-6" />

              <div className="space-y-3 sm:space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-sm sm:text-base leading-relaxed ${
                      paragraph.startsWith("•")
                        ? "ml-4 sm:ml-6 text-foreground/80"
                        : paragraph.startsWith("IN NO EVENT") ||
                            paragraph.startsWith("NOTWITHSTANDING") ||
                            paragraph.startsWith("CERTAIN JURISDICTIONS")
                          ? "font-medium text-foreground/90 bg-yellow-50 dark:bg-yellow-900/20 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400"
                          : "text-foreground/80"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Footer Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-bold text-green-800 dark:text-green-300">Terms Acceptance</h3>
            </div>
            <p className="text-sm sm:text-base text-green-700 dark:text-green-400 mb-4 sm:mb-6 leading-relaxed">
              By using Alberow's services, you acknowledge that you have read, understood, and agree to be bound by
              these Terms of Service. If you do not agree to these terms, please discontinue use of our services
              immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-xs sm:text-sm text-green-600 dark:text-green-400">
              <span>📧 legal@alberow.com</span>
              <span className="hidden sm:inline">•</span>
              <span>📞 +91 98765 43210</span>
              <span className="hidden sm:inline">•</span>
              <span>🌐 www.alberow.com</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
