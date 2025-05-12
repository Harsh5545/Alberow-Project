import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ExternalLink, Edit, Trash2, GitBranch } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const projects = [
  {
    id: 1,
    name: "Alberow Website Redesign",
    client: "Internal",
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
    status: "Active",
    progress: 70,
    dueDate: "2023-12-20",
    assignees: [{ name: "Sophia Martinez", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" }],
    github: "alberow/sportsfit-social",
  },
]

export function ProjectsList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>GitHub</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={project.progress} className="h-2 w-[100px]" />
                  <span className="text-xs text-muted-foreground">{project.progress}%</span>
                </div>
              </TableCell>
              <TableCell>{new Date(project.dueDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  {project.assignees.map((assignee, index) => (
                    <Avatar key={index} className="h-8 w-8 border-2 border-background">
                      <AvatarImage src={assignee.avatar || "/placeholder.svg"} alt={assignee.name} />
                      <AvatarFallback>{assignee.initials}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <GitBranch className="h-4 w-4" />
                </Button>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
