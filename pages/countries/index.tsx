import CountryCard from "@/components/cards/country-card"
import { client } from "@/lib/supabase-client"

export default function Countries({ countries }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: countries } = await client
    .from("countries")
    .select("*")
    .order("count_wines", { ascending: false })

  return {
    props: {
      countries,
    },
  }
}
