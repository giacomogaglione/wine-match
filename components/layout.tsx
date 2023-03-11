import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Seo from "@/components/seo"

export default function Layout(props: any) {
  const { children } = props

  return (
    <div className="gradient-bg flex min-h-screen flex-col">
      <Seo />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl grow px-4">
        {children}
        <Footer />
      </main>
    </div>
  )
}
