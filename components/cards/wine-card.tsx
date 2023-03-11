import Link from "next/link"
import BlurImage from "@/components/blur-image"
import { Wine } from "@/types/types"

import Awards from "./awards"
import CompareToggle from "./compare-toggle"
import LocationInfo from "./location-info"

interface IWineCardProps {
  wine?: Wine
  compareToggle?: boolean
}

export default function WineCard({
  wine,
  compareToggle = true,
}: IWineCardProps) {
  return (
    <>
      <BlurImage imgSrc={wine.image} imgAlt={wine.name} />
      <div className="w-full px-4 pb-4 pt-1 text-sm font-medium text-slate-800 dark:text-slate-300">
        <Link
          href={`/producers/${wine.producer_slug}`}
          className="text-sm text-slate-600 decoration-slate-400 hover:underline dark:text-slate-400 dark:decoration-slate-600"
          prefetch={false}
        >
          {wine.producer}
        </Link>
        <br />
        <Link href={`/wines/${wine.slug}`} prefetch={false}>
          {wine.name}
        </Link>
        <LocationInfo wine={wine} />
        <Awards wine={wine} />
        {compareToggle && <CompareToggle wine={wine} />}
      </div>
    </>
  )
}
