"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Printer,
  Backpack,
  Pencil,
  PencilSimpleLine,
  Gift,
  BowlFood,
} from "@phosphor-icons/react";

const categories = [
  {
    icon: Printer,
    label: "Fotocopias",
    description: "Blanco y negro, color y encuadernados",
    bg: "oklch(0.84 0.16 225)",
    fg: "oklch(0.36 0.20 240)",
    span: "md:col-span-2",
  },
  {
    icon: PencilSimpleLine,
    label: "Útiles escolares",
    description: "Todo para el cole",
    bg: "oklch(0.84 0.19 145)",
    fg: "oklch(0.36 0.20 145)",
    span: "",
  },
  {
    icon: Backpack,
    label: "Cartucheras y mochilas",
    description: "Para llevar tus cosas con estilo",
    bg: "oklch(0.86 0.16 55)",
    fg: "oklch(0.48 0.22 42)",
    span: "",
  },
  {
    icon: Pencil,
    label: "Marcadores y lápices",
    description: "Para colorear, destacar y dibujar",
    bg: "oklch(0.86 0.15 20)",
    fg: "oklch(0.44 0.22 25)",
    span: "",
  },
  {
    icon: Gift,
    label: "Papelería y regalos",
    description: "Detalles únicos para cada ocasión",
    bg: "oklch(0.91 0.18 95)",
    fg: "oklch(0.48 0.20 80)",
    span: "",
  },
  {
    icon: BowlFood,
    label: "Viandas",
    description: "Fiambreras y accesorios",
    bg: "oklch(0.86 0.13 300)",
    fg: "oklch(0.36 0.22 295)",
    span: "md:col-span-2",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 16 },
  },
};

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-20"
      id="categorias"
      style={{ backgroundColor: "oklch(0.99 0.006 90)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mb-14"
        >
          <span
            className="font-handwritten text-2xl block mb-1"
            style={{ color: "oklch(0.76 0.17 75)" }}
          >
            lo que encontrás
          </span>
          <h2
            className="font-display leading-tight"
            style={{
              color: "oklch(0.16 0.012 43)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Todo bajo un mismo techo
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-[var(--radius-card)] p-6 overflow-hidden cursor-default ${cat.span}`}
                style={{
                  backgroundColor: cat.bg,
                  boxShadow: "0 2px 0 oklch(0.99 0.006 90 / 0.45) inset, 0 6px 20px -6px oklch(0.16 0.012 43 / 0.12)",
                  border: "1px solid oklch(0.99 0.006 90 / 0.35)",
                }}
              >
                {/* Watermark — large ghost icon for depth */}
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -bottom-3 pointer-events-none select-none"
                  style={{ opacity: 0.09, color: cat.fg }}
                >
                  <Icon size={96} weight="duotone" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10">
                  <div className="mb-4" style={{ color: cat.fg }}>
                    <Icon size={32} weight="duotone" />
                  </div>
                  <h3
                    className="font-display leading-snug text-[oklch(0.16_0.012_43)] mb-1"
                    style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    {cat.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: cat.fg, opacity: 0.88 }}
                  >
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
