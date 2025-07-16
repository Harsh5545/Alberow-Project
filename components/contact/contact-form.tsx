"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle, Phone, Mail, MessageSquare } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState<string>("")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (exactly 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    } else if (!/^[6-9]/.test(phoneDigits)) {
      newErrors.phone = "Please enter a valid Indian mobile number"
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service you're interested in"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (minimum 20 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)

      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes("authentication")) {
          setSubmitError("Email service authentication failed. Please contact us directly at hello@alberow.com")
        } else if (error.message.includes("timeout")) {
          setSubmitError("Request timeout. Please check your internet connection and try again.")
        } else if (error.message.includes("network")) {
          setSubmitError("Network error. Please check your internet connection.")
        } else {
          setSubmitError(error.message)
        }
      } else {
        setSubmitError(
          "Failed to send message. Please try contacting us directly at hello@alberow.com or +91 9137747708",
        )
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setErrors({})
    setSubmitError("")
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50/30 via-background to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-6 md:p-8 rounded-2xl border border-border/50 text-center shadow-lg"
            >
              <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Message Sent Successfully! 🎉
              </h2>
              <p className="text-foreground/70 mb-6 text-sm md:text-base max-w-md mx-auto">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours. Please
                check your email for a confirmation message.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center text-sm text-foreground/60">
                  <Mail className="h-4 w-4 mr-2 text-purple-600" />
                  Confirmation sent to your email
                </div>
                <div className="flex items-center text-sm text-foreground/60">
                  <Phone className="h-4 w-4 mr-2 text-pink-600" />
                  We'll call you within 24 hours
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={resetForm} variant="outline" className="bg-transparent">
                  Send Another Message
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <a href="https://wa.me/919137747708" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-6 md:p-8 rounded-2xl border border-border/50 shadow-lg"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Discuss Your{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Project
                  </span>
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Fill out the form below with your project details. All fields are required to ensure we can provide
                  you with the most accurate quote and timeline.
                </p>
              </div>

              {submitError && (
                <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <AlertDescription className="text-red-600 dark:text-red-400">{submitError}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`h-12 ${errors.name ? "border-red-500 focus:border-red-500" : "focus:border-purple-500"}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`h-12 ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-purple-500"}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 text-sm">
                        +91
                      </span>
                      <Input
                        id="phone"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                          handleInputChange("phone", value)
                        }}
                        className={`h-12 pl-12 ${errors.phone ? "border-red-500 focus:border-red-500" : "focus:border-purple-500"}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-foreground">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger
                        id="service"
                        className={`h-12 ${errors.service ? "border-red-500 focus:border-red-500" : "focus:border-purple-500"}`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">🌐 Web Development</SelectItem>
                        <SelectItem value="seo">🔍 SEO Optimization</SelectItem>
                        <SelectItem value="app-development">📱 Mobile App Development</SelectItem>
                        <SelectItem value="social-media">📢 Social Media Marketing</SelectItem>
                        <SelectItem value="social-media-management">📊 Social Media Management</SelectItem>
                        <SelectItem value="one-page-websites">📄 One-Page Websites</SelectItem>
                        <SelectItem value="multi-page-websites">📚 Multi-Page Websites</SelectItem>
                        <SelectItem value="portfolio-development">🎨 Portfolio Development</SelectItem>
                        <SelectItem value="other">🔧 Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your project requirements, timeline, budget range, and any specific features you need..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "focus:border-purple-500"}`}
                  />
                  <div className="flex justify-between items-center">
                    {errors.message && (
                      <p className="text-red-500 text-xs flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-foreground/60 ml-auto">{formData.message.length}/500 characters</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Your Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" /> Send Message & Get Quote
                    </span>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-foreground/60 max-w-md mx-auto">
                    🔒 Your information is secure and will only be used to contact you about your project. By submitting
                    this form, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
