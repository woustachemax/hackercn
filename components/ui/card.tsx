import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-[#001a1a] text-emerald-300 border border-emerald-500/50 [clip-path:polygon(0_8px,8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px))] relative overflow-hidden group",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15),0_4px_24px_rgba(0,0,0,0.4)]",
        "hover:border-emerald-400/70 hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_16px_rgba(6,182,212,0.3),0_0_32px_rgba(6,182,212,0.15)]",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] before:bg-size[100%_4px] before-animate[scanline_8s_linear_infinite] before:pointer-events-none before:z-0",
        "after:content-[''] after:absolute after:top-0 after:left-0 after:w-3 after:h-3 after:border-l-2 after:border-t-2 after:border-cyan-400/60 after:transition-all after:duration-300 hover:after:w-4 hover:after:h-4 hover:after:border-cyan-300",
        "*:relative *:z-1",
        "data-[theme=light]:bg-[#001a1a] data-[theme=light]:text-emerald-300 data-[theme=light]:border-emerald-500/50",
        "data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15),0_4px_24px_rgba(0,0,0,0.4)]",
        "data-[theme=light]:hover:border-emerald-400/70 data-[theme=light]:hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_16px_rgba(6,182,212,0.3),0_0_32px_rgba(6,182,212,0.15)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 py-4",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "border-b border-emerald-500/30 data-[theme=light]:border-emerald-500/30",
        "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,transparent,rgba(6,182,212,0.5),transparent)]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-mono font-bold tracking-wider uppercase text-sm",
        "text-emerald-300 data-[theme=light]:text-emerald-300",
        "group-hover:[text-shadow:0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-emerald-400/70 text-xs font-mono tracking-wide",
        "data-[theme=light]:text-emerald-400/70",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 py-4 font-mono text-sm",
        "text-emerald-200/90 data-[theme=light]:text-emerald-200/90",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 py-4 gap-3",
        "border-t border-emerald-500/30 data-[theme=light]:border-emerald-500/30",
        "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(to_right,transparent,rgba(6,182,212,0.5),transparent)]",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}