/* Hallmark · genre: playful · macrostructure: Bento Grid
 * nav: existing · footer: existing · enrichment: logo-paint colors in cells
 * Colors extracted from Pinceladas logo painting
 */
"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, InstagramLogo, MapPin, Clock } from "@phosphor-icons/react";

/* ── Cell definitions ─────────────────────────────────────────────────── */
type ColorCell = {
  type: "color";
  id: string;
  label: string;
  desc: string;
  bg: string;       // base color (logo-extracted)
  bgLight: string;  // lighter variant for radial highlight
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
type Cell = ColorCell | CtaCell;

// All colors pulled from the Pinceladas logo painting
const cells: Cell[] = [
  {
    type: "color",
    id: "fotocopias",
    label: "Fotocopias",
    desc: "B&N · color · encuadernados",
    bg:      "oklch(0.58 0.16 222)",   // celeste — top-left of painting
    bgLight: "oklch(0.72 0.13 222)",
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
    type: "color",
    id: "utiles",
    label: "Útiles escolares",
    desc: "Todo para el cole",
    bg:      "oklch(0.58 0.20 138)",   // lima/verde — dominant in painting
    bgLight: "oklch(0.72 0.18 140)",
    gridColumn: "1",
    gridRow: "2 / 4",
  },
  {
    type: "color",
    id: "cartucheras",
    label: "Cartucheras y mochilas",
    desc: "Para llevar con estilo",
    bg:      "oklch(0.62 0.22 44)",    // naranja — right side of painting
    bgLight: "oklch(0.76 0.18 50)",
    gridColumn: "2",
    gridRow: "2",
  },
  {
    type: "color",
    id: "papeleria",
    label: "Papelería y regalos",
    desc: "Detalles únicos para cada ocasión",
    bg:      "oklch(0.40 0.22 292)",   // violeta — bottom of painting
    bgLight: "oklch(0.56 0.18 292)",
    gridColumn: "3",
    gridRow: "2",
  },
  {
    type: "color",
    id: "marcadores",
    label: "Marcadores y lápices",
    desc: "Para colorear, destacar y dibujar",
    bg:      "oklch(0.50 0.18 192)",   // teal — center-left of painting
    bgLight: "oklch(0.65 0.14 195)",
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
          const isColor = cell.type === "color";
          const colorCell = isColor ? (cell as ColorCell) : null;
          const ctaCell = !isColor ? (cell as CtaCell) : null;

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
              onClick={ctaCell ? () => window.open(ctaCell.href, "_blank") : undefined}
              style={{
                gridColumn: cell.gridColumn,
                gridRow: cell.gridRow,
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                cursor: !isColor ? "pointer" : "default",
                // Color cells: radial highlight simulates paint depth
                background: isColor
                  ? `radial-gradient(ellipse at 28% 38%, ${colorCell!.bgLight} 0%, ${colorCell!.bg} 65%)`
                  : ctaCell!.bg,
              }}
            >
              {/* Color cell — label bottom-left */}
              {isColor && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "clamp(16px, 2.5vw, 28px)",
                    // Subtle dark vignette for readability
                    background: "linear-gradient(to top, oklch(0.10 0.010 43 / 0.50) 0%, transparent 55%)",
                  }}
                >
                  <h3
                    className="font-display leading-tight"
                    style={{
                      fontSize: "clamp(0.9rem, 1.7vw, 1.1rem)",
                      color: "oklch(0.99 0.006 90)",
                      letterSpacing: "-0.02em",
                      marginBottom: 3,
                    }}
                  >
                    {colorCell!.label}
                  </h3>
                  <p style={{ fontSize: "0.72rem", color: "oklch(0.99 0.006 90 / 0.65)" }}>
                    {colorCell!.desc}
                  </p>
                </div>
              )}

              {/* Non-color cells — top-aligned content */}
              {!isColor && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: "clamp(16px, 2.5vw, 28px)",
                  }}
                >
                  {/* WhatsApp CTA */}
                  {cell.type === "cta" && (
                    <>
                      <WhatsappLogo size={32} weight="fill"
                        style={{ color: "oklch(0.99 0.006 90)", marginBottom: 12 }} />
                      <p className="font-display leading-tight"
                        style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", color: "oklch(0.99 0.006 90)", letterSpacing: "-0.02em" }}>
                        {cell.label}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "oklch(0.99 0.006 90 / 0.65)", marginTop: 4 }}>
                        {cell.desc}
                      </p>
                    </>
                  )}

                  {/* Location */}
                  {cell.type === "info" && (
                    <>
                      <MapPin size={24} weight="fill"
                        style={{ color: "oklch(0.62 0.19 35)", marginBottom: 10 }} />
                      <p className="font-display leading-tight"
                        style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", color: "oklch(0.99 0.006 90)", letterSpacing: "-0.02em", marginBottom: 8 }}>
                        {cell.label}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "oklch(0.99 0.006 90 / 0.60)", fontSize: "0.78rem" }}>
                        <Clock size={13} />
                        <span>{cell.desc}</span>
                      </div>
                    </>
                  )}

                  {/* Instagram */}
                  {cell.type === "social" && (
                    <>
                      <InstagramLogo size={28} weight="fill"
                        style={{ color: "oklch(0.99 0.006 90)", marginBottom: 12 }} />
                      <p className="font-display leading-tight"
                        style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", color: "oklch(0.99 0.006 90)", letterSpacing: "-0.01em" }}>
                        {cell.label}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "oklch(0.99 0.006 90 / 0.65)", marginTop: 4 }}>
                        {cell.desc}
                      </p>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
