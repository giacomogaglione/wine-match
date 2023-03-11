import * as React from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent rounded-lg border border-slate-400 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent text-md text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        outlineIndigo:
          "bg-transparent text-md border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-slate-100",
        ringIndigo:
          "bg-transparent text-md ring-2 ring-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-slate-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "px-3 py-1 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "p-1 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
