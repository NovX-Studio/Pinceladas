"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Variedad completa",
    body: "Útiles escolares, artísticos y de oficina. Cartucheras, mochilas, marcadores, papelería y regalos — todo en un solo lugar.",
    accent: "oklch(0.76 0.17 75)",
  },
  {
    number: "02",
    title: "Atención personalizada",
    body: "Local de barrio con trato directo. Te ayudamos a encontrar lo que necesitás, sin vueltas.",
    accent: "oklch(0.62 0.19 35)",
  },
  {
    number: "03",
    title: "Precios accesibles",
    body: "Precios competitivos en útiles escolares, artísticos y de oficina. Con promos y ofertas para nuestros clientes frecuentes.",
    accent: "oklch(0.55 0.17 145)",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.14 0.014 43)" }}
    >
      <div className="max-w-[1400px] mx-auto relative">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="font-display leading-tight mb-16"
          style={{
            color: "oklch(0.97 0.006 90)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            textShadow: "0 2px 20px oklch(0.76 0.17 75 / 0.20)",
            textWrap: "balance",
          }}
        >
          ¿que{" "}
          <span style={{ color: "oklch(0.76 0.17 75)" }}>brindamos?</span>
        </motion.h2>

        {/* Three panels — whileInView fires reliably without ref/useInView */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ backgroundColor: "oklch(0.20 0.012 43)" }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: i * 0.14,
              }}
              className="relative flex flex-col gap-5 p-8 md:p-10 overflow-hidden"
              style={{ backgroundColor: "oklch(0.14 0.014 43)" }}
            >
              {/* Massive watermark number — fills the panel background */}
              <div
                aria-hidden="true"
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none font-display leading-none"
                style={{
                  fontSize: "clamp(8rem, 14vw, 11rem)",
                  color: item.accent,
                  opacity: 0.10,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {item.number}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <h3
                  className="font-display"
                  style={{
                    color: "oklch(0.97 0.006 90)",
                    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed text-sm md:text-base"
                  style={{ color: "oklch(0.65 0.012 43)" }}
                >
                  {item.body}
                </p>
              </div>

              {/* Accent bottom line */}
              <div
                className="h-px w-12 relative z-10"
                style={{ backgroundColor: item.accent, opacity: 0.6 }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
