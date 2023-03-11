import Image from "next/image"
import Link from "next/link"
import BlurImage from "@/components/blur-image"
import { Wine } from "@/types/types"

interface IBaseWineCardProps {
  wine?: Wine
}

export default function BaseWineCard({ wine }: IBaseWineCardProps) {
  return (
    <div className="flex p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}}">
      <BlurImage imgSrc={wine.image} imgAlt={wine.name} height="8rem" />
      <div className="w-full py-2 text-sm font-medium text-slate-800 dark:text-slate-300">
        <Link
          href={`/producers/${wine.producer_slug}`}
          className="text-sm text-slate-600 decoration-slate-400 hover:underline dark:text-slate-400 dark:decoration-slate-600"
          prefetch={false}
        >
          {wine.producer}
        </Link>
        <br />
        <div className="mt-3 mb-6 flex items-center text-sm font-normal text-slate-600 dark:text-slate-400">
          <div className="relative mr-2 h-4 w-4 rounded-full">
            <Image
              src={wine.country_flag}
              alt={wine.country}
              fill
              objectFit="cover"
              className="rounded-full"
              sizes="(max-width: 768px) 15vw,
              (max-width: 1200px) 10vw,
              5vw"
            />
          </div>
          <Link
            href={`/regions/${wine.region_slug}`}
            className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600"
            prefetch={false}
          >
            {wine.region}
          </Link>
          {",  "}
          <Link
            href={`/countries/${wine.country_slug}`}
            className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600"
            prefetch={false}
          >
            {wine.country}
          </Link>
        </div>
      </div>
    </div>
  )
}
