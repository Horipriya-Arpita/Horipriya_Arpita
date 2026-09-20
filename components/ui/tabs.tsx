"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Simple tabs implementation without Radix UI dependency
const TabsContext = React.createContext<{
  selectedTab: string
  setSelectedTab: (value: string) => void
}>({
  selectedTab: "",
  setSelectedTab: () => {},
})

const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}) => {
  const [selectedTab, setSelectedTab] = React.useState(value || defaultValue || "")

  React.useEffect(() => {
    if (value) {
      setSelectedTab(value)
    }
  }, [value])

  const handleTabChange = React.useCallback(
    (value: string) => {
      setSelectedTab(value)
      onValueChange?.(value)
    },
    [onValueChange],
  )

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-navy-800 p-1 text-gray-300",
          className,
        )}
        {...props}
      />
    )
  },
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext)
  const isActive = selectedTab === value

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-navy-900 text-white shadow-sm" : "hover:bg-navy-900/50",
        className,
      )}
      onClick={() => setSelectedTab(value)}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const { selectedTab } = React.useContext(TabsContext)
    const isActive = selectedTab === value

    if (!isActive) return null

    return <div ref={ref} className={cn("mt-2 focus-visible:outline-none", className)} {...props} />
  },
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
