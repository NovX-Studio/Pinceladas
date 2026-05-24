/* Hallmark · genre: playful · macrostructure: Bento Grid · theme: custom (coral · Archivo 900 + Caveat)
 * pre-emit critique: P4 H4 E4 S5 R5 V5
 */
"use client";

import { motion } from "framer-motion";

export default function BentoHero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6"
      style={{
        minHeight: "44vh",
        backgroundColor: "oklch(0.99 0.006 90)",
        paddingTop: "clamp(48px, 8vw, 96px)",
        paddingBottom: "clamp(32px, 5vw, 64px)",
      }}
    >
      {/* Tag */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-handwritten text-lg md:text-xl mb-4 block"
        style={{ color: "oklch(0.62 0.19 35)" }}
      >
        librería · papelería · Córdoba
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="font-display leading-none mb-8"
        style={{
          fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
          color: "oklch(0.16 0.012 43)",
          letterSpacing: "-0.04em",
          maxWidth: "14ch",
          overflowWrap: "anywhere",
          minWidth: 0,
        }}
      >
        Todo lo que necesitás, en un solo lugar.
      </motion.h1>

      {/* Outlined chip CTA */}
      <motion.a
        href="#categorias"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        whileHover={{ backgroundColor: "oklch(0.62 0.19 35)", color: "oklch(0.99 0.006 90)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
        style={{
          border: "1.5px solid oklch(0.62 0.19 35)",
          color: "oklch(0.62 0.19 35)",
          backgroundColor: "transparent",
        }}
      >
        Ver categorías ↓
      </motion.a>
    </section>
  );
}
