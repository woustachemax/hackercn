"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 relative",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        "bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.5),transparent)]",
        "data-[orientation=vertical]:bg-[linear-gradient(180deg,transparent,rgba(6,182,212,0.5),transparent)]",
        "shadow-[0_0_4px_rgba(6,182,212,0.3)]",
        "before:absolute before:inset-0",
        "before:bg-emerald-500/30",
        "data-[theme=light]:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.5),transparent)]",
        "data-[theme=light]:data-[orientation=vertical]:bg-[linear-gradient(180deg,transparent,rgba(6,182,212,0.5),transparent)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }