import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { NotificationSystem } from "@/components/notification-system"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background flex">
        <AdminSidebar />
        <div className="flex-1 flex flex-col lg:ml-64 ml-0">
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
        <NotificationSystem />
      </div>
    </ThemeProvider>
  )
}
