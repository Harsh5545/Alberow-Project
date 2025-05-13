"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  FolderOpen,
  MessageSquare,
  BarChart3,
  Building2,
  Menu,
  X,
  BellRing,
  Share2,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed?: boolean
}

export function AdminSidebar({ className, isCollapsed = false }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      active: pathname === "/admin",
    },
    {
      label: "Blog",
      icon: FileText,
      href: "/admin/blog",
      active: pathname.includes("/admin/blog"),
    },
    {
      label: "Projects",
      icon: FolderOpen,
      href: "/admin/projects",
      active: pathname.includes("/admin/projects"),
    },
    {
      label: "Team",
      icon: Users,
      href: "/admin/team",
      active: pathname.includes("/admin/team"),
    },
    {
      label: "Clients",
      icon: Building2,
      href: "/admin/clients",
      active: pathname.includes("/admin/clients"),
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/admin/messages",
      active: pathname.includes("/admin/messages"),
    },
    {
      label: "Marketing",
      icon: Share2,
      href: "/admin/marketing",
      active: pathname.includes("/admin/marketing"),
    },
    {
      label: "Notifications",
      icon: BellRing,
      href: "/admin/notifications",
      active: pathname.includes("/admin/notifications"),
    },
    {
      label: "Files",
      icon: FolderOpen,
      href: "/admin/files",
      active: pathname.includes("/admin/files"),
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      active: pathname.includes("/admin/analytics"),
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      active: pathname.includes("/admin/settings"),
    },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={toggleSidebar}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 border-r bg-background transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed && "w-[70px]",
          className,
        )}
      >
        <div className="flex h-14 items-center px-4 border-b">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            {!isCollapsed && (
              <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Alberow
              </div>
            )}
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)]">
          <div className="px-3 py-4">
            <nav className="flex flex-col gap-1">
              {routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    route.active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground/70 hover:text-foreground",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {!isCollapsed && <span>{route.label}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </>
  )
}
