import Link from "next/link"

interface Noticia {
  slug: string
  titulo: string
  categoria: string
  fecha: string
  imagen: string
  descripcion: string
}

interface Props {
  noticias: Noticia[]
  categoriaActiva: string
}

export default function SeccionUltimasNoticias({ noticias, categoriaActiva }: Props) {
  const filtradas = categoriaActiva === "Todos"
    ? noticias.slice(0, 3)
    : noticias.filter((n) => n.categoria === categoriaActiva).slice(0, 3)

  const titulo = categoriaActiva === "Todos" ? "Últimas Noticias" : categoriaActiva

  return (
    <div className="py-6">
      <h2 className="font-['Georgia'] text-2xl text-[#191c1b] mb-6">{titulo}</h2>

      {filtradas.length === 0 ? (
        <p className="text-sm text-gray-400">No hay noticias en esta categoría todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtradas.map((noticia) => (
            <Link
              href={`/noticias/${noticia.slug}`}
              key={noticia.slug}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs border border-gray-300 rounded-full px-3 py-0.5 text-[#191c1b]">
                    {noticia.categoria}
                  </span>
                  <span className="text-xs text-gray-400">{noticia.fecha}</span>
                </div>
                <h3 className="font-['Georgia'] text-lg text-[#191c1b] leading-snug mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {noticia.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}