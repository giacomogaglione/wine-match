import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/utils/use-user"
import {
  Bars3Icon,
  ClipboardDocumentListIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

const items = [
  { label: "Red Wines", href: "/explore?types=Red" },
  { label: "White Wines", href: "/explore?types=White" },
  { label: "Regions", href: "/explore" },
  { label: "Grapes", href: "/explore" },
  { label: "Compare", href: "/compare" },
]

const itemsaccount = [
  { label: "Account", href: "/account", icon: IconAccount },
  { label: "My List", href: "/my-list", icon: IconMyList },
  { label: "Wishlist", href: "/wishlist", icon: IconWishlist },
]

export function MobileMenu() {
  const { user } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Mobile Menu Hamburger icon"
        >
          <Bars3Icon className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-44 p-2">
        {user ? (
          <DropdownMenuGroup>
            {itemsaccount.map((itemaccount) => (
              <DropdownMenuItem key={itemaccount.href}>
                <Link
                  href={itemaccount.href}
                  className="flex items-center rounded-lg text-sm text-slate-600 transition duration-150 ease-in-out hover:bg-slate-50 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-700"
                >
                  <itemaccount.icon aria-hidden="true" />
                  {itemaccount.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <>
              {items.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center rounded-lg text-sm text-slate-600 transition duration-150 ease-in-out hover:bg-slate-50 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-700"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </>
          </DropdownMenuGroup>
        ) : (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href=""
                  className="w-full items-center justify-between rounded-md border border-slate-400 px-3 py-1 text-center text-sm font-semibold text-slate-600 focus:outline-none dark:text-slate-400"
                >
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href=""
                  className="my-1 w-full rounded-md bg-indigo-500 px-3 py-1 text-center text-sm font-semibold text-slate-100 hover:bg-indigo-600 focus:outline-none"
                >
                  Sign Up
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              {items.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center rounded-lg text-sm text-slate-600 transition duration-150 ease-in-out hover:bg-slate-50 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-700"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function IconAccount() {
  return (
    <UserIcon className="mr-2 h-4 w-4 text-slate-600 dark:text-slate-400" />
  )
}

function IconMyList() {
  return (
    <ClipboardDocumentListIcon className="mr-2 h-4 w-4 text-slate-600 dark:text-slate-400" />
  )
}

function IconWishlist() {
  return (
    <HeartIcon className="mr-2 h-4 w-4 text-slate-600 dark:text-slate-400" />
  )
}
