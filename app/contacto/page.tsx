"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Contacto() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [enviado, setEnviado] = useState(false)

  function handleEnviar() {
    if (nombre && correo && mensaje) {
      setEnviado(true)
    }
  }

  return (
    <div>
      <Header />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">

          <div className="flex-1">
            <h1 className="font-['Georgia'] text-4xl text-[#191c1b] mb-2">Contáctanos</h1>
            <p className="text-sm text-gray-400 mb-8">¿Tienes una noticia, sugerencia o quieres anunciar tu negocio? Escríbenos.</p>

            {enviado ? (
              <div className="bg-[#1B4332] rounded-xl px-8 py-12 text-center">
                <div className="w-14 h-14 bg-[#F4A261] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h2 className="font-['Georgia'] text-2xl text-white mb-2">¡Mensaje enviado!</h2>
                <p className="text-white/70 text-sm">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#191c1b] placeholder-gray-400 outline-none focus:border-[#1B4332] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#191c1b] placeholder-gray-400 outline-none focus:border-[#1B4332] transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Tu mensaje..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={6}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#191c1b] placeholder-gray-400 outline-none focus:border-[#1B4332] transition-colors resize-none"
                />

                <button
                  onClick={handleEnviar}
                  className="bg-[#1B4332] hover:bg-[#163728] text-white text-sm font-medium py-4 rounded-lg transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            )}
          </div>

          <div className="w-full md:w-72 shrink-0 flex flex-col gap-6 md:pt-12">
            <div className="border-t-2 border-[#F4A261] pt-4">
              <h3 className="font-['Georgia'] text-lg text-[#191c1b] mb-3">Síguenos</h3>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-gradient-to-br from-[#f09433] to-[#bc1888] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://wa.me/573000000000" target="_blank" className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t-2 border-[#F4A261] pt-4">
              <h3 className="font-['Georgia'] text-lg text-[#191c1b] mb-3">Información</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span className="text-sm text-gray-500">contacto@eltequendama.co</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1B4332">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm text-gray-500">La Mesa, Cundinamarca</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}