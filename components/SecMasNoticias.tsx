import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function SeccionMasNoticias() {
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
    .slice(3, 9)

  return (
    <div className="px-4 md:px-8 py-6">
      <h2 className="font-['Georgia'] text-2xl text-[#191c1b] mb-6">Más Noticias</h2>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {noticias.map((noticia: any) => (
          <Link
            href={`/noticias/${noticia.slug}`}
            key={noticia.slug}
            className="flex flex-col md:flex-row gap-0 md:gap-4 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="overflow-hidden w-full md:w-48 shrink-0">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-48 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 flex flex-col justify-center">
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
  )
}