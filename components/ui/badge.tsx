import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-mono tracking-[0.15em] uppercase text-[10px] font-bold transition-all duration-200 [clip-path:polygon(0_4px,4px_0,calc(100%-4px)_0,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0_calc(100%-4px))] relative overflow-hidden cursor-default w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: `
          bg-[#001a1a] text-emerald-300 border border-emerald-500/70 px-2.5 py-1
          shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15)]
          hover:border-emerald-400 hover:text-emerald-200
          hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3),0_0_8px_rgba(6,182,212,0.4)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.15),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-300
          
          data-[theme=light]:bg-[#001a1a]
          data-[theme=light]:text-emerald-300
          data-[theme=light]:border-emerald-500/70
          data-[theme=light]:hover:bg-[#002626]
          data-[theme=light]:hover:border-emerald-400
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(6,182,212,0.15)]
        `,
        destructive: `
          bg-[#1a0000] text-rose-300 border border-rose-500/70 px-2.5 py-1
          shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2),0_0_0_1px_rgba(239,68,68,0.15)]
          hover:border-rose-400
          hover:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.3),0_0_8px_rgba(239,68,68,0.4)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.15),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-300
          
          data-[theme=light]:bg-[#1a0000]
          data-[theme=light]:text-rose-300
          data-[theme=light]:border-rose-500/70
          data-[theme=light]:hover:bg-[#260000]
          data-[theme=light]:hover:border-rose-400
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2),0_0_0_1px_rgba(239,68,68,0.15)]
        `
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }