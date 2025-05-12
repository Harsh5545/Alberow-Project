import { SEODashboard } from "@/components/client-portal/marketing/seo-dashboard"

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <main className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">SEO Performance</h1>
            <p className="text-muted-foreground mt-2">Track your search engine optimization metrics</p>
          </div>

          <SEODashboard />
        </div>
      </main>
    </div>
  )
}
