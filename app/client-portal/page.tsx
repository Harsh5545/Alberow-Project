import { ClientDashboard } from "@/components/client-portal/client-dashboard"
import { ClientHeader } from "@/components/client-portal/client-header"

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <ClientHeader />
      <main className="container mx-auto py-8 px-4">
        <ClientDashboard />
      </main>
    </div>
  )
}
