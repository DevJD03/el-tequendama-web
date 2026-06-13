"use client"
import { useState } from "react"
import BarraCategorias from "@/components/BarraCategorias"
import SeccionUltimasNoticias from "@/components/SecUltimasNoticias"


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
}

export default function HomeClient({ noticias }: Props) {
    const [categoriaActiva, setCategoriaActiva] = useState("Todos")

    return (
        <div style={{ position: "relative", zIndex: 10 }}>
            <BarraCategorias categoriaActiva={categoriaActiva} setCategoriaActiva={setCategoriaActiva} />
            <SeccionUltimasNoticias noticias={noticias} categoriaActiva={categoriaActiva} />
        </div>
    )
}