import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Tequendama",
  description: "La voz de la Provincia del Tequendama. Noticias locales de La Mesa y la región.",
  openGraph: {
    title: "El Tequendama",
    description: "La voz de la Provincia del Tequendama. Noticias locales de La Mesa y la región.",
    url: "https://eltequendama.co",
    siteName: "El Tequendama",
    images: [
      {
        url: "https://eltequendama.co/hero.jpg",
        width: 1200,
        height: 630,
        alt: "El Tequendama",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tequendama",
    description: "La voz de la Provincia del Tequendama. Noticias locales de La Mesa y la región.",
    images: ["https://eltequendama.co/hero.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col min-w-[320px]">{children}</body>
    </html>
  );
}