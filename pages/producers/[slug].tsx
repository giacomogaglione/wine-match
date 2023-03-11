import Image from "next/image"
import Link from "next/link"
import WineCard from "@/components/cards/wine-card"
import Seo from "@/components/seo"
import { client } from "@/lib/supabase-client"

export default function Producers({ producer, relatedWines }) {
  const items = [
    { label: "Foundation year", content: producer?.foundation_year },
    { label: "Hectares of vineyards", content: producer?.hectares },
    { label: "Grapes own", content: producer?.grapes_own },
    { label: "Yearly production", content: producer?.production_yearly },
    { label: "Enologist", content: producer?.enologist },
    { label: "Address", content: producer?.address },
  ]

  return (
    <>
      <Seo title={`${producer.name} - Wine Match`} />
      <div className="mt-3 flex items-center rounded-md py-2">
        <div className="w-full text-2xl font-bold text-slate-800 dark:text-slate-300">
          {producer.name}
          <div className="mb-10 mt-1 flex items-center text-sm font-normal text-slate-600 dark:text-slate-400">
            <div className="relative mr-2 h-4 w-4 rounded-full">
              <Image
                src={producer.country_flag}
                alt={producer.country}
                fill
                objectFit="cover"
                className="rounded-full"
                sizes="(max-width: 768px) 15vw,
              (max-width: 1200px) 10vw,
              5vw"
              />
            </div>
            <Link
              href={`/regions/${producer.region}`}
              className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600"
            >
              {producer.regione}
            </Link>
            {",  "}
            <Link
              href={`/countries/${producer.country_slug}`}
              className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600"
            >
              {producer.nazione}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden p-2">
        <div className="relative w-full overflow-hidden text-sm lg:w-2/3">
          <p className="mb-1 font-semibold">{producer.subtitle}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {producer.desc}
          </p>
        </div>

        <div className="w-full pb-2 pt-1 text-sm font-medium text-slate-900 dark:text-slate-300 lg:w-1/3 lg:px-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className=" bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl style={{ backdropFilter: 'blur(10px)', }}">
              <table className="w-full table-auto text-left text-sm text-slate-500 dark:text-slate-400">
                <caption className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-300">
                  Producer facts
                </caption>
                <tbody>
                  {items.map((item) => (
                    <tr
                      key={item.label}
                      className="border-b hover:bg-slate-200/25 dark:border-slate-700 dark:hover:bg-slate-700/50"
                    >
                      <th
                        scope="row"
                        className="py-1 px-2 font-medium text-slate-600 dark:text-slate-400"
                      >
                        {item.label}
                      </th>
                      <td className="py-1 ">{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-300">
        Others from {producer?.name}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {relatedWines.map((wine) => (
          <div
            className="flex p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(16px)' 'saturate(180%)',}}"
            key={wine.id}
          >
            <WineCard wine={wine} compareToggle={false} />
          </div>
        ))}
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const { data, error } = await client
    .from("producers")
    .select("slug")
    .neq("slug", "")

  const paths = data.map((producer) => {
    return {
      params: {
        slug: producer.slug.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const { data } = await client
    .from("producers")
    .select("*")
    .eq("slug", slug)
    .single()

  const { data: relatedWines } = await client
    .from("wines")
    .select("*")
    .filter("producer_slug", "eq", slug)
    .limit(4)

  return {
    props: {
      producer: data,
      relatedWines: relatedWines,
    },
  }
}
