"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Save, Upload, User, Mail, Phone, Globe, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function AddClientPage() {
  const [clientName, setClientName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("")
  const [industry, setIndustry] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [notes, setNotes] = useState("")
  const [logo, setLogo] = useState<string | null>(null)
  const [sendWelcomeEmail, setSendWelcomeEmail] = useState(true)
  const [createPortalAccount, setCreatePortalAccount] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload this file to your server
      // and get back a URL to use
      const fakeUrl = URL.createObjectURL(file)
      setLogo(fakeUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would send this data to your backend
      console.log({
        clientName,
        companyName,
        email,
        phone,
        website,
        address,
        city,
        state,
        zipCode,
        country,
        industry,
        companySize,
        notes,
        logo,
        sendWelcomeEmail,
        createPortalAccount,
      })

      alert("Client added successfully!")
      // Redirect to clients list or clear form
    } catch (error) {
      console.error("Error adding client:", error)
      alert("Error adding client. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Client</h1>
          <p className="text-muted-foreground">Create a new client record and set up their account</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/admin/clients">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Clients
          </Link>
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Client Details</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the client's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="company-name">Company Name *</Label>
                    <Input
                      id="company-name"
                      placeholder="Enter company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="website">Website</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <Globe className="h-4 w-4" />
                      </span>
                      <Input
                        id="website"
                        placeholder="https://example.com"
                        className="rounded-l-none"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select value={companySize} onValueChange={setCompanySize}>
                      <SelectTrigger id="company-size">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Company Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center w-32 h-32">
                      {logo ? (
                        <div className="relative w-full h-full">
                          <img
                            src={logo || "/placeholder.svg"}
                            alt="Company logo"
                            className="w-full h-full object-contain"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-0 right-0 h-6 w-6 bg-background/80"
                            onClick={() => setLogo(null)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <input
                            type="file"
                            id="logo-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleLogoUpload}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-xs"
                            onClick={() => document.getElementById("logo-upload")?.click()}
                          >
                            Upload
                          </Button>
                        </>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Upload a company logo (optional)</p>
                      <p>Recommended size: 200x200px</p>
                      <p>Max file size: 2MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter any additional notes about this client"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
                <CardDescription>Enter the client's address details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <Input
                      id="address"
                      placeholder="Enter street address"
                      className="rounded-l-none"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input
                      id="state"
                      placeholder="Enter state or province"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zip-code">Zip/Postal Code</Label>
                    <Input
                      id="zip-code"
                      placeholder="Enter zip or postal code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Contact</CardTitle>
                <CardDescription>Enter the primary contact person's information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="client-name">Contact Name *</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <User className="h-4 w-4" />
                      </span>
                      <Input
                        id="client-name"
                        placeholder="Enter contact name"
                        className="rounded-l-none"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="Enter job title" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="space-y-2 flex-1">
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

                  <div className="space-y-2 flex-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <Phone className="h-4 w-4" />
                      </span>
                      <Input
                        id="phone"
                        placeholder="Enter phone number"
                        className="rounded-l-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="decision-maker" />
                  <Label htmlFor="decision-maker">This contact is a decision maker</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Contacts</CardTitle>
                <CardDescription>Add other contacts from this company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <p className="text-sm text-muted-foreground text-center py-8">No additional contacts added yet</p>
                  </div>

                  <Button type="button" variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Add Another Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Portal Settings</CardTitle>
                <CardDescription>Configure client portal access and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Create Client Portal Account</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically create a client portal account for this client
                    </p>
                  </div>
                  <Switch checked={createPortalAccount} onCheckedChange={setCreatePortalAccount} id="create-portal" />
                </div>

                {createPortalAccount && (
                  <div className="space-y-4 border-t pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="portal-access">Portal Access Level</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger id="portal-access">
                          <SelectValue placeholder="Select access level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="limited">Limited Access</SelectItem>
                          <SelectItem value="standard">Standard Access</SelectItem>
                          <SelectItem value="full">Full Access</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Accessible Modules</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="module-projects" defaultChecked />
                          <Label htmlFor="module-projects">Projects</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="module-invoices" defaultChecked />
                          <Label htmlFor="module-invoices">Invoices</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="module-files" defaultChecked />
                          <Label htmlFor="module-files">Files</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="module-support" defaultChecked />
                          <Label htmlFor="module-support">Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="module-analytics" />
                          <Label htmlFor="module-analytics">Analytics</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="module-marketing" />
                          <Label htmlFor="module-marketing">Marketing</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Preferences</CardTitle>
                <CardDescription>Set up communication settings for this client</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Send Welcome Email</p>
                    <p className="text-sm text-muted-foreground">
                      Send an automated welcome email when this client is created
                    </p>
                  </div>
                  <Switch checked={sendWelcomeEmail} onCheckedChange={setSendWelcomeEmail} id="welcome-email" />
                </div>

                <div className="space-y-2">
                  <Label>Email Notifications</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="notify-projects" defaultChecked />
                      <Label htmlFor="notify-projects">Project Updates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notify-invoices" defaultChecked />
                      <Label htmlFor="notify-invoices">Invoice Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notify-marketing" defaultChecked />
                      <Label htmlFor="notify-marketing">Marketing Emails</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notify-newsletter" />
                      <Label htmlFor="notify-newsletter">Newsletter</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="communication-notes">Communication Notes</Label>
                  <Textarea
                    id="communication-notes"
                    placeholder="Enter any specific communication preferences or notes"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 mt-6">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/clients">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                Adding Client...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Add Client
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

// Missing component for the X icon
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
