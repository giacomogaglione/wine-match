export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          count_regions: number | null
          count_wines: number | null
          flag: string | null
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          count_regions?: number | null
          count_wines?: number | null
          flag?: string | null
          id: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          count_regions?: number | null
          count_wines?: number | null
          flag?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
      }
      grapes: {
        Row: {
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          id: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
        }
      }
      pairings: {
        Row: {
          food_1: string | null
          food_2: string | null
          food_3: string | null
          food_4: string | null
          food_5: string | null
          pairing_id: number
        }
        Insert: {
          food_1?: string | null
          food_2?: string | null
          food_3?: string | null
          food_4?: string | null
          food_5?: string | null
          pairing_id: number
        }
        Update: {
          food_1?: string | null
          food_2?: string | null
          food_3?: string | null
          food_4?: string | null
          food_5?: string | null
          pairing_id?: number
        }
      }
      producers: {
        Row: {
          address?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc?: string | null
          enologist?: string | null
          foundation_year?: string | null
          grapes_own?: string | null
          hectares?: string | null
          id: number
          image?: string | null
          main_wines?: string | null
          name: string
          production_yearly?: string | null
          region?: string | null
          region_slug?: string | null
          slug: string
          subtitle?: string | null
        }
        Insert: {
          address?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc?: string | null
          enologist?: string | null
          foundation_year?: string | null
          grapes_own?: string | null
          hectares?: string | null
          id: number
          image?: string | null
          main_wines?: string | null
          name: string
          production_yearly?: string | null
          region?: string | null
          region_slug?: string | null
          slug: string
          subtitle?: string | null
        }
        Update: {
          address?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc?: string | null
          enologist?: string | null
          foundation_year?: string | null
          grapes_own?: string | null
          hectares?: string | null
          id?: number
          image?: string | null
          main_wines?: string | null
          name?: string
          production_yearly?: string | null
          region?: string | null
          region_slug?: string | null
          slug?: string
          subtitle?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      regions: {
        Row: {
          count_wines?: number | null
          country?: string
          country_flag?: string
          country_slug?: string
          id: number
          name?: string
          slug: string
        }
        Insert: {
          count_wines?: number | null
          country: string
          country_flag: string
          country_slug: string
          id: number
          name: string
          slug: string
        }
        Update: {
          count_wines?: number | null
          country?: string
          country_flag?: string
          country_slug?: string
          id?: number
          name?: string
          slug?: string
        }
      }
      wines: {
        Row: {
          _tags?: string | null
          aging?: string | null
          alcohol?: string | null
          bibenda_score?: string | null
          bottle_size?: string | null
          classification?: string | null
          colour?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc_long?: string | null
          desc_short?: string | null
          filosofia_produttiva?: string | null
          gambero_rosso_score?: string | null
          glass?: string | null
          id: number
          image?: string | null
          james_suckling_score?: string | null
          luca_maroni_score?: string | null
          name?: string
          note?: string | null
          pairing_id?: string | null
          producer?: string | null
          producer_id?: number
          producer_slug?: string | null
          region?: string | null
          region_slug?: string | null
          robert_parker_score?: string | null
          scent?: string | null
          serving_temp?: string | null
          slowine_score?: string | null
          slug?: string
          source?: string | null
          taste?: string | null
          type?: string | null
          veronelli_score?: string | null
          vine?: string | null
          vineyards?: string | null
          vinification?: string | null
          vitae_ais_score?: string | null
          wine_enthusiast_score?: string | null
          wine_spectator_score?: string | null
          year?: string | null
        }
        Insert: {
          _tags?: string | null
          aging?: string | null
          alcohol?: string | null
          bibenda_score?: string | null
          bottle_size?: string | null
          classification?: string | null
          colour?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc_long?: string | null
          desc_short?: string | null
          filosofia_produttiva?: string | null
          gambero_rosso_score?: string | null
          glass?: string | null
          id: number
          image?: string | null
          james_suckling_score?: string | null
          luca_maroni_score?: string | null
          name: string
          note?: string | null
          pairing_id?: string | null
          producer?: string | null
          producer_id: number
          producer_slug?: string | null
          region?: string | null
          region_slug?: string | null
          robert_parker_score?: string | null
          scent?: string | null
          serving_temp?: string | null
          slowine_score?: string | null
          slug: string
          source?: string | null
          taste?: string | null
          type?: string | null
          veronelli_score?: string | null
          vine?: string | null
          vineyards?: string | null
          vinification?: string | null
          vitae_ais_score?: string | null
          wine_enthusiast_score?: string | null
          wine_spectator_score?: string | null
          year?: string | null
        }
        Update: {
          _tags?: string | null
          aging?: string | null
          alcohol?: string | null
          bibenda_score?: string | null
          bottle_size?: string | null
          classification?: string | null
          colour?: string | null
          country?: string | null
          country_flag?: string | null
          country_slug?: string | null
          desc_long?: string | null
          desc_short?: string | null
          filosofia_produttiva?: string | null
          gambero_rosso_score?: string | null
          glass?: string | null
          id?: number
          image?: string | null
          james_suckling_score?: string | null
          luca_maroni_score?: string | null
          name?: string
          note?: string | null
          pairing_id?: string | null
          producer?: string | null
          producer_id?: number
          producer_slug?: string | null
          region?: string | null
          region_slug?: string | null
          robert_parker_score?: string | null
          scent?: string | null
          serving_temp?: string | null
          slowine_score?: string | null
          slug?: string
          source?: string | null
          taste?: string | null
          type?: string | null
          veronelli_score?: string | null
          vine?: string | null
          vineyards?: string | null
          vinification?: string | null
          vitae_ais_score?: string | null
          wine_enthusiast_score?: string | null
          wine_spectator_score?: string | null
          year?: string | null
        }
      }
      wishlist: {
        Row: {
          created_at: string | null
          id: number
          user_id: string | null
          wines: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          user_id?: string | null
          wines?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          user_id?: string | null
          wines?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
