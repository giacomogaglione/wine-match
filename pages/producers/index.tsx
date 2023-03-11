import ProducerCard from "@/components/cards/producer-card"
import { client } from "@/lib/supabase-client"

export default function Wineries({ producers }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {producers.map((producer) => (
        <ProducerCard key={producer.id} producer={producer} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: producers } = await client
    .from("producers")
    .select("*")
    .limit(9)

  return {
    props: {
      producers,
    },
  }
}
