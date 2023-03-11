import dynamic from "next/dynamic"
import Link from "next/link"
import { client } from "@/lib/supabase-client"

const SearchBar = dynamic(() =>
  import("@/components/search/autocomplete/search-bar").then(
    (mod) => mod.Search
  )
)

const WineCard = dynamic(() => import("@/components/cards/wine-card"))
export default function Page({ bestPicks, italyMostPopular }) {
  return (
    <>
      <div className="relative mx-auto max-w-5xl pt-10 lg:pt-14">
        <div className="text-center text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-300 sm:text-5xl lg:text-6xl">
          Rapidly compare wines without changing tab.
        </div>
        <div className="mt-4 text-center text-lg font-semibold text-slate-600 dark:text-slate-400 lg:mt-6">
          The most extensive source of wines, spumanti and champagnes.
        </div>
        <div className="mt-6 flex-row items-center justify-center text-center lg:flex lg:space-x-6">
          <Link href="/wines">
            <div className="mb-3 rounded-full bg-indigo-600 px-6 py-2 text-lg font-bold text-white hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-700 lg:mb-0">
              Explore All
            </div>
          </Link>
          <SearchBar />
        </div>
      </div>
      <div>
        <div className="mt-6 w-full rounded-xl bg-gradient-to-l from-indigo-400/20 via-indigo-300/20 to-emerald-200/20 p-4 font-extrabold dark:from-indigo-900/20 dark:via-indigo-700/20 dark:to-emerald-800/20 lg:mt-14">
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-300">
            Best Picks
          </div>
          <div className="texl-lg font-medium text-slate-600 dark:text-slate-400 ">
            Get great value and seamless service with these brilliant wines
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bestPicks?.map((wine) => (
              <div
                className="flex p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}}"
                key={wine.id}
              >
                <WineCard wine={wine} compareToggle={false} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-400/20 via-indigo-300/20 to-emerald-200/20 p-4 font-extrabold dark:from-indigo-900/20 dark:via-indigo-700/20 dark:to-emerald-800/20">
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-300">
            Most popular in Italy
          </div>
          <div className="texl-lg font-medium text-slate-600 dark:text-slate-400 ">
            Most popular in Italy right now.
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {italyMostPopular?.map((wine) => (
              <div
                className="flex p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}}"
                key={wine.id}
              >
                <WineCard wine={wine} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await client
    .from("wines")
    .select(
      `id, name, slug, image, region, region_slug, country, country_slug, country_flag, producer, producer_slug, veronelli_score, wine_enthusiast_score, luca_maroni_score, james_suckling_score, gambero_rosso_score, bibenda_score, wine_spectator_score, robert_parker_score, slowine_score, vitae_ais_score`
    )
    .in("id", [188, 7158, 38])

  const { data: italyMostPopular } = await client
    .from("wines")
    .select(
      `id, name, slug, image, region, region_slug, country, country_slug, country_flag, producer, producer_slug, veronelli_score, wine_enthusiast_score, luca_maroni_score, james_suckling_score, gambero_rosso_score, bibenda_score, wine_spectator_score, robert_parker_score, slowine_score, vitae_ais_score`
    )
    .filter("country", "eq", "Italy")
    .limit(3)

  return {
    props: {
      bestPicks: data,
      italyMostPopular: italyMostPopular,
    },
  }
}
