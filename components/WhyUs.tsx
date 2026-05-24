"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Variedad completa",
    body: "Útiles escolares, artísticos y de oficina. Cartucheras, mochilas, marcadores, papelería y regalos — todo en un solo lugar.",
  },
  {
    number: "02",
    title: "Atención personalizada",
    body: "Local de barrio con trato directo. Te ayudamos a encontrar lo que necesitás, sin vueltas.",
  },
  {
    number: "03",
    title: "Precios accesibles",
    body: "Precios competitivos en útiles escolares, artísticos y de oficina. Promos y ofertas para clientes frecuentes.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-28 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "oklch(0.97 0.010 80)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mb-20"
        >
          <div
            className="h-px w-full mb-10"
            style={{ backgroundColor: "oklch(0.88 0.018 70)" }}
          />
          <h2
            className="font-display leading-tight"
            style={{
              color: "oklch(0.16 0.012 43)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            ¿qué{" "}
            <span style={{ color: "oklch(0.62 0.19 35)" }}>brindamos?</span>
          </h2>
        </motion.div>

        {/* Three editorial items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: i * 0.12,
              }}
              className="flex flex-col gap-4"
            >
              {/* Large number */}
              <span
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: "oklch(0.62 0.19 35)",
                  letterSpacing: "-0.04em",
                }}
              >
                {item.number}
              </span>

              {/* Short rule */}
              <div
                className="h-px w-8"
                style={{ backgroundColor: "oklch(0.62 0.19 35 / 0.35)" }}
              />

              {/* Title */}
              <h3
                className="font-display leading-tight"
                style={{
                  color: "oklch(0.16 0.012 43)",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{ color: "oklch(0.42 0.022 43)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
