import { InviteForm } from "@/components/admin/team/invite-form"

export default function InviteMemberPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Invite Team Member</h1>
        <p className="text-muted-foreground mt-2">Send an invitation to join your team</p>
      </div>

      <InviteForm />
    </div>
  )
}
