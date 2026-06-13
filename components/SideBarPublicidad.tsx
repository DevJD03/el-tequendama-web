import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function SideBarPublicidad() {
  const carpeta = path.join(process.cwd(), "content/negocios")
  const archivos = fs.readdirSync(carpeta)

  const negocios = archivos.map((archivo) => {
    const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
    const { data } = matter(contenido)
    const slug = archivo.replace(".md", "")
    return { ...data, slug }
  })

  const dosAlAzar = negocios
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  return (
    <div className="flex flex-col gap-6 pt-6">
      {dosAlAzar.map((negocio: any) => (
        <div key={negocio.slug} className="border-t-2 border-[#F4A261]">
          <span className="text-xs text-[#F4A261] font-medium tracking-wide block mt-3 mb-2">
            PUBLICIDAD LOCAL
          </span>

          <div className="overflow-hidden rounded-lg">
            <img
              src={negocio.imagen}
              alt={negocio.nombre}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <p className="font-['Georgia'] text-lg text-[#191c1b] mt-3 mb-3">
            {negocio.nombre}
          </p>

          <Link href={`/directorio/${negocio.slug}`}>
            <button className="w-full bg-[#C4793A] text-white text-sm py-3 rounded-lg hover:bg-[#b06830] transition-colors">
              Ver productos
            </button>
          </Link>
        </div>
      ))}

     
    </div>
  )
}