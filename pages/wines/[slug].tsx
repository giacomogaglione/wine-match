import Link from "next/link"
import { useRouter } from "next/router"
import BlurImage from "@/components/blur-image"
import {
  EnjoySection,
  MainSection,
  OrganolepticSection,
} from "@/components/comparison/costants"
import Seo from "@/components/seo"
import { client } from "@/lib/supabase-client"

export default function Wine({ wine, relatedProducts }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Seo title={`${wine.name} - Wine Match`} image={wine.image} />
      <div className="text-sm text-slate-600 dark:text-slate-400">
        <Link
          href={`/explore`}
          className="decoration-slate-400 hover:underline dark:decoration-slate-600"
        >
          {"Wines"}
        </Link>
        {" > "}
        <Link
          href={`/explore?types=${wine.type}`}
          className="decoration-slate-400 hover:underline dark:decoration-slate-600"
        >
          {wine.type}
        </Link>
        {" > "}
        <Link
          href={`/countries/${wine.country_slug}`}
          className="decoration-slate-400 hover:underline dark:decoration-slate-600"
        >
          {wine.nazione}
        </Link>
        {" > "}
        <Link
          href={`/regions/${wine.region_slug}`}
          className="decoration-slate-400 hover:underline dark:decoration-slate-600"
        >
          {wine.region}
        </Link>
        {" > "}
        <span className="font-medium">{wine.name}</span>
      </div>
      <div className="mx-auto flex flex-wrap">
        <BlurImage imgSrc={wine.image} imgAlt={wine.name} isLarge />
        <div className="mt-6 w-full lg:mt-0 lg:w-2/3 lg:py-6">
          <Link
            href={`/producers/${wine.producer_slug}`}
            className="text-medium font-medium text-slate-600 decoration-slate-400 hover:underline dark:text-slate-400 dark:decoration-slate-600"
          >
            {wine.producer}
          </Link>
          <div className="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-300">
            {wine.name}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {wine.desc_short}
          </p>
          <div className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-300">
            Facts about the wine
          </div>

          <div className="relative mt-2 overflow-x-auto">
            <div className="bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl style={{ backdropFilter: 'blur(10px)', }}">
              <table className="w-full table-auto text-left text-sm text-slate-500 dark:text-slate-400">
                <tbody>
                  {MainSection.map((item) => (
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
                      <td className="py-1">{item.content(wine)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-wrap">
        <div className="flex w-full lg:mt-0 lg:w-1/3 lg:py-2">
          <div className="relative mt-2 w-full overflow-x-auto lg:mr-4">
            <div className="bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl style={{ backdropFilter: 'blur(10px)', }}">
              <table className="w-full table-auto text-left text-sm text-slate-500 dark:text-slate-400">
                <caption className="bg-slate-200/50 py-2 text-xl font-semibold text-slate-800 dark:bg-slate-700/50 dark:text-slate-300">
                  To enjoy it
                </caption>
                <tbody>
                  {EnjoySection.map((item) => (
                    <tr
                      key={item.label}
                      className="border-b hover:bg-slate-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                    >
                      <th
                        scope="row"
                        className="py-1 px-2 font-medium text-slate-600 dark:text-slate-400"
                      >
                        {item.label}
                      </th>
                      <td className="py-1">{item.content(wine)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:mt-0 lg:w-2/3 lg:py-2">
          <div className="relative mt-2 w-full overflow-x-auto">
            <div className=" bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl style={{ backdropFilter: 'blur(10px)', }}">
              <table className="w-full table-auto text-left text-sm text-slate-500 dark:text-slate-400">
                <caption className="bg-slate-200/50 py-2 text-xl font-semibold text-slate-800 dark:bg-slate-700/50 dark:text-slate-300">
                  Organoleptic facts
                </caption>
                <tbody>
                  {OrganolepticSection.map((item) => (
                    <tr
                      key={item.label}
                      className="border-b hover:bg-slate-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                    >
                      <th
                        scope="row"
                        className="py-1 px-2 font-medium text-slate-600 dark:text-slate-400"
                      >
                        {item.label}
                      </th>
                      <td className="py-1 ">{item.content(wine)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-300">
        Food that goes well with this wine
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
          <div className="flex animate-pulse items-center justify-center space-x-4 ">
            <div className="my-2 h-20 w-20 rounded-full bg-slate-300"></div>
          </div>
          <div className="justify-center text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            {relatedProducts?.food_1}
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
          <div className="flex animate-pulse items-center justify-center space-x-4 ">
            <div className="my-2 h-20 w-20 rounded-full bg-slate-300"></div>
          </div>
          <div className="justify-center text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            {relatedProducts?.food_2}
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
          <div className="flex animate-pulse items-center justify-center space-x-4 ">
            <div className="my-2 h-20 w-20 rounded-full bg-slate-300"></div>
          </div>
          <div className="justify-center text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            {relatedProducts?.food_3}
          </div>
        </div>
        <div className="flex flex-col p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
          <div className="flex animate-pulse items-center justify-center space-x-4 ">
            <div className="my-2 h-20 w-20 rounded-full bg-slate-300"></div>
          </div>
          <div className="justify-center text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            {relatedProducts?.food_4}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const { data, error } = await client
    .from("wines")
    .select("slug")
    .neq("slug", "")

  const paths = data.map((wine) => ({
    params: {
      slug: wine.slug.toString(),
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const { data } = await client
    .from("wines")
    .select("*")
    .filter("slug", "eq", slug)
    .single()

  const { data: relatedProducts } = await client
    .from("pairings")
    .select("*")
    .filter("pairing_id", "eq", data.pairing_id)
    .single()

  return {
    props: {
      wine: data,
      relatedProducts: relatedProducts,
    },
  }
}
