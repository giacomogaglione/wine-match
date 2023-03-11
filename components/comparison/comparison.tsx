import Link from "next/link"
import BaseWineCard from "@/components/cards/base-wine-card"
import { useStore } from "@/store/compare-store"
import { TrashIcon } from "@heroicons/react/24/outline"

import Card from "./card"
import ComparisonCard from "./comparison-card"
import Sections from "./sections"

export default function Comparison() {
  const compareList = useStore((state) => state.compareList)
  const removeItem = useStore((state) => state.removeItem)

  return (
    <>
      <div className="syncscroll sticky top-0 z-[1] -mx-3.5 mt-3 flex overflow-x-hidden pl-2 lg:top-20 lg:pl-3">
        {compareList.map((wine) => {
          return (
            <ComparisonCard key={wine.id}>
              <h2 className="overflow-hidden text-ellipsis whitespace-nowrap p-3 text-center text-lg font-semibold ">
                {wine?.name}
              </h2>
            </ComparisonCard>
          )
        })}
      </div>

      <div className="syncscroll -mx-3.5 -mt-[3.75rem] overflow-x-auto overscroll-x-none pl-2 pb-5 lg:snap-x lg:snap-mandatory lg:pl-3">
        <div className="flex">
          {compareList.map((wine) => (
            <ComparisonCard key={wine.id} className="relative flex flex-col">
              <button
                type="button"
                onClick={() => removeItem(wine?.id)}
                className="absolute top-4 right-4 z-[2]"
              >
                <TrashIcon className="m-2 h-6 w-6 cursor-pointer text-slate-500 hover:text-red-500" />
              </button>
              <section className="relative mb-2.5 pt-16 bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}}">
                <BaseWineCard wine={wine} />
              </section>{" "}
              <Sections wine={wine} />
            </ComparisonCard>
          ))}
        </div>
        <div className="flex">
          {compareList.map((wine) => (
            <ComparisonCard key={wine.id} className="relative flex flex-col">
              <Card>
                <Link
                  href={`/wines/${wine.slug}`}
                  className="-m-2 block rounded-md p-2 text-center decoration-slate-400 hover:bg-slate-50 hover:font-semibold focus:bg-slate-50 focus:font-semibold dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                >
                  Details →
                </Link>
              </Card>
            </ComparisonCard>
          ))}
        </div>
      </div>
    </>
  )
}
