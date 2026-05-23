"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramLogo, WhatsappLogo, TiktokLogo } from "@phosphor-icons/react";
import FloatingPaths from "./FloatingPaths";

// Simple hover button — no cursor-following magnet effect
function Button({
  children,
  className,
  href,
  external,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 85, damping: 18 },
  },
};

// Single clean brush stroke — simpler, more legible
function PaintUnderline() {
  return (
    <motion.svg
      viewBox="0 0 300 10"
      aria-hidden="true"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "10px", marginTop: "4px" }}
    >
      <motion.path
        d="M 2,7 C 50,1 120,9 180,5 C 230,2 270,8 298,6"
        stroke="oklch(0.61 0.20 32)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.72 }}
        transition={{ delay: 0.85, duration: 0.90, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex flex-col lg:grid lg:[grid-template-columns:48fr_52fr] overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── LEFT: image panel ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[12/5] lg:aspect-auto"
      >
        <Image
          src="/logo.png"
          alt="Pinceladas y algo más — librería y papelería en Córdoba"
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-center"
          priority
        />
        {/* Fade edge blending into text panel */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 right-0 w-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent, oklch(0.99 0.006 90))",
          }}
        />
      </motion.div>

      {/* ── RIGHT: text panel ───────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex flex-col justify-center gap-6 px-8 md:px-12 lg:px-12 xl:px-14 py-14 lg:py-20 overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 90% 50% at 15% 5%,  oklch(0.76 0.17 75 / 0.12), transparent)",
            "radial-gradient(ellipse 65% 45% at 88% 95%, oklch(0.56 0.12 180 / 0.10), transparent)",
            "radial-gradient(ellipse 55% 35% at 85% 10%, oklch(0.61 0.20 32 / 0.07), transparent)",
            "oklch(0.99 0.006 90)",
          ].join(", "),
        }}
      >
        {/* Floating paint paths — colorful brand animation */}
        <FloatingPaths />

        {/* Paper grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Location */}
        <motion.span
          variants={itemVariants}
          className="font-handwritten text-lg relative z-10"
          style={{ color: "oklch(0.76 0.17 75)" }}
        >
          📍 Córdoba, Argentina
        </motion.span>

        {/* Heading */}
        <motion.div variants={itemVariants} className="relative z-10 flex flex-col gap-0.5">
          <h1
            className="font-display leading-[1.05] text-[oklch(0.16_0.012_43)]"
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 3.2rem)",
              textShadow: "0 2px 10px oklch(0.16 0.012 43 / 0.08)",
            }}
          >
            Donde las ideas
          </h1>
          {/* display:table shrink-wraps to content width — SVG w-full then = text width */}
          <div style={{ width: "fit-content" }}>
            <h1
              className="font-display leading-[1.05]"
              style={{
                fontSize: "clamp(1.9rem, 3.4vw, 3.2rem)",
                color: "oklch(0.61 0.20 32)",
                textShadow: "0 2px 14px oklch(0.61 0.20 32 / 0.22)",
              }}
            >
              toman forma.
            </h1>
            <PaintUnderline />
          </div>
        </motion.div>

        {/* Copy — directo, sin frases de película */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed max-w-[38ch] relative z-10"
          style={{ color: "oklch(0.42 0.022 43)" }}
        >
          Librería comercial, escolar y artística en{" "}
          <strong className="font-bold" style={{ color: "oklch(0.16 0.012 43)" }}>
            Av. O&apos;Higgins 5671, local M
          </strong>
          . Fotocopias, útiles, cartucheras, marcadores y regalos.
        </motion.p>

        {/* CTAs — simple scale hover, sin cursor magnético */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-3 relative z-10"
        >
          <Button
            href="https://instagram.com/pinceladaslibreriaok"
            external
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm
              bg-[oklch(0.16_0.012_43)] text-[oklch(0.99_0.006_90)]
              hover:bg-[oklch(0.61_0.20_32)]
              shadow-[0_3px_12px_oklch(0.16_0.012_43_/_0.18)]
              transition-colors"
          >
            <InstagramLogo size={18} weight="fill" />
            Seguinos en Instagram
          </Button>

          <Button
            href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
            external
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm
              bg-[oklch(0.55_0.17_145)] text-[oklch(0.99_0.006_90)]
              hover:bg-[oklch(0.48_0.17_145)]
              shadow-[0_3px_12px_oklch(0.55_0.17_145_/_0.28)]
              transition-colors"
          >
            <WhatsappLogo size={18} weight="fill" />
            Escribinos por WhatsApp
          </Button>

          <Button
            href="https://tiktok.com/@pinceladas.libreria"
            external
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm
              bg-[oklch(0.99_0.006_90)] text-[oklch(0.16_0.012_43)]
              border border-[oklch(0.84_0.018_70)]
              hover:bg-[oklch(0.16_0.012_43)] hover:text-[oklch(0.99_0.006_90)]
              shadow-[0_3px_12px_oklch(0.16_0.012_43_/_0.08)]
              transition-colors"
          >
            <TiktokLogo size={18} weight="fill" />
            Seguinos en TikTok
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-[24%] -translate-x-1/2 hidden lg:block"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-9 mx-auto rounded-full"
          style={{
            background: "linear-gradient(to bottom, oklch(0.99 0.006 90 / 0.85), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
