import { useState } from "react"
import { useStore } from "@/store/compare-store"
import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import * as TogglePrimitive from "@radix-ui/react-toggle"

interface ICompareToggleProps {
  wine?: any
}

export default function CompareToggle({ wine }: ICompareToggleProps) {
  const compareList = useStore((state) => state.compareList)
  const addItem = useStore((state) => state.addItem)
  const removeItem = useStore((state) => state.removeItem)

  const [isPresent, setIsPresent] = useState(false)

  const inCompareList = () => compareList.some((p) => p.id == wine.id)

  const compareListClikHandler = () => {
    const existing = compareList.find((p) => p.id == wine.id)
    if (!existing) {
      addItem(wine)
      setIsPresent(true)
    } else {
      removeItem(wine.id)
      setIsPresent(false)
    }
  }

  return (
    <>
      <div className="w-full px-4 pb-4 pt-1 text-sm font-medium text-slate-800 dark:text-slate-300">
        <TogglePrimitive.Root
          defaultPressed={isPresent}
          onPressedChange={compareListClikHandler}
          asChild
        >
          <button className="absolute bottom-3 right-6 flex cursor-pointer items-center rounded-md border border-transparent bg-slate-200/90 py-1 px-2 hover:shadow-lg dark:bg-slate-800">
            {inCompareList() ? (
              <StarIconSolid className="h-4 w-4 font-medium text-indigo-500" />
            ) : (
              <StarIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            )}
            <span className="ml-1 text-xs text-slate-600 dark:text-slate-400">
              {inCompareList() ? "In comparison" : "Compare"}
            </span>
          </button>
        </TogglePrimitive.Root>
      </div>
    </>
  )
}
