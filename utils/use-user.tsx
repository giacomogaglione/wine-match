import { createContext, useContext, useEffect, useState } from "react"
import { UserDetails } from "@/types/types"

import {
  User,
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react"

type UserContextType = {
  accessToken: string | null
  user: User | null
  userDetails: UserDetails | null
  isLoading: boolean
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export interface Props {
  [propName: string]: any
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext()
  const user = useSupaUser()
  const accessToken = session?.access_token ?? null
  const [isLoadingData, setIsloadingData] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  useEffect(() => {
    const getUserDetails = () => supabase.from("profiles").select("*").single()

    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true)
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0]

        if (userDetailsPromise.status === "fulfilled")
          setUserDetails(userDetailsPromise.value.data)

        setIsloadingData(false)
      })
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null)
    }
  }, [user, isLoadingUser, isLoadingData, userDetails, supabase])

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  }

  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`)
  }
  return context
}
