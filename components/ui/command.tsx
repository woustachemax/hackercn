"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-[#001a1a] text-emerald-300 flex h-full w-full flex-col overflow-hidden clip-corners border border-emerald-500/50 relative",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15)]",
        "before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] before:bg-size-[100%_4px] before:animate-scanline before:pointer-events-none",
        "data-[theme=light]:bg-[#001a1a] data-[theme=light]:text-emerald-300",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className={cn("overflow-hidden p-0", className)}>
        <Command className="::[&_[cmdk-group-heading]]:text-emerald-400/70 **:data-[slot=command-input-wrapper]:h-12 ::[&_[cmdk-group-heading]]:px-2 ::[&_[cmdk-group-heading]]:font-mono ::[&_[cmdk-group-heading]]:font-bold ::[&_[cmdk-group-heading]]:uppercase ::[&_[cmdk-group-heading]]:tracking-wider ::[&_[cmdk-group]]:px-2 ::[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 ::[&_[cmdk-input-wrapper]_svg]:h-5 ::[&_[cmdk-input-wrapper]_svg]:w-5 ::[&_[cmdk-input]]:h-12 ::[&_[cmdk-item]]:px-2 ::[&_[cmdk-item]]:py-3 ::[&_[cmdk-item]_svg]:h-5 ::[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b border-emerald-500/30 px-3 relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.5),transparent)]"
    >
      <SearchIcon className="size-4 shrink-0 text-cyan-400" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-emerald-400/50 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 font-mono tracking-wide text-emerald-300",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm font-mono text-emerald-400/70"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-emerald-300 ::[&_[cmdk-group-heading]]:text-emerald-400/70 overflow-hidden p-1 ::[&_[cmdk-group-heading]]:px-2 ::[&_[cmdk-group-heading]]:py-1.5 ::[&_[cmdk-group-heading]]:text-xs ::[&_[cmdk-group-heading]]:font-mono ::[&_[cmdk-group-heading]]:font-bold ::[&_[cmdk-group-heading]]:uppercase ::[&_[cmdk-group-heading]]:tracking-wider",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("border-emerald-500/30 -mx-1 h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-[#002626] data-[selected=true]:text-emerald-200 data-[selected=true]:border data-[selected=true]:border-emerald-500/50 data-[selected=true]:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_8px_rgba(6,182,212,0.3)]",
        "::[&_svg:not([class*='text-'])]:text-cyan-400",
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none font-mono",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "::[&_svg]:pointer-events-none ::[&_svg]:shrink-0 ::[&_svg:not([class*='size-'])]:size-4",
        "transition-all duration-150",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-cyan-400/70 ml-auto text-[10px] tracking-widest font-mono font-bold uppercase",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
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
    
    [data-slot="command"] {
      position: relative;
    }
    
    [data-slot="command"]::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      border-left: 2px solid rgba(6, 182, 212, 0.6);
      border-top: 2px solid rgba(6, 182, 212, 0.6);
      transition: all 0.3s ease;
      pointer-events: none;
      z-index: 50;
    }
    
    [data-slot="command"]:hover::after {
      width: 16px;
      height: 16px;
      border-color: rgba(34, 211, 238, 1);
    }
    
    [data-slot="command"] > * {
      position: relative;
      z-index: 1;
    }
  `
  document.head.appendChild(style)
}