import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Calendar, Users, GitBranch, ExternalLink, Edit, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  {
    id: 1,
    name: "Alberow Website Redesign",
    client: "Internal",
    description: "Complete redesign of the Alberow company website with new branding and improved UX.",
    status: "In Progress",
    progress: 65,
    dueDate: "2023-12-15",
    assignees: [
      { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
      { name: "Sarah Miller", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" },
    ],
    github: "alberow/website",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    client: "FashionHub",
    description: "Building a custom e-commerce platform with inventory management and payment processing.",
    status: "Active",
    progress: 40,
    dueDate: "2024-01-30",
    assignees: [
      { name: "David Lee", avatar: "/placeholder.svg?height=32&width=32", initials: "DL" },
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32", initials: "EW" },
      { name: "James Brown", avatar: "/placeholder.svg?height=32&width=32", initials: "JB" },
    ],
    github: "alberow/fashionhub",
  },
  {
    id: 3,
    name: "Mobile App Development",
    client: "HealthTrack",
    description: "Developing a health tracking mobile application for iOS and Android platforms.",
    status: "On Hold",
    progress: 25,
    dueDate: "2024-03-10",
    assignees: [{ name: "Michael Chen", avatar: "/placeholder.svg?height=32&width=32", initials: "MC" }],
    github: "alberow/healthtrack-app",
  },
  {
    id: 4,
    name: "SEO Optimization",
    client: "GreenTech",
    description: "Comprehensive SEO optimization to improve search engine rankings and organic traffic.",
    status: "Completed",
    progress: 100,
    dueDate: "2023-11-05",
    assignees: [
      { name: "Olivia Garcia", avatar: "/placeholder.svg?height=32&width=32", initials: "OG" },
      { name: "William Taylor", avatar: "/placeholder.svg?height=32&width=32", initials: "WT" },
    ],
    github: "alberow/greentech-seo",
  },
  {
    id: 5,
    name: "Social Media Campaign",
    client: "SportsFit",
    description: "Creating and managing a comprehensive social media marketing campaign.",
    status: "Active",
    progress: 70,
    dueDate: "2023-12-20",
    assignees: [{ name: "Sophia Martinez", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" }],
    github: "alberow/sportsfit-social",
  },
  {
    id: 6,
    name: "Brand Identity Design",
    client: "TechStart",
    description: "Developing a complete brand identity including logo, color scheme, and brand guidelines.",
    status: "Active",
    progress: 85,
    dueDate: "2023-12-05",
    assignees: [
      { name: "Liam Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "LJ" },
      { name: "Ava Thompson", avatar: "/placeholder.svg?height=32&width=32", initials: "AT" },
    ],
    github: "alberow/techstart-brand",
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
            <div>
              <Badge
                variant="outline"
                className={
                  project.status === "Completed"
                    ? "border-green-500 text-green-500"
                    : project.status === "In Progress"
                      ? "border-blue-500 text-blue-500"
                      : project.status === "Active"
                        ? "border-purple-500 text-purple-500"
                        : "border-amber-500 text-amber-500"
                }
              >
                {project.status}
              </Badge>
              <h3 className="font-semibold text-lg mt-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.client}</p>
            </div>
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
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>View</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <p className="text-sm text-muted-foreground line-clamp-2 h-10">{project.description}</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                  <span>{project.github}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.assignees.map((assignee, index) => (
                <Avatar key={index} className="h-8 w-8 border-2 border-background">
                  <AvatarImage src={assignee.avatar || "/placeholder.svg"} alt={assignee.name} />
                  <AvatarFallback>{assignee.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button size="sm" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Team
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
