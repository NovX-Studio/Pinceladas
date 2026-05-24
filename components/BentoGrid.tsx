/* Hallmark · genre: playful · macrostructure: Bento Grid
 * nav: existing · footer: existing · enrichment: photography in cells
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsappLogo, InstagramLogo, MapPin, Clock } from "@phosphor-icons/react";

/* ── Cell definitions ─────────────────────────────────────────────────── */
type PhotoCell = {
  type: "photo";
  id: string;
  label: string;
  desc: string;
  img: string;
  gridColumn: string;
  gridRow: string;
};
type CtaCell = {
  type: "cta" | "info" | "social";
  id: string;
  label: string;
  desc: string;
  href: string;
  bg: string;
  gridColumn: string;
  gridRow: string;
};
type Cell = PhotoCell | CtaCell;

const cells: Cell[] = [
  {
    type: "photo",
    id: "fotocopias",
    label: "Fotocopias",
    desc: "B&N · color · encuadernados",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80",
    gridColumn: "1 / 3",
    gridRow: "1",
  },
  {
    type: "cta",
    id: "whatsapp",
    label: "Consultanos por WhatsApp",
    desc: "Respondemos al instante",
    href: "https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar",
    bg: "oklch(0.52 0.17 152)",
    gridColumn: "3",
    gridRow: "1",
  },
  {
    type: "photo",
    id: "utiles",
    label: "Útiles escolares",
    desc: "Todo para el cole",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    gridColumn: "1",
    gridRow: "2 / 4",
  },
  {
    type: "photo",
    id: "cartucheras",
    label: "Cartucheras y mochilas",
    desc: "Para llevar con estilo",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    gridColumn: "2",
    gridRow: "2",
  },
  {
    type: "photo",
    id: "papeleria",
    label: "Papelería y regalos",
    desc: "Detalles únicos para cada ocasión",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    gridColumn: "3",
    gridRow: "2",
  },
  {
    type: "photo",
    id: "marcadores",
    label: "Marcadores y lápices",
    desc: "Para colorear, destacar y dibujar",
    img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80",
    gridColumn: "2 / 4",
    gridRow: "3",
  },
  {
    type: "info",
    id: "ubicacion",
    label: "Av. O’Higgins 5671, local M",
    desc: "Lun–Vie 8–19 · Sáb 9–17",
    href: "#ubicacion",
    bg: "oklch(0.16 0.012 43)",
    gridColumn: "1 / 3",
    gridRow: "4",
  },
  {
    type: "social",
    id: "instagram",
    label: "@pinceladaslibreriaok",
    desc: "Seguinos",
    href: "https://instagram.com/pinceladaslibreriaok",
    bg: "oklch(0.62 0.19 35)",
    gridColumn: "3",
    gridRow: "4",
  },
];

/* ── Hover shadow token ───────────────────────────────────────────────── */
const hoverShadow = "0 12px 32px -8px oklch(0.16 0.012 43 / 0.28)";

export default function BentoGrid() {
  return (
    <section
      id="categorias"
      className="px-3 md:px-5 pb-3 md:pb-5"
      style={{ backgroundColor: "oklch(0.99 0.006 90)" }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "240px 220px 220px 180px",
          gap: "10px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {cells.map((cell, i) => {
          const isPhoto = cell.type === "photo";

          return (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.055,
              }}
              whileHover={{
                y: -2,
                boxShadow: hoverShadow,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              style={{
                gridColumn: cell.gridColumn,
                gridRow: cell.gridRow,
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                cursor: cell.type !== "photo" ? "pointer" : "default",
                backgroundColor: isPhoto ? "oklch(0.88 0.018 70)" : (cell as CtaCell).bg,
              }}
              {...(cell.type !== "photo"
                ? { as: "a", onClick: () => window.open((cell as CtaCell).href, "_blank") }
                : {})}
            >
              {/* Photo background */}
              {isPhoto && (
                <Image
                  src={(cell as PhotoCell).img}
                  alt={(cell as PhotoCell).label}
                  fill
                  sizes={
                    cell.gridColumn.includes("/")
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover object-center"
                />
              )}

              {/* Photo overlay */}
              {isPhoto && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, oklch(0.10 0.010 43 / 0.80) 0%, oklch(0.10 0.010 43 / 0.15) 55%, transparent 100%)",
                  }}
                />
              )}

              {/* Cell content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isPhoto ? "flex-end" : "flex-start",
                  padding: "clamp(16px, 2.5vw, 28px)",
                }}
              >
                {/* WhatsApp CTA */}
                {cell.type === "cta" && (
                  <>
                    <WhatsappLogo
                      size={32}
                      weight="fill"
                      style={{ color: "oklch(0.99 0.006 90)", marginBottom: 12 }}
                    />
                    <p
                      className="font-display leading-tight"
                      style={{
                        fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                        color: "oklch(0.99 0.006 90)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {cell.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "oklch(0.99 0.006 90 / 0.65)",
                        marginTop: 4,
                      }}
                    >
                      {cell.desc}
                    </p>
                  </>
                )}

                {/* Location info */}
                {cell.type === "info" && (
                  <>
                    <MapPin
                      size={24}
                      weight="fill"
                      style={{ color: "oklch(0.62 0.19 35)", marginBottom: 10 }}
                    />
                    <p
                      className="font-display leading-tight"
                      style={{
                        fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                        color: "oklch(0.99 0.006 90)",
                        letterSpacing: "-0.02em",
                        marginBottom: 8,
                      }}
                    >
                      {cell.label}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "oklch(0.99 0.006 90 / 0.60)",
                        fontSize: "0.78rem",
                      }}
                    >
                      <Clock size={13} />
                      <span>{cell.desc}</span>
                    </div>
                  </>
                )}

                {/* Instagram social */}
                {cell.type === "social" && (
                  <>
                    <InstagramLogo
                      size={28}
                      weight="fill"
                      style={{ color: "oklch(0.99 0.006 90)", marginBottom: 12 }}
                    />
                    <p
                      className="font-display leading-tight"
                      style={{
                        fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                        color: "oklch(0.99 0.006 90)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {cell.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "oklch(0.99 0.006 90 / 0.65)",
                        marginTop: 4,
                      }}
                    >
                      {cell.desc}
                    </p>
                  </>
                )}

                {/* Photo label */}
                {isPhoto && (
                  <div>
                    <h3
                      className="font-display leading-tight"
                      style={{
                        fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)",
                        color: "oklch(0.99 0.006 90)",
                        letterSpacing: "-0.02em",
                        marginBottom: 2,
                      }}
                    >
                      {cell.label}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "oklch(0.99 0.006 90 / 0.60)",
                      }}
                    >
                      {(cell as PhotoCell).desc}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
