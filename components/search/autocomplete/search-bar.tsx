/* eslint-disable no-console */
import "@algolia/autocomplete-theme-classic"
import { Autocomplete } from "@/components/search/autocomplete/autocomplete"
import { SearchItem, type Item } from "@/components/search/autocomplete/hit"
import { searchClient } from "@/lib/search-client"
import {
  getAlgoliaResults,
  type AutocompleteComponents,
} from "@algolia/autocomplete-js"

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

export function Search() {
  return (
    <div>
      <Autocomplete
        openOnFocus={false}
        detachedMediaQuery=""
        placeholder="Search for wine, producer, region... "
        getSources={({ query }: { query: string }) => [
          {
            sourceId: "id",
            getItemUrl({ item }: { item: Item }) {
              return `/wines/${item.slug}`
            },
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName,
                    query,
                  },
                ],
              })
            },
            templates: {
              item({
                item,
                components,
              }: {
                item: Item
                components: AutocompleteComponents
              }) {
                return <SearchItem hit={item} components={components} />
              },
            },
          },
        ]}
      />
    </div>
  )
}
