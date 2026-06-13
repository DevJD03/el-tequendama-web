import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NoticiasPage() {
  const carpeta = path.join(process.cwd(), "content/noticias")
  const archivos = fs.readdirSync(carpeta)

  const noticias = archivos
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
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <h1 className="font-['Georgia'] text-4xl text-[#191c1b] mb-8">Noticias</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticias.map((noticia: any) => (
            <Link
              href={`/noticias/${noticia.slug}`}
              key={noticia.slug}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs border border-gray-300 rounded-full px-3 py-0.5 text-[#191c1b]">
                    {noticia.categoria}
                  </span>
                  <span className="text-xs text-gray-400">{noticia.fecha}</span>
                </div>
                <h3 className="font-['Georgia'] text-lg text-[#191c1b] leading-snug mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {noticia.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}