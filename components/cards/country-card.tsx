import Link from "next/link"
import BlurImage from "@/components/blur-image"
import { Country } from "@/types/types"

interface ICountryCardProps {
  country?: Country
}

export default function CountryCard({ country }: ICountryCardProps) {
  return (
    <Link href={`/countries/${country.slug}`}>
      <span className="flex p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
        <BlurImage imgSrc={country.flag} imgAlt={country.name} />
        <div className="w-full px-4 pb-2 pt-1 text-sm font-medium text-slate-900 dark:text-slate-300">
          <span className="link-underline link link-underline-black">
            {country.name}
          </span>
          <p className="mb-10 mt-1 text-sm font-normal tracking-tight text-slate-600 dark:text-slate-400">
            <span className="my-1 flex items-center ">
              {"Regions: "} {country.count_regions}
            </span>
            <span className="flex items-center">
              {"Wines: "} {country.count_wines}
            </span>
          </p>
        </div>
      </span>
    </Link>
  )
}
