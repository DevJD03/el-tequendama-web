"use client"

interface Props {
  categoriaActiva: string
  setCategoriaActiva: (categoria: string) => void
}

export default function BarraCategorias({ categoriaActiva, setCategoriaActiva }: Props) {
  const categorias = ["Todos", "Turismo", "Eventos", "Gastronomía", "Noticias Locales"]

  return (
   <div className="flex gap-2 px-4 md:px-8 py-4 overflow-x-auto">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => {
            setCategoriaActiva(categoria)
          }}
          className={`px-4 py-1.5 rounded-full text-sm border whitespace-nowrap shrink-0 ${
            categoriaActiva === categoria
              ? "bg-[#1B4332] text-white border-[#1B4332]"
              : "bg-white text-[#000000] border-gray-300 hover:border-[#1B4332] hover:text-[#1B4332]"
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}