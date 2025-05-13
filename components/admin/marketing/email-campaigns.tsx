import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Calendar, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EmailCampaigns() {
  const campaigns = [
    {
      id: "1",
      name: "Monthly Newsletter - May",
      status: "Sent",
      date: "May 1, 2023",
      opens: 1245,
      clicks: 423,
      recipients: 5000,
    },
    {
      id: "2",
      name: "Product Launch Announcement",
      status: "Scheduled",
      date: "May 15, 2023",
      opens: 0,
      clicks: 0,
      recipients: 7500,
    },
    {
      id: "3",
      name: "Summer Sale Promotion",
      status: "Draft",
      date: "Not scheduled",
      opens: 0,
      clicks: 0,
      recipients: 0,
    },
    {
      id: "4",
      name: "Customer Feedback Survey",
      status: "Sent",
      date: "Apr 22, 2023",
      opens: 876,
      clicks: 234,
      recipients: 3200,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search campaigns..." className="w-full sm:w-[300px] pl-8" />
        </div>
        <Button asChild>
          <Link href="/admin/marketing/email">
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Campaigns</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{campaign.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      {campaign.date}
                      <span className="mx-2">•</span>
                      <Users className="mr-1 h-3 w-3" />
                      {campaign.recipients.toLocaleString()} recipients
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      campaign.status === "Sent" ? "default" : campaign.status === "Scheduled" ? "outline" : "secondary"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                {campaign.status === "Sent" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium">Opens</div>
                      <div className="text-2xl font-bold">{campaign.opens.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {Math.round((campaign.opens / campaign.recipients) * 100)}% open rate
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Clicks</div>
                      <div className="text-2xl font-bold">{campaign.clicks.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {Math.round((campaign.clicks / campaign.opens) * 100)}% click rate
                      </div>
                    </div>
                  </div>
                )}
                {campaign.status === "Scheduled" && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    Scheduled to send on {campaign.date}
                  </div>
                )}
                {campaign.status === "Draft" && (
                  <div className="text-sm text-muted-foreground">This campaign is not yet scheduled or sent.</div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <Link href={`/admin/marketing/email?id=${campaign.id}`}>
                    {campaign.status === "Draft" ? "Edit" : "View"} Campaign
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="sent" className="space-y-4">
          {campaigns
            .filter((campaign) => campaign.status === "Sent")
            .map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{campaign.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        {campaign.date}
                        <span className="mx-2">•</span>
                        <Users className="mr-1 h-3 w-3" />
                        {campaign.recipients.toLocaleString()} recipients
                      </CardDescription>
                    </div>
                    <Badge>Sent</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium">Opens</div>
                      <div className="text-2xl font-bold">{campaign.opens.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {Math.round((campaign.opens / campaign.recipients) * 100)}% open rate
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Clicks</div>
                      <div className="text-2xl font-bold">{campaign.clicks.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {Math.round((campaign.clicks / campaign.opens) * 100)}% click rate
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto" asChild>
                    <Link href={`/admin/marketing/email?id=${campaign.id}`}>
                      View Campaign
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          {campaigns
            .filter((campaign) => campaign.status === "Scheduled")
            .map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{campaign.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        {campaign.date}
                        <span className="mx-2">•</span>
                        <Users className="mr-1 h-3 w-3" />
                        {campaign.recipients.toLocaleString()} recipients
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    Scheduled to send on {campaign.date}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto" asChild>
                    <Link href={`/admin/marketing/email?id=${campaign.id}`}>
                      View Campaign
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          {campaigns
            .filter((campaign) => campaign.status === "Draft")
            .map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{campaign.name}</CardTitle>
                      <CardDescription>Not scheduled yet</CardDescription>
                    </div>
                    <Badge variant="secondary">Draft</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-muted-foreground">This campaign is not yet scheduled or sent.</div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto" asChild>
                    <Link href={`/admin/marketing/email?id=${campaign.id}`}>
                      Edit Campaign
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
