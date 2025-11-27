"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative w-full overflow-x-auto",
        "bg-[#001a1a] text-emerald-300 border border-emerald-500/50 clip-corners-table overflow-hidden group",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15),0_4px_24px_rgba(0,0,0,0.4)]",
        "hover:border-emerald-400/70 hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_16px_rgba(6,182,212,0.3),0_0_32px_rgba(6,182,212,0.15)]",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] before:bg-size[100%_4px] before:animate-scanline before:pointer-events-none before:z-0",
        "data-[theme=light]:bg-[#001a1a] data-[theme=light]:text-emerald-300 data-[theme=light]:border-emerald-500/50",
        "data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15),0_4px_24px_rgba(0,0,0,0.4)]",
        "data-[theme=light]:hover:border-emerald-400/70 data-[theme=light]:hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_16px_rgba(6,182,212,0.3),0_0_32px_rgba(6,182,212,0.15)]"
      )}
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm font-mono relative z-10", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "[&_tr]:border-b [&_tr]:border-emerald-500/30",
        "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.5),transparent)]",
        "data-[theme=light]:[&_tr]:border-emerald-500/30",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-emerald-500/30 font-medium [&>tr]:last:border-b-0",
        "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.5),transparent)]",
        "data-[theme=light]:border-emerald-500/30",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-emerald-500/30 transition-all duration-300",
        "hover:bg-[#002626] hover:shadow-[inset_0_0_16px_rgba(6,182,212,0.15)]",
        "data-[state=selected]:bg-[#002626] data-[state=selected]:border-emerald-400/50 data-[state=selected]:shadow-[inset_0_0_16px_rgba(6,182,212,0.2)]",
        "data-[theme=light]:border-emerald-500/30",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-4 text-left align-middle font-bold uppercase tracking-wider whitespace-nowrap",
        "text-emerald-300 text-xs",
        "group-hover:text-shadow-glow transition-all duration-300",
        "[&:has([role=checkbox])]:pr-0 :[[role=checkbox]]:translate-y-[2px]",
        "data-[theme=light]:text-emerald-300",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle whitespace-nowrap",
        "text-emerald-200/90",
        "[&:has([role=checkbox])]:pr-0 :[[role=checkbox]]:translate-y-[2px]",
        "data-[theme=light]:text-emerald-200/90",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "mt-4 text-sm font-mono tracking-wide",
        "text-emerald-400/70",
        "data-[theme=light]:text-emerald-400/70",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .clip-corners-table {
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
    
    [data-slot="table-container"] {
      position: relative;
    }
    
    [data-slot="table-container"]::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      border-left: 2px solid rgba(6, 182, 212, 0.6);
      border-top: 2px solid rgba(6, 182, 212, 0.6);
      transition: all 0.3s ease;
      z-index: 20;
    }
    
    [data-slot="table-container"]:hover::after {
      width: 16px;
      height: 16px;
      border-color: rgba(34, 211, 238, 1);
    }
  `
  document.head.appendChild(style)
}