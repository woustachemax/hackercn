import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full [clip-path:polygon(0_8px,8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px))] border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current overflow-hidden transition-all duration-300 font-mono after:content-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-2 after:border-l-2 after:border-t-2 after:border-cyan-400/60 after:transition-all after:duration-300 after:pointer-events-none after:z-10 hover:after:w-3 hover:after:h-3 [&>*]:relative [&>*]:z-[1]",
  {
    variants: {
      variant: {
        default: `
          bg-[#001a1a] text-emerald-300 border-emerald-500/50
          shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15)]
          hover:border-emerald-400/70 hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_8px_rgba(6,182,212,0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] before:bg-[length:100%_4px] before:[animation:scanline_8s_linear_infinite] before:pointer-events-none
          
          data-[theme=light]:bg-[#001a1a] data-[theme=light]:text-emerald-300 data-[theme=light]:border-emerald-500/50
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15)]
        `,
        destructive: `
          bg-[#1a0000] text-rose-300 border-rose-500/50
          shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2),0_0_0_1px_rgba(239,68,68,0.15)]
          hover:border-rose-400/70 hover:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.3),0_0_8px_rgba(239,68,68,0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(239,68,68,0.03)_50%,transparent_100%)] before:bg-[length:100%_4px] before:[animation:scanline_8s_linear_infinite] before:pointer-events-none
          [&>svg]:text-rose-400
          *:data-[slot=alert-description]:text-rose-300/90
          after:!border-rose-400/60
          
          data-[theme=light]:bg-[#1a0000] data-[theme=light]:text-rose-300 data-[theme=light]:border-rose-500/50
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2),0_0_0_1px_rgba(239,68,68,0.15)]
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold tracking-wider uppercase text-xs",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-xs tracking-wide [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }