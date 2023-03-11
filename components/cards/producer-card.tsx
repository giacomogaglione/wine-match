import Image from "next/image"
import Link from "next/link"
import BlurImage from "@/components/blur-image"
import { Producer } from "@/types/types"

interface IProducerCardProps {
  producer: Producer
}

export default function ProducerCard({ producer }: IProducerCardProps) {
  return (
    <span className="flex p-2 rounded-xl bg-slate-100/75 dark:bg-slate-800/75 overflow-hidden shadow-xl scale-100 style={{ backdropFilter: 'blur(10px)', }}">
      <BlurImage imgSrc={producer.image} imgAlt={producer.name} />
      <div className="w-full px-4 pb-2 pt-1 text-sm font-medium text-slate-800 dark:text-slate-300">
        <Link href={`/producers/${producer.slug}`}>{producer.name} </Link>
        <div className="mb-10 mt-1 flex items-center text-sm font-normal text-slate-600 dark:text-slate-400">
          <div className="relative mr-2 h-4 w-4 rounded-full">
            <Image
              src={producer.country_flag}
              alt={producer.country}
              fill
              objectFit="cover"
              className="rounded-full"
              sizes="(max-width: 768px) 15vw,
              (max-width: 1200px) 10vw,
              5vw"
            />
          </div>
          <span className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600">
            {producer.region}
          </span>
          {",  "}
          <span className="hover:underline hover:decoration-slate-400 dark:hover:decoration-slate-600">
            {producer.country}
          </span>
        </div>
      </div>
    </span>
  )
}
