"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Photo-placeholder backgrounds — warm tones, replace with real product photos later
const categories = [
  {
    label: "Fotocopias",
    description: "Blanco y negro, color y encuadernados",
    bg: "linear-gradient(145deg, oklch(0.68 0.07 220), oklch(0.56 0.09 235))",
    span: "col-span-2",
    aspect: "aspect-[16/7]",
  },
  {
    label: "Útiles escolares",
    description: "Todo para el cole",
    bg: "linear-gradient(145deg, oklch(0.76 0.10 88), oklch(0.64 0.13 78))",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    label: "Cartucheras y mochilas",
    description: "Para llevar tus cosas con estilo",
    bg: "linear-gradient(145deg, oklch(0.68 0.10 48), oklch(0.56 0.12 38))",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    label: "Papelería y regalos",
    description: "Detalles únicos para cada ocasión",
    bg: "linear-gradient(145deg, oklch(0.66 0.11 320), oklch(0.54 0.13 305))",
    span: "col-span-2",
    aspect: "aspect-[16/7]",
  },
  {
    label: "Marcadores y lápices",
    description: "Para colorear, destacar y dibujar",
    bg: "linear-gradient(145deg, oklch(0.68 0.12 22), oklch(0.56 0.14 12))",
    span: "col-span-2",
    aspect: "aspect-[16/7]",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
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
            style={{ color: "oklch(0.62 0.19 35)" }}
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

        {/* Photo grid — 2 cols, wide cards span full width */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              whileHover="hover"
              className={`relative overflow-hidden rounded-2xl cursor-default ${cat.span} ${cat.aspect}`}
            >
              {/* Background — scales on hover via variant propagation */}
              <motion.div
                className="absolute inset-0"
                style={{ background: cat.bg }}
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.06,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              />

              {/* Dark gradient for text legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.10 0.010 43 / 0.82) 0%, oklch(0.10 0.010 43 / 0.22) 50%, transparent 100%)",
                }}
              />

              {/* Label — lifts on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                variants={{
                  rest: { y: 0 },
                  hover: {
                    y: -7,
                    transition: { type: "spring", stiffness: 260, damping: 22 },
                  },
                }}
              >
                <h3
                  className="font-display leading-tight mb-0.5"
                  style={{
                    color: "oklch(0.99 0.006 90)",
                    fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)",
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  className="text-xs md:text-sm"
                  style={{ color: "oklch(0.99 0.006 90 / 0.60)" }}
                >
                  {cat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
