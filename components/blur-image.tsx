import { useState } from "react"
import Image from "next/image"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

type Props = {
  imgSrc: string
  imgAlt: string
  isLarge?: boolean
  height?: number | string
}

const BlurImage = ({
  imgSrc,
  imgAlt,
  isLarge = false,
  height = "auto",
}: Props) => {
  const [isLoading, setLoading] = useState(true)

  const imageContainerClassNames = isLarge
    ? "lg:w-1/3 h-80 lg:h-auto w-full"
    : "w-1/3"

  const imageClassNames = cn(
    "shrink-0 object-contain duration-700 ease-in-out hover:scale-150 hover:opacity-75",
    isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
  )

  const heightStyle = isLarge ? {} : { height: height }

  return (
    <div
      className={`${imageContainerClassNames} relative overflow-hidden rounded-lg`}
      style={heightStyle}
    >
      <Image
        priority
        src={imgSrc}
        alt={imgAlt}
        fill
        sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 15vw,
              15vw"
        className={imageClassNames}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default BlurImage
