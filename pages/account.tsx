import { ReactNode, useState } from "react"
import { GetServerSidePropsContext } from "next"
import LoadingDots from "@/components/loading-dots"
import Seo from "@/components/seo"
import { useUser } from "@/utils/use-user"

import { User, createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  }
}

interface Props {
  title: string
  children: ReactNode
}

function Card({ title, children }: Props) {
  return (
    <div className="m-auto my-8 w-full max-w-3xl rounded-md border border-slate-600 dark:border-slate-400">
      <div className="px-5 py-4">
        <h3 className="text-2xl font-medium text-slate-600 dark:text-slate-400">
          {title}
        </h3>
        {children}
      </div>
    </div>
  )
}

export default function Account({ user }: { user: User }) {
  const [loading, setLoading] = useState(false)
  const { isLoading, userDetails } = useUser()

  return (
    <>
      <Seo title="Account - Wine Match" />
      <section className="">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 sm:pt-24 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-4xl font-extrabold text-slate-600 dark:text-slate-400 sm:text-center sm:text-6xl">
              Account
            </h1>
          </div>
        </div>
        <div className="p-4">
          <Card title="Name">
            <div className="my-4 text-xl font-semibold text-slate-600 dark:text-slate-400">
              {userDetails ? (
                `${
                  userDetails.full_name ??
                  `${userDetails.username} ${userDetails.full_name}`
                }`
              ) : (
                <div className="mb-6 h-8">
                  <LoadingDots />
                </div>
              )}
            </div>
          </Card>
          <Card title="Email">
            <p className="my-4 text-xl font-semibold text-slate-600 dark:text-slate-400">
              {user ? user.email : undefined}
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
