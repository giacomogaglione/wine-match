import Link from "next/link"

interface MegaMenuItemProps {
  href?: string
  text?: string
}

const MegaMenuItem = ({ href, text }: MegaMenuItemProps) => {
  return (
    <div className="w-full py-1 text-sm font-normal text-slate-600 dark:text-slate-400">
      <Link href={href} prefetch={false}>
        <span className="hover:underline">{text}</span>
      </Link>
    </div>
  )
}

export default MegaMenuItem
