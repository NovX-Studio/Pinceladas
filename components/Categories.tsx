"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Fotocopias",
    description: "Blanco y negro, color y encuadernados",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80",
    span: "col-span-2",
    aspect: "aspect-[16/7]",
  },
  {
    label: "Útiles escolares",
    description: "Todo para el cole",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    label: "Cartucheras y mochilas",
    description: "Para llevar tus cosas con estilo",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    label: "Papelería y regalos",
    description: "Detalles únicos para cada ocasión",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    span: "col-span-2",
    aspect: "aspect-[16/7]",
  },
  {
    label: "Marcadores y lápices",
    description: "Para colorear, destacar y dibujar",
    img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80",
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
              {/* Photo — scales on hover via variant propagation */}
              <motion.div
                className="absolute inset-0"
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.06,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  sizes={cat.span === "col-span-2" ? "80vw" : "40vw"}
                  className="object-cover object-center"
                />
              </motion.div>

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
