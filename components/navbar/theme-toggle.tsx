import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

const ThemeToggle = (props: any) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <div className="h-6 w-6 cursor-pointer text-slate-600 dark:text-slate-400">
          {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      )}
    </Button>
  )
}

export default ThemeToggle
