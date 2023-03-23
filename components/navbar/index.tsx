import Link from "next/link"
import Logo from "@/components/navbar/logo"
import ThemeToggle from "@/components/navbar/theme-toggle"
import { Button } from "@/components/ui/button"
import { useUser } from "@/utils/use-user"

import { AccountMenu } from "./account-menu"
import { ComparisonIcon } from "./compare-icon"
import { MegaMenu } from "./mega-menu"
import { MobileMenu } from "./mobile-menu"

const Navbar = () => {
  const { user } = useUser()

  return (
    <div className="bg-gradient sticky top-0 z-50 w-full backdrop-blur-3xl transition-all duration-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Logo />
        <div className="hidden items-center justify-between md:hidden lg:flex">
          <MegaMenu />
          <div className="flex items-center space-x-3 border-l border-slate-400/50 dark:border-slate-800">
            {user ? (
              <div className="space-x-4 border-r border-slate-400/50 px-4 dark:border-slate-800">
                <AccountMenu />
              </div>
            ) : (
              <div className="space-x-4 border-r border-slate-400/50 px-4 dark:border-slate-800">
                <Link href="/signin">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signin#auth-sign-up">
                  <Button variant="outlineIndigo" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            <ComparisonIcon />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2 lg:hidden">
          <ComparisonIcon />
          <ThemeToggle />
          {user ? <AccountMenu /> : <></>}
          <MobileMenu />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
