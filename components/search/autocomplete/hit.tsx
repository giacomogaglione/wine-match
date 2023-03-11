import type { AutocompleteComponents } from "@algolia/autocomplete-js"
import type { Hit } from "@algolia/client-search"

export type Item = Hit<{
  slug: string
  name: string
}>
export type ItemProps = {
  hit: Item
  components: AutocompleteComponents
}

export function SearchItem({ hit, components }: ItemProps) {
  return (
    <a className="aa-ItemLink" href={`/wines/${hit.slug}`}>
      <div className="aa-ItemContent">
        {/* <div className="ItemCategory">{hit.tags[0]}</div> */}
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="name" />
        </div>
      </div>
    </a>
  )
}
