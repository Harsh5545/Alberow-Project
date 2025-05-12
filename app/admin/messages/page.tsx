import type { Metadata } from "next"
import { MessagesSidebar } from "@/components/admin/messages/messages-sidebar"
import { MessagesChat } from "@/components/admin/messages/messages-chat"

export const metadata: Metadata = {
  title: "Team Messages | Admin Dashboard",
  description: "Team communication platform",
}

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Messages</h1>
        <p className="text-muted-foreground">Communicate with your team members in real-time</p>
      </div>

      <div className="border rounded-lg overflow-hidden bg-background h-[calc(100vh-220px)] flex">
        <MessagesSidebar />
        <MessagesChat />
      </div>
    </div>
  )
}
