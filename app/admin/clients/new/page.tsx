import { ClientForm } from "@/components/admin/clients/client-form"

export default function NewClientPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Add New Client</h1>
        <p className="text-muted-foreground mt-2">Create a new client account and set up their access.</p>
      </div>

      <ClientForm />
    </div>
  )
}
