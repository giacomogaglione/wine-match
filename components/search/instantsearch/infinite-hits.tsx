import React, { useEffect, useRef } from "react"
import { useInfiniteHits } from "react-instantsearch-hooks-web"

export function InfiniteHits({ hitComponent: HitComponent, ...props }) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props)
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore()
          }
        })
      })

      observer.observe(sentinelRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [isLastPage, showMore])

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {hits.map((hit) => (
          <div
            key={hit.objectID}
            className="test flex scale-100 overflow-hidden rounded-xl bg-slate-100/60 p-2 shadow-xl hover:shadow-2xl dark:bg-slate-800/60 "
          >
            <HitComponent hit={hit} />
          </div>
        ))}
        <li
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
