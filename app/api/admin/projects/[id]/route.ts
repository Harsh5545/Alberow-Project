import { NextResponse } from "next/server"

// Mock data for projects (same as in the main route file)
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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const id = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  return NextResponse.json({ project })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const projectIndex = projects.findIndex((p) => p.id === id)

    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    const data = await request.json()

    // Update project
    const updatedProject = {
      ...projects[projectIndex],
      ...data,
      id, // Ensure ID doesn't change
    }

    // In a real app, you would update in a database
    projects[projectIndex] = updatedProject

    return NextResponse.json({ project: updatedProject })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const projectIndex = projects.findIndex((p) => p.id === id)

    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    // In a real app, you would delete from a database
    const deletedProject = projects.splice(projectIndex, 1)[0]

    return NextResponse.json({ success: true, project: deletedProject })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}
