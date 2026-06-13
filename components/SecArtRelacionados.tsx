import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

interface Props {
  categoria: string
  slugActual: string
}

export default function ArticulosRelacionados({ categoria, slugActual }: Props) {
  const carpeta = path.join(process.cwd(), "content/noticias")
  const archivos = fs.readdirSync(carpeta)

  const relacionados = archivos
    .map((archivo) => {
      const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
      const { data } = matter(contenido)
      const slug = archivo.replace(".md", "")
      return { ...data, slug }
    })
    .filter((noticia: any) => noticia.categoria === categoria && noticia.slug !== slugActual)
    .slice(0, 3)

  if (relacionados.length === 0) return null

  return (
    <div className="mt-8">
      <h3 className="font-['Georgia'] text-2xl text-[#191c1b] mb-6">Artículos relacionados</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relacionados.map((noticia: any) => (
          <Link
            href={`/noticias/${noticia.slug}`}
            key={noticia.slug}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow block"
          >
            <div className="overflow-hidden">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs border border-gray-300 rounded-full px-3 py-0.5 text-[#191c1b]">
                  {noticia.categoria}
                </span>
                <span className="text-xs text-gray-400">{noticia.fecha}</span>
              </div>

              <h4 className="font-['Georgia'] text-base text-[#191c1b] leading-snug mb-2 line-clamp-2">
                {noticia.titulo}
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {noticia.descripcion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}