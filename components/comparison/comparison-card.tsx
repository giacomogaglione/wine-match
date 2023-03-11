import { ReactNode, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useStore } from "@/store/compare-store"

type Props = {
  className?: string
  children: ReactNode
}

export default function ComparisonCard({ className, children }: Props) {
  const compareList = useStore((state) => state.compareList)
  const compareLength = compareList.length
  const [myCompareLength, setCompareLength] = useState(0)

  useEffect(() => {
    setCompareLength(compareLength)
  }, [compareLength])

  return (
    <div
      className={cn(
        "min-w-[15rem] flex-none pr-2 md:min-w-[15.5rem] lg:snap-start lg:pr-3",
        myCompareLength === 2 && "w-1/2",
        myCompareLength === 3 && "w-1/3",
        myCompareLength === 4 && "w-1/4",
        className
      )}
    >
      {children}
    </div>
  )
}
