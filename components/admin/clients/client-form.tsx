"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, Save, User, Mail, Phone, Building, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ClientForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    logo: null,
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Primary Contact
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactPosition: "",

    // Account Setup
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    sendCredentials: true,

    // Services & Access
    services: {
      webDevelopment: false,
      seoOptimization: false,
      socialMediaMarketing: false,
      contentCreation: false,
      uiUxDesign: false,
      applicationDevelopment: false,
    },
    accessLevel: "basic", // basic, standard, premium

    // Billing Information
    billingName: "",
    billingEmail: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "",
    paymentMethod: "invoice", // invoice, creditCard, bankTransfer
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

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Client created successfully",
      description: `${formData.companyName} has been added to your clients.`,
    })

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="company" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="services">Services & Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Enter the client's company details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Company Logo" />
                    <AvatarFallback>
                      <Building className="h-12 w-12 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                          <Globe className="h-4 w-4" />
                        </span>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="www.example.com"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => handleChange({ target: { name: "industry", value } })}
                      >
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => handleChange({ target: { name: "companySize", value } })}
                      >
                        <SelectTrigger id="companySize">
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
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the company"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State/Province"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip/Postal Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip/Postal Code"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleChange({ target: { name: "country", value } })}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Primary Contact</CardTitle>
              <CardDescription>Enter the main contact person's information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                      <User className="h-4 w-4" />
                    </span>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPosition">Position/Title</Label>
                  <Input
                    id="contactPosition"
                    name="contactPosition"
                    value={formData.contactPosition}
                    onChange={handleChange}
                    placeholder="e.g. Marketing Director"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                      <Mail className="h-4 w-4" />
                    </span>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                      <Phone className="h-4 w-4" />
                    </span>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Setup</CardTitle>
              <CardDescription>Create client portal access credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Login email address"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="sendCredentials"
                  checked={formData.sendCredentials}
                  onCheckedChange={(checked) => handleCheckboxChange("sendCredentials", checked)}
                />
                <Label htmlFor="sendCredentials" className="text-sm font-normal">
                  Send login credentials to client's email
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for this client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for this client account</p>
                </div>
                <Switch
                  checked={formData.twoFactorAuth}
                  onCheckedChange={(checked) => handleCheckboxChange("twoFactorAuth", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Password Expiration</Label>
                  <p className="text-sm text-muted-foreground">Require password change every 90 days</p>
                </div>
                <Switch
                  checked={formData.passwordExpiration}
                  onCheckedChange={(checked) => handleCheckboxChange("passwordExpiration", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Restriction</Label>
                  <p className="text-sm text-muted-foreground">Limit access to specific IP addresses</p>
                </div>
                <Switch
                  checked={formData.ipRestriction}
                  onCheckedChange={(checked) => handleCheckboxChange("ipRestriction", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Services & Access</CardTitle>
              <CardDescription>Select services and access level for this client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Label>Services</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="webDevelopment"
                      checked={formData.services.webDevelopment}
                      onCheckedChange={(checked) => handleCheckboxChange("services.webDevelopment", checked)}
                    />
                    <Label htmlFor="webDevelopment" className="font-normal">
                      Web Development
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="seoOptimization"
                      checked={formData.services.seoOptimization}
                      onCheckedChange={(checked) => handleCheckboxChange("services.seoOptimization", checked)}
                    />
                    <Label htmlFor="seoOptimization" className="font-normal">
                      SEO Optimization
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="socialMediaMarketing"
                      checked={formData.services.socialMediaMarketing}
                      onCheckedChange={(checked) => handleCheckboxChange("services.socialMediaMarketing", checked)}
                    />
                    <Label htmlFor="socialMediaMarketing" className="font-normal">
                      Social Media Marketing
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="contentCreation"
                      checked={formData.services.contentCreation}
                      onCheckedChange={(checked) => handleCheckboxChange("services.contentCreation", checked)}
                    />
                    <Label htmlFor="contentCreation" className="font-normal">
                      Content Creation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="uiUxDesign"
                      checked={formData.services.uiUxDesign}
                      onCheckedChange={(checked) => handleCheckboxChange("services.uiUxDesign", checked)}
                    />
                    <Label htmlFor="uiUxDesign" className="font-normal">
                      UI/UX Design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="applicationDevelopment"
                      checked={formData.services.applicationDevelopment}
                      onCheckedChange={(checked) => handleCheckboxChange("services.applicationDevelopment", checked)}
                    />
                    <Label htmlFor="applicationDevelopment" className="font-normal">
                      Application Development
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessLevel">Access Level</Label>
                <Select
                  value={formData.accessLevel}
                  onValueChange={(value) => handleChange({ target: { name: "accessLevel", value } })}
                >
                  <SelectTrigger id="accessLevel">
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic - View only</SelectItem>
                    <SelectItem value="standard">Standard - View and comment</SelectItem>
                    <SelectItem value="premium">Premium - Full access</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-1">
                  Determines what features and data the client can access in their portal
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Set up billing details for this client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingName">Billing Name</Label>
                  <Input
                    id="billingName"
                    name="billingName"
                    value={formData.billingName}
                    onChange={handleChange}
                    placeholder="Name on invoices"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingEmail">Billing Email</Label>
                  <Input
                    id="billingEmail"
                    name="billingEmail"
                    type="email"
                    value={formData.billingEmail}
                    onChange={handleChange}
                    placeholder="Email for invoices"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="billingAddress">Billing Address</Label>
                <Input
                  id="billingAddress"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  placeholder="Billing street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City</Label>
                  <Input
                    id="billingCity"
                    name="billingCity"
                    value={formData.billingCity}
                    onChange={handleChange}
                    placeholder="City"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingState">State/Province</Label>
                  <Input
                    id="billingState"
                    name="billingState"
                    value={formData.billingState}
                    onChange={handleChange}
                    placeholder="State/Province"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingZipCode">Zip/Postal Code</Label>
                  <Input
                    id="billingZipCode"
                    name="billingZipCode"
                    value={formData.billingZipCode}
                    onChange={handleChange}
                    placeholder="Zip/Postal Code"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCountry">Country</Label>
                  <Select
                    value={formData.billingCountry}
                    onValueChange={(value) => handleChange({ target: { name: "billingCountry", value } })}
                  >
                    <SelectTrigger id="billingCountry">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Preferred Payment Method</Label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleChange({ target: { name: "paymentMethod", value } })}
                >
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="invoice">Invoice (Net 30)</SelectItem>
                    <SelectItem value="creditCard">Credit Card</SelectItem>
                    <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

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
              Creating Client...
            </span>
          ) : (
            <span className="flex items-center">
              <Save className="mr-2 h-4 w-4" /> Create Client
            </span>
          )}
        </Button>
      </div>
    </form>
  )
}
