"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  ExternalLink,
  Edit,
  Trash2,
  UserPlus,
  Building,
  Users,
  Clock,
  FileText,
  BarChart2,
  MessageSquare,
  Star,
  StarOff,
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
import Link from "next/link"

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [industryFilter, setIndustryFilter] = useState("all")

  // Mock data for clients
  const clients = [
    {
      id: "1",
      name: "Acme Corporation",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Technology",
      contactName: "John Smith",
      contactEmail: "john@acmecorp.com",
      contactPhone: "+1 (555) 123-4567",
      status: "active",
      projects: 3,
      lastActivity: "2023-06-01",
      totalSpent: 15000,
      isFavorite: true,
    },
    {
      id: "2",
      name: "Global Enterprises",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Finance",
      contactName: "Sarah Johnson",
      contactEmail: "sarah@globalent.com",
      contactPhone: "+1 (555) 234-5678",
      status: "active",
      projects: 2,
      lastActivity: "2023-05-28",
      totalSpent: 28500,
      isFavorite: false,
    },
    {
      id: "3",
      name: "TechStart Inc.",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Technology",
      contactName: "Michael Brown",
      contactEmail: "michael@techstart.com",
      contactPhone: "+1 (555) 345-6789",
      status: "inactive",
      projects: 1,
      lastActivity: "2023-04-15",
      totalSpent: 7500,
      isFavorite: true,
    },
    {
      id: "4",
      name: "Creative Solutions",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Marketing",
      contactName: "Emily Davis",
      contactEmail: "emily@creativesol.com",
      contactPhone: "+1 (555) 456-7890",
      status: "active",
      projects: 4,
      lastActivity: "2023-05-30",
      totalSpent: 32000,
      isFavorite: false,
    },
    {
      id: "5",
      name: "Innovative Systems",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Healthcare",
      contactName: "David Wilson",
      contactEmail: "david@innovsys.com",
      contactPhone: "+1 (555) 567-8901",
      status: "pending",
      projects: 0,
      lastActivity: "2023-06-02",
      totalSpent: 0,
      isFavorite: false,
    },
    {
      id: "6",
      name: "Retail Dynamics",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Retail",
      contactName: "Jessica Taylor",
      contactEmail: "jessica@retaildyn.com",
      contactPhone: "+1 (555) 678-9012",
      status: "active",
      projects: 2,
      lastActivity: "2023-05-25",
      totalSpent: 18500,
      isFavorite: true,
    },
    {
      id: "7",
      name: "Construction Pro",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Construction",
      contactName: "Robert Miller",
      contactEmail: "robert@constpro.com",
      contactPhone: "+1 (555) 789-0123",
      status: "inactive",
      projects: 1,
      lastActivity: "2023-03-10",
      totalSpent: 12000,
      isFavorite: false,
    },
    {
      id: "8",
      name: "EduTech Solutions",
      logo: "/placeholder.svg?height=40&width=40",
      industry: "Education",
      contactName: "Amanda Clark",
      contactEmail: "amanda@edutech.com",
      contactPhone: "+1 (555) 890-1234",
      status: "active",
      projects: 3,
      lastActivity: "2023-05-29",
      totalSpent: 24500,
      isFavorite: false,
    },
  ]

  // Filter clients based on search query and filters
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contactEmail.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || client.status === statusFilter

    const matchesIndustry = industryFilter === "all" || client.industry === industryFilter

    return matchesSearch && matchesStatus && matchesIndustry
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300"
          >
            Active
          </Badge>
        )
      case "inactive":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-300"
          >
            Inactive
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-300"
          >
            Pending
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const toggleFavorite = (clientId: string) => {
    // In a real app, you would update this in your state management or backend
    console.log(`Toggle favorite for client ${clientId}`)
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships and projects</p>
        </div>
        <Button asChild>
          <Link href="/admin/clients/add">
            <Plus className="mr-2 h-4 w-4" />
            Add New Client
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search clients..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Industry</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Retail">Retail</SelectItem>
                <SelectItem value="Construction">Construction</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients.map((client) => (
              <Card key={client.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                        <AvatarFallback className="rounded-md">{client.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{client.name}</h3>
                        <p className="text-xs text-muted-foreground">{client.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" onClick={() => toggleFavorite(client.id)} className="h-8 w-8">
                        {client.isFavorite ? (
                          <Star className="h-4 w-4 text-yellow-500" />
                        ) : (
                          <StarOff className="h-4 w-4" />
                        )}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Client</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>View Projects</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Send Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Client</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border-t px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{client.contactName}</span>
                      </div>
                      {getStatusBadge(client.status)}
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a href={`mailto:${client.contactEmail}`} className="text-primary hover:underline truncate">
                          {client.contactEmail}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a href={`tel:${client.contactPhone}`} className="hover:underline">
                          {client.contactPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t px-4 py-3 bg-muted/50">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                        <div className="font-medium">{client.projects}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Last Activity</div>
                        <div className="font-medium">{new Date(client.lastActivity).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Total Spent</div>
                        <div className="font-medium">${client.totalSpent.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t grid grid-cols-3 divide-x">
                    <Button variant="ghost" className="rounded-none h-10">
                      <FileText className="h-4 w-4 mr-2" />
                      <span className="text-xs">Projects</span>
                    </Button>
                    <Button variant="ghost" className="rounded-none h-10">
                      <BarChart2 className="h-4 w-4 mr-2" />
                      <span className="text-xs">Analytics</span>
                    </Button>
                    <Button variant="ghost" className="rounded-none h-10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <span className="text-xs">Portal</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <Card className="mt-4">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Building className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium text-lg mb-2">No clients found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  No clients match your current search and filter criteria.
                </p>
                <Button asChild>
                  <Link href="/admin/clients/add">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add New Client
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients
              .filter((client) => client.status === "active")
              .map((client) => (
                <Card key={client.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 rounded-md">
                          <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                          <AvatarFallback className="rounded-md">{client.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{client.name}</h3>
                          <p className="text-xs text-muted-foreground">{client.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(client.id)}
                          className="h-8 w-8"
                        >
                          {client.isFavorite ? (
                            <Star className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit Client</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              <span>View Projects</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Send Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete Client</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="border-t px-4 py-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{client.contactName}</span>
                        </div>
                        {getStatusBadge(client.status)}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`mailto:${client.contactEmail}`} className="text-primary hover:underline truncate">
                            {client.contactEmail}
                          </a>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`tel:${client.contactPhone}`} className="hover:underline">
                            {client.contactPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-t px-4 py-3 bg-muted/50">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                          <div className="font-medium">{client.projects}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Last Activity</div>
                          <div className="font-medium">{new Date(client.lastActivity).toLocaleDateString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Total Spent</div>
                          <div className="font-medium">${client.totalSpent.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t grid grid-cols-3 divide-x">
                      <Button variant="ghost" className="rounded-none h-10">
                        <FileText className="h-4 w-4 mr-2" />
                        <span className="text-xs">Projects</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        <span className="text-xs">Analytics</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-xs">Portal</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="inactive" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients
              .filter((client) => client.status === "inactive")
              .map((client) => (
                <Card key={client.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 rounded-md">
                          <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                          <AvatarFallback className="rounded-md">{client.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{client.name}</h3>
                          <p className="text-xs text-muted-foreground">{client.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(client.id)}
                          className="h-8 w-8"
                        >
                          {client.isFavorite ? (
                            <Star className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit Client</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              <span>Reactivate Client</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Send Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete Client</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="border-t px-4 py-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{client.contactName}</span>
                        </div>
                        {getStatusBadge(client.status)}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`mailto:${client.contactEmail}`} className="text-primary hover:underline truncate">
                            {client.contactEmail}
                          </a>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`tel:${client.contactPhone}`} className="hover:underline">
                            {client.contactPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-t px-4 py-3 bg-muted/50">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                          <div className="font-medium">{client.projects}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Last Activity</div>
                          <div className="font-medium">{new Date(client.lastActivity).toLocaleDateString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Total Spent</div>
                          <div className="font-medium">${client.totalSpent.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t grid grid-cols-3 divide-x">
                      <Button variant="ghost" className="rounded-none h-10">
                        <FileText className="h-4 w-4 mr-2" />
                        <span className="text-xs">Projects</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        <span className="text-xs">Analytics</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-xs">Portal</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients
              .filter((client) => client.isFavorite)
              .map((client) => (
                <Card key={client.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 rounded-md">
                          <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
                          <AvatarFallback className="rounded-md">{client.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{client.name}</h3>
                          <p className="text-xs text-muted-foreground">{client.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(client.id)}
                          className="h-8 w-8"
                        >
                          {client.isFavorite ? (
                            <Star className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit Client</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              <span>View Projects</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Send Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete Client</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="border-t px-4 py-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{client.contactName}</span>
                        </div>
                        {getStatusBadge(client.status)}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`mailto:${client.contactEmail}`} className="text-primary hover:underline truncate">
                            {client.contactEmail}
                          </a>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href={`tel:${client.contactPhone}`} className="hover:underline">
                            {client.contactPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-t px-4 py-3 bg-muted/50">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                          <div className="font-medium">{client.projects}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Last Activity</div>
                          <div className="font-medium">{new Date(client.lastActivity).toLocaleDateString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Total Spent</div>
                          <div className="font-medium">${client.totalSpent.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t grid grid-cols-3 divide-x">
                      <Button variant="ghost" className="rounded-none h-10">
                        <FileText className="h-4 w-4 mr-2" />
                        <span className="text-xs">Projects</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        <span className="text-xs">Analytics</span>
                      </Button>
                      <Button variant="ghost" className="rounded-none h-10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-xs">Portal</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
