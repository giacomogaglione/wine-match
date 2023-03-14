import Image from "next/image"
import BlurImage from "@/components/blur-image"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"

const Fact = ({ content, label }) => {
  return (
    <div className="my-4 flex flex-col">
      <dt className="mx-auto mb-1 text-3xl font-extrabold text-slate-800 dark:text-slate-300 md:text-4xl">
        {content}
      </dt>
      <dd className="mx-auto text-xl font-medium text-slate-600 dark:text-slate-400">
        {label}
      </dd>
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className="w-full pl-3">
      <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
      <div className="my-2 h-2 w-1/3 rounded-md bg-slate-300 dark:bg-slate-700"></div>
      <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
    </div>
  )
}
const Features = () => {
  return (
    <>
      <div className="mx-auto mt-6 text-center">
        <div className="mx-auto h-[100px] w-[1px] bg-gradient-to-b from-[#dee2fd] via-cyan-400 to-indigo-500 dark:from-[#0f1734] dark:via-cyan-400 dark:to-indigo-500"></div>
        <span className="rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 py-2 px-3 text-lg font-semibold text-white">
          1
        </span>
      </div>
      <div className="my-6 text-center">
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent ">
          Explore
        </span>
        <div className="texl-lg mx-auto mt-6 max-w-2xl font-semibold text-slate-600 dark:text-slate-400">
          Unlock the secrets of Wine-Tasting: learn about different wines,
          flavors, and characteristics, and find your perfect match.
        </div>
      </div>
      <div className="mx-auto max-w-4xl flex-row lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="flex max-w-sm rounded-xl border border-slate-300 px-4 py-2 shadow dark:border-slate-700 md:p-6 ">
              <BlurImage
                imgSrc="https://res.cloudinary.com/winecompare/image/upload/v1669683375/white_wine_placeholder.png"
                imgAlt="White wine placeholder"
                height="8rem"
              />
              <div className="w-full">
                <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <div className="my-2 h-2 w-1/3 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <button className="mt-6 flex items-center rounded-md bg-slate-300 py-1 px-2 hover:shadow-lg dark:bg-slate-700">
                  <StarIconSolid className="h-4 w-4 font-medium text-indigo-500" />
                  <span className="ml-1 text-xs font-semibold text-indigo-500">
                    Compare
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="z-1 relative mt-6 lg:top-[-20px] lg:left-28 lg:mt-0">
            <div className="flex max-w-sm rounded-xl border border-slate-300 p-4 shadow dark:border-slate-700 md:p-6">
              <BlurImage
                imgSrc="https://res.cloudinary.com/winecompare/image/upload/v1669683375/red_wine_placeholder.png"
                imgAlt="Red wine placeholder"
                height="8rem"
              />
              <div className="w-full">
                <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <div className="my-2 h-2 w-1/3 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <div className="my-2 h-2 w-1/2 rounded-md bg-slate-300 dark:bg-slate-700"></div>
                <button className="mt-6 flex items-center rounded-md bg-slate-300 py-1 px-2 hover:shadow-lg dark:bg-slate-700">
                  <StarIconSolid className="h-4 w-4 font-medium text-indigo-500" />
                  <span className="ml-1 text-xs font-semibold text-indigo-500">
                    Compare
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-full lg:w-1/2">
          <Fact content="8K+" label="WINES" />
          <Fact content="2K+" label="PRODUCERS" />
          <Fact content="300+" label="REGIONS" />
        </div>
      </div>

      <div className="mx-auto mt-6 text-center">
        <div className="mx-auto h-[100px] w-[1px] bg-gradient-to-b from-[#dee2fd] via-cyan-400 to-emerald-500 dark:from-[#0f1734] dark:via-cyan-400 dark:to-emerald-500"></div>
        <span className="rounded-full bg-gradient-to-b from-emerald-500 to-cyan-400 py-2 px-3 text-lg font-semibold text-white">
          2
        </span>
      </div>
      <div className="my-6 text-center">
        <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent ">
          {" "}
          Compare
        </span>
        <div className="texl-lg mx-auto mt-6 max-w-2xl font-semibold text-slate-600 dark:text-slate-400">
          Experience the ultimate wine showdown and compare wines side-by-side
          with the innovative comparison feature, unlocking a world of flavors,
          textures, and aromas with every sip.
        </div>
      </div>
      <div className="mx-auto max-w-4xl flex-row lg:flex">
        <div className="m-auto w-full lg:w-1/2">
          <Fact content="15+" label="ATTRIBUTES" />
          <Fact content="150+" label="PAIRINGS" />
          <Fact content="10+" label="AWARDS" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto my-6 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
            <div className="w-1/2">
              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <div className="relative h-[8rem] w-2/3 overflow-hidden rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/winecompare/image/upload/v1669683375/white_wine_placeholder.png"
                    alt="White wine placeholder"
                    fill
                    sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 15vw,
              15vw"
                    className="object-contain"
                  />
                </div>
                <Skeleton />
              </div>

              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <Skeleton />
              </div>
              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <Skeleton />
              </div>
            </div>
            <div className="w-1/2">
              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <div className="relative h-[8rem] w-2/3 overflow-hidden rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/winecompare/image/upload/v1669683375/red_wine_placeholder.png"
                    alt="Red wine placeholder"
                    fill
                    sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 15vw,
              15vw"
                    className="object-contain"
                  />
                </div>{" "}
                <Skeleton />
              </div>
              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <Skeleton />
              </div>
              <div className="m-2 flex max-w-sm rounded-xl border border-slate-300 p-2 shadow dark:border-slate-700">
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
