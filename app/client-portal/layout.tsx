import { ClientSidebar } from "@/components/client-portal/client-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientPortalLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen">
        <ClientSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </ThemeProvider>
  )
}
