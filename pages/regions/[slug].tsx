import Hit from "@/components/search/instantsearch/hit"
import SearchBar from "@/components/search/instantsearch/search-bar"
import Seo from "@/components/seo"
import { searchClient } from "@/lib/search-client"
import { client } from "@/lib/supabase-client"
import { Hits, InstantSearch, Pagination } from "react-instantsearch-hooks-web"

export default function Region({ region }) {
  return (
    <>
      <Seo title={`${region.name} - Wine Match`} />
      <div className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-300">
        {region.name}
      </div>
      <InstantSearch searchClient={searchClient} indexName="prod_wines">
        <SearchBar />
        <Hits
          classNames={{
            list: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            item: "flex p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}",
          }}
          hitComponent={Hit}
        />
        <Pagination
          classNames={{
            list: "flex my-1 text-sm",
            item: "border px-2 mr-2 py-1 items-center justify-center dark:border-slate-900 hover:ring-2 ring-1 ring-slate-300/10 dark:ring-slate-700 transition-all rounded-lg bg-slate-100/75 dark:bg-slate-900/75 text-slate-500 hover:text-slate-700 dark:text-slate-400 hover:bg-slate-200/75 dark:hover:bg-slate-700/75",
            selectedItem:
              "font-medium bg-slate-100/75 dark:bg-slate-800/75 text-slate-700 dark:text-slate-400 ring-slate-300 dark:ring-slate-900 ring-2",
          }}
          padding={1}
        />
      </InstantSearch>
    </>
  )
}

export const getStaticPaths = async () => {
  const { data, error } = await client
    .from("regions")
    .select("slug")
    .neq("slug", "")
    .limit(120)

  const paths = data.map((region) => {
    return {
      params: { slug: region.slug.toString() },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data } = await client
    .from("regions")
    .select("*")
    .filter("slug", "eq", slug)

  return {
    props: {
      region: data[0],
    },
  }
}
