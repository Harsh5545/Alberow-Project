import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DesignShowcase() {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "A complete UX overhaul that increased conversion rates by 37% and reduced cart abandonment.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["E-commerce", "Mobile", "Conversion Optimization"],
    },
    {
      title: "Financial Dashboard",
      description: "An intuitive dashboard design that simplified complex data visualization for financial analysts.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Dashboard", "Data Visualization", "Enterprise"],
    },
    {
      title: "Healthcare App",
      description:
        "A patient-centered mobile app design that improved appointment scheduling and medication adherence.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Healthcare", "Mobile App", "Accessibility"],
    },
    {
      title: "Travel Booking Platform",
      description: "A streamlined booking experience that reduced the reservation process from 8 steps to 3.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Travel", "Booking", "UX Optimization"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent UI/UX design projects and the results they've achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-pink-100 text-pink-800 dark:bg-pink-600 dark:text-pink-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
