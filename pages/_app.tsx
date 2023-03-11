import { useState } from "react"
import type { AppProps } from "next/app"
import Layout from "@/components/layout"
import { MyUserContextProvider } from "@/utils/use-user"
import { Inter as FontSans } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react"
import "@/styles/globals.css"
import "@/styles/index.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <MyUserContextProvider>
          <ThemeProvider attribute="class">
            <Analytics />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MyUserContextProvider>
      </SessionContextProvider>
    </>
  )
}

export default App
