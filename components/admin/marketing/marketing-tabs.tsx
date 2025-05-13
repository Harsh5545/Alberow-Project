import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmailCampaigns } from "./email-campaigns"
import { SocialMediaMarketing } from "./social-media-marketing"
import { ContentCalendar } from "./content-calendar"
import { LeadManagement } from "./lead-management"
import { MarketingAnalytics } from "./marketing-analytics"

export function MarketingTabs() {
  return (
    <Tabs defaultValue="email" className="space-y-4">
      <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
        <TabsTrigger value="email">Email Campaigns</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
        <TabsTrigger value="content">Content Calendar</TabsTrigger>
        <TabsTrigger value="leads">Lead Management</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="email" className="space-y-4">
        <EmailCampaigns />
      </TabsContent>
      <TabsContent value="social" className="space-y-4">
        <SocialMediaMarketing />
      </TabsContent>
      <TabsContent value="content" className="space-y-4">
        <ContentCalendar />
      </TabsContent>
      <TabsContent value="leads" className="space-y-4">
        <LeadManagement />
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <MarketingAnalytics />
      </TabsContent>
    </Tabs>
  )
}
