import type React from "react"
import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"


export const metadata: Metadata = {
  title: "Admin Dashboard - Alberow",
  description: "Admin dashboard for Alberow agency",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className="min-h-screen">
      <AdminSidebar />
      <div className="md:ml-64">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
