import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Header from "@/components/Header"
import Link from "next/link"
import SideBarPublicidad from "@/components/SideBarPublicidad"
import CompartirArticulo from "@/components/SecCompArticulo"
import ArticulosRelacionados from "@/components/SecArtRelacionados"
import SecPublicidad from "@/components/SecPublicidad"
import Footer from "@/components/Footer"

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const archivo = path.join(process.cwd(), "content/noticias", `${slug}.md`)
  const contenido = fs.readFileSync(archivo, "utf-8")
  const { data, content } = matter(contenido)

  return (
    <div>
      <Header />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">

        <Link href="/" className="flex items-center gap-2 text-sm text-[#1B4332] mb-6 hover:underline">
          ← Volver a inicio
        </Link>

        <div className="flex flex-col md:flex-row gap-10">

          <div className="flex-1 min-w-0">
            <span className="text-xs border border-gray-300 rounded-full px-3 py-0.5 text-[#191c1b]">
              {data.categoria}
            </span>

            <h1 className="font-['Georgia'] text-3xl md:text-5xl text-[#191c1b] leading-tight mt-4 mb-3">
              {data.titulo}
            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <span>Por {data.autor}</span>
              <span>•</span>
              <span>{data.fecha}</span>
            </div>

            <img
              src={data.imagen}
              alt={data.titulo}
              className="w-full h-56 md:h-80 object-cover rounded-xl mb-8"
            />

            <p className="text-base text-gray-700 leading-relaxed">
              {content}
            </p>

            <SecPublicidad />
            <ArticulosRelacionados categoria={data.categoria} slugActual={slug} />
            <CompartirArticulo titulo={data.titulo} slug={slug} />
          </div>

          <div className="hidden md:block w-72 shrink-0">
            <SideBarPublicidad />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}