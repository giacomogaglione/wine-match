import { useRef, useState, type ChangeEvent } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { UseSearchBoxProps, useSearchBox } from "react-instantsearch-hooks-web"

const queryHook: UseSearchBoxProps["queryHook"] = (query, search) => {
  search(query)
}

const SearchBar = () => {
  const [text, setText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { refine, clear } = useSearchBox({ queryHook })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    refine(query)
    setText(query)
  }

  return (
    <div className="sticky top-[5rem] z-10">
      <div className="group relative mx-auto mb-4 overflow-y-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4">
          <MagnifyingGlassIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </div>
        <input
          ref={inputRef}
          aria-label="Wine search input"
          name="text"
          type="text"
          autoComplete="on"
          value={text}
          placeholder="Search for product, producer, region"
          className="block w-full rounded-xl border bg-slate-100 p-2.5 pl-12 text-sm font-light text-slate-600 outline-none transition-all focus:border-slate-500/50 dark:border-none dark:bg-slate-800 dark:text-slate-500 sm:text-base"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchBar
