import { useEffect, useState } from "react"
import Toast from "@/components/ui/toast"
import { useStore } from "@/store/compare-store"

export default function ToastCompare() {
  const compareList = useStore((state) => state.compareList)
  const compareLength = compareList.length
  const [myCompareLength, setCompareLength] = useState(0)

  useEffect(() => {
    setCompareLength(compareLength)
  }, [compareLength])

  if (myCompareLength === 1)
    return (
      <Toast
        title="Almost there!"
        description="Select one more wines to compare"
      />
    )

  if (myCompareLength > 4)
    return <Toast title="Ooops!" description="Too many wines in comparison" />
  return
}
