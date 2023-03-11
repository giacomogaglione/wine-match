import WineCard from "@/components/cards/wine-card"

const Hit = ({ hit }: { hit: any }) => {
  return <WineCard key={hit.id} wine={hit} />
}

export default Hit
