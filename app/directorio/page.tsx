import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DirectorioPage() {
  const carpeta = path.join(process.cwd(), "content/negocios")
  const archivos = fs.readdirSync(carpeta)

  const negocios = archivos
    .map((archivo) => {
      const contenido = fs.readFileSync(path.join(carpeta, archivo), "utf-8")
      const { data } = matter(contenido)
      const slug = archivo.replace(".md", "")
      return { ...data, slug }
    })

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <h1 className="font-['Georgia'] text-4xl text-[#191c1b] mb-2">Directorio</h1>
        <p className="text-sm text-gray-400 mb-8">Negocios y comercios de la Provincia del Tequendama</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {negocios.map((negocio: any) => (
            <Link
              href={`/directorio/${negocio.slug}`}
              key={negocio.slug}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="overflow-hidden">
                <img
                  src={negocio.imagen}
                  alt={negocio.nombre}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-[#F4A261] font-medium tracking-wide">
                  {negocio.categoria}
                </span>
                <h3 className="font-['Georgia'] text-lg text-[#191c1b] mt-1 mb-2">
                  {negocio.nombre}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {negocio.descripcion}
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#1B4332">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-xs text-[#1B4332]">{negocio.municipio}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}