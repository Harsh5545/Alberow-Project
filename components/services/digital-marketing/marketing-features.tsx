import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Target, TrendingUp, Users, Megaphone, LineChart } from "lucide-react"

export default function MarketingFeatures() {
  const features = [
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: "Targeted Campaigns",
      description:
        "Reach your ideal customers with precision targeting based on demographics, interests, and behavior.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "Data-Driven Strategies",
      description: "Make informed decisions with comprehensive analytics and performance tracking.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: "Growth Marketing",
      description: "Scalable strategies designed to accelerate your business growth and increase market share.",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Audience Building",
      description: "Develop and nurture a loyal audience that engages with your brand consistently.",
    },
    {
      icon: <Megaphone className="h-12 w-12 text-purple-600" />,
      title: "Brand Amplification",
      description: "Increase your brand visibility and recognition across multiple digital channels.",
    },
    {
      icon: <LineChart className="h-12 w-12 text-purple-600" />,
      title: "ROI Optimization",
      description: "Maximize your marketing budget with strategies focused on delivering measurable returns.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Marketing Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our digital marketing services are designed to help your business thrive in the competitive online
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
