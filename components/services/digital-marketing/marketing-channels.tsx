import { Badge } from "@/components/ui/badge"
import { Facebook, Linkedin, Search, Mail } from "lucide-react"

export default function MarketingChannels() {
  const channels = [
    {
      icon: <Search className="h-10 w-10 mb-4" />,
      title: "Search Engine Marketing",
      description: "Increase visibility in search results through paid advertising and organic optimization.",
      badges: ["Google Ads", "Bing Ads", "SEO"],
    },
    {
      icon: <Facebook className="h-10 w-10 mb-4" />,
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand awareness across popular social platforms.",
      badges: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    },
    {
      icon: <Mail className="h-10 w-10 mb-4" />,
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships with targeted email campaigns.",
      badges: ["Newsletters", "Automation", "Drip Campaigns"],
    },
    {
      icon: <Linkedin className="h-10 w-10 mb-4" />,
      title: "Content Marketing",
      description: "Attract and retain customers with valuable, relevant content that establishes authority.",
      badges: ["Blogs", "Whitepapers", "Case Studies"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Channel Marketing Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage the right mix of digital channels to maximize your reach and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-purple-600">{channel.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{channel.title}</h3>
              <p className="text-muted-foreground mb-4">{channel.description}</p>
              <div className="flex flex-wrap gap-2">
                {channel.badges.map((badge, badgeIndex) => (
                  <Badge
                    key={badgeIndex}
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
