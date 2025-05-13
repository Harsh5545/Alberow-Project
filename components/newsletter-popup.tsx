"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [marketingConsent, setMarketingConsent] = useState(false)

  useEffect(() => {
    // Check if user has already submitted an email
    const hasSubmittedEmail = localStorage.getItem("hasSubmittedEmail")

    // Check when the popup was last closed
    const lastClosedTime = localStorage.getItem("popupLastClosed")
    const currentTime = new Date().getTime()

    // Show popup if:
    // 1. User has never submitted an email AND
    // 2. Either the popup was never closed OR it was closed more than 30 hours ago
    const showPopup =
      !hasSubmittedEmail && (!lastClosedTime || currentTime - Number.parseInt(lastClosedTime) > 30 * 60 * 60 * 1000)

    if (showPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call to save email
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mark as submitted
      setIsSubmitted(true)

      // Save to localStorage to prevent showing again
      localStorage.setItem("hasSubmittedEmail", "true")

      // In a real implementation, you would send the data to your backend
      console.log("Submitted:", { email, name, marketingConsent })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    // Record the time when the popup was closed
    localStorage.setItem("popupLastClosed", new Date().getTime().toString())
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-background rounded-xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-foreground/60 hover:text-foreground"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>

            {!isSubmitted ? (
              <>
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Get Our Services Guide</h3>
                  <p className="text-foreground/70">
                    Subscribe to receive our comprehensive services PDF and stay updated with our latest offerings.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox id="marketing" checked={marketingConsent} onCheckedChange={setMarketingConsent} />
                    <Label htmlFor="marketing" className="text-sm leading-tight">
                      I agree to receive marketing communications from Alberow. You can unsubscribe at any time.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
                        <Download className="mr-2 h-4 w-4" /> Get PDF Guide
                      </span>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-foreground/70 mb-6">
                  Your services guide has been sent to your email. Check your inbox to download it.
                </p>
                <Button variant="outline" onClick={handleClose} className="mx-auto">
                  Close
                </Button>
              </div>
            )}

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
