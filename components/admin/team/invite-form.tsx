"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function InviteForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    department: "",
    message:
      "I'd like to invite you to join our team at Alberow. Please click the link in this email to set up your account.",
    permissions: {
      dashboard: false,
      projects: false,
      blog: false,
      team: false,
      clients: false,
      analytics: false,
      settings: false,
    },
    sendCopy: true,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const newData = { ...prev }

      // Handle nested properties
      if (name.includes(".")) {
        const [parent, child] = name.split(".")
        newData[parent] = { ...newData[parent], [child]: value }
      } else {
        newData[name] = value
      }

      return newData
    })
  }

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => {
      const newData = { ...prev }

      // Handle nested properties
      if (name.includes(".")) {
        const [parent, child] = name.split(".")
        newData[parent] = { ...newData[parent], [child]: checked }
      } else {
        newData[name] = checked
      }

      return newData
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Invitation sent",
      description: `An invitation has been sent to ${formData.email}.`,
    })

    setIsLoading(false)
  }

  // Predefined roles with permissions
  const handleRoleChange = (role) => {
    let permissions = { ...formData.permissions }

    switch (role) {
      case "administrator":
        permissions = {
          dashboard: true,
          projects: true,
          blog: true,
          team: true,
          clients: true,
          analytics: true,
          settings: true,
        }
        break
      case "content_editor":
        permissions = {
          dashboard: true,
          projects: false,
          blog: true,
          team: false,
          clients: false,
          analytics: true,
          settings: false,
        }
        break
      case "support_executive":
        permissions = {
          dashboard: true,
          projects: false,
          blog: false,
          team: false,
          clients: true,
          analytics: false,
          settings: false,
        }
        break
      case "web_developer":
        permissions = {
          dashboard: true,
          projects: true,
          blog: true,
          team: false,
          clients: true,
          analytics: true,
          settings: false,
        }
        break
      case "social_media":
        permissions = {
          dashboard: true,
          projects: false,
          blog: true,
          team: false,
          clients: true,
          analytics: true,
          settings: false,
        }
        break
      default:
        permissions = {
          dashboard: false,
          projects: false,
          blog: false,
          team: false,
          clients: false,
          analytics: false,
          settings: false,
        }
    }

    setFormData((prev) => ({
      ...prev,
      role,
      permissions,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Invitation Details</CardTitle>
          <CardDescription>Enter the details of the person you want to invite</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                  <Mail className="h-4 w-4" />
                </span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="rounded-l-none"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Select value={formData.role} onValueChange={(value) => handleRoleChange(value)} required>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="content_editor">Content Editor</SelectItem>
                  <SelectItem value="support_executive">Support Executive</SelectItem>
                  <SelectItem value="web_developer">Web Developer</SelectItem>
                  <SelectItem value="social_media">Social Media Manager</SelectItem>
                  <SelectItem value="custom">Custom Role</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select
                value={formData.department}
                onValueChange={(value) => handleChange({ target: { name: "department", value } })}
              >
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Invitation Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter a personal message"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permissions</CardTitle>
          <CardDescription>Select which areas this team member can access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dashboard"
                checked={formData.permissions.dashboard}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.dashboard", checked)}
              />
              <Label htmlFor="dashboard" className="font-normal">
                Dashboard
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="projects"
                checked={formData.permissions.projects}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.projects", checked)}
              />
              <Label htmlFor="projects" className="font-normal">
                Projects
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="blog"
                checked={formData.permissions.blog}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.blog", checked)}
              />
              <Label htmlFor="blog" className="font-normal">
                Blog
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="team"
                checked={formData.permissions.team}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.team", checked)}
              />
              <Label htmlFor="team" className="font-normal">
                Team
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="clients"
                checked={formData.permissions.clients}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.clients", checked)}
              />
              <Label htmlFor="clients" className="font-normal">
                Clients
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="analytics"
                checked={formData.permissions.analytics}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.analytics", checked)}
              />
              <Label htmlFor="analytics" className="font-normal">
                Analytics
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="settings"
                checked={formData.permissions.settings}
                onCheckedChange={(checked) => handleCheckboxChange("permissions.settings", checked)}
              />
              <Label htmlFor="settings" className="font-normal">
                Settings
              </Label>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="sendCopy"
              checked={formData.sendCopy}
              onCheckedChange={(checked) => handleCheckboxChange("sendCopy", checked)}
            />
            <Label htmlFor="sendCopy" className="text-sm font-normal">
              Send me a copy of this invitation
            </Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending Invitation...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" /> Send Invitation
            </span>
          )}
        </Button>
      </div>
    </form>
  )
}
