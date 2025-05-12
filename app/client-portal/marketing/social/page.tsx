import { SocialMediaDashboard } from "@/components/client-portal/marketing/social-media-dashboard"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <main className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Social Media Performance</h1>
            <p className="text-muted-foreground mt-2">Track your social media metrics and engagement</p>
          </div>

          <SocialMediaDashboard />
        </div>
      </main>
    </div>
  )
}
