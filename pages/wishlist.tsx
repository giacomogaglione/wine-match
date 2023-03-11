import { useEffect, useState } from "react"
import { client } from "@/lib/supabase-client"
import { useUser } from "@/utils/use-user"

export default function WishlistPage() {
  const { user } = useUser()

  const [wishlistedProducts, setWishlistedProducts] = useState([])
  const [loadingWishlistedProducts, setLoadingWishlistedProducts] =
    useState(true)

  useEffect(() => {
    const fetchWishlistedProducts = async () => {
      if (!user) return
      try {
        const { data, error } = await client
          .from("wishlist")
          .select("created_at, wines (*)")
          .eq("user_id", user?.id)
          .order("created_at", {
            ascending: false,
          })

        if (error) throw error
        setWishlistedProducts(data)
      } catch (error) {
        console.log("Error")
      }
      setLoadingWishlistedProducts(false)
    }

    fetchWishlistedProducts()
  }, [user])

  const removeFromWishlist = async (productId) => {
    try {
      const { error } = await client
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("wines", productId)

      if (error) throw error

      setWishlistedProducts((prevWishlistedProducts) =>
        prevWishlistedProducts.filter(
          (wishlistedProduct) => wishlistedProduct.wines.id !== productId
        )
      )

      console.log("Success")
    } catch (error) {
      console.log("Error")
    }
  }

  return (
    <div className="space-y-8 p-4 md:p-8 lg:p-16">
      <div className="rounded-lg bg-white p-8 dark:bg-slate-800/50">
        <h1>wishlist</h1>
        <div>
          {loadingWishlistedProducts ? (
            <div className="col-span-full text-center">...</div>
          ) : wishlistedProducts && wishlistedProducts.length > 0 ? (
            wishlistedProducts.map((product) => (
              <div
                key={product.wines.id}
                className="mb-4 flex items-center justify-between space-x-4"
              >
                <div className="flex w-full items-center space-x-2 rounded-lg p-2">
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold">
                      {product.wines.id} , {product.wines.name}
                    </span>

                    <div className="flex flex-col gap-2 md:flex-row">
                      <button
                        className="mt-4 flex items-center space-x-2 rounded-lg bg-blue-50 p-2 font-semibold text-slate-600 transition duration-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700/70 dark:hover:text-white"
                        onClick={() => removeFromWishlist(product.wines.id)}
                      >
                        Remove from wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center space-y-4">
              <p className="text-center text-slate-600 dark:text-slate-400">
                You don&apos;t have any items in your wishlist.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
