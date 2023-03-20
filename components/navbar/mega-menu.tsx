import * as React from "react"
import Link from "next/link"
import MegaMenuItem from "@/components/navbar/mega-menu-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline"

export function MegaMenu() {
  return (
    <NavigationMenu className="px-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Wines</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[21rem] p-3 lg:w-[30rem]">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <div className="mb-1 font-medium">
                    <Link href="/explore?types=Red" prefetch={false}>
                      Red
                    </Link>
                  </div>
                  <MegaMenuItem
                    href="/explore?types=Red&regions=Tuscany"
                    text="Tuscany"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Primitive"
                    text="Southern Italy Primitivo"
                  />
                  <MegaMenuItem
                    href="/explore?classifications=Amarone%2520della%2520Valpolicella%2520DOCG"
                    text="Amarone"
                  />
                  <MegaMenuItem
                    href="explore?classifications=Bolgheri%2520DOC"
                    text="Bolgheri"
                  />
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <div className="mb-1 font-medium">
                    <Link href="/explore?types=White">White</Link>
                  </div>
                  <MegaMenuItem
                    href="/explore?types=White&countries=Italy"
                    text="Italian White"
                  />
                  <MegaMenuItem
                    href="/explore?types=White&countries=France"
                    text="French White"
                  />
                  <MegaMenuItem
                    href="explore?classifications=Barolo%2520DOCG"
                    text="Barolo"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Riesling"
                    text="German Riesling"
                  />
                </div>

                <div className="col-span-2 flex w-full flex-col text-sm text-slate-600 dark:text-slate-400">
                  <Link href="/explore" prefetch={false}>
                    <span className="flex items-center decoration-slate-400 hover:underline dark:decoration-slate-600">
                      Browse all wines
                      <ArrowSmallRightIcon className=" h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Grapes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[21rem] p-3 lg:w-[30rem]">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <MegaMenuItem
                    href="/explore?grapes=Sauvignon"
                    text="Cabernet Sauvignon"
                  />
                  <MegaMenuItem href="/explore?grapes=Merlot" text="Merlot" />
                  <MegaMenuItem
                    href="/explore?grapes=Chardonnay"
                    text="Chardonnay"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Pinot Nero"
                    text="Pinot Noir"
                  />
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <MegaMenuItem
                    href="/explore?grapes=Nebbiolo"
                    text="Nebbiolo"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Aglianico"
                    text="Aglianico"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Sangiovese"
                    text="Sangiovese"
                  />
                  <MegaMenuItem href="/explore?grapes=Barbera" text="Barbera" />
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <MegaMenuItem
                    href="/explore?grapes=Riesling"
                    text="Riesling"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Vermentino"
                    text="Vermentino"
                  />
                  <MegaMenuItem
                    href="/explore?grapes=Trebbiano"
                    text="Trebbiano"
                  />
                  <MegaMenuItem href="/explore?grapes=Syrah" text="Syrah" />
                </div>
                <div className="col-span-3 flex w-full flex-col text-sm text-slate-600 dark:text-slate-400">
                  <Link href="/explore" prefetch={false}>
                    <span className="flex items-center decoration-slate-400 hover:underline dark:decoration-slate-600">
                      Browse all grapes
                      <ArrowSmallRightIcon className=" h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Regions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[21rem] p-3 lg:w-[38rem]">
              <div className="grid w-full grid-cols-4 gap-4">
                <div className="col-span-2">
                  <div className="grid w-full grid-cols-5 rounded-md bg-slate-100 px-4 py-2 dark:bg-slate-900">
                    <div className="col-span-5 font-medium">
                      <Link href="/explore?countries=Italy" prefetch={false}>
                        Italy
                      </Link>
                    </div>
                    <div className="col-span-3 mr-4">
                      <MegaMenuItem
                        href="/explore?regions=Abruzzo"
                        text="Abruzzo"
                      />
                      <MegaMenuItem
                        href="/regions/alto-adige"
                        text="Alto Adige"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Calabria"
                        text="Calabria"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Campania"
                        text="Campania"
                      />
                      <MegaMenuItem
                        href="/regions/emilia-romagna"
                        text="Emilia Romagna"
                      />
                      <MegaMenuItem
                        href="/regions/friuli-venezia-giulia"
                        text="Friuli Venezia Giulia"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Lazio"
                        text="Lazio"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Lombardy"
                        text="Lombardy"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Marche"
                        text="Marche"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Molise"
                        text="Molise"
                      />
                    </div>

                    <div className="col-span-2">
                      <MegaMenuItem
                        href="/explore?regions=Piedmont"
                        text="Piedmont"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Puglia"
                        text="Puglia"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Sardinia"
                        text="Sardinia"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Sicily"
                        text="Sicily"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Campania"
                        text="Campania"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Tuscany "
                        text="Tuscany"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Trentino"
                        text="Trentino"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Umbria"
                        text="Umbria"
                      />
                      <MegaMenuItem
                        href="/regions/valle-d-aosta"
                        text="Valle d'Aosta"
                      />
                      <MegaMenuItem
                        href="/explore?regions=Veneto"
                        text="Veneto"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 w-full rounded-md bg-slate-100 px-4 py-2 dark:bg-slate-900">
                  <div className="font-medium">
                    <Link href="/explore?countries=France">France</Link>
                  </div>
                  <MegaMenuItem href="/explore?regions=Alsace" text="Alsace" />
                  <MegaMenuItem
                    href="/explore?regions=Bordeaux"
                    text="Bordeaux"
                  />
                  <MegaMenuItem
                    href="/explore?regions=Burgundy"
                    text="Burgundy"
                  />
                  <MegaMenuItem href="/explore?regions=Jura" text="Jura" />

                  <MegaMenuItem
                    href="/explore?regions=Provence"
                    text="Provence"
                  />
                  <MegaMenuItem
                    href="/regions/champagne-region                    "
                    text="Champagne"
                  />
                  <MegaMenuItem href="/explore?regions=savoy" text="Savoy" />
                  <MegaMenuItem href="/regions/rhone-valley" text="Rhone" />
                  <MegaMenuItem
                    href="/regions/loire-valley                    "
                    text="Loire"
                  />
                  <div className="pt-2 text-sm">
                    <Link href="/explore" prefetch={false}>
                      <span className="flex items-center text-slate-600  decoration-slate-400 hover:underline dark:text-slate-400 dark:decoration-slate-600">
                        {"All regions"}
                        <ArrowSmallRightIcon className=" h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 px-4 py-2 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                  <div className="font-medium">Estero</div>
                  <MegaMenuItem href="/explore?countries=Spain" text="Spain" />
                  <MegaMenuItem
                    href="/explore?countries=Germany"
                    text="Germany"
                  />
                  <MegaMenuItem
                    href="/explore?countries=Slovenia"
                    text="Slovenia"
                  />
                  <MegaMenuItem href="/countries/united-states" text="USA" />
                  <MegaMenuItem
                    href="/countries/nuova-zelanda"
                    text="New Zeland"
                  />
                  <MegaMenuItem href="/explore?countries=Chile" text="Chile" />
                  <div className="py-2 text-sm">
                    <Link href="/explore" prefetch={false}>
                      <span className="flex items-center decoration-slate-400 hover:underline dark:decoration-slate-600">
                        {"All countries"}
                        <ArrowSmallRightIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-3 flex w-full flex-col text-sm text-slate-600 dark:text-slate-400">
                  <Link href="/explore" prefetch={false}>
                    <span className="flex items-center decoration-slate-400 hover:underline dark:decoration-slate-600">
                      {"Browse all regions"}
                      <ArrowSmallRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
