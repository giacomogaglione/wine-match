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
                    <Link href="/explore?types=White" prefetch={false}>
                      Red
                    </Link>
                  </div>
                  <MegaMenuItem
                    href="/explore?types=Red&regions=Tuscany"
                    text="Tuscany"
                  />
                  <MegaMenuItem href="/" text="Southern Italy Primitivo" />
                  <MegaMenuItem href="/" text="Amarone" />
                  <MegaMenuItem href="/" text="Bolgheri" />
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
                  <MegaMenuItem href="/" text="Nothern Italy Pinot Grigio" />
                  <MegaMenuItem href="/" text="German Riesling" />
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
                  <MegaMenuItem href="/" text="Cabernet Sauvignon" />
                  <MegaMenuItem href="/" text="Merlot" />
                  <MegaMenuItem href="/" text="Chardonnay" />
                  <MegaMenuItem href="/" text="Pinot Noir" />
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <MegaMenuItem href="/" text="Zinfandel" />
                  <MegaMenuItem href="/" text="Aglianico" />
                  <MegaMenuItem href="/" text="Sangiovese" />
                  <MegaMenuItem href="/" text="Pinot Grigio" />
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 p-4 dark:bg-slate-900">
                  <MegaMenuItem href="/" text="Riesling" />
                  <MegaMenuItem href="/" text="Vermentino" />
                  <MegaMenuItem href="/" text="Trebbiano" />
                  <MegaMenuItem href="/" text="Shiraz/Syrah" />
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
                      <Link href="/countries/italy" prefetch={false}>
                        Italy
                      </Link>
                    </div>
                    <div className="col-span-3 mr-4">
                      <MegaMenuItem href="/regions/abruzzo" text="Abruzzo" />
                      <MegaMenuItem
                        href="/regions/alto-adige"
                        text="Alto Adige"
                      />
                      <MegaMenuItem href="/regions/calabria" text="Calabria" />
                      <MegaMenuItem href="/regions/campania" text="Campania" />
                      <MegaMenuItem
                        href="/regions/emilia-romagna"
                        text="Emilia Romagna"
                      />
                      <MegaMenuItem
                        href="/regions/friuli-venezia-giulia"
                        text="Friuli Venezia Giulia"
                      />
                      <MegaMenuItem href="/regions/lazio" text="Lazio" />
                      <MegaMenuItem href="/regions/lombardy" text="Lombardy" />
                      <MegaMenuItem href="/regions/marche" text="Marche" />
                      <MegaMenuItem href="/regions/molise" text="Molise" />
                    </div>

                    <div className="col-span-2">
                      <MegaMenuItem href="/regions/piedmont" text="Piedmont" />
                      <MegaMenuItem href="/regions/puglia" text="Puglia" />
                      <MegaMenuItem href="/regions/sardegna" text="Sardinia" />
                      <MegaMenuItem href="/regions/sicily" text="Sicily" />
                      <MegaMenuItem href="/regions/campania" text="Campania" />
                      <MegaMenuItem href="/regions/tuscany " text="Tuscany" />
                      <MegaMenuItem href="/regions/trentino" text="Trentino" />
                      <MegaMenuItem href="/regions/umbria" text="Umbria" />
                      <MegaMenuItem
                        href="/regions/valle-d-aosta"
                        text="Valle d'Aosta"
                      />
                      <MegaMenuItem href="/regions/veneto" text="Veneto" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 w-full rounded-md bg-slate-100 px-4 py-2 dark:bg-slate-900">
                  <div className="font-medium">
                    <Link href="/countries/france">France</Link>
                  </div>
                  <MegaMenuItem href="/regions/alsace" text="Alsace" />
                  <MegaMenuItem href="/regions/bordeaux" text="Bordeaux" />
                  <MegaMenuItem href="/regions/burgundy" text="Burgundy" />
                  <MegaMenuItem href="/regions/jura" text="Jura" />

                  <MegaMenuItem href="/regions/provence" text="Provence" />
                  <MegaMenuItem
                    href="/regions/champagne-region                    "
                    text="Champagne"
                  />
                  <MegaMenuItem href="/regions/savoy" text="Savoy" />
                  <MegaMenuItem href="/regions/rhone-valley" text="Rhone" />
                  <MegaMenuItem
                    href="/regions/loire-valley                    "
                    text="Loire"
                  />
                  <div className="pt-2 text-sm">
                    <Link href="/countries" prefetch={false}>
                      <span className="flex items-center text-slate-600  decoration-slate-400 hover:underline dark:text-slate-400 dark:decoration-slate-600">
                        {"All regions"}
                        <ArrowSmallRightIcon className=" h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-1 w-full rounded-md bg-slate-100 px-4 py-2 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                  <div className="font-medium">Estero</div>
                  <MegaMenuItem href="/countries/spain" text="Spain" />
                  <MegaMenuItem href="/countries/germany" text="Germany" />
                  <MegaMenuItem href="/countries/slovenia" text="Slovenia" />
                  <MegaMenuItem href="/countries/united-states" text="USA" />
                  <MegaMenuItem
                    href="/countries/nuova-zelanda"
                    text="New Zeland"
                  />
                  <MegaMenuItem href="/countries/cile" text="Chile" />
                  <div className="py-2 text-sm">
                    <Link href="/countries" prefetch={false}>
                      <span className="flex items-center decoration-slate-400 hover:underline dark:decoration-slate-600">
                        {"All countries"}
                        <ArrowSmallRightIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-3 flex w-full flex-col text-sm text-slate-600 dark:text-slate-400">
                  <Link href="/regions" prefetch={false}>
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
