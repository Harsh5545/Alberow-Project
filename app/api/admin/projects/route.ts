import { NextResponse } from "next/server"

// Mock data for projects
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
      { id: 1, name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
      { id: 2, name: "Sarah Miller", avatar: "/placeholder.svg?height=32&width=32", initials: "SM" },
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
      { id: 3, name: "David Lee", avatar: "/placeholder.svg?height=32&width=32", initials: "DL" },
      { id: 4, name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32", initials: "EW" },
      { id: 5, name: "James Brown", avatar: "/placeholder.svg?height=32&width=32", initials: "JB" },
    ],
    github: "alberow/fashionhub",
  },
  // More projects...
]

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({ projects })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.client || !data.description || !data.status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new project
    const newProject = {
      id: projects.length + 1,
      name: data.name,
      client: data.client,
      description: data.description,
      status: data.status,
      progress: data.progress || 0,
      dueDate: data.dueDate,
      assignees: data.assignees || [],
      github: data.github || "",
    }

    // In a real app, you would save to a database
    projects.push(newProject)

    return NextResponse.json({ project: newProject }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
