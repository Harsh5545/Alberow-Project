"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, User, MessageSquare, Calendar, HelpCircle, LogOut } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ClientHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="border-b border-border/50 p-4 bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/client-portal" className="flex items-center gap-2">
            <div className="font-bold text-xl">Alberow</div>
            <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-full">
              Client Portal
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="/client-portal" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/client-portal/projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/client-portal/analytics" className="text-sm font-medium hover:text-primary">
              Analytics
            </Link>
            <Link href="/client-portal/support" className="text-sm font-medium hover:text-primary">
              Support
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white">
              3
            </Badge>
          </Button>

          <Button variant="outline" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">FH</div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">FashionHub</p>
                  <p className="text-xs text-muted-foreground">client@fashionhub.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Schedule Meeting</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
