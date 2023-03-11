import Link from "next/link"
import BlurImage from "@/components/blur-image"
import { Region } from "@/types/types"

interface IRegionCardProps {
  region?: Region
}

export default function RegionCard({ region }: IRegionCardProps) {
  return (
    <div className="flex p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
      <BlurImage imgSrc={region.country_flag} imgAlt={region.country} />
      <div className="w-full px-4 pb-2 pt-1 text-sm font-medium text-slate-800 dark:text-slate-300">
        <Link href={`/regions/${region.slug}`}>
          <span className="link-underline link link-underline-black">
            {region.name}
          </span>
        </Link>
        <p className="mb-10 mt-1 text-sm font-normal tracking-tight text-slate-600 dark:text-slate-400">
          <span className="flex items-center">Wines: {region.count_wines}</span>
        </p>
      </div>
    </div>
  )
}
