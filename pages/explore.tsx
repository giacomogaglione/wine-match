import dynamic from "next/dynamic"
import Hit from "@/components/search/instantsearch/hit"
import { InfiniteHits } from "@/components/search/instantsearch/infinite-hits"
import SearchBar from "@/components/search/instantsearch/search-bar"
import getRouting from "@/components/search/routing"
import Seo from "@/components/seo"
import { Button } from "@/components/ui/button"
import { DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { searchClient } from "@/lib/search-client"
import { FunnelIcon } from "@heroicons/react/24/outline"
import {
  CurrentRefinements,
  InstantSearch,
} from "react-instantsearch-hooks-web"

const ToastCompare = dynamic(
  () => import("@/components/comparison/toast-compare")
)

const Dialog = dynamic(() =>
  import("@/components/ui/dialog").then((mod) => mod.Dialog)
)

const Filters = dynamic(() =>
  import("@/components/search/instantsearch/filters").then((mod) => mod.Filters)
)

const VirtualFilters = dynamic(() =>
  import("@/components/search/instantsearch/filters").then(
    (mod) => mod.VirtualFilters
  )
)

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
const routing = getRouting(indexName)

export default function Home() {
  return (
    <>
      <Seo title="Explore Wines - Wine Match" />
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
        routing={routing}
      >
        <SearchBar />
        <div className="mx-auto">
          <div className="dark-text-slate-400 fixed inset-0 left-[max(0px,calc(50%-39rem))] right-auto top-[9rem] z-20 hidden w-[19rem] overflow-auto rounded-lg px-2 pb-10 text-slate-600 lg:block">
            <CurrentRefinements
              classNames={{
                root: "ml-2 text-sm text-slate-600 dark:text-slate-400",
                list: "flex flex-wrap",
                item: "px-2 mr-1 my-1 py-[0.75] text-xs items-center justify-center rounded-full border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-500 dark:hover:border-slate-500",
                label: "cursor-pointer text-xs",
              }}
            />
            <VirtualFilters />
            <Filters />
          </div>
          <div className="lg:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="lg"
                  className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-max"
                  aria-label="Filters icon"
                >
                  Filters
                  <FunnelIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90%]">
                <VirtualFilters />
                <Filters />
              </DialogContent>
            </Dialog>
          </div>
          <div className="inset-0 top-[11rem] pt-3 lg:pl-[19rem]">
            <InfiniteHits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
      <ToastCompare />
    </>
  )
}
