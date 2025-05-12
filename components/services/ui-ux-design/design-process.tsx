import { CheckCircle2 } from "lucide-react"

export default function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We begin by understanding your business, users, and objectives through stakeholder interviews, user research, and competitive analysis.",
      points: [
        "User interviews and surveys",
        "Competitive analysis",
        "Business goals alignment",
        "User persona development",
      ],
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "Based on our research, we develop a comprehensive UX strategy that maps out the user journey and information architecture.",
      points: ["User journey mapping", "Information architecture", "Content strategy", "Interaction models"],
    },
    {
      number: "03",
      title: "Wireframing & Prototyping",
      description:
        "We create low and high-fidelity wireframes and interactive prototypes to visualize the user experience before development.",
      points: [
        "Low-fidelity wireframes",
        "Interactive prototypes",
        "User flow diagrams",
        "Functionality specifications",
      ],
    },
    {
      number: "04",
      title: "Visual Design",
      description:
        "Our designers craft beautiful, on-brand visual interfaces that enhance usability while reflecting your brand identity.",
      points: ["UI style guides", "Component design", "Responsive layouts", "Animation and microinteractions"],
    },
    {
      number: "05",
      title: "Testing & Iteration",
      description:
        "We validate our designs through usability testing and iterate based on user feedback to ensure optimal performance.",
      points: ["Usability testing", "A/B testing", "Heatmap analysis", "Accessibility compliance"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to creating user-centered designs that deliver results.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
