"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/mode-toggle"
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  MessageSquare,
  BarChart3,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  Bell,
  Briefcase,
  FileImage,
  UserPlus,
  ShieldCheck,
  Megaphone,
  X,
} from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setCollapsed(true)
      }
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    } else {
      setCollapsed(!collapsed)
    }
  }

  const isActive = (path: string) => {
    if (path === "/admin" && pathname === "/admin") {
      return true
    }
    if (path !== "/admin" && pathname.startsWith(path)) {
      return true
    }
    return false
  }

  const sidebarItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Blog", href: "/admin/blog", icon: FileText },
    { name: "Team", href: "/admin/team", icon: Users },
    { name: "Clients", href: "/admin/clients", icon: UserPlus },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Marketing", href: "/admin/marketing", icon: Megaphone },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Files", href: "/admin/files", icon: FileImage },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
    { name: "Roles", href: "/admin/roles", icon: ShieldCheck },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
        aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-background border-r transition-all duration-300 ${
          collapsed && !mobileOpen ? "w-[70px]" : "w-64"
        } ${isMobile && !mobileOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-4 border-b">
            {!collapsed || mobileOpen ? (
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/admin"
                  className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Alberow
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:flex hidden">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:flex hidden">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>

          <ScrollArea className="flex-1 py-2">
            <nav className="px-2 space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-2 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  } ${collapsed && !mobileOpen ? "justify-center" : ""}`}
                >
                  <item.icon className={`h-5 w-5 ${isActive(item.href) ? "text-primary" : ""}`} />
                  {(!collapsed || mobileOpen) && <span className="ml-3 text-sm font-medium">{item.name}</span>}
                </Link>
              ))}
            </nav>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              {!collapsed || mobileOpen ? (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">admin@alberow.com</p>
                    </div>
                  </div>
                  <ModeToggle />
                </>
              ) : (
                <div className="w-full flex justify-center">
                  <ModeToggle />
                </div>
              )}
            </div>

            {(!collapsed || mobileOpen) && (
              <Button variant="outline" className="w-full mt-4">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
