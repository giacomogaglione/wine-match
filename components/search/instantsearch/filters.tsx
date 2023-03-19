import React, { useEffect, useRef } from "react"
import {
  RefinementList,
  useInstantSearch,
  useRefinementList,
} from "react-instantsearch-hooks-web"

const items = [
  {
    label: "Wine Types",
    attribute: "type",
    searchable: false,
    showMore: false,
  },
  {
    label: "Grapes",
    attribute: "_tags",
    searchable: true,
    searchablePlaceholder: "Search grapes",
    showMore: true,
  },
  {
    label: "Regions",
    attribute: "region",
    searchable: true,
    searchablePlaceholder: "Search regions",
    showMore: true,
  },
  {
    label: "Countries",
    attribute: "country",
    searchable: true,
    searchablePlaceholder: "Search countries",
    showMore: true,
  },
  {
    label: "Wine styles",
    attribute: "classification",
    searchable: true,
    searchablePlaceholder: "Search wine styles",
    showMore: true,
  },
]

export function Filters() {
  const { uiState, setUiState } = useInstantSearch()
  const uiStateRef = useRef(uiState)

  // Keep up to date uiState in a reference
  useEffect(() => {
    uiStateRef.current = uiState
  }, [uiState])

  // Apply latest uiState to InstantSearch as the component is unmounted
  useEffect(() => {
    return () => {
      setTimeout(() => setUiState(uiStateRef.current))
    }
  }, [setUiState])

  return (
    <>
      {items.map((item) => (
        <div key={item.attribute} className="mr-4">
          <div className="text-medium mt-4 mb-1 font-semibold text-slate-800 dark:text-slate-400 ">
            {item.label}
          </div>
          <RefinementList
            attribute={item.attribute}
            limit={4}
            showMore={item.showMore}
            showMoreLimit={10}
            sortBy={["count:desc"]}
            searchable={item.searchable}
            searchablePlaceholder={item?.searchablePlaceholder}
            classNames={{
              root: "ml-2 text-sm text-slate-600 dark:text-slate-400",
              searchBox:
                "mb-2 bg-transparent border-b border-slate-300 dark:border-slate-600 sm:text-base",
              list: "flex flex-wrap",
              item: "px-2 mr-1 my-1 py-[0.75] text-xs items-center justify-center rounded-full border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-500 dark:hover:border-slate-500",
              selectedItem:
                "font-medium border border-slate-400 bg-slate-400/50 dark:bg-slate-400/50 text-white dark:text-slate-200 hover:text-slate-200 dark:hover:text-slate-200 hover:border-slate-400/90",
              label: "cursor-pointer text-xs",
              checkbox:
                "mr-2 peer h-3 w-3 shrink-0 rounded-sm border border-indigo-300",
              showMore:"font-extralight text-xs ml-1",
              count: "font-extralight text-xs ml-1",
            }}
          />
        </div>
      ))}
    </>
  )
}

export function VirtualFilters() {
  useRefinementList({ attribute: "type" })
  useRefinementList({ attribute: "_tags" })
  useRefinementList({ attribute: "region" })
  useRefinementList({ attribute: "country" })
  useRefinementList({ attribute: "classification" })

  return null
}
