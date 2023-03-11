import RegionCard from "@/components/cards/region-card"
import { client } from "@/lib/supabase-client"

export default function Regions({ regions }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {regions.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: regions } = await client
    .from("regions")
    .select("*")
    .order("count_wines", { ascending: false })

  return {
    props: {
      regions,
    },
  }
}
