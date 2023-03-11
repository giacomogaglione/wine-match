import { useEffect } from "react"
import { useRouter } from "next/router"
import LoadingDots from "@/components/loading-dots"
import Seo from "@/components/seo"
import { getURL } from "@/utils/helpers"
import { useTheme } from "next-themes"

import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"

const SignIn = () => {
  const router = useRouter()
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    if (user) {
      router.replace("/account")
    }
  }, [router, user])

  if (!user)
    return (
      <>
        <Seo title="Login - Wine Match" />
        <div className="height-screen-helper flex justify-center">
          <div className="m-auto flex w-80 max-w-lg flex-col justify-between p-3 ">
            <div className="flex flex-col space-y-4">
              <Auth
                supabaseClient={supabaseClient}
                providers={["google"]}
                redirectTo={getURL()}
                magicLink={false}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: "#6366f1",
                        brandAccent: "#6366f1",
                      },
                    },
                  },
                }}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
              />
            </div>
          </div>
        </div>
      </>
    )

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  )
}

export default SignIn
