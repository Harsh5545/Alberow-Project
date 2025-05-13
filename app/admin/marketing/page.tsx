import { AdminHeader } from "@/components/admin/admin-header"
import { MarketingTabs } from "@/components/admin/marketing/marketing-tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing | Admin Dashboard",
  description: "Manage your marketing campaigns, email lists, and social media outreach.",
}

export default function MarketingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader
        heading="Marketing"
        text="Manage your marketing campaigns, email lists, and social media outreach."
      />
      <MarketingTabs />
    </div>
  )
}
