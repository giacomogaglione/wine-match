import Head from "next/head"
import { useRouter } from "next/router"

export default function Seo(props: any) {
  const { ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: "Wine Match",
    description: `The most extensive source of wines, spumanti and champagnes.`,
    image:
      "https://wine-match.vercel.app/og.jpg",
    type: "website",
    ...customMeta,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://wine-match.vercel.app${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://wine-match.vercel.app${router.asPath}`}
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Wine Match" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wine-match" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
