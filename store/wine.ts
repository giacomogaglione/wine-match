export type Wine = {
  id: number
  slug: string
  name: string
  producer: string
  country: string
  type: string
  country_slug: string
  region_slug: string
  region: string
  image: string
}

export type TAllProducts = {
  products: Wine[]
}
