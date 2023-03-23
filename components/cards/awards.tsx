import { AwardsSection } from "@/components/comparison/costants"
import { cn } from "@/lib/utils"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface IAwardsProps {
  wine?: any
}

export default function Awards({ wine }: IAwardsProps) {
  const Award = ({ item }) => {
    return (
      <div className="mr-2 mb-2 w-fit rounded-md bg-slate-300/50 px-1 py-[1px] text-xs dark:bg-slate-700/50">
        <span className="mr-1 rounded-l-md bg-slate-100/70 px-1 font-medium text-indigo-500 dark:bg-slate-800 dark:text-indigo-600">
          {item.label}
        </span>
        <span className="font-light text-slate-600 dark:text-slate-400">
          {item.score(wine)}
        </span>
      </div>
    )
  }

  return (
    <div className="mb-4 mt-2 flex flex-wrap">
      {AwardsSection.map((item) => (
        <span key={item.label} className="z-50">
          {item.score(wine) !== "" &&
            item.score(wine) !== undefined &&
            item.score(wine) !== null && (
              <TooltipPrimitive.Provider>
                <TooltipPrimitive.Root>
                  <TooltipPrimitive.Trigger asChild>
                    <div>
                      <Award key={item.label} item={item} />
                    </div>
                  </TooltipPrimitive.Trigger>
                  <TooltipPrimitive.Content
                    sideOffset={2}
                    className={cn(
                      "radix-side-top:animate-slide-down-fade",
                      "radix-side-right:animate-slide-left-fade",
                      "radix-side-bottom:animate-slide-up-fade",
                      "radix-side-left:animate-slide-right-fade",
                      "inline-flex items-center rounded-md px-4 py-2.5",
                      "bg-white dark:bg-slate-800"
                    )}
                  >
                    <TooltipPrimitive.Arrow className="fill-current text-white dark:text-slate-800" />
                    <span className="block text-xs leading-none text-slate-600 dark:text-slate-400">
                      {item.name} {" - "} {item?.score(wine)}
                      {"/"}
                      {item.baseScore.toString()}
                    </span>
                  </TooltipPrimitive.Content>
                </TooltipPrimitive.Root>
              </TooltipPrimitive.Provider>
            )}
        </span>
      ))}
    </div>
  )
}
