"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Send, UserPlus, Mail, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function InviteTeamMemberPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [customMessage, setCustomMessage] = useState("")
  const [sendCopy, setSendCopy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would send this data to your backend
      console.log({
        email,
        name,
        role,
        customMessage,
        sendCopy,
      })

      alert("Invitation sent successfully!")
      // Redirect to team list or clear form
    } catch (error) {
      console.error("Error sending invitation:", error)
      alert("Error sending invitation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const roles = [
    { id: "admin", name: "Administrator", description: "Full access to all features and settings" },
    { id: "manager", name: "Project Manager", description: "Manage projects, clients, and team members" },
    { id: "developer", name: "Developer", description: "Access to assigned projects and tasks" },
    { id: "designer", name: "Designer", description: "Access to design projects and assets" },
    { id: "content", name: "Content Creator", description: "Manage blog posts and content" },
    { id: "marketing", name: "Marketing Specialist", description: "Access to marketing tools and analytics" },
    { id: "support", name: "Support Agent", description: "Handle client support requests" },
    { id: "custom", name: "Custom Role", description: "Create a custom role with specific permissions" },
  ]

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invite Team Member</h1>
          <p className="text-muted-foreground">Send an invitation to join your team</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/admin/team">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Invitation Details</CardTitle>
                <CardDescription>Enter the details of the person you want to invite</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                      <Mail className="h-4 w-4" />
                    </span>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="rounded-l-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                      <UserPlus className="h-4 w-4" />
                    </span>
                    <Input
                      id="name"
                      placeholder="Enter full name"
                      className="rounded-l-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <Select value={role} onValueChange={setRole} required>
                      <SelectTrigger id="role" className="rounded-l-none">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((roleOption) => (
                          <SelectItem key={roleOption.id} value={roleOption.id}>
                            {roleOption.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-message">Custom Message (Optional)</Label>
                  <Textarea
                    id="custom-message"
                    placeholder="Add a personal message to the invitation email"
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="send-copy" checked={sendCopy} onCheckedChange={setSendCopy} />
                  <Label htmlFor="send-copy">Send me a copy of the invitation</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin/team">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Invitation
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Role Information</CardTitle>
              <CardDescription>Details about the selected role</CardDescription>
            </CardHeader>
            <CardContent>
              {role ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">{roles.find((r) => r.id === role)?.name || "Select a role"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {roles.find((r) => r.id === role)?.description || ""}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Permissions:</h4>
                    <ul className="space-y-1">
                      {role === "admin" && (
                        <>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Full system access
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage team members
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage clients
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage projects
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage billing
                          </li>
                        </>
                      )}

                      {role === "manager" && (
                        <>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage assigned projects
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Manage team members on projects
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Client communication
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            View analytics
                          </li>
                          <li className="flex items-center text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500" />
                            Billing management
                          </li>
                        </>
                      )}

                      {role === "developer" && (
                        <>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Access assigned projects
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Upload files and code
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Comment on tasks
                          </li>
                          <li className="flex items-center text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500" />
                            Client management
                          </li>
                          <li className="flex items-center text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500" />
                            Billing access
                          </li>
                        </>
                      )}

                      {role === "designer" && (
                        <>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Access design projects
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Upload design assets
                          </li>
                          <li className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Comment on tasks
                          </li>
                          <li className="flex items-center text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500" />
                            Client management
                          </li>
                          <li className="flex items-center text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500" />
                            Billing access
                          </li>
                        </>
                      )}

                      {(role === "content" || role === "marketing" || role === "support" || role === "custom") && (
                        <li className="text-sm text-muted-foreground">
                          Permissions will be configured after invitation is accepted.
                        </li>
                      )}

                      {!role && <li className="text-sm text-muted-foreground">Select a role to see permissions</li>}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-muted-foreground">
                  <ShieldCheck className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a role to see details</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Invitation Preview</CardTitle>
              <CardDescription>Preview of the invitation email</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 space-y-3">
                <div className="border-b pb-2">
                  <p className="text-sm">
                    <strong>To:</strong> {email || "recipient@example.com"}
                  </p>
                  <p className="text-sm">
                    <strong>Subject:</strong> Invitation to join Alberow team
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <p>Hello {name || "there"},</p>
                  <p>
                    You've been invited to join the Alberow team as a{" "}
                    {roles.find((r) => r.id === role)?.name || "team member"}.
                  </p>
                  {customMessage && (
                    <div className="border-l-2 pl-3 italic">
                      <p>{customMessage}</p>
                    </div>
                  )}
                  <p>Click the button below to accept this invitation and create your account.</p>
                  <div className="py-2">
                    <div className="bg-primary text-primary-foreground text-center py-2 px-4 rounded-md w-40 mx-auto">
                      Accept Invitation
                    </div>
                  </div>
                  <p>
                    If you have any questions, please contact us at{" "}
                    <span className="text-primary">support@alberow.com</span>
                  </p>
                  <p>Thanks,</p>
                  <p>The Alberow Team</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Missing components for the icons
const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const X = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
