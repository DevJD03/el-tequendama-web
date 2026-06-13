import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function SecPublicidad() {
  const carpeta = path.join(process.cwd(), "content/negocios")
  const archivos = fs.readdirSync(carpeta)

  const negocios = archivos.map((archivo) => {
    const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
    const { data } = matter(contenido)
    const slug = archivo.replace(".md", "")
    return { ...data, slug }
  })

  const alAzar = negocios[Math.floor(Math.random() * negocios.length)] as any

  return (
    <div className="mx-4 md:mx-8 my-6 border-t-2 border-[#F4A261] bg-[#FDF8F3] rounded-xl px-4 md:px-6 py-5">
      <span className="text-xs text-[#F4A261] font-medium tracking-wide block mb-4">
        PUBLICIDAD LOCAL
      </span>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E05C2A">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          <div>
            <h3 className="font-['Georgia'] text-lg text-[#191c1b]">{alAzar.nombre}</h3>
            <p className="text-sm text-gray-400">{alAzar.descripcion}</p>
          </div>
        </div>

        <Link href={`/directorio/${alAzar.slug}`} className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-[#C4793A] hover:bg-[#b06830] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
            Ver ofertas
          </button>
        </Link>
      </div>
    </div>
  )
}