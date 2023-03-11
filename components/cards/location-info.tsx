import Image from "next/image"
import Link from "next/link"
import { Wine } from "@/types/types"

interface ILocationInfoProps {
  wine?: Wine
}

export default function LocationInfo({ wine }: ILocationInfoProps) {
  return (
    <div className="mt-1 flex items-center text-sm font-normal text-slate-600 dark:text-slate-400">
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
      {", "}
      &nbsp;
      <Link
        href={`/countries/${wine.country_slug}`}
        className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600"
        prefetch={false}
      >
        {wine.country}
      </Link>
    </div>
  )
}
