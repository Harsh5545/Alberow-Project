import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash2, Users, Check, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const roles = [
  {
    id: 1,
    name: "Administrator",
    description: "Full access to all features and settings",
    members: 2,
    permissions: {
      dashboard: { view: true, edit: true },
      projects: { view: true, edit: true, create: true, delete: true },
      blog: { view: true, edit: true, create: true, delete: true },
      team: { view: true, edit: true, create: true, delete: true },
      settings: { view: true, edit: true },
    },
  },
  {
    id: 2,
    name: "Project Manager",
    description: "Manage projects and team members",
    members: 3,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: true, create: true, delete: false },
      blog: { view: true, edit: true, create: true, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 3,
    name: "Developer",
    description: "Access to development-related features",
    members: 5,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: true, create: false, delete: false },
      blog: { view: true, edit: false, create: false, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 4,
    name: "Designer",
    description: "Access to design-related features",
    members: 2,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: true, create: false, delete: false },
      blog: { view: true, edit: true, create: false, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 5,
    name: "Marketing",
    description: "Access to marketing-related features",
    members: 3,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: false, create: false, delete: false },
      blog: { view: true, edit: true, create: true, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 6,
    name: "Viewer",
    description: "Read-only access to content",
    members: 4,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: false, create: false, delete: false },
      blog: { view: true, edit: false, create: false, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      settings: { view: false, edit: false },
    },
  },
]

export function TeamRoles() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Dashboard</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Blog</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Settings</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{role.name}</div>
                    <div className="text-xs text-muted-foreground">{role.description}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{role.members}</span>
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">View:</span>
                      {role.permissions.dashboard.view ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Edit:</span>
                      {role.permissions.dashboard.edit ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">View:</span>
                      {role.permissions.projects.view ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Edit:</span>
                      {role.permissions.projects.edit ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Create:</span>
                      {role.permissions.projects.create ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Delete:</span>
                      {role.permissions.projects.delete ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">View:</span>
                      {role.permissions.blog.view ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Edit:</span>
                      {role.permissions.blog.edit ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Create:</span>
                      {role.permissions.blog.create ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Delete:</span>
                      {role.permissions.blog.delete ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">View:</span>
                      {role.permissions.team.view ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Edit:</span>
                      {role.permissions.team.edit ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Create:</span>
                      {role.permissions.team.create ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Delete:</span>
                      {role.permissions.team.delete ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">View:</span>
                      {role.permissions.settings.view ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Edit:</span>
                      {role.permissions.settings.edit ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit Role</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Manage Members</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete Role</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
