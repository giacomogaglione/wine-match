import create from "zustand"
import { persist } from "zustand/middleware"

interface Wine {
  id: number
  slug?: string
  name?: string
  producer?: string
  country?: string
  type?: string
  country_slug?: string
  region_slug?: string
  region?: string
  image?: string
  country_flag?: string
}

interface CompareProps {
  compareList: Wine[]
  addItem: (wine: Wine) => void
  removeItem: (wineId: number) => void
}

export const useStore = create(
  persist<CompareProps>(
    (set, get) => ({
      compareList: [],
      addItem: (wine: Wine) => {
        set((state) => {
          const compareList = [...state.compareList]
          compareList.push(wine)
          return { compareList }
        })
      },
      removeItem: (wineId: number) => {
        set((state) => {
          const compareList = [...state.compareList]
          const existingIndex = compareList.findIndex(
            (wine) => wine.id === wineId
          )
          if (existingIndex > -1) {
            compareList.splice(existingIndex, 1)
          }
          return { compareList }
        })
      },
    }),
    { name: "compareList-storage" }
  )
)
