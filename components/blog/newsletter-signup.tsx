"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, ArrowRight } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setEmail("")
      setIsSubmitting(false)
      alert("Thanks for subscribing!")
    }, 1000)
  }

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <CardHeader>
        <h3 className="text-xl font-bold flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          Stay Updated
        </h3>
        <p className="text-purple-100">Get the latest articles and insights delivered to your inbox.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            required
          />
          <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-purple-600 hover:bg-white/90">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
