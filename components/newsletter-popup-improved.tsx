"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NewsletterPopupProps {
  className?: string
}

export const NewsletterPopupImproved = ({ className }: NewsletterPopupProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem("newsletterSubscribed") === "true"

    // Check when the popup was last closed
    const lastClosedTime = localStorage.getItem("newsletterLastClosed")

    if (hasSubscribed) {
      // If user has subscribed, don't show popup
      return
    } else if (lastClosedTime) {
      // If popup was closed before, check if 30 hours have passed
      const hoursSinceLastClosed = (Date.now() - Number.parseInt(lastClosedTime)) / (1000 * 60 * 60)
      if (hoursSinceLastClosed < 30) {
        // Don't show if less than 30 hours have passed
        return
      }
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Store the time when popup was closed
    localStorage.setItem("newsletterLastClosed", Date.now().toString())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store that user has subscribed
      localStorage.setItem("newsletterSubscribed", "true")
      setIsSuccess(true)

      // Close popup after showing success message
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={cn("fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4", className)}>
      <Card className="w-full max-w-md relative animate-in fade-in-0 zoom-in-95 duration-300">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleClose} aria-label="Close">
          <X className="h-4 w-4" />
        </Button>

        <CardHeader>
          <CardTitle className="text-xl">Stay Updated</CardTitle>
          <CardDescription>
            Subscribe to our newsletter for exclusive updates, tips, and special offers.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">Thank you for subscribing!</h3>
              <p className="text-muted-foreground mt-1">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </CardContent>

        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-xs text-center text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NewsletterPopupImproved
