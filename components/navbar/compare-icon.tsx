import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useStore } from "@/store/compare-store"
import { StarIcon, TrashIcon } from "@heroicons/react/24/outline"

export function ComparisonIcon() {
  const compareList = useStore((state) => state.compareList)
  const compareLength = compareList.length
  const [myCompareLength, setCompareLength] = useState(0)
  const removeItem = useStore((state) => state.removeItem)

  useEffect(() => {
    setCompareLength(compareLength)
  }, [compareLength])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Comparison icon">
          <span className="relative left-3 top-3 m-0 items-center justify-center rounded-full border bg-slate-600 px-1 font-mono text-xs font-normal text-white dark:bg-slate-600">
            {myCompareLength}
          </span>
          <StarIcon className="h-6 w-6" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-56">
        {myCompareLength > 1 && (
          <>
            <DropdownMenuGroup>
              {compareList.map((wine) => (
                <DropdownMenuItem key={wine.id}>
                  <div className="text-md flex items-center rounded-lg p-1 text-slate-600 transition duration-150 ease-in-out hover:bg-slate-50 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-700">
                    {wine?.name}
                    <div>
                      <TrashIcon
                        className="ml-1 h-4 w-4 cursor-pointer text-slate-500 hover:text-red-500"
                        aria-hidden="true"
                        onClick={() => removeItem(wine?.id)}
                      />
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            {myCompareLength < 5 && (
              <DropdownMenuItem asChild className="w-full rounded-lg">
                <Link href="/compare">
                  <Button variant="ghost" size="sm">
                    Compare Now →
                  </Button>
                </Link>
              </DropdownMenuItem>
            )}
            {myCompareLength > 4 && (
              <DropdownMenuItem>Remove some items</DropdownMenuItem>
            )}
          </>
        )}
        {myCompareLength < 2 && (
          <DropdownMenuGroup>
            <DropdownMenuItem>No items to compare</DropdownMenuItem>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
