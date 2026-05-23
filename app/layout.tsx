import type { Metadata } from "next";
import { Archivo, Caveat } from "next/font/google";
import "./globals.css";

// Archivo — designed by Omnibus-Type (Argentine foundry). Black weight has
// the poster/signage energy this brand needs. Variable font: covers 400–900.
const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinceladas y algo más — Librería y Papelería en Córdoba",
  description:
    "Tu librería y papelería en Av. Bernardo O'Higgins 5671, Córdoba. Fotocopias, útiles escolares, cartucheras, marcadores y regalos.",
  openGraph: {
    title: "Pinceladas y algo más",
    description:
      "Librería y papelería en Av. O'Higgins 5671, Córdoba. Fotocopias, útiles, cartucheras, marcadores y regalos.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pinceladas y algo más — Librería y Papelería en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinceladas y algo más",
    description: "Librería y papelería en Córdoba, Argentina.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${archivo.variable} ${caveat.variable}`}>
      <body className="antialiased">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          style={{
            backgroundColor: "oklch(0.61 0.20 32)",
            color: "oklch(0.99 0.006 90)",
          }}
        >
          Saltar al contenido
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
