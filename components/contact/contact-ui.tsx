"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactUI() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you. Reach out to us using any of the
              methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">We're available Monday-Friday, 9am-6pm</p>
              <a href="tel:+11234567890" className="text-primary font-medium hover:underline">
                +1 (123) 456-7890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@alberow.com" className="text-primary font-medium hover:underline">
                info@alberow.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our office is located in downtown</p>
              <address className="not-italic text-primary font-medium">
                123 Business Ave, Suite 100
                <br />
                San Francisco, CA 94107
              </address>
            </motion.div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="form">Contact Form</TabsTrigger>
                  <TabsTrigger value="support">Support Ticket</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="form" className="p-0">
                {isSubmitted ? (
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </motion.div>
                  </CardContent>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <Input id="name" placeholder="Your Name" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" placeholder="Your Phone Number" />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium">
                            Service Interested In <span className="text-red-500">*</span>
                          </label>
                          <Select required>
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="seo">SEO Optimization</SelectItem>
                              <SelectItem value="app-development">Application Development</SelectItem>
                              <SelectItem value="social-media">Social Media Marketing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project and requirements..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium">
                          Budget Range
                        </label>
                        <Select>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-5k">Less than $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="20k-plus">$20,000+</SelectItem>
                            <SelectItem value="not-sure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-end">
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </span>
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                )}
              </TabsContent>

              <TabsContent value="support" className="p-0">
                <form onSubmit={handleSubmit}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="support-name" className="text-sm font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="support-name" placeholder="Your Name" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="support-email" className="text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input id="support-email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="support-subject" className="text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input id="support-subject" placeholder="Brief description of your issue" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="support-type" className="text-sm font-medium">
                        Support Type <span className="text-red-500">*</span>
                      </label>
                      <Select required>
                        <SelectTrigger id="support-type">
                          <SelectValue placeholder="Select support type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="account">Account Issue</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="support-priority" className="text-sm font-medium">
                        Priority
                      </label>
                      <Select>
                        <SelectTrigger id="support-priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">
                            <div className="flex items-center">
                              <Badge variant="outline" className="mr-2 border-blue-500 text-blue-500">
                                Low
                              </Badge>
                              <span>Not urgent, general question</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="medium">
                            <div className="flex items-center">
                              <Badge variant="outline" className="mr-2 border-yellow-500 text-yellow-500">
                                Medium
                              </Badge>
                              <span>Important but not critical</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="high">
                            <div className="flex items-center">
                              <Badge variant="outline" className="mr-2 border-red-500 text-red-500">
                                High
                              </Badge>
                              <span>Urgent issue requiring attention</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="support-message" className="text-sm font-medium">
                        Detailed Description <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="support-message"
                        placeholder="Please provide as much detail as possible about your issue..."
                        rows={5}
                        required
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-end">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Submit Ticket
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  )
}
