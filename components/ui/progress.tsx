"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden clip-corners-progress",
        "bg-[#001a1a] border border-emerald-500/30",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.1)]",
        "data-[theme=light]:bg-[#001a1a] data-[theme=light]:border-emerald-500/30",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 transition-all duration-300 ease-out",
          "bg-linear-to-r from-cyan-500 to-emerald-400",
          "shadow-[0_0_8px_rgba(6,182,212,0.4)]",
          "relative",
          "after:absolute after:inset-0 after:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] after:animate-shimmer"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .clip-corners-progress {
      clip-path: polygon(
        0 2px, 2px 0, calc(100% - 2px) 0, 100% 2px,
        100% calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 0 calc(100% - 2px)
      );
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
    
    .animate-shimmer {
      background-size: 200% 100%;
      animation: shimmer 2s linear infinite;
    }
  `
  document.head.appendChild(style)
}