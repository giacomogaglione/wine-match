import { useEffect, useState } from "react"
import Comparison from "@/components/comparison/comparison"
import { useStore } from "@/store/compare-store"

export default function ComparePage() {
  const compareList = useStore((state) => state.compareList)
  const compareLength = compareList.length
  const [myCompareLength, setCompareLength] = useState(0)

  useEffect(() => {
    setCompareLength(compareLength)
  }, [compareLength])

  if (myCompareLength === 0) {
    return (
      <>
        <h1 className="h1 pb-6"></h1>
      </>
    )
  }

  return (
    <>
      {myCompareLength === 1 ? (
        <>
          <h1 className="h1 pb-6">Compare with...</h1>
          <div className="max-w-xl"></div>
        </>
      ) : (
        <Comparison />
      )}
    </>
  )
}
