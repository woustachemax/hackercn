import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-[#001a1a] text-emerald-300 border border-emerald-500/50 clip-corners relative overflow-hidden group",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15),0_4px_24px_rgba(0,0,0,0.4)]",
        "hover:border-emerald-400/70 hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_16px_rgba(6,182,212,0.3),0_0_32px_rgba(6,182,212,0.15)]",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] before:bg-size-[100%_4px] before:animate-scanline before:pointer-events-none",
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
        "group-hover:text-shadow-glow transition-all duration-300",
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

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .clip-corners {
      clip-path: polygon(
        0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px,
        100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px)
      );
    }
    
    @keyframes scanline {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 200%;
      }
    }
    
    .animate-scanline {
      animation: scanline 8s linear infinite;
    }
    
    .text-shadow-glow {
      text-shadow: 0 0 8px rgba(6, 182, 212, 0.6);
    }
    
    [data-slot="card"] {
      position: relative;
    }
    
    [data-slot="card"]::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      border-left: 2px solid rgba(6, 182, 212, 0.6);
      border-top: 2px solid rgba(6, 182, 212, 0.6);
      transition: all 0.3s ease;
    }
    
    [data-slot="card"]:hover::after {
      width: 16px;
      height: 16px;
      border-color: rgba(34, 211, 238, 1);
    }
    
    [data-slot="card"]::before {
      z-index: 0;
    }
    
    [data-slot="card"] > * {
      position: relative;
      z-index: 1;
    }
  `
  document.head.appendChild(style)
}