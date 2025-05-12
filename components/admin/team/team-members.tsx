import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Mail, Phone, Edit, Trash2, UserCog, MessageSquare } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    email: "alex.johnson@alberow.com",
    phone: "+1 (555) 123-4567",
    department: "Development",
    role: "Senior Developer",
    status: "Active",
    joinDate: "2021-05-15",
  },
  {
    id: 2,
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SM",
    email: "sarah.miller@alberow.com",
    phone: "+1 (555) 234-5678",
    department: "Design",
    role: "UI/UX Designer",
    status: "Active",
    joinDate: "2021-06-20",
  },
  {
    id: 3,
    name: "David Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DL",
    email: "david.lee@alberow.com",
    phone: "+1 (555) 345-6789",
    department: "Development",
    role: "Backend Developer",
    status: "Active",
    joinDate: "2022-01-10",
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "EW",
    email: "emma.wilson@alberow.com",
    phone: "+1 (555) 456-7890",
    department: "Marketing",
    role: "Marketing Specialist",
    status: "On Leave",
    joinDate: "2022-03-05",
  },
  {
    id: 5,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
    email: "michael.chen@alberow.com",
    phone: "+1 (555) 567-8901",
    department: "Development",
    role: "Mobile Developer",
    status: "Active",
    joinDate: "2022-05-15",
  },
  {
    id: 6,
    name: "Olivia Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "OG",
    email: "olivia.garcia@alberow.com",
    phone: "+1 (555) 678-9012",
    department: "Marketing",
    role: "SEO Specialist",
    status: "Active",
    joinDate: "2022-07-20",
  },
  {
    id: 7,
    name: "William Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "WT",
    email: "william.taylor@alberow.com",
    phone: "+1 (555) 789-0123",
    department: "Management",
    role: "Project Manager",
    status: "Active",
    joinDate: "2021-08-10",
  },
]

export function TeamMembers() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-muted-foreground">{member.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{member.department}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    member.status === "Active"
                      ? "border-green-500 text-green-500"
                      : member.status === "On Leave"
                        ? "border-amber-500 text-amber-500"
                        : "border-red-500 text-red-500"
                  }
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(member.joinDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
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
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserCog className="mr-2 h-4 w-4" />
                      <span>Manage Permissions</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Remove</span>
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
