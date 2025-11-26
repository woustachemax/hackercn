import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-all outline-none",
        "bg-[#001a1a] text-emerald-300 border-emerald-500/50",
        "placeholder:text-emerald-400/40 placeholder:font-mono",
        "font-mono tracking-wide",
        "clip-corners-input relative",
        "shadow-[inset_0_1px_0_0_rgba(6,182,212,0.1),0_0_0_1px_rgba(6,182,212,0.1)]",
        "focus:border-emerald-400 focus:shadow-[0_0_8px_rgba(6,182,212,0.3),inset_0_1px_0_0_rgba(6,182,212,0.2)]",
        "hover:border-emerald-400/70",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-emerald-300",
        "selection:bg-cyan-500/30 selection:text-emerald-200",
        "aria-invalid:border-red-500/70 aria-invalid:shadow-[0_0_8px_rgba(239,68,68,0.3)]",
        "data-[theme=light]:bg-[#001a1a] data-[theme=light]:text-emerald-300 data-[theme=light]:border-emerald-500/50",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .clip-corners-input {
      clip-path: polygon(
        0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px,
        100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px)
      );
    }
  `
  document.head.appendChild(style)
}