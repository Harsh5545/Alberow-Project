"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ExternalLink, Edit, Trash2, Mail, Phone } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

// Mock data for clients
const mockClients = [
  {
    id: 1,
    name: "FashionHub",
    logo: "/placeholder.svg?height=40&width=40",
    initials: "FH",
    contactName: "Emma Johnson",
    email: "emma@fashionhub.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    projects: 3,
    totalSpent: 12500,
    lastActivity: "2023-11-15",
  },
  {
    id: 2,
    name: "HealthTrack",
    logo: "/placeholder.svg?height=40&width=40",
    initials: "HT",
    contactName: "Michael Chen",
    email: "michael@healthtrack.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    projects: 1,
    totalSpent: 8000,
    lastActivity: "2023-12-05",
  },
  {
    id: 3,
    name: "GreenTech",
    logo: "/placeholder.svg?height=40&width=40",
    initials: "GT",
    contactName: "Sarah Miller",
    email: "sarah@greentech.com",
    phone: "+1 (555) 345-6789",
    status: "Completed",
    projects: 2,
    totalSpent: 15000,
    lastActivity: "2023-10-20",
  },
  {
    id: 4,
    name: "SportsFit",
    logo: "/placeholder.svg?height=40&width=40",
    initials: "SF",
    contactName: "David Lee",
    email: "david@sportsfit.com",
    phone: "+1 (555) 456-7890",
    status: "Active",
    projects: 1,
    totalSpent: 7500,
    lastActivity: "2023-12-10",
  },
  {
    id: 5,
    name: "TechInnovate",
    logo: "/placeholder.svg?height=40&width=40",
    initials: "TI",
    contactName: "Olivia Garcia",
    email: "olivia@techinnovate.com",
    phone: "+1 (555) 567-8901",
    status: "Potential",
    projects: 0,
    totalSpent: 0,
    lastActivity: "2023-12-15",
  },
]

export function ClientsList() {
  const [clients, setClients] = useState(mockClients)

  const handleDelete = (id: number) => {
    setClients(clients.filter((client) => client.id !== id))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Total Spent</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                    <AvatarFallback>{client.initials}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{client.name}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{client.contactName}</div>
                  <div className="text-xs text-muted-foreground">{client.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    client.status === "Active"
                      ? "border-green-500 text-green-500"
                      : client.status === "Completed"
                        ? "border-blue-500 text-blue-500"
                        : "border-amber-500 text-amber-500"
                  }
                >
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell>{client.projects}</TableCell>
              <TableCell>{formatCurrency(client.totalSpent)}</TableCell>
              <TableCell>{formatDate(client.lastActivity)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span>View Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the client and remove their
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(client.id)}
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
