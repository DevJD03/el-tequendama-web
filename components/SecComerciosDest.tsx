import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function SeccionNegociosDestacados() {
  const carpeta = path.join(process.cwd(), "content/negocios")
  const archivos = fs.readdirSync(carpeta)

  const negocios = archivos.map((archivo) => {
    const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
    const { data } = matter(contenido)
    const slug = archivo.replace(".md", "")
    return { ...data, slug }
  })

  const cuatroAlAzar = negocios
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-['Georgia'] text-2xl text-[#191c1b]">Comercios destacados</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cuatroAlAzar.map((negocio: any) => (
          <Link
            href={`/directorio/${negocio.slug}`}
            key={negocio.slug}
            className="rounded-xl overflow-hidden border border-gray-200 block"
          >
            <div className="overflow-hidden">
              <img
                src={negocio.imagen}
                alt={negocio.nombre}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 bg-white">
              <span className="text-xs text-[#F4A261] font-medium tracking-wide">
                {negocio.categoria}
              </span>
              <h3 className="font-['Georgia'] text-lg text-[#191c1b] mt-1">
                {negocio.nombre}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}