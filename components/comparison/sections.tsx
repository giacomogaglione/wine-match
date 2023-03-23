import { Fragment, useEffect, useState } from "react"
import { client } from "@/lib/supabase-client"

import Card from "./card"
import {
  AwardsSection,
  EnjoySection,
  MainSection,
  OrganolepticSection,
} from "./costants"

type Props = {
  wine: any
}

export default function AwardsAndOrganolepticSection({ wine }: Props) {
  const [dataIntegration, setDataIntegration] = useState(null)

  useEffect(() => {
    const fetchDataIntegration = async () => {
      const { data, error } = await client
        .from("wines")
        .select("*")
        .eq("id", wine.id)

      if (error) {
        console.error(error)
        return
      }
      if (data) {
        setDataIntegration(data[0])
      }
    }
    fetchDataIntegration()
  }, [wine.id])

  if (!dataIntegration) {
    return (
      <>
        <Card heading="Base Stats">
          {AwardsSection.map((item) => (
            <Fragment key={item.label}>
              <div className="flex items-center justify-between text-sm">
                <div>{item.label}</div>
                <div className="shimmer h-3 w-6" />
              </div>
              <div className="shimmer mt-1 mb-2 h-2 w-full flex-1" />
            </Fragment>
          ))}
        </Card>
        <Card heading="Abilities">
          <div className="shimmer mt-2 h-2 w-2" />
          <div className="-mt-2.5 pl-4">
            <div className="shimmer h-3 w-16" />
            <div className="shimmer mt-2.5 h-3 w-full" />
            <div className="shimmer mt-2.5 h-3 w-4/5" />
          </div>
          <div className="shimmer mt-5 h-2 w-2" />
          <div className="-mt-2.5 mb-5 pl-4">
            <div className="shimmer h-3 w-16" />
            <div className="shimmer mt-2.5 h-3 w-full" />
            <div className="shimmer mt-2.5 h-3 w-4/5" />
          </div>
        </Card>
      </>
    )
  }

  return (
    <>
      <Card heading="Main Facts" className="grow">
        <div className="relative mt-2 overflow-x-auto">
          <div className="bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl style={{ backdropFilter: 'blur(10px)', }}">
            <table className="w-full table-auto text-left text-sm text-slate-500 dark:text-slate-400">
              <tbody>
                {MainSection.map((item) => (
                  <tr
                    key={item.label}
                    className="border-b hover:bg-slate-200/25 dark:border-slate-700 dark:hover:bg-slate-700/50"
                  >
                    <th
                      scope="row"
                      className="py-1 px-2 font-medium text-slate-600 dark:text-slate-400"
                    >
                      {item.label}
                    </th>
                    <td className="py-1">{item.content(dataIntegration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <Card heading="Organoleptic Facts" className="grow">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {OrganolepticSection.map((item) => (
            <li key={item.label}>
              <div className="font-semibold text-slate-800 dark:text-slate-300">
                {item.label}
              </div>
              {item?.content && (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {item.content(dataIntegration)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Card>

      <Card heading="To Enjoy" className="grow">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {EnjoySection.map((item) => (
            <li key={item.label}>
              <div className="font-semibold text-slate-800 dark:text-slate-300">
                {item.label}
              </div>
              {item?.content && (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {item.content(dataIntegration)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Card>

      <Card heading="Awards">
        {AwardsSection.map((item) => {
          const baseStat = item.score(wine)
          const baseScore = item.baseScore
          return (
            <Fragment key={item.label}>
              <div className="flex justify-between text-sm">
                <div className="text-slate-600 dark:text-slate-400">
                  {item.name}
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-300">
                  {baseStat} / {baseScore}
                </div>
              </div>
              <div className="mt-1 mb-2 h-2 w-full flex-1 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800">
                <div
                  className="h-full bg-indigo-500 transition-all"
                  style={{
                    width: `${(baseStat / baseScore) * 100}%`,
                  }}
                />
              </div>
            </Fragment>
          )
        })}
      </Card>
    </>
  )
}
