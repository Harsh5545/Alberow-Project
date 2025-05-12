import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MarketingCaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      industry: "Retail",
      metrics: [
        { label: "Increase in Revenue", value: "143%" },
        { label: "ROAS", value: "4.2x" },
        { label: "New Customers", value: "2,500+" },
      ],
      image: "/placeholder.svg?height=300&width=500",
      description:
        "How we helped an e-commerce retailer scale their digital presence and achieve record-breaking sales through integrated marketing campaigns.",
    },
    {
      title: "B2B Lead Generation",
      industry: "SaaS",
      metrics: [
        { label: "Qualified Leads", value: "320%" },
        { label: "Cost Per Lead", value: "-42%" },
        { label: "Conversion Rate", value: "8.7%" },
      ],
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Our strategic approach to content marketing and LinkedIn advertising generated a steady stream of high-quality leads for a B2B software company.",
    },
    {
      title: "Local Business Expansion",
      industry: "Professional Services",
      metrics: [
        { label: "Local Search Visibility", value: "+215%" },
        { label: "Store Visits", value: "+87%" },
        { label: "New Clients", value: "150+" },
      ],
      image: "/placeholder.svg?height=300&width=500",
      description:
        "How we helped a local service provider dominate their market through local SEO, Google Business optimization, and targeted social campaigns.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results we've achieved for businesses just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{study.industry}</div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
