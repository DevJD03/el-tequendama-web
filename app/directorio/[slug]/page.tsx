import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default async function NegocioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const archivo = path.join(process.cwd(), "content/negocios", `${slug}.md`)
  const contenido = fs.readFileSync(archivo, "utf-8")
  const { data, content } = matter(contenido)

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto px-8 py-8">

        <Link href="/directorio" className="flex items-center gap-2 text-sm text-[#1B4332] mb-6 hover:underline">
          ← Volver al directorio
        </Link>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <img
            src={data.imagen}
            alt={data.nombre}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#F4A261] font-medium tracking-wide">
                {data.categoria}
              </span>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#1B4332">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm text-[#1B4332]">{data.municipio}</span>
              </div>
            </div>

            <h1 className="font-['Georgia'] text-4xl text-[#191c1b] mb-4">
              {data.nombre}
            </h1>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              {data.descripcion}
            </p>

            {content && (
              <div className="border-t border-gray-100 pt-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  {content}
                </p>
              </div>
            )}

            <div className="border-t border-gray-100 pt-6 mt-6">
              <button className="w-full bg-[#C4793A] hover:bg-[#b06830] text-white text-sm font-medium py-4 rounded-lg transition-colors">
                Contactar negocio
              </button>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}