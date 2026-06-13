import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white px-6 md:px-8 py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">

        <div className="max-w-xs">
          <h2 className="font-['Georgia'] text-2xl mb-3">El Tequendama</h2>
          <p className="text-sm text-white/70 leading-relaxed">
            La voz de la Provincia del Tequendama. Noticias locales para La Mesa y la región.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-sm mb-4">Navegación</h3>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/noticias" className="text-sm text-white/70 hover:text-white transition-colors">Noticias</Link></li>
            <li><Link href="/directorio" className="text-sm text-white/70 hover:text-white transition-colors">Directorio</Link></li>
            <li><Link href="/contacto" className="text-sm text-white/70 hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center">
        <p className="text-xs text-white/50">© 2026 El Tequendama. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}