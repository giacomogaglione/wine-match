import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ArrowRightOnRectangleIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

import { useSupabaseClient } from "@supabase/auth-helpers-react"

const items = [
  { label: "Account", href: "/account", icon: IconAccount },
  { label: "My List", href: "/my-list", icon: IconMyList },
  { label: "Wishlist", href: "/wishlist", icon: IconWishlist },
]

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
export function AccountMenu() {
  const router = useRouter()
  const supabaseClient = useSupabaseClient()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-44 p-2">
        <DropdownMenuGroup>
          {items.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link
                href={item.href}
                className="flex items-center rounded-lg text-sm text-slate-600 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none dark:text-slate-400"
              >
                <item.icon aria-hidden="true" />
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div
              className="flex cursor-pointer items-center rounded-lg text-sm text-slate-600 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none dark:text-slate-400"
              onClick={async () => {
                await supabaseClient.auth.signOut()
                router.push("/signin")
              }}
            >
              <ArrowRightOnRectangleIcon
                className="mr-2 h-4 w-4 text-slate-600 dark:text-slate-400"
                aria-hidden="true"
              />
              Logout
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
