import { ClientsList } from "@/components/admin/clients/clients-list"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground mt-2">Manage your client relationships and projects.</p>
        </div>
        <Button asChild>
          <Link href="/admin/clients/new">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Client
          </Link>
        </Button>
      </div>

      <ClientsList />
    </div>
  )
}
