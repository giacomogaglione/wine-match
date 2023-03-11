import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-1">
        <Image
          width={65}
          priority
          height={45}
          src="https://res.cloudinary.com/winecompare/image/upload/v1669683375/wine_match_logo.svg"
          alt="wine_match_logo"
        />
        <span className="whitespace-nowrap font-sans text-xl font-bold tracking-tight text-slate-800 dark:text-slate-300">
          Wine
        </span>
        <span className="whitespace-nowrap font-sans text-xl font-bold tracking-tight text-indigo-500">
          Match
        </span>
      </div>
    </Link>
  )
}

export default Logo
