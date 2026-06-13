import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function Hero() {
  const carpeta = path.join(process.cwd(), "content/noticias")
  const archivos = fs.readdirSync(carpeta)

  const noticias = archivos.map((archivo) => {
    const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
    const { data } = matter(contenido)
    const slug = archivo.replace(".md", "")
    return { ...data, slug }
  })

  const destacada = noticias.find((n: any) => n.destacado === true)

  if (!destacada) return null

  return (
  <Link href={`/noticias/${destacada.slug}`} className="block"> 

      <div className="px-4 md:px-8 mt-4 relative z-0">
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden group">
        
        <img 
          src={(destacada as any).imagen} 
          alt={(destacada as any).titulo}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <span className="bg-[#F4A261] text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">
            {(destacada as any).categoria}
          </span>
          <h2 className="font-['Georgia'] text-3xl text-white font-normal leading-tight max-w-2xl mb-3">
            {(destacada as any).titulo}
          </h2>
          <p className="text-white/80 text-sm max-w-lg mb-2">
            {(destacada as any).descripcion}
          </p>
          <span className="text-white/60 text-xs">{(destacada as any).fecha}</span>
        </div>

      </div>
    </div>

  </Link>
  )
}