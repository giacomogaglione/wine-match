import type { Database } from "@/types/supabase"

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"

export const supabase = createBrowserSupabaseClient<Database>()
