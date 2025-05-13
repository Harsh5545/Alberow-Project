import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EmailEditor from "@/components/admin/marketing/email-editor"

export const metadata: Metadata = {
  title: "Email Editor - Alberow Admin",
  description: "Create and send email campaigns",
}

export default function EmailEditorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Email Editor</h1>
        <p className="text-muted-foreground">Create and send professional email campaigns to your audience</p>
      </div>

      <Card className="h-[calc(100vh-220px)]">
        <CardHeader className="pb-3">
          <CardTitle>New Email Campaign</CardTitle>
          <CardDescription>Design your email, add recipients, and schedule sending</CardDescription>
        </CardHeader>
        <CardContent className="h-[calc(100%-80px)]">
          <EmailEditor />
        </CardContent>
      </Card>
    </div>
  )
}
