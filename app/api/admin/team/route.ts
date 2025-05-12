import { NextResponse } from "next/server"

// Mock data for team members
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
  // More team members...
]

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({ teamMembers })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.department || !data.role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new team member
    const newMember = {
      id: teamMembers.length + 1,
      name: data.name,
      avatar: data.avatar || "/placeholder.svg?height=40&width=40",
      initials:
        data.initials ||
        data.name
          .split(" ")
          .map((n) => n[0])
          .join(""),
      email: data.email,
      phone: data.phone || "",
      department: data.department,
      role: data.role,
      status: data.status || "Active",
      joinDate: data.joinDate || new Date().toISOString().split("T")[0],
    }

    // In a real app, you would save to a database
    teamMembers.push(newMember)

    return NextResponse.json({ teamMember: newMember }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create team member" }, { status: 500 })
  }
}
