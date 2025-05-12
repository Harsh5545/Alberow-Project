"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  MessageSquare,
  FileQuestion,
  Settings,
  Menu,
  ChevronDown,
  LogOut,
  Users,
  Calendar,
  CreditCard,
  HelpCircle,
  Bell,
} from "lucide-react"

export function ClientSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [marketingOpen, setMarketingOpen] = useState(false)

  const routes = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/client-portal",
      active: pathname === "/client-portal",
    },
    {
      title: "Projects",
      icon: <FileText className="h-5 w-5" />,
      href: "/client-portal/projects",
      active: pathname === "/client-portal/projects" || pathname.startsWith("/client-portal/projects/"),
      submenu: true,
      open: projectsOpen,
      setOpen: setProjectsOpen,
      subItems: [
        {
          title: "Active Projects",
          href: "/client-portal/projects",
          active: pathname === "/client-portal/projects",
        },
        {
          title: "Project Timeline",
          href: "/client-portal/projects/timeline",
          active: pathname === "/client-portal/projects/timeline",
        },
        {
          title: "Deliverables",
          href: "/client-portal/projects/deliverables",
          active: pathname === "/client-portal/projects/deliverables",
        },
      ],
    },
    {
      title: "Analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/client-portal/analytics",
      active: pathname === "/client-portal/analytics",
    },
    {
      title: "Marketing",
      icon: <Bell className="h-5 w-5" />,
      href: "/client-portal/marketing",
      active: pathname === "/client-portal/marketing" || pathname.startsWith("/client-portal/marketing/"),
      submenu: true,
      open: marketingOpen,
      setOpen: setMarketingOpen,
      subItems: [
        {
          title: "Social Media",
          href: "/client-portal/marketing/social",
          active: pathname === "/client-portal/marketing/social",
        },
        {
          title: "SEO Performance",
          href: "/client-portal/marketing/seo",
          active: pathname === "/client-portal/marketing/seo",
        },
        {
          title: "Campaigns",
          href: "/client-portal/marketing/campaigns",
          active: pathname === "/client-portal/marketing/campaigns",
        },
      ],
    },
    {
      title: "Meetings",
      icon: <Calendar className="h-5 w-5" />,
      href: "/client-portal/meetings",
      active: pathname === "/client-portal/meetings",
    },
    {
      title: "Support",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/client-portal/support",
      active: pathname === "/client-portal/support",
    },
    {
      title: "Invoices",
      icon: <CreditCard className="h-5 w-5" />,
      href: "/client-portal/invoices",
      active: pathname === "/client-portal/invoices",
    },
    {
      title: "Resources",
      icon: <FileQuestion className="h-5 w-5" />,
      href: "/client-portal/resources",
      active: pathname === "/client-portal/resources",
    },
    {
      title: "Team",
      icon: <Users className="h-5 w-5" />,
      href: "/client-portal/team",
      active: pathname === "/client-portal/team",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/client-portal/settings",
      active: pathname === "/client-portal/settings",
    },
    {
      title: "Help & Support",
      icon: <HelpCircle className="h-5 w-5" />,
      href: "/client-portal/help",
      active: pathname === "/client-portal/help",
    },
  ]

  return (
    <>
      <aside className="hidden lg:flex h-screen w-64 flex-col fixed inset-y-0 z-50">
        <div className="py-4 border-r h-full bg-background flex flex-col">
          <div className="px-4 py-2 flex items-center border-b mb-4">
            <Link href="/client-portal" className="flex items-center gap-2">
              <div className="font-bold text-xl">Alberow</div>
              <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-full">
                Client
              </div>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-1">
              {routes.map((route, i) =>
                route.submenu ? (
                  <div key={i} className="space-y-1">
                    <Button
                      variant={route.active ? "secondary" : "ghost"}
                      className="w-full justify-between"
                      onClick={() => route.setOpen(!route.open)}
                    >
                      <span className="flex items-center">
                        {route.icon}
                        <span className="ml-2">{route.title}</span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${route.open ? "transform rotate-180" : ""}`}
                      />
                    </Button>
                    {route.open && (
                      <div className="pl-8 space-y-1">
                        {route.subItems.map((subItem, j) => (
                          <Button
                            key={j}
                            variant={subItem.active ? "secondary" : "ghost"}
                            className="w-full justify-start"
                            asChild
                          >
                            <Link href={subItem.href}>{subItem.title}</Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    key={i}
                    variant={route.active ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={route.href}>
                      {route.icon}
                      <span className="ml-2">{route.title}</span>
                    </Link>
                  </Button>
                ),
              )}
            </div>
          </ScrollArea>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">FH</div>
                <div>
                  <div className="font-medium text-sm">FashionHub</div>
                  <div className="text-xs text-muted-foreground">Client Portal</div>
                </div>
              </div>
              <ModeToggle />
            </div>
            <Button variant="ghost" className="w-full justify-start mt-4" asChild>
              <Link href="/auth/logout">
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b bg-background">
        <Link href="/client-portal" className="flex items-center gap-2">
          <div className="font-bold text-xl">Alberow</div>
          <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-full">
            Client
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <div className="py-4 h-full flex flex-col">
                <div className="px-4 py-2 flex items-center border-b mb-4">
                  <Link href="/client-portal" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                    <div className="font-bold text-xl">Alberow</div>
                    <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-full">
                      Client
                    </div>
                  </Link>
                </div>
                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-1">
                    {routes.map((route, i) =>
                      route.submenu ? (
                        <div key={i} className="space-y-1">
                          <Button
                            variant={route.active ? "secondary" : "ghost"}
                            className="w-full justify-between"
                            onClick={() => route.setOpen(!route.open)}
                          >
                            <span className="flex items-center">
                              {route.icon}
                              <span className="ml-2">{route.title}</span>
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${route.open ? "transform rotate-180" : ""}`}
                            />
                          </Button>
                          {route.open && (
                            <div className="pl-8 space-y-1">
                              {route.subItems.map((subItem, j) => (
                                <Button
                                  key={j}
                                  variant={subItem.active ? "secondary" : "ghost"}
                                  className="w-full justify-start"
                                  asChild
                                  onClick={() => setOpen(false)}
                                >
                                  <Link href={subItem.href}>{subItem.title}</Link>
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Button
                          key={i}
                          variant={route.active ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          asChild
                          onClick={() => setOpen(false)}
                        >
                          <Link href={route.href}>
                            {route.icon}
                            <span className="ml-2">{route.title}</span>
                          </Link>
                        </Button>
                      ),
                    )}
                  </div>
                </ScrollArea>
                <div className="mt-auto border-t p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">FH</div>
                    <div>
                      <div className="font-medium text-sm">FashionHub</div>
                      <div className="text-xs text-muted-foreground">Client Portal</div>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-start mt-4" asChild onClick={() => setOpen(false)}>
                    <Link href="/auth/logout">
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="lg:hidden h-16" />
    </>
  )
}
