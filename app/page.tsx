import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HomeClient from "@/components/HomeClient"
import SeccionMasNoticias from "@/components/SecMasNoticias"
import SeccionNegociosDestacados from "@/components/SecComerciosDest"
import SeccionNewsletter from "@/components/SecSuscripcion"
import SecPublicidad from "@/components/SecPublicidad"
import SideBarPublicidad from "@/components/SideBarPublicidad"

export default function Home() {
  const carpeta = path.join(process.cwd(), "content/noticias")
  const archivos = fs.readdirSync(carpeta)

  const noticias: any[] = archivos
    .map((archivo) => {
      const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
      const { data } = matter(contenido)
      const slug = archivo.replace(".md", "")
      return { ...data, slug }
    })
    .sort((a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

  return (
    <div>
      <Header />
      <Hero />

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
        <div className="flex-1 min-w-0">
          <HomeClient noticias={noticias} />
          <SecPublicidad />
          <SeccionMasNoticias />
        </div>
        <div className="hidden md:block w-72 shrink-0">
          <SideBarPublicidad />
        </div>
      </div>

      <SeccionNegociosDestacados />
      <SeccionNewsletter />
      <Footer />
    </div>
  )
}
