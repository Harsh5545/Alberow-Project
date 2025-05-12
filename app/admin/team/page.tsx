import type { Metadata } from "next"
import { TeamMembers } from "@/components/admin/team/team-members"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamRoles } from "@/components/admin/team/team-roles"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Team Management | Admin Dashboard",
  description: "Manage your team members and roles",
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage your team members, roles, and permissions</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> Invite Member
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Input placeholder="Search team members..." className="max-w-xs" />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="management">Management</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="members" className="w-full">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="mt-4">
          <TeamMembers />
        </TabsContent>
        <TabsContent value="roles" className="mt-4">
          <TeamRoles />
        </TabsContent>
      </Tabs>
    </div>
  )
}
