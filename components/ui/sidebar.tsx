"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => {},
})

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useSidebar()

  return (
    <div
      className={cn(
        "h-screen sticky top-0 flex flex-col bg-background transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 overflow-auto py-2", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarToggle({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "absolute -right-3 top-16 flex h-6 w-6 items-center justify-center rounded-full border bg-background",
        className,
      )}
      {...props}
    >
      {isOpen ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
    </button>
  )
}

export function SidebarMenu({ className, children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("space-y-1 px-2", className)} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuItem({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  )
}

const sidebarMenuButtonVariants = cva(
  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
  {
    variants: {
      isActive: {
        true: "bg-muted",
        false: "text-muted-foreground",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, asChild, children, ...props }, ref) => {
    const { isOpen } = useSidebar()
    const Comp = asChild ? React.Fragment : "button"
    const childProps = asChild ? { className: "" } : {}

    return (
      <Comp {...childProps}>
        <button ref={ref} className={cn(sidebarMenuButtonVariants({ isActive }), className)} {...props}>
          {React.Children.map(children, (child, index) => {
            if (index === 0 || isOpen) {
              return child
            }
            return null
          })}
        </button>
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export function SidebarSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-2 my-2 h-px bg-border", className)} {...props} />
}

export function SidebarGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useSidebar()

  if (!isOpen) {
    return null
  }

  return (
    <div className={cn("px-3 text-xs font-semibold text-muted-foreground", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}
