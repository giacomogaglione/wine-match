import ToastCompare from "@/components/comparison/toast-compare"
import Hit from "@/components/search/instantsearch/hit"
import SearchBar from "@/components/search/instantsearch/search-bar"
import { searchClient } from "@/lib/search-client"
import {
  Configure,
  Hits,
  InstantSearch,
  Menu,
  Pagination,
} from "react-instantsearch-hooks-web"

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

export default function PageInstantSearch({ attribute, filters }) {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <Configure filters={filters} />
        <SearchBar />
        <Menu
          classNames={{
            list: "flex flex-wrap mb-3 text-xs space-x-2",
            item: "px-2 py-1 items-center justify-center rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-500 dark:hover:border-indigo-500",
            selectedItem:
              "font-medium border border-indigo-400 bg-indigo-400 dark:bg-indigo-500 text-slate-200 dark:text-slate-200 hover:text-slate-200 dark:hover:text-slate-200 hover:border-indigo-400/90",
            count: "font-extralight pl-1",
          }}
          limit={10}
          sortBy={["count:desc"]}
          attribute={attribute}
        />
        <Hits
          classNames={{
            list: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            item: "flex p-2 rounded-xl bg-slate-100/90 dark:bg-slate-800 overflow-hidden shadow-xl hover:shadow-2xl scale-100 style={{ backdropFilter: 'blur(10px)', }}",
          }}
          hitComponent={Hit}
        />
        <Pagination
          classNames={{
            list: "flex my-1 text-sm",
            item: "border px-2 mr-2 py-1 items-center justify-center dark:border-slate-900 hover:ring-2 ring-1 ring-slate-300/10 dark:ring-slate-700 transition-all rounded-lg bg-slate-100/50 dark:bg-slate-900/75 text-slate-500 hover:text-slate-700 dark:text-slate-400 hover:bg-slate-200/75 dark:hover:bg-slate-700/75",
            selectedItem:
              "font-bold ring-2 bg-slate-100 dark:bg-slate-700/90 text-slate-600 dark:text-slate-400 ring-indigo-500 ring-2",
          }}
          padding={1}
        />
      </InstantSearch>
      <ToastCompare />
    </>
  )
}
