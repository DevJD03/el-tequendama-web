import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 px-4 md:px-8 py-3 flex items-center justify-between z-50">
      
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo El Tequendama"
          width={36}
          height={36}
        />
        <div>
          <h1 className="font-['Georgia'] font-normal text-base md:text-2xl text-[#191c1b] leading-tight whitespace-nowrap">
            El Tequendama
          </h1>
          <p className="font-['Georgia'] font-normal text-xs text-[#1B4332] hidden sm:block">
            La voz de la Provincia del Tequendama
          </p>
        </div>
      </Link>

      <nav className="hidden md:flex gap-8">
        <Link href="/" className="text-sm text-[#191c1b] hover:text-[#1B4332]">Inicio</Link>
        <Link href="/noticias" className="text-sm text-[#191c1b] hover:text-[#1B4332]">Noticias</Link>
        <Link href="/directorio" className="text-sm text-[#191c1b] hover:text-[#1B4332]">Directorio</Link>
        <Link href="/contacto" className="text-sm text-[#191c1b] hover:text-[#1B4332]">Contacto</Link>
      </nav>

      <nav className="flex md:hidden gap-3 ml-9">
        <Link href="/noticias" className="text-xs text-[#191c1b] hover:text-[#1B4332]">Noticias</Link>
        <Link href="/directorio" className="text-xs text-[#191c1b] hover:text-[#1B4332]">Directorio</Link>
        <Link href="/contacto" className="text-xs text-[#191c1b] hover:text-[#1B4332]">Contacto</Link>
      </nav>

    </header>
  )
}