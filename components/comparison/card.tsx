import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  heading?: string
  className?: string
  children: ReactNode
}

export default function Card({ heading, className, children }: Props) {
  return (
    <div
      className={cn(
        "mb-2 rounded-xl p-3 bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}} md:p-4",
        className
      )}
    >
      {heading && (
        <h2 className="pb-2 text-xl font-semibold text-slate-800 dark:text-slate-300">
          {heading}
        </h2>
      )}
      {children}
    </div>
  )
}
