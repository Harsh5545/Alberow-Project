import { CheckCircle2 } from "lucide-react"

export default function MarketingProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business goals, target audience, and current digital presence. Our team conducts a comprehensive analysis of your market and competitors.",
      points: [
        "Business goals assessment",
        "Competitor analysis",
        "Market opportunity identification",
        "Current performance audit",
      ],
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Based on our findings, we create a customized digital marketing strategy tailored to your specific needs and objectives.",
      points: [
        "Channel selection and prioritization",
        "Budget allocation planning",
        "Content strategy development",
        "Campaign timeline creation",
      ],
    },
    {
      number: "03",
      title: "Implementation & Execution",
      description:
        "Our team of specialists executes the strategy across all selected channels, creating compelling campaigns that resonate with your audience.",
      points: [
        "Campaign setup and launch",
        "Content creation and distribution",
        "Ad creative development",
        "Technical implementation",
      ],
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor campaign performance and make data-driven adjustments to optimize results and maximize ROI.",
      points: [
        "Real-time performance tracking",
        "A/B testing and refinement",
        "Budget optimization",
        "Conversion rate improvement",
      ],
    },
    {
      number: "05",
      title: "Reporting & Analysis",
      description:
        "Regular comprehensive reports keep you informed about campaign performance, insights, and recommendations for future improvements.",
      points: [
        "Custom dashboard creation",
        "Performance metrics analysis",
        "ROI calculation",
        "Strategic recommendations",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering exceptional marketing results for your business.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
