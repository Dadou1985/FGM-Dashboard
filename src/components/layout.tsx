import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarTrigger className="md:hidden" />
      <AppSidebar />
        <main className="w-full">
          {children}
        </main>
    </SidebarProvider>
  )
}
