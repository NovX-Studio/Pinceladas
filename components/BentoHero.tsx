/* Hallmark · genre: playful · macrostructure: Bento Grid · theme: custom (coral · Archivo 900 + Caveat)
 * pre-emit critique: P4 H5 E4 S5 R5 V5
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BentoHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "58vh",
        backgroundColor: "oklch(0.99 0.006 90)",
      }}
    >
      {/* Logo painting — blurred into impressionistic color field (text becomes illegible, colors stay) */}
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: "72% 52%",
          filter: "blur(22px) saturate(1.15)",
          transform: "scale(1.08)",
        }}
        priority
        aria-hidden="true"
      />

      {/* Left→right: solid cream where text lives, let blurred color show on right */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.99 0.006 90) 0%, oklch(0.99 0.006 90) 30%, oklch(0.99 0.006 90 / 0.82) 46%, oklch(0.99 0.006 90 / 0.18) 66%, oklch(0.99 0.006 90 / 0.04) 100%)",
        }}
      />
      {/* Top + bottom edge fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.99 0.006 90 / 0.45) 0%, transparent 22%, transparent 74%, oklch(0.99 0.006 90 / 0.65) 100%)",
        }}
      />

      {/* Content — left panel, max 540px */}
      <div
        className="relative z-10 flex flex-col justify-center px-6 md:px-14 lg:px-20"
        style={{
          minHeight: "58vh",
          maxWidth: 540,
          paddingTop: "clamp(48px, 7vw, 88px)",
          paddingBottom: "clamp(40px, 5vw, 72px)",
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
            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            color: "oklch(0.16 0.012 43)",
            letterSpacing: "-0.04em",
            maxWidth: "13ch",
          }}
        >
          Todo lo que necesitás, en un solo lugar.
        </motion.h1>

        {/* CTA */}
        <motion.a
          href="#categorias"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          whileHover={{ backgroundColor: "oklch(0.62 0.19 35)", color: "oklch(0.99 0.006 90)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 self-start"
          style={{
            border: "1.5px solid oklch(0.62 0.19 35)",
            color: "oklch(0.62 0.19 35)",
            backgroundColor: "transparent",
          }}
        >
          Ver categorías ↓
        </motion.a>
      </div>
    </section>
  );
}
