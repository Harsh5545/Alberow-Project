import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Users, Lightbulb, Smartphone, Gauge, Palette } from "lucide-react"

export default function DesignFeatures() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-pink-500" />,
      title: "User-Centered Design",
      description:
        "We put your users at the heart of every design decision, creating experiences that meet their needs and exceed their expectations.",
    },
    {
      icon: <Layers className="h-12 w-12 text-pink-500" />,
      title: "Interface Design",
      description:
        "Beautiful, intuitive interfaces that balance aesthetics with functionality to create memorable brand experiences.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-pink-500" />,
      title: "Experience Strategy",
      description:
        "Strategic thinking that aligns user needs with business goals to create purposeful digital experiences.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-pink-500" />,
      title: "Responsive Design",
      description:
        "Seamless experiences across all devices and screen sizes, ensuring your digital presence works perfectly everywhere.",
    },
    {
      icon: <Gauge className="h-12 w-12 text-pink-500" />,
      title: "Usability Testing",
      description:
        "Rigorous testing methodologies to validate design decisions and optimize user flows for maximum conversion.",
    },
    {
      icon: <Palette className="h-12 w-12 text-pink-500" />,
      title: "Design Systems",
      description:
        "Scalable, consistent design frameworks that streamline development and ensure brand coherence across all touchpoints.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional User Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our UI/UX design services transform complex challenges into intuitive, engaging digital experiences.
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
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
