"use client"
import { useState } from "react"

export default function SeccionNewsletter() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState("")

  async function handleSuscribir() {
    if (!nombre || !correo || !telefono) return

    setCargando(true)
    setError("")

    try {
      const respuesta = await fetch("https://el-tequendama.onrender.com/suscriptores", {
        method: "POST",
        headers: {
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
        body: JSON.stringify({ nombre, email: correo, telefono }),
      })

      const datos = await respuesta.json()

      if (!respuesta.ok) {
        setError(datos.message || datos.error || "Error al suscribirse")
        return
      }

      setEnviado(true)
    } catch {
      setError("Error de conexión, intenta de nuevo")
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="mx-4 md:mx-8 my-10 bg-[#1B4332] rounded-2xl px-4 md:px-8 py-14 text-center">

      <div className="w-14 h-14 bg-[#F4A261] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>

      {enviado ? (
        <div>
          <h2 className="font-['Georgia'] text-3xl text-white mb-3">¡Gracias por suscribirte!</h2>
          <p className="text-white/70 text-sm">Pronto recibirás las noticias de la región.</p>
        </div>
      ) : (
        <>
          <h2 className="font-['Georgia'] text-2xl md:text-3xl text-white mb-3">
            Recibe las noticias de la región
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Suscríbete a nuestro boletín y mantente informado de lo que pasa en el Tequendama
          </p>

          <div className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm outline-none focus:border-[#F4A261] transition-colors"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm outline-none focus:border-[#F4A261] transition-colors"
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm outline-none focus:border-[#F4A261] transition-colors"
            />
            <button
              onClick={handleSuscribir}
              disabled={cargando}
              className="bg-[#F4A261] hover:bg-[#e8924f] disabled:opacity-50 text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
            >
              {cargando ? "Enviando..." : "Suscribirme"}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}
        </>
      )}

    </div>
  )
}