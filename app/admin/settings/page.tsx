import { SettingsForm } from "@/components/admin/settings/settings-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <SettingsForm />
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <div className="bg-background p-6 rounded-lg border border-border/50">
            <h3 className="text-lg font-medium mb-4">Appearance Settings</h3>
            <p className="text-muted-foreground mb-4">
              Customize the appearance of the admin dashboard to match your preferences.
            </p>
            <div className="space-y-4">
              {/* Appearance settings content will go here */}
              <p className="text-sm text-muted-foreground">Appearance settings coming soon.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <div className="bg-background p-6 rounded-lg border border-border/50">
            <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
            <p className="text-muted-foreground mb-4">
              Control how and when you receive notifications from the system.
            </p>
            <div className="space-y-4">
              {/* Notification settings content will go here */}
              <p className="text-sm text-muted-foreground">Notification settings coming soon.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <div className="bg-background p-6 rounded-lg border border-border/50">
            <h3 className="text-lg font-medium mb-4">Security Settings</h3>
            <p className="text-muted-foreground mb-4">Manage your account security and authentication methods.</p>
            <div className="space-y-4">
              {/* Security settings content will go here */}
              <p className="text-sm text-muted-foreground">Security settings coming soon.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <div className="bg-background p-6 rounded-lg border border-border/50">
            <h3 className="text-lg font-medium mb-4">API Keys</h3>
            <p className="text-muted-foreground mb-4">Manage API keys for integrating with external services.</p>
            <div className="space-y-4">
              {/* API settings content will go here */}
              <p className="text-sm text-muted-foreground">API settings coming soon.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
