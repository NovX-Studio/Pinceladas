"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { WhatsappLogo, MapPin, InstagramLogo, TiktokLogo } from "@phosphor-icons/react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image translates slower than scroll — parallax depth effect
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100dvh - 64px)" }}
    >
      {/* Parallax image — oversized via negative inset so translation never shows edges */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          inset: "-14%",
          y: prefersReduced ? 0 : imageY,
        }}
      >
        <Image
          src="/logo.png"
          alt="Pinceladas y algo más — librería y papelería en Córdoba"
          fill
          sizes="115vw"
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.10 0.010 43 / 0.90) 0%, oklch(0.10 0.010 43 / 0.55) 35%, oklch(0.10 0.010 43 / 0.10) 70%, transparent 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-14 lg:px-20 pb-14 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full"
            style={{
              backgroundColor: "oklch(0.99 0.006 90 / 0.10)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid oklch(0.99 0.006 90 / 0.18)",
              color: "oklch(0.99 0.006 90 / 0.80)",
            }}
          >
            <MapPin size={13} weight="fill" />
            <span className="font-handwritten text-sm tracking-wide">
              Av. O&apos;Higgins 5671, local M · Córdoba
            </span>
          </motion.div>

          {/* Brand name */}
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-display leading-none mb-3"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "oklch(0.99 0.006 90)",
                letterSpacing: "-0.03em",
              }}
            >
              Pinceladas
            </motion.h1>
          </div>

          {/* Descriptor */}
          <div style={{ overflow: "hidden" }}>
            <motion.p
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="font-display leading-tight mb-8"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                color: "oklch(0.99 0.006 90 / 0.70)",
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              Librería escolar, comercial y artística
            </motion.p>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 flex-wrap"
          >
            {/* WhatsApp CTA — green */}
            <motion.a
              href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm"
              style={{
                backgroundColor: "oklch(0.52 0.17 152)",
                color: "oklch(0.99 0.006 90)",
                boxShadow: "0 4px 24px oklch(0.52 0.17 152 / 0.45)",
              }}
            >
              <WhatsappLogo size={18} weight="fill" />
              Consultanos por WhatsApp
            </motion.a>

            {/* Instagram icon */}
            <motion.a
              href="https://instagram.com/pinceladaslibreriaok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pinceladas"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "oklch(0.99 0.006 90 / 0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid oklch(0.99 0.006 90 / 0.20)",
                color: "oklch(0.99 0.006 90)",
              }}
            >
              <InstagramLogo size={20} weight="fill" />
            </motion.a>

            {/* TikTok icon */}
            <motion.a
              href="https://tiktok.com/@pinceladas.libreria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Pinceladas"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "oklch(0.99 0.006 90 / 0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid oklch(0.99 0.006 90 / 0.20)",
                color: "oklch(0.99 0.006 90)",
              }}
            >
              <TiktokLogo size={20} weight="fill" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-8 md:right-14 lg:right-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="w-px h-9 mx-auto"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.99 0.006 90 / 0.55), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
