"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Mock data for roles
const mockRoles = [
  {
    id: 1,
    name: "Administrator",
    description: "Full access to all features and settings",
    users: 2,
    permissions: {
      dashboard: { view: true, edit: true },
      projects: { view: true, edit: true, create: true, delete: true },
      blog: { view: true, edit: true, create: true, delete: true },
      team: { view: true, edit: true, create: true, delete: true },
      clients: { view: true, edit: true, create: true, delete: true },
      analytics: { view: true, edit: true },
      settings: { view: true, edit: true },
    },
  },
  {
    id: 2,
    name: "Content Editor",
    description: "Manage blog posts and content",
    users: 5,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: false, create: false, delete: false },
      blog: { view: true, edit: true, create: true, delete: true },
      team: { view: false, edit: false, create: false, delete: false },
      clients: { view: false, edit: false, create: false, delete: false },
      analytics: { view: true, edit: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 3,
    name: "Support Executive",
    description: "Handle customer queries and support tickets",
    users: 8,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: false, edit: false, create: false, delete: false },
      blog: { view: false, edit: false, create: false, delete: false },
      team: { view: false, edit: false, create: false, delete: false },
      clients: { view: true, edit: false, create: false, delete: false },
      analytics: { view: false, edit: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 4,
    name: "Web Development Team",
    description: "Access to web development projects",
    users: 6,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: true, create: true, delete: false },
      blog: { view: true, edit: false, create: false, delete: false },
      team: { view: true, edit: false, create: false, delete: false },
      clients: { view: true, edit: false, create: false, delete: false },
      analytics: { view: true, edit: false },
      settings: { view: false, edit: false },
    },
  },
  {
    id: 5,
    name: "Social Media Team",
    description: "Manage social media content and analytics",
    users: 4,
    permissions: {
      dashboard: { view: true, edit: false },
      projects: { view: true, edit: false, create: false, delete: false },
      blog: { view: true, edit: true, create: true, delete: false },
      team: { view: false, edit: false, create: false, delete: false },
      clients: { view: true, edit: false, create: false, delete: false },
      analytics: { view: true, edit: false },
      settings: { view: false, edit: false },
    },
  },
]

export function RolesTable() {
  const [roles, setRoles] = useState(mockRoles)

  const handleDelete = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id))
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Users</TableHead>
            <TableHead>Dashboard</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Blog</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Clients</TableHead>
            <TableHead>Analytics</TableHead>
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
                  <span>{role.users}</span>
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
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">View:</span>
                    {role.permissions.clients.view ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <X className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Edit:</span>
                    {role.permissions.clients.edit ? (
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
                    {role.permissions.analytics.view ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <X className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Edit:</span>
                    {role.permissions.analytics.edit ? (
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
                <div className="flex items-center">
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
                        <span>Manage Users</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Role</span>
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the role and could affect users
                              assigned to it.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(role.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
