import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono tracking-[0.2em] uppercase text-xs font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-25 [&_svg:not([class*='size-'])]:size-4 outline-none relative overflow-hidden group cursor-pointer",
  {
    variants: {
      variant: {
        default: `
          bg-[#001a1a] text-emerald-300 border border-emerald-500/70 clip-corners
          hover:bg-[#002626] hover:border-emerald-400 hover:text-emerald-200
          shadow-[inset_0_1px_0_0_rgba(6,182,212,0.25),0_0_0_1px_rgba(6,182,212,0.2)]
          hover:shadow-[inset_0_1px_0_0_rgba(6,182,212,0.4),0_0_12px_rgba(6,182,212,0.35)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.15),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500

          data-[theme=light]:bg-white
          data-[theme=light]:text-emerald-700
          data-[theme=light]:border-emerald-300
          data-[theme=light]:hover:bg-emerald-50
          data-[theme=light]:hover:border-emerald-400
          data-[theme=light]:hover:text-emerald-800
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(16,185,129,0.2),0_0_0_1px_rgba(16,185,129,0.15)]
        `,
        destructive: `
          bg-[#1a0000] text-red-300 border border-red-500/70 clip-corners
          hover:bg-[#260000] hover:border-red-400
          shadow-[inset_0_1px_0_0_rgba(239,68,68,0.25),0_0_0_1px_rgba(239,68,68,0.2)]
          hover:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.4),0_0_12px_rgba(239,68,68,0.35)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.18),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500

          data-[theme=light]:bg-red-50
          data-[theme=light]:text-red-700
          data-[theme=light]:border-red-300
          data-[theme=light]:hover:bg-red-100
          data-[theme=light]:hover:border-red-400
          data-[theme=light]:shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2),0_0_0_1px_rgba(239,68,68,0.15)]
        `,
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-[10px]",
        lg: "h-12 px-8 py-3 text-sm",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)



const useButtonSound = () => {
  const play = () => {}
  return play
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const play = useButtonSound()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    play()
    onClick?.(e)
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    />
  )
}

export { Button, buttonVariants }

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .clip-corners {
      clip-path: polygon(
        0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px,
        100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px)
      );
    }
  `
  document.head.appendChild(style)
}
