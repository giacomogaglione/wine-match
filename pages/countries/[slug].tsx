import Image from "next/image"
import PageInstantSearch from "@/components/search/instantsearch/page-instant-search"
import Seo from "@/components/seo"
import { client } from "@/lib/supabase-client"
import { FlagIcon } from "@heroicons/react/24/outline"

export default function Countries({ country }) {
  return (
    <>
      <Seo title={`${country.name} - Wine Match`} image={country.flag} />
      <div className="my-3 flex items-center py-2">
        <Image
          width={120}
          height={72}
          src={country.flag}
          alt={country.name}
          className="mx-3 rounded-md opacity-70"
        />
        <div className="w-full text-2xl font-bold text-slate-800 dark:text-slate-300">
          {country.name}
          <div className="text-medium my-1 flex items-center font-medium text-slate-600 dark:text-slate-400">
            <FlagIcon className="mr-1 h-5 w-5" />
            {country.count_regions} regions and {country.count_wines} wines
          </div>
        </div>
      </div>
      <PageInstantSearch
        attribute="region"
        filters={`country: "${country.name}"`}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const { data, error } = await client
    .from("countries")
    .select("slug")
    .neq("slug", "")
    .limit(30)

  const paths = data.map((country) => {
    return {
      params: { slug: country.slug.toString() },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data } = await client
    .from("countries")
    .select("name, count_regions, count_wines, flag")
    .filter("slug", "eq", slug)

  return {
    props: {
      country: data[0],
    },
  }
}
