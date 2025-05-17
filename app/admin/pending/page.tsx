"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  FileText,
  MessageSquare,
  Calendar,
  User,
  Briefcase,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PendingItemsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  // Mock data for pending items
  const pendingItems = [
    {
      id: "1",
      title: "Website Redesign Project",
      type: "project",
      client: "Acme Corporation",
      assignedTo: "John Doe",
      status: "pending_approval",
      priority: "high",
      dueDate: "2023-06-15",
      createdAt: "2023-05-28",
    },
    {
      id: "2",
      title: "SEO Audit Report",
      type: "document",
      client: "TechStart Inc.",
      assignedTo: "Jane Smith",
      status: "pending_review",
      priority: "medium",
      dueDate: "2023-06-10",
      createdAt: "2023-05-30",
    },
    {
      id: "3",
      title: "Marketing Campaign Proposal",
      type: "document",
      client: "Global Solutions",
      assignedTo: "Robert Johnson",
      status: "pending_approval",
      priority: "medium",
      dueDate: "2023-06-20",
      createdAt: "2023-05-25",
    },
    {
      id: "4",
      title: "New Client Onboarding",
      type: "client",
      client: "Innovative Systems",
      assignedTo: "Emily Davis",
      status: "pending_info",
      priority: "high",
      dueDate: "2023-06-05",
      createdAt: "2023-06-01",
    },
    {
      id: "5",
      title: "Content Calendar Approval",
      type: "document",
      client: "Media Group",
      assignedTo: "Michael Brown",
      status: "pending_review",
      priority: "low",
      dueDate: "2023-06-25",
      createdAt: "2023-05-20",
    },
    {
      id: "6",
      title: "Logo Design Feedback",
      type: "project",
      client: "Startup Ventures",
      assignedTo: "Sarah Wilson",
      status: "pending_client",
      priority: "medium",
      dueDate: "2023-06-12",
      createdAt: "2023-05-29",
    },
    {
      id: "7",
      title: "Monthly Analytics Report",
      type: "document",
      client: "E-commerce Plus",
      assignedTo: "David Miller",
      status: "pending_review",
      priority: "medium",
      dueDate: "2023-06-08",
      createdAt: "2023-06-02",
    },
    {
      id: "8",
      title: "Social Media Strategy",
      type: "project",
      client: "Fashion Forward",
      assignedTo: "Lisa Taylor",
      status: "pending_approval",
      priority: "high",
      dueDate: "2023-06-18",
      createdAt: "2023-05-27",
    },
  ]

  // Filter items based on search query and filters
  const filteredItems = pendingItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "pending_approval" && item.status === "pending_approval") ||
      (statusFilter === "pending_review" && item.status === "pending_review") ||
      (statusFilter === "pending_client" && item.status === "pending_client") ||
      (statusFilter === "pending_info" && item.status === "pending_info")

    const matchesType = typeFilter === "all" || item.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(filteredItems.map((item) => item.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId])
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId))
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending_approval":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-300"
          >
            Pending Approval
          </Badge>
        )
      case "pending_review":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-300"
          >
            Pending Review
          </Badge>
        )
      case "pending_client":
        return (
          <Badge
            variant="outline"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-300"
          >
            Pending Client
          </Badge>
        )
      case "pending_info":
        return (
          <Badge
            variant="outline"
            className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-300"
          >
            Pending Info
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "project":
        return <Briefcase className="h-4 w-4 text-blue-500" />
      case "document":
        return <FileText className="h-4 w-4 text-green-500" />
      case "client":
        return <User className="h-4 w-4 text-purple-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-300">High</Badge>
      case "medium":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-300">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300">
            Low
          </Badge>
        )
      default:
        return <Badge>Normal</Badge>
    }
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pending Items</h1>
          <p className="text-muted-foreground">Manage items awaiting review, approval, or additional information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Set Reminders
          </Button>
          <Button>
            <CheckCircle className="mr-2 h-4 w-4" />
            Approve Selected
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="approval">Pending Approval</TabsTrigger>
          <TabsTrigger value="review">Pending Review</TabsTrigger>
          <TabsTrigger value="client">Pending Client</TabsTrigger>
          <TabsTrigger value="info">Pending Info</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search pending items..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <div className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Status</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending_approval">Pending Approval</SelectItem>
                      <SelectItem value="pending_review">Pending Review</SelectItem>
                      <SelectItem value="pending_client">Pending Client</SelectItem>
                      <SelectItem value="pending_info">Pending Info</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[180px]">
                      <div className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Type</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="project">Projects</SelectItem>
                      <SelectItem value="document">Documents</SelectItem>
                      <SelectItem value="client">Clients</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                              onCheckedChange={handleSelectAll}
                            />
                            <span>Item</span>
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">
                          <div className="flex items-center space-x-1">
                            <span>Status</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium">
                          <div className="flex items-center space-x-1">
                            <span>Priority</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium">
                          <div className="flex items-center space-x-1">
                            <span>Due Date</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Assigned To</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          >
                            <td className="p-4 align-middle">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  checked={selectedItems.includes(item.id)}
                                  onCheckedChange={(checked) => handleSelectItem(item.id, checked as boolean)}
                                />
                                <div>
                                  <div className="font-medium">{item.title}</div>
                                  <div className="text-xs text-muted-foreground">{item.client}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center">
                                {getTypeIcon(item.type)}
                                <span className="ml-2 capitalize">{item.type}</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">{getStatusBadge(item.status)}</td>
                            <td className="p-4 align-middle">{getPriorityBadge(item.priority)}</td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{new Date(item.dueDate).toLocaleDateString()}</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={item.assignedTo} />
                                  <AvatarFallback>
                                    {item.assignedTo
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{item.assignedTo}</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <CheckCircle className="mr-2 h-4 w-4" />
                                      <span>Approve</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <XCircle className="mr-2 h-4 w-4" />
                                      <span>Reject</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <MessageSquare className="mr-2 h-4 w-4" />
                                      <span>Request Changes</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      <span>Delete</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-muted-foreground">
                            No pending items found matching your filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredItems.length}</strong> of <strong>{pendingItems.length}</strong> items
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="approval" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approval</CardTitle>
              <CardDescription>Items waiting for your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingItems
                  .filter((item) => item.status === "pending_approval")
                  .map((item) => (
                    <div key={item.id} className="flex items-start justify-between border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                          {getTypeIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.client}</p>
                          <div className="flex items-center mt-2 space-x-2">
                            {getStatusBadge(item.status)}
                            {getPriorityBadge(item.priority)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(item.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Review</CardTitle>
              <CardDescription>Items that need your review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingItems
                  .filter((item) => item.status === "pending_review")
                  .map((item) => (
                    <div key={item.id} className="flex items-start justify-between border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">{getTypeIcon(item.type)}</div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.client}</p>
                          <div className="flex items-center mt-2 space-x-2">
                            {getStatusBadge(item.status)}
                            {getPriorityBadge(item.priority)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(item.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Comment
                          </Button>
                          <Button size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="client" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Client</CardTitle>
              <CardDescription>Items waiting for client action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingItems
                  .filter((item) => item.status === "pending_client")
                  .map((item) => (
                    <div key={item.id} className="flex items-start justify-between border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                          {getTypeIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.client}</p>
                          <div className="flex items-center mt-2 space-x-2">
                            {getStatusBadge(item.status)}
                            {getPriorityBadge(item.priority)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(item.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Reminder
                          </Button>
                          <Button size="sm">
                            <Phone className="mr-2 h-4 w-4" />
                            Contact Client
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Information</CardTitle>
              <CardDescription>Items waiting for additional information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingItems
                  .filter((item) => item.status === "pending_info")
                  .map((item) => (
                    <div key={item.id} className="flex items-start justify-between border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full">
                          {getTypeIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.client}</p>
                          <div className="flex items-center mt-2 space-x-2">
                            {getStatusBadge(item.status)}
                            {getPriorityBadge(item.priority)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Due: {new Date(item.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Flag Urgent
                          </Button>
                          <Button size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Update Info
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing component for the Phone icon
const Phone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)
