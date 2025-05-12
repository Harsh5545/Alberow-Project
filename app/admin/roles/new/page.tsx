"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function NewRolePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    router.push("/admin/roles")
  }

  const modules = [
    {
      name: "Dashboard",
      permissions: ["View Dashboard", "Edit Dashboard Widgets"],
    },
    {
      name: "Projects",
      permissions: ["View Projects", "Create Projects", "Edit Projects", "Delete Projects"],
    },
    {
      name: "Blog",
      permissions: ["View Blog Posts", "Create Blog Posts", "Edit Blog Posts", "Delete Blog Posts"],
    },
    {
      name: "Team",
      permissions: ["View Team Members", "Add Team Members", "Edit Team Members", "Delete Team Members"],
    },
    {
      name: "Clients",
      permissions: ["View Clients", "Add Clients", "Edit Clients", "Delete Clients"],
    },
    {
      name: "Analytics",
      permissions: ["View Analytics", "Export Analytics"],
    },
    {
      name: "Settings",
      permissions: ["View Settings", "Edit Settings"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/admin/roles">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create New Role</h1>
          <p className="text-muted-foreground mt-2">Define a new role with specific permissions.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Role Information</CardTitle>
              <CardDescription>Basic information about the role</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Role Name</Label>
                <Input id="name" placeholder="e.g., Content Manager" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the purpose and responsibilities of this role"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
              <CardDescription>Define what users with this role can access and modify</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                  {modules.map((module) => (
                    <TabsTrigger key={module.name} value={module.name.toLowerCase()}>
                      {module.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {modules.map((module) => (
                  <TabsContent key={module.name} value={module.name.toLowerCase()} className="space-y-4 pt-4">
                    {module.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-3">
                        <Label htmlFor={`${module.name}-${index}`} className="flex-1">
                          {permission}
                        </Label>
                        <Switch id={`${module.name}-${index}`} />
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/admin/roles">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
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
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Create Role
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  )
}
